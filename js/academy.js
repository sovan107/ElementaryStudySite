    // =========================================================================
    // 5. CHESS & SUDOKU LOGIC ACADEMY (20 PROGRESSIVE LOCKED STAGES EACH)
    // =========================================================================
    const PIECE_GLYPHS = { wK: '♔', wQ: '♕', wR: '♖', wB: '♗', wN: '♘', wP: '♙', bK: '♚', bQ: '♛', bR: '♜', bB: '♝', bN: '♞', bP: '♟' };
    const CHESS_STAGES = [
      { stage: 1, title: 'The Board & Corner Square', concept: 'A chessboard has 64 squares (8 rows called Ranks and 8 columns called Files). Always set up the board with a Light square in the bottom-right corner (h1)!', task: 'Tap the bottom-right corner square (h1) to verify board setup.', size: 5, pieces: { '0,0': 'wR', '4,4': 'wK' }, target: ['4,4'], hint: 'Tap the square where the White King (♔) stands in the bottom-right corner!' },
      { stage: 2, title: 'The Rook — Straight Lines', concept: 'The Rook (♖) moves like a plus sign (+)—straight up, down, left, or right as many squares as it wants, as long as nothing blocks its path.', task: 'Tap the square where your Rook (♖) can capture the Black Pawn (♟).', size: 5, pieces: { '3,1': 'wR', '3,4': 'bP', '1,3': 'bP' }, target: ['3,4'], hint: 'Look along the same horizontal row as your Rook (♖)!' },
      { stage: 3, title: 'The Bishop — Diagonals', concept: 'The Bishop (♗) zooms along diagonal lines (like an X) and always stays on the same color squares it started on!', task: 'Tap the Black Pawn (♟) that your Bishop (♗) can capture diagonally.', size: 5, pieces: { '4,0': 'wB', '1,3': 'bP', '1,0': 'bP' }, target: ['1,3'], hint: 'Follow the diagonal line up and right from your Bishop (♗).' },
      { stage: 4, title: 'The Queen — Super Piece', concept: 'The Queen (♕) is the most powerful piece! She combines the Rook and Bishop—moving straight OR diagonally in any direction.', task: 'Tap the Black Knight (♞) that your Queen (♕) can capture.', size: 5, pieces: { '2,2': 'wQ', '0,4': 'bN', '0,1': 'bP' }, target: ['0,4'], hint: 'Trace the diagonal from the center square up to the top-right corner!' },
      { stage: 5, title: 'The King — One Step & Safety', concept: 'The King (♔) is the most important piece, moving 1 square in any direction. A King can NEVER step onto a square attacked by an enemy piece!', task: 'Move the White King (♔) 1 step to a SAFE square (avoid the Black Rook’s row/column!).', size: 5, pieces: { '2,2': 'wK', '0,1': 'bR' }, target: ['2,3', '3,2', '3,3', '1,2', '1,3'], hint: 'The Black Rook controls column 1—step right or straight up/down!' },
      { stage: 6, title: 'The Knight — The L-Jump', concept: 'The Knight (♘) moves in an "L" shape: 2 squares in one direction and 1 square to the side. Knights are the ONLY piece that can jump over other pieces!', task: 'Tap the Black Pawn (♟) that your Knight (♘) can reach with an L-jump.', size: 5, pieces: { '3,1': 'wN', '2,2': 'wP', '3,2': 'wP', '1,2': 'bP', '1,1': 'bP' }, target: ['1,2'], hint: 'Jump 2 squares UP and 1 square RIGHT from your Knight (♘)!' },
      { stage: 7, title: 'The Pawn — Forward & Diagonal Capture', concept: 'Pawns (♙) march straight forward 1 square (or 2 on their very first move), but they capture diagonally 1 square forward!', task: 'Tap the Black Pawn (♟) that your White Pawn (♙) can capture diagonally.', size: 5, pieces: { '3,2': 'wP', '2,2': 'bP', '2,3': 'bP' }, target: ['2,3'], hint: 'Pawns cannot capture straight ahead—tap the diagonal enemy pawn!' },
      { stage: 8, title: 'Piece Values: 1 - 3 - 3 - 5 - 9', concept: 'Every piece has a point value: Pawn = 1, Knight = 3, Bishop = 3, Rook = 5, Queen = 9. Always trade a lower-value piece for a higher-value piece!', task: 'Your Bishop (3 pts) can capture either a Pawn (1 pt) or a Rook (5 pts). Tap the best target!', size: 5, pieces: { '2,2': 'wB', '0,0': 'bR', '4,4': 'bP' }, target: ['0,0'], hint: '5 points is worth way more than 1 point—capture the Rook (♜)!' },
      { stage: 9, title: 'Capturing Undefended Targets', concept: 'Before capturing a piece, check if an enemy piece is guarding it! Free (undefended) pieces are the safest captures.', task: 'Two Black Pawns are in range of your Rook. One is guarded by a Bishop, one is FREE. Tap the FREE pawn!', size: 5, pieces: { '3,2': 'wR', '3,0': 'bP', '3,4': 'bP', '1,2': 'bB' }, target: ['3,0'], hint: 'The Black Bishop on the top row guards the right pawn—take the left one!' },
      { stage: 10, title: 'Defending an Attacked Piece', concept: 'If your piece is under attack, you can move it away OR bring another piece to guard it so the opponent won’t trade.', task: 'Your Knight (♘) is attacked by the Black Rook (♜). Tap the square where your Rook (♖) can guard your Knight!', size: 5, pieces: { '2,2': 'wN', '0,2': 'bR', '4,0': 'wR' }, target: ['2,0', '4,2'], hint: 'Move your White Rook (♖) onto row 2 or column 2 to back up your Knight!' },
      { stage: 11, title: 'What is Check?', concept: 'When a piece directly threatens the enemy King, it is called "Check!" The King is never captured—instead, the attacked player must respond immediately.', task: 'Tap the square where your Rook (♖) puts the Black King (♚) in Check!', size: 5, pieces: { '0,3': 'bK', '4,1': 'wR', '4,4': 'wK' }, target: ['0,1', '4,3'], hint: 'Line up your Rook on the same row (row 0) or same column (col 3) as the Black King!' },
      { stage: 12, title: '3 Ways Out of Check: ABC', concept: 'When in Check, remember A-B-C: Away (move King), Block (put a piece in between), or Capture (take the attacker).', task: 'Your King (♔) is in Check from the Black Rook (♜)! Tap the square to CAPTURE the attacker with your Bishop (♗).', size: 5, pieces: { '4,2': 'wK', '1,2': 'bR', '3,4': 'wB' }, target: ['1,2'], hint: 'Your Bishop on the right can slice diagonally right onto the Black Rook!' },
      { stage: 13, title: 'Checkmate in 1: Back Rank Mate', concept: 'Checkmate happens when the King is in Check AND has zero legal squares to escape! Trapping a King behind its own pawns on the back row is called Back Rank Mate.', task: 'Move your Rook (♖) to the top row to deliver Checkmate!', size: 5, pieces: { '0,3': 'bK', '1,2': 'bP', '1,3': 'bP', '1,4': 'bP', '3,0': 'wR' }, target: ['0,0'], hint: 'Slide your Rook (♖) all the way up to the top-left corner (0,0)!' },
      { stage: 14, title: 'Checkmate in 1: Queen + King Kiss', concept: 'With your King guarding your Queen right next to the enemy King, the Queen takes away every escape square without being captured!', task: 'Move your Queen (♕) right in front of the Black King (guarded by your King) for Checkmate!', size: 5, pieces: { '0,2': 'bK', '2,2': 'wK', '3,4': 'wQ' }, target: ['1,2'], hint: 'Move the Queen to the square directly between the two Kings!' },
      { stage: 15, title: 'Avoid the Stalemate Trap!', concept: 'If the enemy King is NOT in Check, but has NO legal moves left, the game ends in a Stalemate (a Tie)! Always give Check when closing in.', task: 'Don’t stalemate! Tap the square that gives CHECKMATE instead of trapping the King with no check.', size: 5, pieces: { '0,0': 'bK', '2,1': 'wK', '3,3': 'wQ' }, target: ['1,1', '0,3'], hint: 'Move the Queen to (1,1) guarded by your King, or (0,3) along the top row!' },
      { stage: 16, title: 'Double Attack: The Knight Fork', concept: 'A "Fork" is when one piece attacks TWO enemy pieces at the exact same time! Knights are masters of forking the King and Queen.', task: 'Jump your Knight (♘) to a square that attacks BOTH the Black King (♚) and Black Queen (♛)!', size: 5, pieces: { '0,1': 'bK', '0,3': 'bQ', '4,1': 'wN' }, target: ['2,2'], hint: 'Jump to the exact center square (2,2) to fork both top pieces!' },
      { stage: 17, title: 'Pinning a Piece to the King', concept: 'A "Pin" happens when a Rook, Bishop, or Queen attacks an enemy piece that cannot move because the enemy King is hiding right behind it!', task: 'Move your Bishop (♗) to pin the Black Knight (♞) against the Black King (♚)!', size: 5, pieces: { '0,4': 'bK', '1,3': 'bN', '4,2': 'wB' }, target: ['3,1'], hint: 'Step your Bishop down-left to (3,1) to line up Bishop -> Knight -> King!' },
      { stage: 18, title: 'Opening Rule: Control the Center', concept: 'At the start of a chess game, move your center pawns (e4 or d4) to control the middle of the board and open paths for your Bishops and Queen.', task: 'Tap the center square directly in front of your King’s Pawn to control the center!', size: 5, pieces: { '4,2': 'wK', '4,1': 'wQ', '4,3': 'wB', '3,2': 'wP' }, target: ['2,2'], hint: 'Push the center Pawn (♙) forward to the middle square (2,2)!' },
      { stage: 19, title: 'Castling for King Safety', concept: 'Castling is a special move where the King moves 2 squares toward a Rook, and the Rook hops over the King to tuck him safely behind pawns!', task: 'Tap the safe corner square (4,4) where the King castles to safety behind the pawns.', size: 5, pieces: { '4,2': 'wK', '4,4': 'wR', '3,3': 'wP', '3,4': 'wP' }, target: ['4,4'], hint: 'Tap the White Rook on (4,4) to castle kingside!' },
      { stage: 20, title: 'Grandmaster Graduation: Mate in 1!', concept: 'Combine everything you learned! Your Bishop guards the diagonal while your Rook delivers the final blow.', task: 'Deliver Checkmate in 1 move with your Rook (♖)!', size: 5, pieces: { '0,4': 'bK', '1,4': 'bP', '3,1': 'wB', '4,0': 'wR' }, target: ['0,0'], hint: 'Your Bishop guards (1,3), so slide your Rook all the way to the top-left corner (0,0)!' }
    ];

    const SUDOKU_STAGES = [
      { stage: 1, title: 'Rule 1: Every Row Needs 1, 2, 3, 4', concept: 'In 4×4 Mini-Sudoku, every horizontal Row must contain the numbers 1, 2, 3, and 4 with NO repeats!', size: 4, grid: [[1,2,3,0],[3,4,1,2],[2,1,4,3],[4,3,2,1]], sol: [[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]] },
      { stage: 2, title: 'Rule 2: Every Column Needs 1, 2, 3, 4', concept: 'Every vertical Column (top to bottom) must also have 1, 2, 3, and 4 with NO repeats!', size: 4, grid: [[1,2,3,4],[3,0,1,2],[2,1,4,3],[4,3,2,1]], sol: [[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]] },
      { stage: 3, title: 'Rule 3: Every 2×2 Box Needs 1–4', concept: 'Look at the bold 2×2 corner boxes! Each 2×2 box must also hold 1, 2, 3, and 4.', size: 4, grid: [[1,2,3,4],[3,4,0,2],[2,1,4,3],[4,3,2,0]], sol: [[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]] },
      { stage: 4, title: 'Scanning Rows & Columns Together', concept: 'When two numbers are missing, check which number is already used in that column!', size: 4, grid: [[0,2,3,4],[3,4,1,2],[2,1,0,3],[4,3,2,1]], sol: [[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]] },
      { stage: 5, title: 'Four Corners Challenge', concept: 'Fill in the missing corner numbers by checking each corner’s 2×2 box.', size: 4, grid: [[0,3,2,0],[2,4,1,3],[3,1,4,2],[0,2,3,0]], sol: [[1,3,2,4],[2,4,1,3],[3,1,4,2],[4,2,3,1]] },
      { stage: 6, title: 'Center X-Pattern', concept: 'Look at the middle squares—solve one box at a time so each 2×2 box has 1, 2, 3, 4.', size: 4, grid: [[2,1,4,3],[4,0,0,1],[1,0,0,4],[3,4,1,2]], sol: [[2,1,4,3],[4,3,2,1],[1,2,3,4],[3,4,1,2]] },
      { stage: 7, title: 'Two-Step Deduction', concept: 'Find a row or column that already has 3 numbers filled in—that square is guaranteed!', size: 4, grid: [[1,0,4,2],[4,2,0,1],[2,3,1,0],[0,1,2,4]], sol: [[1,3,4,2],[4,2,3,1],[2,3,1,4],[3,1,2,4]] },
      { stage: 8, title: '4×4 Master Puzzle', concept: 'You are ready for a full 6-blank 4×4 Sudoku! Start with the easiest rows first.', size: 4, grid: [[0,4,1,2],[1,2,0,4],[4,0,2,1],[2,1,4,0]], sol: [[3,4,1,2],[1,2,3,4],[4,3,2,1],[2,1,4,3]] },
      { stage: 9, title: 'Level Up: 6×6 Sudoku Intro (1–6)', concept: 'Welcome to 6×6 Sudoku! Now every row, column, and 2×3 rectangle uses digits 1, 2, 3, 4, 5, and 6.', size: 6, grid: [[1,2,3,4,5,0],[4,5,6,1,2,3],[2,3,1,5,6,4],[5,6,4,2,3,1],[3,1,2,6,4,5],[6,4,5,3,1,2]], sol: [[1,2,3,4,5,6],[4,5,6,1,2,3],[2,3,1,5,6,4],[5,6,4,2,3,1],[3,1,2,6,4,5],[6,4,5,3,1,2]] },
      { stage: 10, title: '6×6 Row & Column Elimination', concept: 'Count 1 through 6 in each row to spot the missing digit!', size: 6, grid: [[1,2,3,4,5,6],[4,0,6,1,2,3],[2,3,1,5,0,4],[5,6,4,2,3,1],[3,1,2,6,4,5],[6,4,5,3,1,2]], sol: [[1,2,3,4,5,6],[4,5,6,1,2,3],[2,3,1,5,6,4],[5,6,4,2,3,1],[3,1,2,6,4,5],[6,4,5,3,1,2]] },
      { stage: 11, title: '6×6 Cross-Hatching', concept: 'Look across rows and down columns to place 3 missing numbers in this 6×6 board.', size: 6, grid: [[1,2,0,4,5,6],[4,5,6,1,2,3],[2,3,1,5,6,4],[5,6,4,0,3,1],[3,1,2,6,4,5],[6,4,5,3,1,0]], sol: [[1,2,3,4,5,6],[4,5,6,1,2,3],[2,3,1,5,6,4],[5,6,4,2,3,1],[3,1,2,6,4,5],[6,4,5,3,1,2]] },
      { stage: 12, title: '6×6 Diagonal Blanks', concept: 'Four blanks along the diagonal—solve them one row at a time!', size: 6, grid: [[0,2,3,4,5,6],[4,0,6,1,2,3],[2,3,0,5,6,4],[5,6,4,0,3,1],[3,1,2,6,4,5],[6,4,5,3,1,2]], sol: [[1,2,3,4,5,6],[4,5,6,1,2,3],[2,3,1,5,6,4],[5,6,4,2,3,1],[3,1,2,6,4,5],[6,4,5,3,1,2]] },
      { stage: 13, title: '6×6 Twin Pairs', concept: 'When two numbers are missing in a row, check which one is already in the column above!', size: 6, grid: [[1,2,3,4,5,6],[4,5,6,1,2,3],[2,0,1,5,0,4],[5,6,4,2,3,1],[3,1,2,6,4,5],[6,0,5,3,0,2]], sol: [[1,2,3,4,5,6],[4,5,6,1,2,3],[2,3,1,5,6,4],[5,6,4,2,3,1],[3,1,2,6,4,5],[6,4,5,3,1,2]] },
      { stage: 14, title: '6×6 Box Detective', concept: 'Use the 2×3 boxes to deduce 5 missing cells.', size: 6, grid: [[1,2,3,0,5,6],[4,5,6,1,2,3],[2,3,1,5,6,0],[0,6,4,2,3,1],[3,1,0,6,4,5],[6,4,5,3,1,2]], sol: [[1,2,3,4,5,6],[4,5,6,1,2,3],[2,3,1,5,6,4],[5,6,4,2,3,1],[3,1,2,6,4,5],[6,4,5,3,1,2]] },
      { stage: 15, title: '6×6 Champion Puzzle', concept: 'Solve all 6 missing cells to graduate to full 9×9 Championship Sudoku!', size: 6, grid: [[0,2,3,4,5,6],[4,5,6,1,2,0],[2,3,1,0,6,4],[5,6,4,2,3,1],[3,0,2,6,4,5],[6,4,5,3,0,2]], sol: [[1,2,3,4,5,6],[4,5,6,1,2,3],[2,3,1,5,6,4],[5,6,4,2,3,1],[3,1,2,6,4,5],[6,4,5,3,1,2]] },
      { stage: 16, title: 'Championship 9×9 Intro (1–9)', concept: 'In 9×9 Sudoku, every row, column, and 3×3 box contains digits 1 through 9. Find the single missing digit in Row 1!', size: 9, grid: [[5,3,4,6,7,8,9,1,0],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]], sol: [[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]] },
      { stage: 17, title: '9×9 Naked Singles (2 Blanks)', concept: 'Count 1 to 9 in each row with a blank cell to discover the missing digits.', size: 9, grid: [[5,3,4,6,7,8,9,1,2],[6,7,2,1,0,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,0,3,5],[3,4,5,2,8,6,1,7,9]], sol: [[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]] },
      { stage: 18, title: '9×9 Center Box Master', concept: 'Focus on the middle 3×3 box and surrounding rows to fill 3 missing numbers.', size: 9, grid: [[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,0,6,1,4,2,3],[4,2,6,8,0,3,7,9,1],[7,1,3,9,2,0,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]], sol: [[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]] },
      { stage: 19, title: '9×9 Four-Quadrant Challenge', concept: 'Scan all four corners of the 9×9 grid to complete the missing digits.', size: 9, grid: [[0,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,0],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[0,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,0]], sol: [[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]] },
      { stage: 20, title: 'Grandmaster 9×9 Graduation!', concept: 'Solve all 5 missing numbers across the 9×9 championship board to earn your Sudoku Master badge!', size: 9, grid: [[5,3,0,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,0,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,0,8,4],[2,0,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,0]], sol: [[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]] }
    ];

    let currentAcademyGame = 'chess', selectedStageNum = 1;
    function getAcademyProgress() {
      try { const saved = JSON.parse(localStorage.getItem('saanvi_academy_progress_v1') || 'null'); if (saved) return saved; } catch (e) {}
      return { chessUnlocked: 1, sudokuUnlocked: 1 };
    }
    function saveAcademyProgress(prog) {
      try { localStorage.setItem('saanvi_academy_progress_v1', JSON.stringify(prog)); } catch (e) {}
    }
    function promptParentUnlockAllStages() {
      requestParentAuth('🔓 Unlock All 20 Logic Stages', 'Enter parent password to unlock all 20 stages in Chess & Sudoku.', () => {
        saveAcademyProgress({ chessUnlocked: 20, sudokuUnlocked: 20 }); renderAcademy();
      });
    }
    function resetAcademyProgress() { saveAcademyProgress({ chessUnlocked: 1, sudokuUnlocked: 1 }); selectedStageNum = 1; renderAcademy(); }
    function switchAcademyGame(game) {
      currentAcademyGame = game;
      const prog = getAcademyProgress();
      const maxUnlocked = game === 'chess' ? prog.chessUnlocked : prog.sudokuUnlocked;
      selectedStageNum = Math.max(1, Math.min(selectedStageNum, maxUnlocked));
      document.getElementById('btn-game-chess').className = game === 'chess'
        ? 'px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-purple-600 text-white shadow-sm transition'
        : 'px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-slate-100 text-slate-700 hover:bg-slate-200 transition';
      document.getElementById('btn-game-sudoku').className = game === 'sudoku'
        ? 'px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-purple-600 text-white shadow-sm transition'
        : 'px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-slate-100 text-slate-700 hover:bg-slate-200 transition';
      renderAcademy();
    }
    function selectAcademyStage(num) {
      const prog = getAcademyProgress();
      const maxUnlocked = currentAcademyGame === 'chess' ? prog.chessUnlocked : prog.sudokuUnlocked;
      if (num > maxUnlocked) return;
      selectedStageNum = num; renderAcademy();
    }
    function renderAcademy() {
      const prog = getAcademyProgress();
      const maxUnlocked = currentAcademyGame === 'chess' ? prog.chessUnlocked : prog.sudokuUnlocked;
      document.getElementById('academy-progress-summary').textContent = `Unlocked: Stage ${maxUnlocked} / 20 (+5 ⭐ per stage!)`;
      const pills = document.getElementById('academy-stage-pills');
      let pillHtml = '';
      for (let i = 1; i <= 20; i++) {
        const isLocked = i > maxUnlocked, isCompleted = i < maxUnlocked, isSelected = i === selectedStageNum;
        if (isLocked) pillHtml += `<button disabled class="py-2 px-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 text-xs font-bold flex flex-col items-center justify-center cursor-not-allowed"><span>🔒</span><span>Stg ${i}</span></button>`;
        else {
          const ring = isSelected ? 'ring-2 ring-purple-600 bg-purple-600 text-white' : (isCompleted ? 'bg-emerald-50 border-emerald-300 text-emerald-900 hover:bg-emerald-100' : 'bg-purple-50 border-purple-300 text-purple-900 hover:bg-purple-100');
          pillHtml += `<button onclick="selectAcademyStage(${i})" class="py-2 px-1.5 rounded-xl border text-xs font-extrabold flex flex-col items-center justify-center transition ${ring}"><span>${isCompleted ? '⭐' : '🔓'}</span><span>Stg ${i}</span></button>`;
        }
      }
      pills.innerHTML = pillHtml;
      if (currentAcademyGame === 'chess') renderChessStage(CHESS_STAGES[selectedStageNum - 1]);
      else renderSudokuStage(SUDOKU_STAGES[selectedStageNum - 1]);
    }
    function renderChessStage(st) {
      const container = document.getElementById('academy-active-stage');
      let boardHtml = '';
      for (let r = 0; r < st.size; r++) {
        for (let c = 0; c < st.size; c++) {
          const isLight = (r + c) % 2 === 0;
          const bg = isLight ? 'bg-amber-100 hover:bg-amber-200' : 'bg-emerald-700/80 hover:bg-emerald-600 text-white';
          const key = `${r},${c}`, pCode = st.pieces[key], glyph = pCode ? PIECE_GLYPHS[pCode] : '';
          const pieceColor = pCode && pCode.startsWith('w') ? 'text-slate-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]' : 'text-slate-950';
          boardHtml += `<button onclick="handleChessSquareClick('${key}')" class="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-2xl sm:text-3xl font-bold border border-slate-400/40 transition ${bg}"><span class="${pieceColor}">${glyph}</span></button>`;
        }
      }
      container.innerHTML = `
        <div class="bg-purple-600 text-white px-5 py-3 flex flex-wrap items-center justify-between gap-2">
          <div><span class="text-[11px] font-bold uppercase tracking-wider text-purple-200">Chess Stage ${st.stage} of 20</span><h3 class="text-base sm:text-lg font-extrabold">${st.title}</h3></div>
          <span class="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">Interactive Board</span>
        </div>
        <div class="p-5 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div class="space-y-3">
            <div class="bg-purple-50 border border-purple-200 rounded-xl p-3.5"><div class="text-xs font-extrabold text-purple-900 uppercase mb-1">💡 Concept Lesson</div><p class="text-xs sm:text-sm text-slate-800 leading-relaxed">${st.concept}</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3.5"><div class="text-xs font-extrabold text-amber-900 uppercase mb-1">🎯 Your Mission</div><p class="text-xs sm:text-sm font-bold text-slate-900">${st.task}</p></div>
            <div id="chess-stage-feedback" class="text-xs font-bold text-slate-600 min-h-[24px]">Hint: ${st.hint}</div>
          </div>
          <div class="flex flex-col items-center"><div class="grid grid-cols-5 border-4 border-slate-800 rounded-xl overflow-hidden shadow-md">${boardHtml}</div></div>
        </div>
      `;
    }
    function handleChessSquareClick(coord) {
      const st = CHESS_STAGES[selectedStageNum - 1], fb = document.getElementById('chess-stage-feedback');
      if (st.target.includes(coord)) {
        const prog = getAcademyProgress();
        if (st.stage === prog.chessUnlocked) {
          awardStars(5, `Chess Stage ${st.stage} Cleared!`);
          if (prog.chessUnlocked < 20) { prog.chessUnlocked++; saveAcademyProgress(prog); }
        }
        fb.className = 'p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-extrabold pop-in';
        fb.innerHTML = st.stage < 20
          ? `🎉 Brilliant move, Saanvi! Stage ${st.stage + 1} is now UNLOCKED! <button onclick="selectAcademyStage(${st.stage + 1})" class="ml-2 px-3 py-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Next Stage &rarr;</button>`
          : `🏆 CONGRATULATIONS! You completed all 20 Chess Academy Stages!`;
      } else {
        fb.className = 'p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold';
        fb.textContent = `❌ Not that square! Hint: ${st.hint}`;
      }
    }
    function renderSudokuStage(st) {
      const container = document.getElementById('academy-active-stage');
      const boxR = st.size === 4 ? 2 : (st.size === 6 ? 2 : 3), boxC = st.size === 4 ? 2 : 3;
      const cellSize = st.size === 9 ? 'w-8 h-8 sm:w-9 sm:h-9 text-xs sm:text-sm' : 'w-11 h-11 sm:w-12 sm:h-12 text-base';
      let gridHtml = '';
      for (let r = 0; r < st.size; r++) {
        for (let c = 0; c < st.size; c++) {
          const val = st.grid[r][c];
          const bRight = (c + 1) % boxC === 0 && c !== st.size - 1 ? 'border-r-2 border-r-slate-800' : 'border-r border-r-slate-300';
          const bBottom = (r + 1) % boxR === 0 && r !== st.size - 1 ? 'border-b-2 border-b-slate-800' : 'border-b border-b-slate-300';
          if (val !== 0) gridHtml += `<div class="${cellSize} flex items-center justify-center font-extrabold bg-slate-100 text-slate-900 ${bRight} ${bBottom}">${val}</div>`;
          else gridHtml += `<input type="number" min="1" max="${st.size}" data-r="${r}" data-c="${c}" class="sudoku-cell ${cellSize} text-center font-extrabold text-indigo-700 bg-amber-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 ${bRight} ${bBottom}" />`;
        }
      }
      container.innerHTML = `
        <div class="bg-purple-600 text-white px-5 py-3 flex flex-wrap items-center justify-between gap-2">
          <div><span class="text-[11px] font-bold uppercase tracking-wider text-purple-200">Sudoku Stage ${st.stage} of 20 (${st.size}&times;${st.size} Grid)</span><h3 class="text-base sm:text-lg font-extrabold">${st.title}</h3></div>
          <span class="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">Digits 1–${st.size}</span>
        </div>
        <div class="p-5 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div class="space-y-3">
            <div class="bg-purple-50 border border-purple-200 rounded-xl p-3.5"><div class="text-xs font-extrabold text-purple-900 uppercase mb-1">💡 Strategy Tip</div><p class="text-xs sm:text-sm text-slate-800 leading-relaxed">${st.concept}</p></div>
            <button onclick="checkSudokuSolution()" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold shadow-sm">✅ Check My Sudoku Answer</button>
            <div id="sudoku-stage-feedback" class="text-xs font-bold text-slate-600 min-h-[24px]">Fill in the yellow empty boxes with numbers 1 to ${st.size}, then click Check!</div>
          </div>
          <div class="flex flex-col items-center overflow-x-auto"><div class="grid border-2 border-slate-800 rounded-lg overflow-hidden shadow-md" style="grid-template-columns: repeat(${st.size}, minmax(0, 1fr));">${gridHtml}</div></div>
        </div>
      `;
    }
    function checkSudokuSolution() {
      const st = SUDOKU_STAGES[selectedStageNum - 1], inputs = document.querySelectorAll('.sudoku-cell');
      let allCorrect = true;
      inputs.forEach(inp => {
        const r = parseInt(inp.dataset.r, 10), c = parseInt(inp.dataset.c, 10), userVal = parseInt(inp.value, 10);
        if (userVal === st.sol[r][c]) { inp.classList.remove('bg-rose-100'); inp.classList.add('bg-emerald-100', 'text-emerald-900'); }
        else { allCorrect = false; inp.classList.add('bg-rose-100'); }
      });
      const fb = document.getElementById('sudoku-stage-feedback');
      if (allCorrect) {
        const prog = getAcademyProgress();
        if (st.stage === prog.sudokuUnlocked) {
          awardStars(5, `Sudoku Stage ${st.stage} Cleared!`);
          if (prog.sudokuUnlocked < 20) { prog.sudokuUnlocked++; saveAcademyProgress(prog); }
        }
        fb.className = 'p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-extrabold pop-in';
        fb.innerHTML = st.stage < 20
          ? `🎉 Awesome logic, Saanvi! Sudoku Stage ${st.stage + 1} is now UNLOCKED! <button onclick="selectAcademyStage(${st.stage + 1})" class="ml-2 px-3 py-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Next Stage &rarr;</button>`
          : `🏆 CONGRATULATIONS! You completed all 20 Sudoku Academy Stages!`;
      } else {
        fb.className = 'p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold';
        fb.textContent = '❌ Some pink boxes need fixing—make sure every row, column, and box has no repeated numbers!';
      }
    }

