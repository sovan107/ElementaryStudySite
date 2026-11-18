    // =========================================================================
    // DATA BACKUP & RESTORE (Export/import all localStorage progress)
    // =========================================================================
    const BACKUP_STORAGE_KEYS = [
      'saanvi_rewards_v1',
      'saanvi_map_scores_v1',
      'saanvi_completed_qs_v1',
      'saanvi_daily_timer_v1',
      'saanvi_academy_progress_v1',
      'saanvi_typing_lessons_v1',
      'saanvi_typing_best_v1'
    ];

    function setBackupStatus(msg, isError = false) {
      const el = document.getElementById('backup-status');
      if (!el) return;
      el.textContent = msg;
      el.className = `text-[11px] mt-1.5 font-semibold ${isError ? 'text-rose-600' : 'text-emerald-700'}`;
    }

    function exportAllData() {
      const data = {};
      let count = 0;
      BACKUP_STORAGE_KEYS.forEach(key => {
        const raw = localStorage.getItem(key);
        if (raw !== null) {
          try { data[key] = JSON.parse(raw); } catch (e) { data[key] = raw; }
          count++;
        }
      });
      if (count === 0) {
        setBackupStatus('Nothing to export yet — complete some activities first!', true);
        return;
      }
      const payload = {
        app: 'saanvi-learning-studio',
        version: 1,
        exportedAt: new Date().toISOString(),
        data: data
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `saanvi-backup-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setBackupStatus(`✅ Backup exported (${count} data sets saved to file).`);
    }

    function importAllData(event) {
      const file = event.target.files && event.target.files[0];
      event.target.value = '';
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const payload = JSON.parse(reader.result);
          if (!payload || payload.app !== 'saanvi-learning-studio' || !payload.data) {
            throw new Error('Not a valid Saanvi Studio backup file.');
          }
          let restored = 0;
          BACKUP_STORAGE_KEYS.forEach(key => {
            if (payload.data[key] !== undefined) {
              localStorage.setItem(key, JSON.stringify(payload.data[key]));
              restored++;
            }
          });
          setBackupStatus(`✅ Backup restored (${restored} data sets). Reloading…`);
          setTimeout(() => window.location.reload(), 900);
        } catch (err) {
          setBackupStatus(`❌ Restore failed: ${err.message}`, true);
        }
      };
      reader.onerror = () => setBackupStatus('❌ Could not read the file.', true);
      reader.readAsText(file);
    }
