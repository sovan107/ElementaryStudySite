    // 2. CONCEPT DIRECTORY INDEX (Landing Page TOC & Search)
    // =========================================================================
    const CONCEPT_INDEX = [
      { id: 'concept-m9', subject: 'math', code: 'M9', title: 'Circles: Center, Radius, Diameter & Chord', tag: 'New • Circle Lab' },
      { id: 'concept-m10', subject: 'math', code: 'M10', title: 'Number Patterns, Series & Machines', tag: 'New • Series Lab' },
      { id: 'concept-ba', subject: 'math', code: 'BA', title: 'Beast Academy 1B, 1C & 1D Hub', tag: 'New • AoPS Labs' },
      { id: 'concept-m1', subject: 'math', code: 'M1', title: 'Place Value & Base-10 Blocks', tag: 'Interactive Builder' },
      { id: 'concept-m2', subject: 'math', code: 'M2', title: '2-Digit Regrouping / Borrowing', tag: 'Step-by-Step' },
      { id: 'concept-m3', subject: 'math', code: 'M3', title: 'Coins & $1.00 Equivalence', tag: 'Coin Jar Lab' },
      { id: 'concept-m4', subject: 'math', code: 'M4', title: 'Inches, Feet, Yards & Miles', tag: 'Unit Picker' },
      { id: 'concept-m5', subject: 'math', code: 'M5', title: 'Analog Clock to 5 Minutes', tag: 'Live Clock' },
      { id: 'concept-m6', subject: 'math', code: 'M6', title: 'Bar Graphs & Comparisons', tag: 'Interactive Chart' },
      { id: 'concept-m7', subject: 'math', code: 'M7', title: 'Early Multiplication Arrays', tag: 'Array Builder' },
      { id: 'concept-m8', subject: 'math', code: 'M8', title: 'Fractions & 3D Shape Attributes', tag: 'Pizza Slicer' },

      { id: 'concept-e7', subject: 'english', code: 'E7', title: 'Word Patterns, Analogies & Series', tag: 'New • Series Lab' },
      { id: 'concept-e1', subject: 'english', code: 'E1', title: 'Reading Detective: Inferencing', tag: 'Clue Matcher' },
      { id: 'concept-e2', subject: 'english', code: 'E2', title: 'Main Idea Tabletop & Details', tag: 'Visual Diagram' },
      { id: 'concept-e3', subject: 'english', code: 'E3', title: 'Word Surgery: Prefixes/Suffixes', tag: 'Word Lab' },
      { id: 'concept-e4', subject: 'english', code: 'E4', title: 'Multiple-Meaning Words', tag: 'Context Cards' },
      { id: 'concept-e5', subject: 'english', code: 'E5', title: 'Syllable Chunking & Vowel Teams', tag: 'Syllable Clapper' },
      { id: 'concept-e6', subject: 'english', code: 'E6', title: 'Grammar, Commas & Homophones', tag: 'Sentence Map' },

      { id: 'concept-s1', subject: 'science', code: 'S1', title: 'States of Matter (Solid/Liquid/Gas)', tag: 'Temp Simulator' },
      { id: 'concept-s2', subject: 'science', code: 'S2', title: 'Solar System & 8 Planets Explorer', tag: 'Planet Cards' },
      { id: 'concept-s3', subject: 'science', code: 'S3', title: 'Plant Life Cycle & Parts', tag: 'Growth Lab' },
      { id: 'concept-s4', subject: 'science', code: 'S4', title: 'The Water Cycle Explorer', tag: '4-Stage Lab' },
      { id: 'concept-s5', subject: 'science', code: 'S5', title: 'Forces & Magnetic Poles', tag: 'Magnet Tester' },
      { id: 'concept-s6', subject: 'science', code: 'S6', title: 'Ecosystem Food Chains', tag: 'Visual Guide' },
      { id: 'concept-s7', subject: 'science', code: 'S7', title: 'Earth Rotation & Moon Phases', tag: 'Moon Explorer' }
    ];

    function renderTableOfContents() {
      const grid = document.getElementById('toc-directory-grid');
      const subjects = [
        { key: 'math', title: '🔢 Mathematics & Beast 1B–1D', subtitle: '11 Visual Labs + Circles + AoPS (Target RIT 203+)', color: 'teal', headerBg: 'bg-teal-600' },
        { key: 'english', title: '📚 English, Series & Reading', subtitle: '7 Visual Labs (Target RIT 189+)', color: 'indigo', headerBg: 'bg-indigo-600' },
        { key: 'science', title: '🔬 Science Discovery', subtitle: '7 Interactive Labs + 24 Facts', color: 'emerald', headerBg: 'bg-emerald-600' }
      ];

      grid.innerHTML = subjects.map(sub => {
        const items = CONCEPT_INDEX.filter(c => c.subject === sub.key);
        const listHtml = items.map(item => `
          <button onclick="jumpToConcept('${item.subject}', '${item.id}')" class="w-full text-left px-3 py-2 rounded-xl bg-slate-50 hover:bg-${sub.color}-50 border border-slate-200 hover:border-${sub.color}-300 transition flex items-center justify-between gap-2 group">
            <div class="flex items-center gap-2 min-w-0">
              <span class="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-extrabold text-${sub.color}-700 shrink-0">${item.code}</span>
              <span class="text-xs font-bold text-slate-800 truncate">${item.title}</span>
            </div>
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200 shrink-0">${item.tag}</span>
          </button>
        `).join('');

        return `
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div class="${sub.headerBg} px-4 py-3 text-white flex items-center justify-between">
              <div>
                <h3 class="font-extrabold text-base">${sub.title}</h3>
                <p class="text-[11px] text-white/85">${sub.subtitle}</p>
              </div>
              <button onclick="switchTab('${sub.key}')" class="text-xs font-bold bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-lg transition">Open All</button>
            </div>
            <div class="p-3.5 space-y-2 flex-1">${listHtml}</div>
          </div>
        `;
      }).join('');
    }

    let parentSectionUnlocked = false;

    function switchTab(tabName) {
      if (tabName === 'parent' && !parentSectionUnlocked) {
        requestParentAuth(
          '🔒 Parent Area Locked',
          'Enter the parent password to view the MAP Test Syllabus & Beast Academy guide.',
          () => {
            parentSectionUnlocked = true;
            switchTab('parent');
          }
        );
        return;
      }
      document.querySelectorAll('.tab-panel').forEach(el => el.classList.add('hidden'));
      const target = document.getElementById(`view-${tabName}`);
      if (target) target.classList.remove('hidden');

      const activeStyles = {
        home: 'bg-slate-900 text-white',
        scores: 'bg-sky-600 text-white',
        math: 'bg-teal-600 text-white',
        english: 'bg-indigo-600 text-white',
        science: 'bg-emerald-600 text-white',
        academy: 'bg-purple-600 text-white',
        qbank: 'bg-amber-500 text-white',
        parent: 'bg-rose-600 text-white'
      };
      const idleStyles = {
        home: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
        scores: 'bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100',
        math: 'bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100',
        english: 'bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100',
        science: 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100',
        academy: 'bg-purple-50 text-purple-800 border border-purple-200 hover:bg-purple-100',
        qbank: 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100',
        typing: 'bg-cyan-50 text-cyan-800 border border-cyan-200 hover:bg-cyan-100',
        parent: 'bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-100'
      };

      Object.keys(idleStyles).forEach(key => {
        const btn = document.getElementById(`tab-${key}`);
        if (btn) {
          btn.className = `nav-tab px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${key === tabName ? activeStyles[key] : idleStyles[key]}`;
        }
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (tabName === 'typing') {
        setTimeout(() => {
          const input = document.getElementById('typing-input');
          if (input) input.focus();
        }, 120);
      }
    }

    function jumpToConcept(subject, conceptId) {
      switchTab(subject);
      setTimeout(() => {
        const card = document.getElementById(conceptId);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.remove('highlight-pulse');
          void card.offsetWidth;
          card.classList.add('highlight-pulse');
        }
      }, 60);
    }

    function handleGlobalSearch(query) {
      const bar = document.getElementById('search-results-bar');
      const list = document.getElementById('search-results-list');
      const q = query.trim().toLowerCase();
      if (!q) {
        bar.classList.add('hidden');
        return;
      }
      const matches = CONCEPT_INDEX.filter(c =>
        c.title.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
      );
      bar.classList.remove('hidden');
      let html = matches.map(m => `
        <button onclick="jumpToConcept('${m.subject}', '${m.id}')" class="px-2.5 py-1 rounded-md bg-white border border-indigo-200 hover:bg-indigo-600 hover:text-white font-semibold transition">
          ${m.code}: ${m.title}
        </button>
      `).join('');
      html += `
        <button onclick="searchInQBank('${q.replace(/'/g, '')}')" class="px-2.5 py-1 rounded-md bg-amber-100 border border-amber-300 text-amber-950 hover:bg-amber-500 hover:text-white font-bold transition">
          🔍 Search "${query}" in ${Q_BANK_DATA.length} Questions &rarr;
        </button>
      `;
      list.innerHTML = html;
    }

    function searchInQBank(term) {
      switchTab('qbank');
      document.getElementById('qbank-search-input').value = term;
      filterQBank('ALL');
    }

    // =========================================================================
    // =========================================================================
