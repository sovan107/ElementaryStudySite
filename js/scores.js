    // 3. SCORE TRENDS & SEPARATE SVG CHARTS
    // =========================================================================
    const DEFAULT_SCORES = [
      { term: 'FA25', grade: 'K', mathRit: 165, mathDist: 149, mathNorm: 141, mathPct: '98th', readRit: 157, readDist: 144, readNorm: 138, readPct: '98th', lexile: '—' },
      { term: 'WI26', grade: 'K', mathRit: 170, mathDist: 158, mathNorm: 148, mathPct: '96th', readRit: 169, readDist: 154, readNorm: 144, readPct: '99th', lexile: 'BR10L–140L' },
      { term: 'SP26', grade: 'K', mathRit: 181, mathDist: 168, mathNorm: 157, mathPct: '97th', readRit: 168, readDist: 162, readNorm: 151, readPct: '91st', lexile: 'BR25L–125L' },
      { term: 'FA26', grade: '1', mathRit: 191, mathDist: 168, mathNorm: 159, mathPct: '99th', readRit: 177, readDist: 164, readNorm: 155, readPct: '96th', lexile: '145L–295L' }
    ];

    function getScores() {
      try {
        const saved = localStorage.getItem('saanvi_map_scores_v1');
        if (saved) return JSON.parse(saved);
      } catch (e) {}
      return [...DEFAULT_SCORES];
    }

    function saveScores(list) {
      try { localStorage.setItem('saanvi_map_scores_v1', JSON.stringify(list)); } catch (e) {}
    }

    function addNewScoreEntry(e) {
      e.preventDefault();
      const term = document.getElementById('inp-term').value.trim().toUpperCase();
      const grade = document.getElementById('inp-grade').value.trim();
      const mathRit = parseInt(document.getElementById('inp-math-rit').value, 10);
      const mathPct = document.getElementById('inp-math-pct').value.trim();
      const readRit = parseInt(document.getElementById('inp-read-rit').value, 10);
      const readPct = document.getElementById('inp-read-pct').value.trim();
      const lexile = document.getElementById('inp-lexile').value.trim() || '—';

      const scores = getScores();
      scores.push({
        term, grade,
        mathRit, mathDist: null, mathNorm: null, mathPct,
        readRit, readDist: null, readNorm: null, readPct, lexile
      });
      saveScores(scores);
      e.target.reset();
      document.getElementById('inp-grade').value = '1';
      renderScoreSection();
    }

    function resetCustomScores() {
      saveScores([...DEFAULT_SCORES]);
      renderScoreSection();
    }

    function renderTrendChart(svgId, data, subjectKey, targetRit, colorHex) {
      const svg = document.getElementById(svgId);
      const points = [...data, { term: 'FA27*', isTarget: true, [subjectKey]: targetRit }];
      const W = 480, H = 230, padL = 42, padR = 26, padT = 22, padB = 34;
      const plotW = W - padL - padR;
      const plotH = H - padT - padB;
      const minY = 125, maxY = 215;

      const getX = idx => padL + (idx / Math.max(1, points.length - 1)) * plotW;
      const getY = val => padT + plotH - ((val - minY) / (maxY - minY)) * plotH;

      let out = '';
      [130, 150, 170, 190, 210].forEach(val => {
        const y = getY(val);
        out += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="#e2e8f0" stroke-width="1"/>`;
        out += `<text x="${padL - 6}" y="${y + 3}" text-anchor="end" font-size="9.5" fill="#64748b" font-weight="600">${val}</text>`;
      });

      const distKey = subjectKey === 'mathRit' ? 'mathDist' : 'readDist';
      const normKey = subjectKey === 'mathRit' ? 'mathNorm' : 'readNorm';
      const distPts = data.map((d, i) => d[distKey] ? `${getX(i)},${getY(d[distKey])}` : null).filter(Boolean);
      const normPts = data.map((d, i) => d[normKey] ? `${getX(i)},${getY(d[normKey])}` : null).filter(Boolean);

      if (normPts.length > 1) out += `<polyline fill="none" stroke="#94a3b8" stroke-width="2" points="${normPts.join(' ')}"/>`;
      if (distPts.length > 1) out += `<polyline fill="none" stroke="#f59e0b" stroke-width="2" points="${distPts.join(' ')}"/>`;

      const actualPts = data.map((d, i) => `${getX(i)},${getY(d[subjectKey])}`);
      out += `<polyline fill="none" stroke="${colorHex}" stroke-width="3" points="${actualPts.join(' ')}"/>`;

      const lastActualIdx = data.length - 1;
      const targetIdx = points.length - 1;
      out += `<line x1="${getX(lastActualIdx)}" y1="${getY(data[lastActualIdx][subjectKey])}" x2="${getX(targetIdx)}" y2="${getY(targetRit)}" stroke="${colorHex}" stroke-width="2.5" stroke-dasharray="5,4"/>`;

      points.forEach((p, idx) => {
        const x = getX(idx);
        const y = getY(p[subjectKey]);
        out += `<text x="${x}" y="${H - 10}" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">${p.term}</text>`;
        if (!p.isTarget && p[normKey]) out += `<circle cx="${x}" cy="${getY(p[normKey])}" r="3.5" fill="#94a3b8"/>`;
        if (!p.isTarget && p[distKey]) out += `<circle cx="${x}" cy="${getY(p[distKey])}" r="3.5" fill="#f59e0b"/>`;
        if (p.isTarget) {
          out += `<circle cx="${x}" cy="${y}" r="5.5" fill="#ffffff" stroke="${colorHex}" stroke-width="2.5" stroke-dasharray="2,1"/>`;
          out += `<text x="${x}" y="${y - 9}" text-anchor="middle" font-size="10.5" font-weight="800" fill="${colorHex}">${p[subjectKey]}*</text>`;
        } else {
          out += `<circle cx="${x}" cy="${y}" r="5" fill="${colorHex}"/>`;
          out += `<text x="${x}" y="${y - 9}" text-anchor="middle" font-size="10.5" font-weight="800" fill="${colorHex}">${p[subjectKey]}</text>`;
        }
      });

      svg.innerHTML = out;
    }

    function renderScoreSection() {
      const scores = getScores();
      renderTrendChart('math-trend-svg', scores, 'mathRit', 203, '#0d9488');
      renderTrendChart('reading-trend-svg', scores, 'readRit', 189, '#4f46e5');

      document.getElementById('math-score-tbody').innerHTML = scores.map(s => `
        <tr class="hover:bg-teal-50/40">
          <td class="p-2 font-bold">${s.term}</td>
          <td class="p-2">${s.grade}</td>
          <td class="p-2 font-extrabold text-teal-700">${s.mathRit}</td>
          <td class="p-2 text-slate-600">${s.mathDist ? `${s.mathDist} / ${s.mathNorm}` : 'Custom'}</td>
          <td class="p-2 font-bold">${s.mathPct}</td>
        </tr>
      `).join('') + `
        <tr class="bg-teal-50/60 italic text-teal-900">
          <td class="p-2 font-bold">FA27 Goal</td><td class="p-2">2</td><td class="p-2 font-extrabold">203</td><td class="p-2">—</td><td class="p-2">Target</td>
        </tr>
      `;

      document.getElementById('reading-score-tbody').innerHTML = scores.map(s => `
        <tr class="hover:bg-indigo-50/40">
          <td class="p-2 font-bold">${s.term}</td>
          <td class="p-2">${s.grade}</td>
          <td class="p-2 font-extrabold text-indigo-700">${s.readRit}</td>
          <td class="p-2 text-slate-600">${s.readDist ? `${s.readDist} / ${s.readNorm}` : 'Custom'}</td>
          <td class="p-2 font-bold">${s.readPct}</td>
          <td class="p-2 font-mono text-[11px]">${s.lexile}</td>
        </tr>
      `).join('') + `
        <tr class="bg-indigo-50/60 italic text-indigo-900">
          <td class="p-2 font-bold">FA27 Goal</td><td class="p-2">2</td><td class="p-2 font-extrabold">189</td><td class="p-2">—</td><td class="p-2">Target</td><td class="p-2">~300L+</td>
        </tr>
      `;
    }

    // =========================================================================
