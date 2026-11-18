    // 4. INTERACTIVE LABS: CIRCLES, PATTERNS, BEAST ACADEMY, MATH, ENG, SCI
    // =========================================================================
    let circleR = 4, circleMode = 'radius';
    function updateCircleLab(newR, newMode) {
      if (newR !== null) circleR = parseInt(newR, 10);
      if (newMode !== null) circleMode = newMode;
      const d = circleR * 2;
      document.getElementById('circle-r-label').textContent = `${circleR} in`;
      const cx = 80, cy = 80, R = 22 + circleR * 4.2;
      let overlay = '', desc = '';
      if (circleMode === 'radius') {
        overlay = `<line x1="${cx}" y1="${cy}" x2="${cx + R}" y2="${cy}" stroke="#e11d48" stroke-width="3"/>
                   <text x="${cx + R / 2}" y="${cy - 6}" text-anchor="middle" font-size="10" font-weight="bold" fill="#e11d48">r = ${circleR}</text>`;
        desc = `Radius (r) = ${circleR} in | Diameter (d = 2 × r) = ${d} in`;
      } else if (circleMode === 'diameter') {
        overlay = `<line x1="${cx - R}" y1="${cy}" x2="${cx + R}" y2="${cy}" stroke="#4f46e5" stroke-width="3"/>
                   <text x="${cx}" y="${cy - 6}" text-anchor="middle" font-size="10" font-weight="bold" fill="#4f46e5">d = ${d}</text>`;
        desc = `Diameter (d) = ${d} in (straight across Center; twice radius ${circleR} in)`;
      } else if (circleMode === 'chord') {
        overlay = `<line x1="${cx - R * 0.72}" y1="${cy - R * 0.68}" x2="${cx + R * 0.85}" y2="${cy - R * 0.52}" stroke="#d97706" stroke-width="3"/>
                   <text x="${cx}" y="${cy - R * 0.68}" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Chord</text>`;
        desc = `Chord connects 2 edge points without needing to cross the Center.`;
      } else if (circleMode === 'semi') {
        overlay = `<path d="M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy} Z" fill="#99f6e4" opacity="0.85" stroke="#0d9488" stroke-width="2"/>`;
        desc = `Semicircle = 1/2 of a circle! Two semicircles make 1 whole circle.`;
      }
      document.getElementById('circle-lab-readout').textContent = desc;
      document.getElementById('circle-lab-svg').innerHTML = `
        <circle cx="${cx}" cy="${cy}" r="${R}" fill="#f0fdfa" stroke="#0d9488" stroke-width="2.5"/>
        ${overlay}
        <circle cx="${cx}" cy="${cy}" r="3.5" fill="#0f172a"/>
        <text x="${cx}" y="${cy + 13}" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">Center</text>
      `;
    }

    // Math Series Lab
    const MATH_SERIES_LIST = [
      { title: 'Series #1: Skip Counting by 3s', seq: [12, 15, 18, '?', 24, 27], ans: 21, hint: 'Rule: Add +3 each step' },
      { title: 'Series #2: Growing Jumps (+2, +3, +4, +5)', seq: [2, 4, 7, 11, '?', 22], ans: 16, hint: 'Jumps grow by +1 each step!' },
      { title: 'Series #3: Quarter Series (+25s)', seq: [25, 50, 75, '?', 125, 150], ans: 100, hint: 'Think of quarters: 25¢, 50¢, 75¢...' },
      { title: 'Series #4: Backward Subtraction (-6)', seq: [60, 54, 48, '?', 36, 30], ans: 42, hint: 'Rule: Subtract 6 each step' },
      { title: 'Series #5: Function Machine (Add 9)', seq: ['8→17', '14→23', '25→?'], ans: 34, hint: '25 + 9 = 34' },
      { title: 'Series #6: Doubling Sequence (×2)', seq: [3, 6, 12, 24, '?'], ans: 48, hint: 'Each term doubles!' }
    ];
    let mathSeriesIdx = 0, mathSeriesSolved = new Set();
    function renderMathSeries() {
      const s = MATH_SERIES_LIST[mathSeriesIdx];
      document.getElementById('math-series-title').textContent = s.title;
      document.getElementById('math-series-tiles').innerHTML = s.seq.map(v =>
        `<span class="px-2.5 py-1.5 rounded-lg border-2 font-extrabold text-sm ${String(v).includes('?') ? 'bg-amber-100 border-amber-400 text-amber-900' : 'bg-white border-slate-300 text-slate-800'}">${v}</span>`
      ).join('');
      document.getElementById('math-series-input').value = '';
      document.getElementById('math-series-feedback').textContent = '';
    }
    function nextMathSeries() { mathSeriesIdx = (mathSeriesIdx + 1) % MATH_SERIES_LIST.length; renderMathSeries(); }
    function checkMathSeries() {
      const s = MATH_SERIES_LIST[mathSeriesIdx];
      const val = parseInt(document.getElementById('math-series-input').value, 10);
      const fb = document.getElementById('math-series-feedback');
      if (val === s.ans) {
        fb.className = 'text-center font-extrabold text-emerald-700';
        fb.textContent = `🎉 Correct! ${s.ans} completes the series (${s.hint}).`;
        if (!mathSeriesSolved.has(mathSeriesIdx)) { mathSeriesSolved.add(mathSeriesIdx); awardStars(2, 'Math Series Solved!'); }
      } else {
        fb.className = 'text-center font-bold text-rose-700';
        fb.textContent = `❌ Try again! Hint: ${s.hint}`;
      }
    }

    // Beast Academy 1B/1C/1D Interactive Labs
    const BA_PARITY_LIST = [
      { q: 'Odd Number + Odd Number (e.g., 17 + 25) = ?', ans: 'Even', why: 'Two leftover singletons pair up to make an Even sum!' },
      { q: 'Even Number + Odd Number (e.g., 34 + 19) = ?', ans: 'Odd', why: 'One leftover singleton remains unpaired → Odd!' },
      { q: 'Sum of THREE Odd Numbers (e.g., 5 + 7 + 9) = ?', ans: 'Odd', why: 'Odd + Odd = Even, then Even + Odd = Odd!' },
      { q: 'Difference between Two Odd Numbers (43 − 17) = ?', ans: 'Even', why: 'Both have 1 leftover; subtracting cancels the leftovers → Even!' }
    ];
    let baParIdx = 0, baParSolved = new Set();
    function renderBAParity() {
      document.getElementById('ba-parity-q').textContent = BA_PARITY_LIST[baParIdx].q;
      document.getElementById('ba-parity-fb').textContent = '';
    }
    function nextBAParity() { baParIdx = (baParIdx + 1) % BA_PARITY_LIST.length; renderBAParity(); }
    function checkBAParity(choice) {
      const p = BA_PARITY_LIST[baParIdx];
      const fb = document.getElementById('ba-parity-fb');
      if (choice === p.ans) {
        fb.className = 'font-bold text-emerald-700';
        fb.textContent = `✅ Always ${p.ans}! ${p.why}`;
        if (!baParSolved.has(baParIdx)) { baParSolved.add(baParIdx); awardStars(2, 'Beast 1B Parity Master!'); }
      } else {
        fb.className = 'font-bold text-rose-700';
        fb.textContent = `❌ ${p.why}`;
      }
    }

    const BA_BW_LIST = [
      { q: 'Start with ?, add 7, subtract 4, and end at 15. Start #?', ans: 12, hint: 'Reverse from 15: 15 + 4 − 7 = 12' },
      { q: 'Leo doubles his stickers, gives 3 away, and has 11 left. Start #?', ans: 7, hint: '11 + 3 = 14, half of 14 = 7' },
      { q: 'Add 10, subtract 5, and get 23. What went in?', ans: 18, hint: '23 + 5 − 10 = 18' }
    ];
    let baBwIdx = 0, baBwSolved = new Set();
    function renderBABackwards() {
      document.getElementById('ba-bw-q').textContent = BA_BW_LIST[baBwIdx].q;
      document.getElementById('ba-bw-inp').value = '';
      document.getElementById('ba-bw-fb').textContent = '';
    }
    function nextBABackwards() { baBwIdx = (baBwIdx + 1) % BA_BW_LIST.length; renderBABackwards(); }
    function checkBABackwards() {
      const p = BA_BW_LIST[baBwIdx];
      const val = parseInt(document.getElementById('ba-bw-inp').value, 10);
      const fb = document.getElementById('ba-bw-fb');
      if (val === p.ans) {
        fb.className = 'font-bold text-emerald-700';
        fb.textContent = `🎉 Correct! ${p.hint}`;
        if (!baBwSolved.has(baBwIdx)) { baBwSolved.add(baBwIdx); awardStars(2, 'Beast 1D Working Backwards!'); }
      } else {
        fb.className = 'font-bold text-rose-700';
        fb.textContent = `❌ Hint: ${p.hint}`;
      }
    }

    const BA_MAGIC_SOL = [8, 1, 6, 3, 5, 7, 4, 9, 2];
    const BA_MAGIC_GIVEN = [8, 0, 6, 0, 5, 0, 4, 0, 2];
    let baMagicSolved = false;
    function renderBAMagic() {
      document.getElementById('ba-magic-grid').innerHTML = BA_MAGIC_GIVEN.map((v, i) =>
        v !== 0
          ? `<div class="w-9 h-9 rounded-lg bg-orange-100 border border-orange-300 flex items-center justify-center font-extrabold text-orange-950">${v}</div>`
          : `<input type="number" min="1" max="9" id="bamg-${i}" class="w-9 h-9 rounded-lg bg-amber-50 border-2 border-orange-400 text-center font-extrabold text-indigo-700"/>`
      ).join('');
    }
    function checkBAMagic() {
      let ok = true;
      BA_MAGIC_SOL.forEach((ans, i) => {
        if (BA_MAGIC_GIVEN[i] === 0 && parseInt(document.getElementById('bamg-' + i).value, 10) !== ans) ok = false;
      });
      const fb = document.getElementById('ba-magic-fb');
      if (ok) {
        fb.className = 'font-bold text-emerald-700';
        fb.textContent = '🎉 Magic Square Solved! Every row, column & diagonal = 15!';
        if (!baMagicSolved) { baMagicSolved = true; awardStars(3, 'Beast 1D Magic Square!'); }
      } else {
        fb.className = 'font-bold text-rose-700';
        fb.textContent = '❌ Top row: 8 + ? + 6 = 15 → ? = 1. Check all rows & columns!';
      }
    }


    // === NEW BEAST ACADEMY 1B LABS: CIRCLE DIAGRAMS, DIFFERENCE PYRAMIDS, X-OUTS ===
    const BA_CIRCLE_DIAGS = [
      {
        title: 'Place words into: Left = "3 letters", Right = "Has letter E"',
        leftLabel: '3 letters', rightLabel: 'Has E',
        items: [
          { label: 'one', ans: 'both' },
          { label: 'two', ans: 'left' },
          { label: 'three', ans: 'right' },
          { label: 'four', ans: 'out' },
          { label: 'six', ans: 'left' },
          { label: 'nine', ans: 'right' }
        ]
      },
      {
        title: 'Place letters into: Left = "in SIXTY", Right = "in EIGHTY"',
        leftLabel: 'in SIXTY', rightLabel: 'in EIGHTY',
        items: [
          { label: 'S', ans: 'left' },
          { label: 'T', ans: 'both' },
          { label: 'Y', ans: 'both' },
          { label: 'E', ans: 'right' },
          { label: 'G', ans: 'right' },
          { label: 'Z', ans: 'out' }
        ]
      },
      {
        title: 'Place numbers into: Left = "Even", Right = "Greater than 5"',
        leftLabel: 'Even', rightLabel: '> 5',
        items: [
          { label: '2', ans: 'left' },
          { label: '6', ans: 'both' },
          { label: '7', ans: 'right' },
          { label: '3', ans: 'out' },
          { label: '8', ans: 'both' },
          { label: '9', ans: 'right' }
        ]
      }
    ];
    let baCdIdx = 0, baCdSolved = new Set();
    function renderCircleDiag() {
      const p = BA_CIRCLE_DIAGS[baCdIdx];
      document.getElementById('ba-cd-prompt').textContent = p.title;
      document.getElementById('ba-cd-fb').textContent = '';
      document.getElementById('ba-cd-items').innerHTML = p.items.map((it, idx) => `
        <div class="flex items-center justify-between gap-2 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200">
          <span class="font-extrabold text-slate-900">${it.label}</span>
          <select id="bacd-${idx}" class="px-1.5 py-0.5 rounded border border-slate-300 bg-white text-[11px] font-bold">
            <option value="">Choose...</option>
            <option value="left">${p.leftLabel} Only</option>
            <option value="both">Both (Overlap)</option>
            <option value="right">${p.rightLabel} Only</option>
            <option value="out">Outside Both</option>
          </select>
        </div>
      `).join('');
    }
    function nextCircleDiag() { baCdIdx = (baCdIdx + 1) % BA_CIRCLE_DIAGS.length; renderCircleDiag(); }
    function checkCircleDiag() {
      const p = BA_CIRCLE_DIAGS[baCdIdx];
      let wrong = 0;
      p.items.forEach((it, idx) => {
        const sel = document.getElementById('bacd-' + idx);
        if (sel.value === it.ans) { sel.classList.remove('border-rose-500', 'bg-rose-50'); sel.classList.add('border-emerald-500', 'bg-emerald-50'); }
        else { wrong++; sel.classList.remove('border-emerald-500', 'bg-emerald-50'); sel.classList.add('border-rose-500', 'bg-rose-50'); }
      });
      const fb = document.getElementById('ba-cd-fb');
      if (wrong === 0) {
        fb.className = 'font-extrabold text-emerald-700';
        fb.textContent = '🎉 Perfect Circle Diagram! Every item is in the right region!';
        if (!baCdSolved.has(baCdIdx)) { baCdSolved.add(baCdIdx); awardStars(3, 'Beast 1B Circle Diagram!'); }
      } else {
        fb.className = 'font-bold text-rose-700';
        fb.textContent = `❌ ${wrong} item(s) need moving—check the red boxes!`;
      }
    }

    const BA_DIFF_PYRS = [
      {
        rule: 'Use 1–9 once each. Every brick = difference of the 2 bricks below it!',
        rows: [[0, 6], [0, 7, 0], [5, 0, 9, 0]],
        sol: [[4, 6], [3, 7, 1], [5, 2, 9, 8]]
      },
      {
        rule: 'Use 1–9 once each. Every brick = difference of the 2 bricks below it!',
        rows: [[6, 0], [7, 1, 5], [0, 0, 8, 3]],
        sol: [[6, 4], [7, 1, 5], [2, 9, 8, 3]]
      },
      {
        rule: 'Use 1–10 once each. Every brick = difference of the 2 bricks below it!',
        rows: [[3], [0, 4], [2, 0, 5], [0, 0, 1, 0]],
        sol: [[3], [7, 4], [2, 9, 5], [8, 10, 1, 6]]
      }
    ];
    let baPyrIdx = 0, baPyrSolved = new Set();
    function renderDiffPyr() {
      const p = BA_DIFF_PYRS[baPyrIdx];
      document.getElementById('ba-pyr-rule').textContent = p.rule;
      document.getElementById('ba-pyr-fb').textContent = '';
      document.getElementById('ba-pyr-board').innerHTML = p.rows.map((row, r) => `
        <div class="flex gap-1 justify-center">
          ${row.map((val, c) => val !== 0
            ? `<div class="w-9 h-8 rounded-md bg-indigo-100 border border-indigo-300 flex items-center justify-center font-extrabold text-indigo-950">${val}</div>`
            : `<input type="number" min="1" max="10" id="bapyr-${r}-${c}" class="w-9 h-8 rounded-md bg-amber-50 border-2 border-indigo-400 text-center font-extrabold text-indigo-800" />`
          ).join('')}
        </div>
      `).join('');
    }
    function nextDiffPyr() { baPyrIdx = (baPyrIdx + 1) % BA_DIFF_PYRS.length; renderDiffPyr(); }
    function checkDiffPyr() {
      const p = BA_DIFF_PYRS[baPyrIdx];
      let wrong = 0;
      p.rows.forEach((row, r) => row.forEach((val, c) => {
        if (val === 0) {
          const inp = document.getElementById(`bapyr-${r}-${c}`);
          if (parseInt(inp.value, 10) === p.sol[r][c]) { inp.classList.remove('bg-rose-100'); inp.classList.add('bg-emerald-100'); }
          else { wrong++; inp.classList.remove('bg-emerald-100'); inp.classList.add('bg-rose-100'); }
        }
      }));
      const fb = document.getElementById('ba-pyr-fb');
      if (wrong === 0) {
        fb.className = 'font-extrabold text-emerald-700';
        fb.textContent = '🎉 Pyramid Solved! Every brick equals the difference below it!';
        if (!baPyrSolved.has(baPyrIdx)) { baPyrSolved.add(baPyrIdx); awardStars(3, 'Beast 1B Difference Pyramid!'); }
      } else {
        fb.className = 'font-bold text-rose-700';
        fb.textContent = `❌ ${wrong} brick(s) need fixing (check pink boxes)!`;
      }
    }

    const BA_XOUTS = [
      { target: 7, grid: [[3, 3, 4], [2, 4, 1], [5, 2, 2]] },
      { target: 8, grid: [[5, 6, 2], [8, 4, 3], [1, 2, 6]] },
      { target: 6, grid: [[4, 3, 2], [5, 6, 4], [2, 1, 4]] },
      { target: 10, grid: [[3, 5, 7], [7, 4, 3], [2, 10, 6]] }
    ];
    let baXoutIdx = 0, baXoutCrossed = new Set(), baXoutSolved = new Set();
    function renderXOut() {
      const p = BA_XOUTS[baXoutIdx];
      document.getElementById('ba-xout-target').textContent = `Target: ${p.target}`;
      document.getElementById('ba-xout-fb').textContent = '';
      const n = p.grid.length;
      let html = `<div class="grid gap-1.5" style="grid-template-columns: repeat(${n}, minmax(0, 1fr));">`;
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
          const key = `${r},${c}`, isX = baXoutCrossed.has(key);
          html += `<button onclick="toggleXOutCell('${key}')" class="w-10 h-10 rounded-lg border-2 font-extrabold text-sm transition ${isX ? 'bg-slate-200 border-slate-400 text-slate-400 line-through' : 'bg-white border-rose-300 text-slate-900 hover:bg-rose-50'}">${isX ? '✕' : p.grid[r][c]}</button>`;
        }
      }
      html += '</div>';
      document.getElementById('ba-xout-grid').innerHTML = html;
    }
    function toggleXOutCell(key) {
      if (baXoutCrossed.has(key)) baXoutCrossed.delete(key);
      else baXoutCrossed.add(key);
      renderXOut();
    }
    function nextXOut() { baXoutIdx = (baXoutIdx + 1) % BA_XOUTS.length; baXoutCrossed = new Set(); renderXOut(); }
    function checkXOut() {
      const p = BA_XOUTS[baXoutIdx], n = p.grid.length;
      let ok = true;
      for (let r = 0; r < n; r++) {
        let rSum = 0, cSum = 0;
        for (let c = 0; c < n; c++) {
          if (!baXoutCrossed.has(`${r},${c}`)) rSum += p.grid[r][c];
          if (!baXoutCrossed.has(`${c},${r}`)) cSum += p.grid[c][r];
        }
        if (rSum !== p.target || cSum !== p.target) ok = false;
      }
      const fb = document.getElementById('ba-xout-fb');
      if (ok) {
        fb.className = 'font-extrabold text-emerald-700';
        fb.textContent = `🎉 Every row & column equals ${p.target}! Awesome X-Out!`;
        if (!baXoutSolved.has(baXoutIdx)) { baXoutSolved.add(baXoutIdx); awardStars(3, 'Beast 1B X-Out Grid!'); }
      } else {
        fb.className = 'font-bold text-rose-700';
        fb.textContent = `❌ Not yet—make sure EVERY row AND EVERY column adds up to ${p.target}!`;
      }
    }

    // English Word Series & Analogy Lab (E7)
    const ENG_SERIES_LIST = [
      { title: 'Word Intensity Series (Quietest → Loudest)', prompt: 'whisper → speak → shout → [ ? ]', opts: ['murmur', 'roar', 'tiptoe', 'blink'], ans: 'roar' },
      { title: 'Analogy Relationship Series', prompt: 'Puppy is to Dog as Kitten is to [ ? ]', opts: ['Bird', 'Cat', 'Fish', 'Bear'], ans: 'Cat' },
      { title: 'Temperature Scale Series', prompt: 'freezing → cool → warm → [ ? ]', opts: ['icy', 'chilly', 'hot', 'snowy'], ans: 'hot' },
      { title: 'Story Event Sequence', prompt: '1. Plant seed → 2. Water soil → 3. Sprout grows → 4. [ ? ]', opts: ['Buy seeds', 'Flower blooms', 'Dig hole', 'Sleep'], ans: 'Flower blooms' },
      { title: 'Antonym Analogy Pair', prompt: 'Up is to Down as Ancient is to [ ? ]', opts: ['Old', 'Modern', 'Dusty', 'Heavy'], ans: 'Modern' }
    ];
    let engSerIdx = 0, engSerSolved = new Set();
    function renderEngSeries() {
      const p = ENG_SERIES_LIST[engSerIdx];
      document.getElementById('eng-series-title').textContent = p.title;
      document.getElementById('eng-series-prompt').textContent = p.prompt;
      document.getElementById('eng-series-fb').textContent = '';
      document.getElementById('eng-series-opts').innerHTML = p.opts.map(o =>
        `<button onclick="checkEngSeries('${o}')" class="px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-indigo-50 font-bold">${o}</button>`
      ).join('');
    }
    function nextEngSeries() { engSerIdx = (engSerIdx + 1) % ENG_SERIES_LIST.length; renderEngSeries(); }
    function checkEngSeries(choice) {
      const p = ENG_SERIES_LIST[engSerIdx];
      const fb = document.getElementById('eng-series-fb');
      if (choice === p.ans) {
        fb.className = 'font-bold text-emerald-700';
        fb.textContent = `🎉 Spot on! "${p.ans}" completes the word series!`;
        if (!engSerSolved.has(engSerIdx)) { engSerSolved.add(engSerIdx); awardStars(2, 'English Word Series!'); }
      } else {
        fb.className = 'font-bold text-rose-700';
        fb.textContent = '❌ Not quite—look at how the words change step by step!';
      }
    }

    // Place Value, Coin Jar, Unit Picker, Clock, Graph, Arrays, Pizza, English & Science Labs
    const pvState = { h: 3, t: 4, o: 8 };
    function changePV(place, delta) {
      pvState[place] = Math.max(0, Math.min(9, pvState[place] + delta));
      document.getElementById('pv-h').textContent = pvState.h;
      document.getElementById('pv-t').textContent = pvState.t;
      document.getElementById('pv-o').textContent = pvState.o;
      const total = pvState.h * 100 + pvState.t * 10 + pvState.o;
      document.getElementById('pv-expanded').textContent = `${pvState.h * 100} + ${pvState.t * 10} + ${pvState.o} = ${total}`;

      const vis = document.getElementById('pv-blocks-visual');
      let html = '';
      for (let i = 0; i < pvState.h; i++) html += '<span class="w-5 h-5 bg-indigo-500 border border-indigo-700 rounded-sm inline-block" title="100"></span>';
      for (let i = 0; i < pvState.t; i++) html += '<span class="w-1.5 h-5 bg-teal-500 border border-teal-700 rounded-sm inline-block" title="10"></span>';
      for (let i = 0; i < pvState.o; i++) html += '<span class="w-1.5 h-1.5 bg-amber-500 border border-amber-700 rounded-full inline-block" title="1"></span>';
      vis.innerHTML = html || '<span class="text-slate-400 text-[11px]">0 blocks</span>';
    }

    let coinCents = 0, coinGoal = 63, coinList = [], coinRewardClaimed = false;
    const coinGoals = [41, 63, 78, 85, 92, 115];
    function addCoin(val, label) { coinCents += val; coinList.push(label); updateCoinUI(); }
    function resetCoins() { coinCents = 0; coinList = []; coinRewardClaimed = false; updateCoinUI(); }
    function newCoinChallenge() {
      coinGoal = coinGoals[Math.floor(Math.random() * coinGoals.length)];
      document.getElementById('coin-goal-label').textContent = `Make ${coinGoal}¢ ($${(coinGoal / 100).toFixed(2)})`;
      resetCoins();
    }
    function updateCoinUI() {
      const badge = document.getElementById('coin-status-badge');
      const tray = document.getElementById('coin-tray');
      const dollars = (coinCents / 100).toFixed(2);
      if (coinCents === coinGoal) {
        badge.className = 'text-xs font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800';
        badge.textContent = `🎉 Exact Match! ${coinCents}¢ ($${dollars})`;
        if (!coinRewardClaimed) { coinRewardClaimed = true; awardStars(2, 'Coin Jar Match!'); }
      } else if (coinCents > coinGoal) {
        badge.className = 'text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800';
        badge.textContent = `Too high: ${coinCents}¢ ($${dollars})`;
      } else {
        badge.className = 'text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700';
        badge.textContent = `Jar: ${coinCents}¢ ($${dollars})`;
      }
      tray.innerHTML = coinList.length
        ? coinList.map(c => `<span class="px-1.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 font-bold text-amber-900">${c}</span>`).join('')
        : '<span class="text-slate-400 italic">Tap coins below to drop into jar...</span>';
    }

    const unitItems = [
      { text: '🚗 The drive from Arlington Heights to Brookfield Zoo', ans: 'miles', why: 'Long road trips between towns are measured in miles!' },
      { text: '✏️ The length of a brand new pencil', ans: 'inches', why: 'Small objects shorter than a ruler are measured in inches!' },
      { text: '🏫 The width of Saanvi’s classroom', ans: 'feet', why: 'Room sizes are best measured in feet (or yards)!' },
      { text: '✈️ How far an airplane flies on vacation', ans: 'miles', why: 'Hundreds of miles!' }
    ];
    let unitIdx = 0, unitSolved = false;
    function nextUnitQuestion() {
      unitIdx = (unitIdx + 1) % unitItems.length;
      unitSolved = false;
      document.getElementById('unit-prompt').textContent = unitItems[unitIdx].text;
      const fb = document.getElementById('unit-feedback');
      fb.textContent = 'Tap a unit above to test your answer!';
      fb.className = 'mt-2.5 text-xs font-semibold text-slate-600';
    }
    function checkUnit(choice) {
      const item = unitItems[unitIdx];
      const fb = document.getElementById('unit-feedback');
      if (choice === item.ans) {
        fb.className = 'mt-2.5 text-xs font-bold text-emerald-700';
        fb.textContent = `✅ Correct! ${item.why}`;
        if (!unitSolved) { unitSolved = true; awardStars(1, 'Unit Picker Correct!'); }
      } else {
        fb.className = 'mt-2.5 text-xs font-bold text-rose-700';
        fb.textContent = `❌ Not quite—think about how big that is! Try again.`;
      }
    }

    let clockMinutesTotal = 4 * 60 + 45;
    function renderClock() {
      const hrs24 = Math.floor(clockMinutesTotal / 60) % 12;
      const displayHr = hrs24 === 0 ? 12 : hrs24;
      const mins = clockMinutesTotal % 60;
      document.getElementById('clock-digital-readout').textContent = `${displayHr}:${mins.toString().padStart(2, '0')}`;
      const minRad = (((mins / 60) * 360 - 90) * Math.PI) / 180;
      const hrRad = ((((hrs24 + mins / 60) / 12) * 360 - 90) * Math.PI) / 180;
      document.getElementById('clock-min-hand').setAttribute('x2', 90 + 54 * Math.cos(minRad));
      document.getElementById('clock-min-hand').setAttribute('y2', 90 + 54 * Math.sin(minRad));
      document.getElementById('clock-hour-hand').setAttribute('x2', 90 + 36 * Math.cos(hrRad));
      document.getElementById('clock-hour-hand').setAttribute('y2', 90 + 36 * Math.sin(hrRad));
    }
    function stepClock(d) { clockMinutesTotal = (clockMinutesTotal + d) % 720; renderClock(); }
    function randomClock() { clockMinutesTotal = Math.floor(Math.random() * 12) * 60 + Math.floor(Math.random() * 12) * 5; renderClock(); }

    function selectBar(pet, count) {
      document.getElementById('graph-readout').innerHTML =
        `<strong>Selected ${pet}:</strong> <span class="text-indigo-700 font-bold">${count} votes</span> &bull; Dogs (11) has <strong>${11 - count}</strong> more votes than ${pet}.`;
    }

    let arrRows = 3, arrCols = 4;
    function updateArray(r, c) {
      if (r !== null) arrRows = parseInt(r, 10);
      if (c !== null) arrCols = parseInt(c, 10);
      document.getElementById('arr-r-val').textContent = arrRows;
      document.getElementById('arr-c-val').textContent = arrCols;
      const container = document.getElementById('array-visual-grid');
      let html = '';
      for (let i = 0; i < arrRows; i++) {
        html += '<div class="flex gap-1.5">';
        for (let j = 0; j < arrCols; j++) html += '<span class="w-4 h-4 rounded-full bg-teal-500 border border-teal-700 inline-block"></span>';
        html += '</div>';
      }
      container.innerHTML = html;
      const addParts = Array(arrRows).fill(arrCols).join(' + ');
      const total = arrRows * arrCols;
      document.getElementById('array-equation').innerHTML = `Addition: ${addParts} = ${total} &nbsp;|&nbsp; Array: ${arrRows} &times; ${arrCols} = ${total}`;
    }

    let pizzaTotal = 4, pizzaShaded = [true, false, false, false];
    function setPizzaSlices(n) { pizzaTotal = n; pizzaShaded = Array(n).fill(false); pizzaShaded[0] = true; renderPizza(); }
    function toggleSlice(idx) { pizzaShaded[idx] = !pizzaShaded[idx]; renderPizza(); }
    function renderPizza() {
      const svg = document.getElementById('pizza-svg');
      const cx = 60, cy = 60, r = 50;
      let paths = '';
      for (let i = 0; i < pizzaTotal; i++) {
        const a1 = (i / pizzaTotal) * 2 * Math.PI - Math.PI / 2;
        const a2 = ((i + 1) / pizzaTotal) * 2 * Math.PI - Math.PI / 2;
        const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
        const x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
        const fill = pizzaShaded[i] ? '#f59e0b' : '#fef3c7';
        paths += `<path onclick="toggleSlice(${i})" d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z" fill="${fill}" stroke="#92400e" stroke-width="2"/>`;
      }
      svg.innerHTML = paths;
      const count = pizzaShaded.filter(Boolean).length;
      const names = { 2: 'Halves', 3: 'Thirds', 4: 'Fourths' };
      document.getElementById('pizza-readout').textContent = `Shaded: ${count}/${pizzaTotal} (${names[pizzaTotal]})`;
    }

