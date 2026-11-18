    let inferenceSolved = false;
    function checkInference(choice) {
      const fb = document.getElementById('inference-feedback');
      if (choice === 'disappointed') {
        fb.className = 'mt-2 font-bold text-emerald-700';
        fb.textContent = '✅ Spot on! Soggy shoes + sighing are clues that she is disappointed by the rain.';
        if (!inferenceSolved) { inferenceSolved = true; awardStars(1, 'Reading Detective!'); }
      } else {
        fb.className = 'mt-2 font-bold text-rose-700';
        fb.textContent = '❌ Look at the clues: "soggy shoes" and "sighed". Try again!';
      }
    }
    function buildWordSurgery() {
      const [pre, preMean] = document.getElementById('ws-prefix').value.split('|');
      const [root, rootMean] = document.getElementById('ws-root').value.split('|');
      const [suf, sufMean] = document.getElementById('ws-suffix').value.split('|');
      const word = `${pre}${root}${suf}`;
      const meaning = `${preMean}${sufMean}${rootMean}`.trim();
      document.getElementById('ws-output').innerHTML = `
        <div class="text-lg font-extrabold tracking-wide text-amber-300">${word}</div>
        <div class="text-xs text-slate-300 mt-0.5">Meaning: <strong>${meaning}</strong></div>
      `;
    }
    function showSyllables(chunks, count) {
      document.getElementById('syllable-display').innerHTML = `
        <span class="font-mono text-base font-extrabold text-indigo-700">${chunks.replace(/-/g, ' - ')}</span>
        <span class="px-2.5 py-1 rounded-full bg-indigo-600 text-white font-bold">👏 ${count} Claps</span>
      `;
    }

