    // =========================================================================
    // 7. INITIALIZATION ON PAGE LOAD
    // =========================================================================
    window.addEventListener('DOMContentLoaded', () => {
      startDailyCountdown();
      updateRewardsHeader();
      renderTableOfContents();
      renderScoreSection();
      updateCircleLab(4, 'radius');
      renderMathSeries();
      renderBAParity();
      renderBABackwards();
      renderBAMagic();
      renderCircleDiag();
      renderDiffPyr();
      renderXOut();
      renderEngSeries();
      changePV('h', 0);
      renderClock();
      updateArray(3, 4);
      renderPizza();
      renderScienceFact();
      setMatterTemp(20);
      renderPlant();
      renderAcademy();
      updateCompletedBadge();
      renderQBank(true);
    });
