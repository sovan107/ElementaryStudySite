    // =========================================================================
    // TYPING PRACTICE STUDIO (WPM, Accuracy, Timed Tests)
    // =========================================================================
    const TYPING_PASSAGES = [
      'The rain tapped softly on the window. Saanvi watched the drops race down the glass while her cat slept on the warm rug. She counted ten clouds and wondered if it would snow before bedtime.',
      'Saanvi strapped into her rocket ship and blasted off toward the stars. She floated past Saturn and waved at a friendly alien who was eating a pizza made of glowing cheese.',
      'Under the blue ocean, a little fish named Pip explored the coral reef. He counted the stripes on a clownfish and followed a school of silver minnows through the warm water.',
      'It was the first day of school and Saanvi packed her backpack with a red apple, a blue pencil, and a book about dinosaurs. She skipped all the way to the bus stop.'
    ];

    // =========================================================================
    // GUIDED LESSON CURRICULUM (Learn Mode)
    // =========================================================================
    const TYPING_LESSONS = [
      {
        title: 'Lesson 1: Home Row Keys',
        keys: ['a','s','d','f','g','h','j','k','l',';'],
        fingers: 'Left hand: pinky=a, ring=s, middle=d, index=f & g. Right hand: index=h & j, middle=k, ring=l, pinky=;.',
        tip: 'Sit up straight, wrists up, fingers curved like tiny hills. Reach with the finger that owns each key — do NOT look down!',
        text: 'asdf jkl; sad lad ask all fall dad gag had'
      },
      {
        title: 'Lesson 2: Top Row Keys',
        keys: ['q','w','e','r','t','y','u','i','o','p'],
        fingers: 'Same fingers as home row, just reach UP one row. Left pinky=q, ring=w, middle=e, index=r & t. Right index=y & u, middle=i, ring=o, pinky=p.',
        tip: 'Keep your fingers on the home row and stretch up to the top row. Return to home row after each key!',
        text: 'qwertyuiop we are here to help you type'
      },
      {
        title: 'Lesson 3: Bottom Row Keys',
        keys: ['z','x','c','v','b','n','m',',','.','/'],
        fingers: 'Reach DOWN one row with the same fingers. Left pinky=z, ring=x, middle=c, index=v & b. Right index=n & m, middle=,, ring=., pinky=/.',
        tip: 'Curl your fingers down to the bottom row, then spring back up to home row. Accuracy first, speed later!',
        text: 'zxcvbnm zoo box van cab mix'
      },
      {
        title: 'Lesson 4: Number Row',
        keys: ['1','2','3','4','5','6','7','8','9','0'],
        fingers: 'Reach UP two rows for numbers. Left pinky=1, ring=2, middle=3, index=4 & 5. Right index=6 & 7, middle=8, ring=9, pinky=0.',
        tip: 'Numbers use the same finger pattern as the top row, just one row higher. Look up, type, look back down!',
        text: '1234567890 1 2 3 10 20 30'
      },
      {
        title: 'Lesson 5: All Letters Mix',
        keys: 'abcdefghijklmnopqrstuvwxyz',
        fingers: 'Now use ALL rows together! Home row is your anchor — every reach starts and ends there.',
        tip: 'Slow down and aim for 90%+ accuracy. Speed comes naturally after the keys feel familiar.',
        text: 'the quick brown fox jumps over the lazy dog'
      },
      {
        title: 'Lesson 6: Capital Letters & Shift',
        keys: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        fingers: 'Hold SHIFT with the pinky of the hand OPPOSITE to the letter you are typing.',
        tip: 'For a capital letter: press and HOLD Shift, type the letter, release Shift. Try not to let Shift bounce!',
        text: 'My dog Rex ran to the park. He was very happy.'
      },
      {
        title: 'Lesson 7: Story Sentences',
        keys: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz .,!?\'’',
        fingers: 'Put it all together — capitals, punctuation, and smooth rhythm.',
        tip: 'This is the final boss! Type like you are telling a story. Breathe, relax your shoulders, and enjoy!',
        text: 'Saanvi has a red bike. She rides it to school every day with her friend Tom.'
      }
    ];

    const KEYBOARD_ROWS = [
      ['1','2','3','4','5','6','7','8','9','0','-','='],
      ['q','w','e','r','t','y','u','i','o','p','[',']'],
      ['a','s','d','f','g','h','j','k','l',';','\''],
      ['z','x','c','v','b','n','m',',','.','/']
    ];

    function getCompletedLessons() {
      try { return JSON.parse(localStorage.getItem('saanvi_typing_lessons_v1') || '[]'); } catch (e) { return []; }
    }

    function markLessonComplete(idx) {
      const done = getCompletedLessons();
      if (!done.includes(idx)) {
        done.push(idx);
        try { localStorage.setItem('saanvi_typing_lessons_v1', JSON.stringify(done)); } catch (e) {}
      }
      updateLessonProgressUI();
    }

    function setTypingBtn(id, text, disabled) {
      const el = document.getElementById(id);
      if (!el) return;
      el.textContent = text;
      el.disabled = disabled;
    }

    function updateLessonProgressUI() {
      const done = getCompletedLessons();
      const badge = document.getElementById('typing-lessons-progress');
      if (badge) badge.textContent = `${done.length}/${TYPING_LESSONS.length} Complete`;
      const select = document.getElementById('typing-lesson-select');
      if (select) {
        [...select.options].forEach(opt => {
          const i = parseInt(opt.value, 10);
          opt.textContent = (done.includes(i) ? '✅ ' : '') + TYPING_LESSONS[i].title;
        });
      }
    }

    function renderTypingKeyboard(highlightKeys) {
      const container = document.getElementById('typing-keyboard');
      if (!container) return;
      const keys = new Set((highlightKeys || []).map(k => k.toLowerCase()));
      const rowsHtml = KEYBOARD_ROWS.map(row => `
        <div class="flex gap-1 justify-center mb-1">
          ${row.map(k => {
            const active = keys.has(k);
            return `<div class="w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-extrabold border ${active ? 'bg-violet-600 text-white border-violet-700 shadow-sm' : 'bg-white text-slate-400 border-slate-300'}">${k}</div>`;
          }).join('')}
        </div>
      `).join('');
      container.innerHTML = rowsHtml + `
        <div class="flex justify-center mt-1">
          <div class="w-56 h-7 rounded-md bg-white border border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-400">SPACE</div>
        </div>
        <p class="text-center text-[10px] text-slate-500 mt-2 font-semibold">${keys.size ? '🟣 Purple keys = focus on these in this lesson' : 'Keys light up purple when you start a lesson'}</p>
      `;
    }

    const typingState = {
      passage: '',
      charStates: [],   // 'pending' | 'correct' | 'incorrect'
      idx: 0,
      correctChars: 0,
      incorrectChars: 0,
      keystrokes: 0,
      timeLimit: 60,
      timeLeft: 60,
      timerId: null,
      running: false,
      finished: false,
      startTime: null,
      mode: 'test',     // 'test' | 'lesson'
      lessonIdx: -1
    };

    function getTypingBest() {
      try { return parseInt(localStorage.getItem('saanvi_typing_best_v1') || '0', 10); } catch (e) { return 0; }
    }

    function setTypingBest(wpm) {
      try { localStorage.setItem('saanvi_typing_best_v1', String(wpm)); } catch (e) {}
    }

    function initTypingView() {
      document.getElementById('typing-best-wpm').textContent = getTypingBest();
      updateLessonProgressUI();
      renderTypingKeyboard([]);
      const lessonSelect = document.getElementById('typing-lesson-select');
      if (lessonSelect) {
        lessonSelect.addEventListener('change', () => {
          const lesson = TYPING_LESSONS[parseInt(lessonSelect.value, 10)];
          if (lesson) {
            document.getElementById('typing-lesson-instruction').innerHTML =
              `<strong>${lesson.title}</strong><br>✋ ${lesson.fingers}<br>💡 ${lesson.tip}`;
            renderTypingKeyboard(typeof lesson.keys === 'string' ? lesson.keys.split('') : lesson.keys);
          }
        });
      }
      resetTypingTest();
    }

    function renderTypingPassage() {
      const container = document.getElementById('typing-passage');
      container.innerHTML = typingState.passage.split('').map((ch, i) => {
        const state = typingState.charStates[i] || 'pending';
        let cls = 'text-slate-400';
        if (state === 'correct') cls = 'text-emerald-600 font-bold';
        else if (state === 'incorrect') cls = 'text-rose-600 font-bold underline decoration-rose-400';
        else if (i === typingState.idx && typingState.running) cls = 'text-slate-900 bg-cyan-200 rounded-sm';
        const display = ch === ' ' ? '&nbsp;' : ch;
        return `<span data-idx="${i}" class="${cls}">${display}</span>`;
      }).join('');
      const pct = typingState.passage.length ? (typingState.idx / typingState.passage.length) * 100 : 0;
      document.getElementById('typing-progress-fill').style.width = pct + '%';
    }

    function updateTypingStats() {
      const elapsedMin = typingState.startTime ? (Date.now() - typingState.startTime) / 60000 : 0;
      const wpm = elapsedMin > 0 ? Math.round((typingState.correctChars / 5) / elapsedMin) : 0;
      const acc = typingState.keystrokes > 0 ? Math.round((typingState.correctChars / typingState.keystrokes) * 100) : 100;
      document.getElementById('typing-wpm').textContent = wpm;
      document.getElementById('typing-accuracy').textContent = acc + '%';
      document.getElementById('typing-errors').textContent = typingState.incorrectChars;
    }

    function startTypingTest() {
      const passageIdx = parseInt(document.getElementById('typing-passage-select').value, 10);
      typingState.passage = TYPING_PASSAGES[passageIdx] || TYPING_PASSAGES[0];
      typingState.charStates = new Array(typingState.passage.length).fill('pending');
      typingState.idx = 0;
      typingState.correctChars = 0;
      typingState.incorrectChars = 0;
      typingState.keystrokes = 0;
      typingState.timeLimit = parseInt(document.getElementById('typing-time-select').value, 10);
      typingState.timeLeft = typingState.timeLimit;
      typingState.running = true;
      typingState.finished = false;
      typingState.startTime = null;
      typingState.mode = 'test';
      typingState.lessonIdx = -1;
      document.getElementById('typing-time-label').textContent = 'Time Left';
      document.getElementById('typing-results').classList.add('hidden');
      setTypingBtn('typing-start-btn', '⏸ Running…', true);
      setTypingBtn('typing-lesson-btn', '⏸ Lesson Running…', true);
      document.getElementById('typing-time-left').textContent = formatTypingTime(typingState.timeLeft);
      renderTypingPassage();
      updateTypingStats();
      const input = document.getElementById('typing-input');
      input.value = '';
      input.focus();
      typingState.timerId = setInterval(() => {
        typingState.timeLeft--;
        document.getElementById('typing-time-left').textContent = formatTypingTime(Math.max(0, typingState.timeLeft));
        if (typingState.timeLeft <= 0) finishTypingTest('time');
      }, 1000);
    }

    function startTypingLesson() {
      const lessonIdx = parseInt(document.getElementById('typing-lesson-select').value, 10);
      const lesson = TYPING_LESSONS[lessonIdx];
      if (!lesson) return;
      typingState.passage = lesson.text;
      typingState.charStates = new Array(typingState.passage.length).fill('pending');
      typingState.idx = 0;
      typingState.correctChars = 0;
      typingState.incorrectChars = 0;
      typingState.keystrokes = 0;
      typingState.timeLimit = 0; // untimed — accuracy matters, not speed
      typingState.timeLeft = 0;
      typingState.running = true;
      typingState.finished = false;
      typingState.startTime = null;
      typingState.mode = 'lesson';
      typingState.lessonIdx = lessonIdx;
      document.getElementById('typing-time-label').textContent = 'Elapsed';
      document.getElementById('typing-results').classList.add('hidden');
      setTypingBtn('typing-lesson-btn', '⏸ Lesson Running…', true);
      setTypingBtn('typing-start-btn', '▶ Start Test', true);
      document.getElementById('typing-time-left').textContent = '0:00';
      document.getElementById('typing-lesson-instruction').innerHTML =
        `<strong>${lesson.title}</strong><br>✋ ${lesson.fingers}<br>💡 ${lesson.tip}`;
      renderTypingKeyboard(typeof lesson.keys === 'string' ? lesson.keys.split('') : lesson.keys);
      renderTypingPassage();
      updateTypingStats();
      const input = document.getElementById('typing-input');
      input.value = '';
      input.focus();
      typingState.timerId = setInterval(() => {
        if (typingState.startTime) {
          const el = Math.floor((Date.now() - typingState.startTime) / 1000);
          document.getElementById('typing-time-left').textContent = formatTypingTime(el);
        }
      }, 1000);
    }

    function formatTypingTime(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${m}:${String(s).padStart(2, '0')}`;
    }

    function handleTypingKeydown(e) {
      if (!typingState.running || typingState.finished) return;
      if (e.key === 'Backspace') {
        e.preventDefault();
        if (typingState.idx > 0) {
          typingState.idx--;
          const prev = typingState.charStates[typingState.idx];
          if (prev === 'correct') typingState.correctChars--;
          else if (prev === 'incorrect') typingState.incorrectChars--;
          typingState.charStates[typingState.idx] = 'pending';
          renderTypingPassage();
          updateTypingStats();
        }
        return;
      }
      if (e.key.length !== 1) return; // ignore Shift, arrows, etc.
      e.preventDefault();
      if (!typingState.startTime) typingState.startTime = Date.now();
      if (typingState.idx >= typingState.passage.length) return;

      const expected = typingState.passage[typingState.idx];
      const typed = e.key;
      typingState.keystrokes++;
      if (typed === expected) {
        typingState.charStates[typingState.idx] = 'correct';
        typingState.correctChars++;
      } else {
        typingState.charStates[typingState.idx] = 'incorrect';
        typingState.incorrectChars++;
      }
      typingState.idx++;
      renderTypingPassage();
      updateTypingStats();
      if (typingState.idx >= typingState.passage.length) finishTypingTest('passage');
    }

    function finishTypingTest(reason) {
      if (typingState.finished) return;
      typingState.finished = true;
      typingState.running = false;
      clearInterval(typingState.timerId);
      const elapsedMin = typingState.startTime ? Math.max((Date.now() - typingState.startTime) / 60000, 1 / 60) : typingState.timeLimit / 60;
      const wpm = Math.round((typingState.correctChars / 5) / elapsedMin);
      const acc = typingState.keystrokes > 0 ? Math.round((typingState.correctChars / typingState.keystrokes) * 100) : 100;

      const isLesson = typingState.mode === 'lesson';
      const completed = typingState.idx >= typingState.passage.length;
      const passed = isLesson ? (completed && acc >= 80) : true;

      let stars = 0;
      if (isLesson) {
        if (passed) {
          stars = 3;
          markLessonComplete(typingState.lessonIdx);
        }
      } else {
        if (typingState.correctChars > 0) stars += 2;
        if (acc >= 90) stars += 1;
        if (wpm >= 15) stars += 1;
      }
      if (stars > 0 && typeof awardStars === 'function') awardStars(stars, isLesson ? 'Typing Lesson Passed!' : 'Typing Test Complete!');

      const best = getTypingBest();
      if (wpm > best) { setTypingBest(wpm); document.getElementById('typing-best-wpm').textContent = wpm; }

      document.getElementById('typing-final-wpm').textContent = wpm;
      document.getElementById('typing-final-accuracy').textContent = acc + '%';
      document.getElementById('typing-final-errors').textContent = typingState.incorrectChars;
      document.getElementById('typing-stars-earned').textContent = stars;
      const msg = document.getElementById('typing-result-message');
      if (isLesson) {
        if (passed) {
          const nextIdx = typingState.lessonIdx + 1;
          msg.textContent = nextIdx < TYPING_LESSONS.length
            ? `🎉 Lesson passed! Try Lesson ${nextIdx + 1}: ${TYPING_LESSONS[nextIdx].title.replace(/^Lesson \d+: /, '')} next!`
            : '🏆 You finished ALL typing lessons! Now try the timed Test Mode below to measure your speed!';
        } else {
          msg.textContent = `💪 Almost there! You need 80%+ accuracy to pass — you got ${acc}%. Use Backspace to fix mistakes and try again!`;
        }
      } else if (wpm >= 20) {
        msg.textContent = '🚀 Amazing speed! You are a typing superstar!';
      } else if (wpm >= 12) {
        msg.textContent = '⭐ Great job! Keep practicing to get even faster!';
      } else {
        msg.textContent = '💪 Nice work! Try again to beat your best score!';
      }
      document.getElementById('typing-results').classList.remove('hidden');
      setTypingBtn('typing-start-btn', '▶ Start Test', false);
      setTypingBtn('typing-lesson-btn', '▶ Start Lesson', false);
    }

    function resetTypingTest() {
      clearInterval(typingState.timerId);
      typingState.running = false;
      typingState.finished = false;
      typingState.mode = 'test';
      typingState.lessonIdx = -1;
      typingState.idx = 0;
      typingState.correctChars = 0;
      typingState.incorrectChars = 0;
      typingState.keystrokes = 0;
      typingState.startTime = null;
      typingState.timeLimit = parseInt(document.getElementById('typing-time-select').value, 10);
      typingState.timeLeft = typingState.timeLimit;
      typingState.passage = TYPING_PASSAGES[parseInt(document.getElementById('typing-passage-select').value, 10)] || TYPING_PASSAGES[0];
      typingState.charStates = new Array(typingState.passage.length).fill('pending');
      document.getElementById('typing-results').classList.add('hidden');
      setTypingBtn('typing-start-btn', '▶ Start Test', false);
      setTypingBtn('typing-lesson-btn', '▶ Start Lesson', false);
      document.getElementById('typing-time-label').textContent = 'Time Left';
      document.getElementById('typing-time-left').textContent = formatTypingTime(typingState.timeLeft);
      document.getElementById('typing-input').value = '';
      renderTypingPassage();
      updateTypingStats();
    }

    document.getElementById('typing-input').addEventListener('keydown', handleTypingKeydown);
