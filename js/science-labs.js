    const SCIENCE_FACTS = [
      { cat: 'Space', icon: '🪐', text: 'One day on Venus is longer than one whole year on Venus! Venus spins so slowly that it takes 243 Earth days to rotate once, while orbiting the Sun in 225 Earth days.' },
      { cat: 'Space', icon: '🪐', text: 'Jupiter is so massive that more than 1,300 Earths could fit inside it! Its Great Red Spot is a giant storm that has been spinning for over 300 years.' },
      { cat: 'Space', icon: '🪐', text: 'There is no wind or rain on the Moon, which means astronauts’ footprints from 1969 will stay on the Moon’s dusty surface for millions of years!' },
      { cat: 'Space', icon: '🪐', text: 'Light from the Sun takes about 8 minutes and 20 seconds to travel 93 million miles across space to reach Earth.' },
      { cat: 'Space', icon: '🪐', text: 'Saturn is the second-largest planet, yet it is made mostly of light gases—if you had a giant bathtub big enough, Saturn would float!' },
      { cat: 'Animals', icon: '🐾', text: 'Sea otters hold hands while sleeping on their backs in ocean kelp forests so the waves don’t drift them apart!' },
      { cat: 'Animals', icon: '🐾', text: 'An octopus has THREE hearts, NINE brains (one central brain plus one mini-brain in each of its 8 arms), and blue blood!' },
      { cat: 'Animals', icon: '🐾', text: 'Honeybees communicate by doing a figure-eight "waggle dance" that tells other bees the exact angle and distance to blooming flowers.' },
      { cat: 'Animals', icon: '🐾', text: 'A group of flamingos is called a "flamboyance"—and flamingos are born gray, turning pink only from eating shrimp and algae!' },
      { cat: 'Animals', icon: '🐾', text: 'Hummingbirds are the only birds in the world that can fly backward, upside down, and hover in mid-air like a helicopter.' },
      { cat: 'Body', icon: '🧠', text: 'Babies are born with about 300 bones, while adults have 206—because many smaller bones fuse together as you grow!' },
      { cat: 'Body', icon: '🧠', text: 'Your heart beats about 100,000 times every single day, pumping blood through 60,000 miles of blood vessels.' },
      { cat: 'Body', icon: '🧠', text: 'Just like fingerprints, every human being has a completely unique tongue print!' },
      { cat: 'Body', icon: '🧠', text: 'Your brain uses about 20% of all the oxygen and energy in your body—even while you are fast asleep dreaming!' },
      { cat: 'Earth', icon: '🌋', text: 'A bolt of lightning is five times hotter than the surface of the Sun—reaching temperatures of 50,000°F in a split second!' },
      { cat: 'Earth', icon: '🌋', text: 'Every snowflake has 6 sides (a hexagon), and no two snowflakes falling from the sky are ever shaped identically.' },
      { cat: 'Earth', icon: '🌋', text: 'About 71% of Earth’s surface is covered by oceans, and the deepest part—the Mariana Trench—is deeper than Mount Everest is tall!' },
      { cat: 'Earth', icon: '🌋', text: 'Trees talk and share nutrients underground using a giant network of helpful fungi roots scientists call the "Wood Wide Web."' },
      { cat: 'Earth', icon: '🌋', text: 'Sound travels 4 times faster through water than through air, which is why whales can hear each other singing hundreds of miles away.' },
      { cat: 'Physics', icon: '⚡', text: 'Water is the only common substance on Earth found naturally in all three states of matter: solid ice, liquid water, and invisible water vapor gas.' },
      { cat: 'Physics', icon: '⚡', text: 'Hot water actually expands and takes up slightly more space than cold water, and ice floats because frozen water is less dense than liquid water.' },
      { cat: 'Physics', icon: '⚡', text: 'Earth itself acts like a giant bar magnet with a North and South magnetic pole—that is why a compass needle always points North!' },
      { cat: 'Physics', icon: '⚡', text: 'If you drop a feather and a hammer on the Moon (where there is no air resistance), both hit the ground at the exact same time!' },
      { cat: 'Physics', icon: '⚡', text: 'Sunlight looks white, but it is actually made of all 7 colors of the rainbow (ROYGBIV) mixed together!' }
    ];

    let activeFactCat = 'ALL', currentFactIndex = 0;
    function filterScienceFacts(cat) {
      activeFactCat = cat; currentFactIndex = 0;
      document.querySelectorAll('.sf-pill').forEach(btn => {
        const isMatch = btn.getAttribute('onclick').includes(`'${cat}'`);
        btn.className = isMatch
          ? 'sf-pill px-3 py-1 rounded-lg font-extrabold bg-amber-400 text-slate-950'
          : 'sf-pill px-2.5 py-1 rounded-lg font-semibold bg-white/10 hover:bg-white/20 text-white';
      });
      renderScienceFact();
    }
    function getFilteredFacts() { return activeFactCat === 'ALL' ? SCIENCE_FACTS : SCIENCE_FACTS.filter(f => f.cat === activeFactCat); }
    function renderScienceFact() {
      const list = getFilteredFacts();
      const fact = list[currentFactIndex % list.length];
      document.getElementById('fact-counter-badge').textContent = `Fact ${(currentFactIndex % list.length) + 1} of ${list.length}`;
      document.getElementById('science-fact-tag').textContent = `${fact.icon} ${fact.cat}`;
      document.getElementById('science-fact-text').textContent = fact.text;
    }
    function nextScienceFact() {
      const list = getFilteredFacts();
      currentFactIndex = (currentFactIndex + 1) % list.length;
      renderScienceFact();
      const st = getRewardsState();
      st.factsRead = (st.factsRead || 0) + 1;
      saveRewardsState(st);
      if (st.factsRead % 3 === 0) awardStars(1, 'Explored 3 Science Facts!');
    }
    function randomScienceFact() {
      const list = getFilteredFacts();
      currentFactIndex = Math.floor(Math.random() * list.length);
      renderScienceFact();
    }

    const PLANET_INFO = {
      Mercury: { title: '☿️ Mercury — Closest to the Sun', type: 'Inner Rocky Planet', desc: 'The smallest planet in our solar system! Mercury has no atmosphere to trap heat, so it is scorching hot by day and freezing cold at night.' },
      Venus: { title: '♀️ Venus — Hottest Planet', type: 'Inner Rocky Planet', desc: 'Covered in thick clouds of carbon dioxide that trap heat like a greenhouse, making Venus even hotter than Mercury!' },
      Earth: { title: '🌍 Earth — Our Ocean Home', type: 'Inner Rocky Planet', desc: 'The only known planet with liquid water oceans on its surface and oxygen-rich air supporting millions of living species.' },
      Mars: { title: '♂️ Mars — The Red Planet', type: 'Inner Rocky Planet', desc: 'Rusty iron dust gives Mars its red color. It is home to Olympus Mons, the largest volcano in the entire solar system!' },
      Jupiter: { title: '♃ Jupiter — King of Planets', type: 'Outer Gas Giant', desc: 'The largest planet in our solar system with 95+ moons and a giant spinning storm called the Great Red Spot.' },
      Saturn: { title: '🪐 Saturn — The Ringed Gas Giant', type: 'Outer Gas Giant', desc: 'Famous for its dazzling rings made of billions of chunks of ice and rock! Saturn is so light it could float in a giant bathtub of water.' },
      Uranus: { title: '♅ Uranus — The Sideways Ice Giant', type: 'Outer Ice Giant', desc: 'Methane gas gives Uranus its pale blue-green color, and it rolls around the Sun tilted completely on its side!' },
      Neptune: { title: '♆ Neptune — The Windy Blue Giant', type: 'Outer Ice Giant', desc: 'The farthest planet from the Sun, swept by supersonic winds blowing over 1,200 miles per hour!' }
    };
    function selectPlanet(name) {
      const p = PLANET_INFO[name];
      document.getElementById('planet-info-card').innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-extrabold text-amber-300 text-sm">${p.title}</span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-white/15">${p.type}</span>
        </div>
        <p class="text-slate-200">${p.desc}</p>
      `;
    }
    function selectWaterStage(stage, title, desc) {
      document.getElementById('water-stage-box').innerHTML = `
        <div class="font-extrabold text-sky-900 text-sm mb-1">${title}</div>
        <p class="text-slate-700">${desc}</p>
      `;
    }
    function setMatterTemp(tempVal) {
      const t = parseInt(tempVal, 10);
      document.getElementById('matter-slider').value = t;
      const svg = document.getElementById('matter-svg');
      const title = document.getElementById('matter-state-title');
      const desc = document.getElementById('matter-state-desc');
      const readout = document.getElementById('temp-readout');
      if (t <= 32) {
        readout.textContent = `${t}°F (Freezing)`; title.textContent = '🧊 SOLID (Ice Cube)'; title.className = 'text-sm font-extrabold text-sky-800';
        desc.textContent = 'Particles are packed tightly together in neat rows and keep a fixed shape.';
        let dots = '';
        for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) dots += `<circle cx="${32 + c * 15}" cy="${28 + r * 15}" r="5.5" fill="#0284c7"/>`;
        svg.innerHTML = dots;
      } else if (t < 212) {
        readout.textContent = `${t}°F (Room / Warm)`; title.textContent = '💧 LIQUID (Water)'; title.className = 'text-sm font-extrabold text-teal-800';
        desc.textContent = 'Particles stay close together but slide past each other to take the container’s shape.';
        const coords = [[22,68],[38,72],[54,66],[70,73],[86,68],[28,54],[46,56],[64,53],[80,57],[36,42],[58,41]];
        svg.innerHTML = coords.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.5" fill="#0d9488"/>`).join('');
      } else {
        readout.textContent = `${t}°F (Boiling!)`; title.textContent = '☁️ GAS (Water Vapor / Steam)'; title.className = 'text-sm font-extrabold text-rose-700';
        desc.textContent = 'Particles have lots of energy and bounce fast and far apart to fill all available space!';
        const coords = [[18,20],[88,18],[52,32],[25,65],[82,68],[48,74],[72,44],[20,42]];
        svg.innerHTML = coords.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#e11d48"/>`).join('');
      }
    }
    const plantNeeds = { sun: true, water: true };
    function togglePlantNeed(type) {
      plantNeeds[type] = !plantNeeds[type];
      const btnSun = document.getElementById('btn-plant-sun'), btnWater = document.getElementById('btn-plant-water');
      btnSun.textContent = plantNeeds.sun ? '☀️ Sun: ON' : '☁️ Sun: OFF';
      btnSun.className = plantNeeds.sun ? 'px-2.5 py-1 rounded bg-amber-400 text-amber-950 font-bold' : 'px-2.5 py-1 rounded bg-slate-200 text-slate-600 font-bold';
      btnWater.textContent = plantNeeds.water ? '💧 Water: ON' : '🏜️ Water: OFF';
      btnWater.className = plantNeeds.water ? 'px-2.5 py-1 rounded bg-sky-500 text-white font-bold' : 'px-2.5 py-1 rounded bg-slate-200 text-slate-600 font-bold';
      renderPlant();
    }
    function renderPlant() {
      const svg = document.getElementById('plant-svg');
      const healthy = plantNeeds.sun && plantNeeds.water;
      svg.innerHTML = `
        <rect x="0" y="108" width="130" height="37" fill="#92400e"/>
        ${plantNeeds.sun ? '<circle cx="105" cy="24" r="14" fill="#facc15"/>' : ''}
        <path d="M65 108 L52 128 M65 108 L65 134 M65 108 L78 128" stroke="#fde68a" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="65" y1="108" x2="65" y2="${healthy ? 45 : 80}" stroke="${healthy ? '#16a34a' : '#ca8a04'}" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="50" cy="${healthy ? 78 : 92}" rx="12" ry="6" fill="${healthy ? '#22c55e' : '#eab308'}" transform="rotate(-20 50 78)"/>
        <ellipse cx="80" cy="${healthy ? 72 : 90}" rx="12" ry="6" fill="${healthy ? '#22c55e' : '#eab308'}" transform="rotate(20 80 72)"/>
        ${healthy ? `<circle cx="65" cy="40" r="14" fill="#f43f5e"/><circle cx="65" cy="40" r="6" fill="#facc15"/>`
          : `<text x="65" y="30" text-anchor="middle" font-size="9" font-weight="bold" fill="#92400e">Needs Sun & Water!</text>`}
      `;
    }
    let magnetFlipped = false;
    function flipMagnet() {
      magnetFlipped = !magnetFlipped;
      const m2 = document.getElementById('magnet-2'), arrow = document.getElementById('magnet-arrow');
      if (magnetFlipped) {
        m2.innerHTML = '<span class="bg-blue-600 px-2.5 py-1.5">S</span><span class="bg-rose-600 px-2.5 py-1.5">N</span>';
        arrow.textContent = '← REPEL →'; arrow.className = 'text-xs font-extrabold text-rose-600';
      } else {
        m2.innerHTML = '<span class="bg-rose-600 px-2.5 py-1.5">N</span><span class="bg-blue-600 px-2.5 py-1.5">S</span>';
        arrow.textContent = '→ ATTRACT ←'; arrow.className = 'text-xs font-extrabold text-emerald-700';
      }
    }
    function setMoonPhase(name, icon, desc) {
      document.getElementById('moon-readout').innerHTML = `<div class="font-extrabold text-amber-300">${icon} ${name}</div><div class="text-[11px] text-slate-300">${desc}</div>`;
    }

