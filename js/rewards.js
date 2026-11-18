    // =========================================================================
    // 1. GAMIFIED REWARDS, STARS & TROPHY SHOP SYSTEM
    // =========================================================================
    const AVATARS = ['🦄', '🦊', '🦉', '🐬', '🚀', '🦁', '🐼', '🦋'];

    const TROPHY_BADGES = [
      { id: 'b_first', icon: '🌟', title: 'First Star Spark', desc: 'Earn your very first star!', check: r => r.lifetimeStars >= 1 },
      { id: 'b_math', icon: '🧮', title: 'Math Wizard', desc: 'Complete 10+ Math questions or labs', check: r => r.lifetimeStars >= 10 },
      { id: 'b_science', icon: '🔬', title: 'Junior Scientist', desc: 'Explore 6+ Science facts or labs', check: r => r.factsRead >= 6 },
      { id: 'b_chess', icon: '♞', title: 'Chess Tactician', desc: 'Unlock Stage 3+ in Chess Academy', check: (r, a) => a.chessUnlocked >= 3 },
      { id: 'b_sudoku', icon: '🔢', title: 'Sudoku Detective', desc: 'Unlock Stage 3+ in Sudoku Academy', check: (r, a) => a.sudokuUnlocked >= 3 },
      { id: 'b_scholar', icon: '👑', title: 'Super Scholar', desc: 'Collect 50+ lifetime Stars!', check: r => r.lifetimeStars >= 50 }
    ];

    const REWARD_COUPONS = [
      { id: 'c_story', icon: '📖', title: '15 Min Extra Bedtime Story', cost: 15 },
      { id: 'c_game', icon: '🎲', title: 'Pick Family Board Game', cost: 25 },
      { id: 'c_treat', icon: '🍦', title: 'Special Ice Cream Topping', cost: 35 },
      { id: 'c_movie', icon: '🎬', title: 'Choose Family Movie Night', cost: 50 }
    ];

    function getRewardsState() {
      try {
        const saved = JSON.parse(localStorage.getItem('saanvi_rewards_v1') || 'null');
        if (saved) return saved;
      } catch (e) {}
      return { stars: 5, lifetimeStars: 5, avatar: '🦄', factsRead: 0, redeemed: [] };
    }

    function saveRewardsState(st) {
      try { localStorage.setItem('saanvi_rewards_v1', JSON.stringify(st)); } catch (e) {}
      updateRewardsHeader();
    }

    function awardStars(amount, reason) {
      const st = getRewardsState();
      st.stars += amount;
      st.lifetimeStars += amount;
      saveRewardsState(st);
      showRewardToast(`+${amount} ⭐ ${reason}`);
    }

    function showRewardToast(msg) {
      const container = document.getElementById('reward-toast-container');
      const div = document.createElement('div');
      div.className = 'toast-anim bg-slate-900 text-amber-300 border-2 border-amber-400 px-4 py-2.5 rounded-2xl shadow-xl text-xs sm:text-sm font-extrabold flex items-center gap-2';
      div.textContent = msg;
      container.appendChild(div);
      setTimeout(() => div.remove(), 3000);
    }

    function updateRewardsHeader() {
      const st = getRewardsState();
      document.getElementById('header-star-count').textContent = `${st.stars} ⭐`;
      document.getElementById('header-avatar-badge').textContent = st.avatar;
    }

    function selectAvatar(emoji) {
      const st = getRewardsState();
      st.avatar = emoji;
      saveRewardsState(st);
      renderRewardsModalContent();
    }

    function redeemCoupon(couponId) {
      const coupon = REWARD_COUPONS.find(c => c.id === couponId);
      const st = getRewardsState();
      if (!coupon || st.stars < coupon.cost) return;
      st.stars -= coupon.cost;
      st.redeemed.push({ title: coupon.title, date: getTodayDateKey() });
      saveRewardsState(st);
      showRewardToast(`🎁 Redeemed: ${coupon.title}! Show a parent!`);
      renderRewardsModalContent();
    }

    function openRewardsModal() {
      renderRewardsModalContent();
      document.getElementById('rewards-modal').classList.remove('hidden');
    }

    function closeRewardsModal() {
      document.getElementById('rewards-modal').classList.add('hidden');
    }

    function renderRewardsModalContent() {
      const st = getRewardsState();
      const acad = getAcademyProgress();
      document.getElementById('reward-modal-avatar').textContent = st.avatar;
      document.getElementById('reward-stars-balance').textContent = `${st.stars} ⭐`;
      document.getElementById('reward-stars-total').textContent = `${st.lifetimeStars} ⭐`;

      document.getElementById('avatar-picker-list').innerHTML = AVATARS.map(av => `
        <button onclick="selectAvatar('${av}')" class="w-10 h-10 rounded-xl text-xl flex items-center justify-center border-2 transition ${st.avatar === av ? 'border-amber-500 bg-amber-100 scale-105' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'}">
          ${av}
        </button>
      `).join('');

      document.getElementById('trophy-badges-grid').innerHTML = TROPHY_BADGES.map(b => {
        const unlocked = b.check(st, acad);
        return `
          <div class="p-3 rounded-2xl border ${unlocked ? 'bg-amber-50 border-amber-300' : 'bg-slate-50 border-slate-200 opacity-60'} flex items-center gap-2.5">
            <span class="text-2xl">${unlocked ? b.icon : '🔒'}</span>
            <div>
              <div class="text-xs font-extrabold text-slate-900">${b.title}</div>
              <div class="text-[11px] text-slate-600">${b.desc}</div>
            </div>
          </div>
        `;
      }).join('');

      document.getElementById('reward-coupons-grid').innerHTML = REWARD_COUPONS.map(c => {
        const canBuy = st.stars >= c.cost;
        return `
          <div class="p-3 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-2">
            <div class="flex items-center gap-2.5">
              <span class="text-2xl">${c.icon}</span>
              <div>
                <div class="text-xs font-extrabold text-slate-900">${c.title}</div>
                <div class="text-[11px] font-bold text-amber-700">Cost: ${c.cost} ⭐</div>
              </div>
            </div>
            <button onclick="redeemCoupon('${c.id}')" ${canBuy ? '' : 'disabled'} class="px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${canBuy ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}">
              Redeem
            </button>
          </div>
        `;
      }).join('');
    }

    // =========================================================================
