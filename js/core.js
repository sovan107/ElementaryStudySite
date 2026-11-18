    // =========================================================================
    // 0. PARENT PASSWORD GATEKEEPER ('missaa') & DAILY 30-MINUTE TIMER
    // =========================================================================
    const PARENT_PASSWORD = 'missaa';
    let pendingPwdCallback = null;
    let answersAuthorizedSession = false;
    let timerPaused = false;

    function requestParentAuth(title, desc, onSuccess) {
      pendingPwdCallback = onSuccess;
      document.getElementById('pwd-modal-title').textContent = title;
      document.getElementById('pwd-modal-desc').textContent = desc;
      document.getElementById('pwd-modal-input').value = '';
      document.getElementById('pwd-modal-error').classList.add('hidden');
      document.getElementById('parent-pwd-modal').classList.remove('hidden');
      setTimeout(() => document.getElementById('pwd-modal-input').focus(), 50);
    }

    function closePwdModal() {
      document.getElementById('parent-pwd-modal').classList.add('hidden');
      pendingPwdCallback = null;
    }

    function handlePwdModalSubmit(e) {
      e.preventDefault();
      const val = document.getElementById('pwd-modal-input').value.trim();
      if (val === PARENT_PASSWORD) {
        const cb = pendingPwdCallback;
        closePwdModal();
        if (cb) cb();
      } else {
        document.getElementById('pwd-modal-error').classList.remove('hidden');
      }
    }

    function getTodayDateKey() {
      const now = new Date();
      return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    }

    function getTimerState() {
      const today = getTodayDateKey();
      try {
        const saved = JSON.parse(localStorage.getItem('saanvi_daily_timer_v1') || 'null');
        if (saved && saved.date === today) return saved;
      } catch (e) {}
      const fresh = { date: today, secondsLeft: 30 * 60 };
      saveTimerState(fresh);
      return fresh;
    }

    function saveTimerState(st) {
      try { localStorage.setItem('saanvi_daily_timer_v1', JSON.stringify(st)); } catch (e) {}
    }

    function updateTimerDisplay() {
      const st = getTimerState();
      const mins = Math.floor(st.secondsLeft / 60);
      const secs = st.secondsLeft % 60;
      const disp = document.getElementById('daily-timer-display');
      disp.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      if (st.secondsLeft <= 180 && st.secondsLeft > 0) {
        disp.className = 'font-mono text-sm font-extrabold text-rose-400 animate-pulse';
      } else {
        disp.className = 'font-mono text-sm font-extrabold text-amber-300';
      }
      if (st.secondsLeft <= 0) document.getElementById('time-lock-overlay').classList.remove('hidden');
      else document.getElementById('time-lock-overlay').classList.add('hidden');
    }

    function startDailyCountdown() {
      updateTimerDisplay();
      setInterval(() => {
        if (document.hidden || timerPaused) return;
        const st = getTimerState();
        if (st.secondsLeft > 0) {
          st.secondsLeft -= 1;
          saveTimerState(st);
          updateTimerDisplay();
        }
      }, 1000);
    }

    function toggleTimerPause() {
      timerPaused = !timerPaused;
      const btn = document.getElementById('timer-pause-btn');
      if (timerPaused) {
        btn.textContent = '▶️';
        btn.title = 'Resume Timer';
      } else {
        btn.textContent = '⏸️';
        btn.title = 'Pause Timer';
      }
    }

    function add15MinutesToTimer() {
      const st = getTimerState();
      st.secondsLeft += 15 * 60;
      saveTimerState(st);
      updateTimerDisplay();
      showRewardToast('⏱️ +15 Minutes Added by Parent!');
    }

    function promptAddExtraTime() {
      requestParentAuth(
        '⏱️ Add +15 Minutes Study Time',
        'Enter parent password to add 15 minutes to Saanvi’s timer today.',
        () => add15MinutesToTimer()
      );
    }

    function submitTimeUnlock(e) {
      e.preventDefault();
      const val = document.getElementById('lockout-pwd-input').value.trim();
      if (val === PARENT_PASSWORD) {
        document.getElementById('lockout-pwd-input').value = '';
        document.getElementById('lockout-pwd-error').classList.add('hidden');
        add15MinutesToTimer();
      } else {
        document.getElementById('lockout-pwd-error').classList.remove('hidden');
      }
    }

