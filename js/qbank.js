    let activeQBankFilter = 'ALL', showAllAnswers = false, qbankDisplayLimit = 60;

    function getCompletedQs() {
      try { const saved = localStorage.getItem('saanvi_completed_qs_v1'); if (saved) return new Set(JSON.parse(saved)); } catch (e) {}
      return new Set();
    }
    function toggleQuestionDone(qNum) {
      const done = getCompletedQs();
      if (done.has(qNum)) done.delete(qNum);
      else { done.add(qNum); awardStars(1, `Completed Question #${qNum}!`); }
      try { localStorage.setItem('saanvi_completed_qs_v1', JSON.stringify([...done])); } catch (e) {}
      updateCompletedBadge();
    }
    function updateCompletedBadge() {
      const done = getCompletedQs();
      document.getElementById('qbank-completed-badge').textContent = `Completed: ${done.size} / ${Q_BANK_DATA.length} (+1 ⭐ each)`;
      document.getElementById('qb-header-total').textContent = Q_BANK_DATA.length;
      document.getElementById('hero-total-q-count').textContent = Q_BANK_DATA.length;
    }

    function handleToggleAnswersClick() {
      if (showAllAnswers) {
        showAllAnswers = false; answersAuthorizedSession = false; updateToggleAnswersBtn(); renderQBank(false); return;
      }
      if (answersAuthorizedSession) {
        showAllAnswers = true; updateToggleAnswersBtn(); renderQBank(false);
      } else {
        requestParentAuth('🔒 Parent Password to Show All Answers', 'Enter parent password to unlock the Answer Key.', () => {
          answersAuthorizedSession = true; showAllAnswers = true; updateToggleAnswersBtn(); renderQBank(false);
        });
      }
    }
    function updateToggleAnswersBtn() {
      const btn = document.getElementById('btn-toggle-answers');
      btn.textContent = showAllAnswers ? '🙈 Lock & Hide Answers' : '🔒 Show Answers (Parent)';
      btn.className = showAllAnswers
        ? 'text-xs font-bold bg-slate-800 hover:bg-slate-900 text-white px-3 py-1.5 rounded-lg shadow-sm'
        : 'text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg shadow-sm';
    }
    function handleSingleRevealClick(btnEl) {
      const badge = btnEl.nextElementSibling;
      if (!badge.classList.contains('hidden')) { badge.classList.add('hidden'); btnEl.textContent = '🔒 Reveal Answer'; return; }
      if (answersAuthorizedSession) { badge.classList.remove('hidden'); btnEl.textContent = 'Hide Answer'; }
      else {
        requestParentAuth('🔒 Parent Password Required', 'Enter parent password to reveal answers.', () => {
          answersAuthorizedSession = true; badge.classList.remove('hidden'); btnEl.textContent = 'Hide Answer';
        });
      }
    }

    function filterQBank(cat) {
      activeQBankFilter = cat;
      qbankDisplayLimit = 60;
      document.querySelectorAll('.qb-pill').forEach(btn => {
        const oc = btn.getAttribute('onclick') || '';
        const isMatch = oc.includes(`'${cat}'`);
        if (isMatch) btn.className = 'qb-pill px-3 py-1.5 rounded-lg font-bold bg-slate-900 text-white';
        else if (oc.includes('ENG_')) btn.className = 'qb-pill px-2.5 py-1.5 rounded-lg font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200';
        else if (oc.includes('MATH_')) btn.className = 'qb-pill px-2.5 py-1.5 rounded-lg font-semibold bg-teal-50 text-teal-800 border border-teal-200';
        else if (oc.includes('BEAST_')) btn.className = 'qb-pill px-2.5 py-1.5 rounded-lg font-semibold bg-orange-50 text-orange-800 border border-orange-200';
        else if (oc.includes('SCI_')) btn.className = 'qb-pill px-2.5 py-1.5 rounded-lg font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200';
        else btn.className = 'qb-pill px-3 py-1.5 rounded-lg font-semibold bg-slate-100 text-slate-700';
      });
      renderQBank(true);
    }

    function loadMoreQBank() {
      qbankDisplayLimit += 60;
      renderQBank(false);
    }

    function renderQBank(resetLimit = false) {
      if (resetLimit) qbankDisplayLimit = 60;
      const keyword = (document.getElementById('qbank-search-input').value || '').trim().toLowerCase();
      const doneSet = getCompletedQs();

      const filtered = Q_BANK_DATA.filter(item => {
        const catOk = activeQBankFilter === 'ALL'
          || (activeQBankFilter === 'BEAST_ALL' && item.cat.startsWith('BEAST_'))
          || item.cat === activeQBankFilter;
        const textOk = !keyword || item.q.toLowerCase().includes(keyword) || item.a.toLowerCase().includes(keyword) || item.sub.toLowerCase().includes(keyword) || `q${item.n}` === keyword || `${item.n}` === keyword;
        return catOk && textOk;
      });

      const slice = filtered.slice(0, qbankDisplayLimit);
      document.getElementById('qbank-showing-count').textContent = `Showing ${slice.length} of ${filtered.length} matching questions (Total: ${Q_BANK_DATA.length})`;

      const loadMoreBtn = document.getElementById('qbank-load-more-btn');
      if (slice.length < filtered.length) loadMoreBtn.classList.remove('hidden');
      else loadMoreBtn.classList.add('hidden');

      const container = document.getElementById('qbank-container');
      let html = '', currentSub = '';

      slice.forEach(item => {
        if (item.sub !== currentSub) {
          if (currentSub !== '') html += '</div></div>';
          currentSub = item.sub;
          const headerColor = item.cat.startsWith('ENG') ? 'bg-indigo-600' : item.cat.startsWith('BEAST') ? 'bg-orange-600' : item.cat.startsWith('SCI') ? 'bg-emerald-600' : 'bg-teal-600';
          html += `
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div class="${headerColor} text-white px-4 py-2.5 font-extrabold text-sm">
                ${currentSub}
              </div>
              <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          `;
        }

        if (item.story && READING_STORIES[item.story]) {
          const st = READING_STORIES[item.story];
          html += `
            <div class="md:col-span-2 bg-indigo-50/70 border-l-4 border-indigo-600 p-3.5 rounded-r-xl text-xs">
              <div class="font-extrabold text-indigo-950 mb-1">${st.title}</div>
              <p class="italic text-slate-700 leading-relaxed">${st.text}</p>
            </div>
          `;
        }

        const isChecked = doneSet.has(item.n) ? 'checked' : '';
        const ansClass = showAllAnswers ? 'inline-block' : 'hidden';

        html += `
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs print-break">
            <input type="checkbox" ${isChecked} onchange="toggleQuestionDone(${item.n})" class="mt-0.5 w-4 h-4 rounded accent-emerald-600 cursor-pointer shrink-0 no-print" title="Mark Completed (+1 Star)" />
            <div class="space-y-1.5 flex-1">
              <div class="text-slate-800 leading-snug">
                <span class="font-extrabold text-slate-900">Q${item.n}.</span> ${item.q}
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <button onclick="handleSingleRevealClick(this)" class="no-print text-[11px] font-bold text-indigo-600 hover:underline">
                  ${showAllAnswers ? 'Hide Answer' : '🔒 Reveal Answer'}
                </button>
                <span class="answer-badge ${ansClass} px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold text-[11px]">
                  Ans: ${item.a}
                </span>
              </div>
            </div>
          </div>
        `;
      });

      if (currentSub !== '') html += '</div></div>';
      container.innerHTML = html || '<div class="bg-white p-6 rounded-2xl border border-slate-200 text-center text-xs text-slate-500">No questions match your current filter.</div>';
    }

