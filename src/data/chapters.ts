import { Chapter } from '../types';

export const CHAPTERS: Record<string, Chapter> = {
  'opening-principles': {
    id: 'opening-principles',
    title: 'Opening Principles - Interactive',
    type: 'opening',
    description: 'Master the fundamental principles of chess openings through interactive play.',
    steps: [
      {
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        correctMoves: ['e2e4', 'd2d4'],
        instruction: "Principle 1: CONTROL THE CENTER. Play a move that controls the center squares (d4, e4, d5, e5).",
        explanation: "e4 or d4! These moves claim central space immediately. The center is the most important area because pieces placed there control the most squares and have maximum mobility.",
        highlights: { squares: ['e4', 'd4', 'e5', 'd5'], type: 'good' }
      },
      {
        fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
        correctMoves: ['e7e5', 'd7d5', 'c7c5'],
        instruction: "Black should also fight for the center! What's your response?",
        explanation: "Excellent! You're challenging White's central control. e5 is most principled (symmetrical), d5 challenges directly, c5 (Sicilian) fights for d4. Never let your opponent dominate the center unchallenged!",
        highlights: { squares: ['e5', 'd5', 'c5'], type: 'good' }
      },
      {
        fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2',
        correctMoves: ['g1f3', 'b1c3', 'f1c4'],
        instruction: "Principle 2: DEVELOP YOUR PIECES. Don't move the same piece twice. Bring out a knight or bishop.",
        explanation: "Perfect! Nf3 develops AND attacks e5. Development means getting your pieces off the back rank where they're doing nothing. Knights and bishops should come out in the opening.",
        highlights: { squares: ['f3', 'c3', 'c4'], type: 'good' }
      },
      {
        fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
        correctMoves: ['b8c6', 'g8f6'],
        instruction: "Your turn as Black! Develop a piece. Which knight should you bring out?",
        explanation: "Great development! Nc6 defends e5 and develops. Nf6 is also excellent. Notice the pattern: both sides are developing pieces toward the center, not to the edges.",
        highlights: { squares: ['c6', 'f6'], type: 'good' }
      },
      {
        fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
        correctMoves: ['f1c4', 'f1b5', 'd2d4'],
        instruction: "Principle 3: KING SAFETY PREPARATION. Develop your kingside pieces so you can castle. Where should the bishop go?",
        explanation: "Bc4 is excellent! It develops toward the center AND prepares castling. Always develop with threats when possible - this bishop eyes the weak f7 square!",
        highlights: { squares: ['c4', 'f7', 'g1'], type: 'good' }
      },
      {
        fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
        correctMoves: ['g8f6', 'f8c5'],
        instruction: "Continue developing! Black needs to bring out more pieces and prepare to castle.",
        explanation: "Excellent! Developing while preparing to castle. Notice: we haven't moved any piece twice yet, and we're not bringing out the queen early. These are key principles!",
        highlights: { squares: ['f6', 'c5'], type: 'good' }
      },
      {
        fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        correctMoves: ['e1g1'],
        instruction: "Principle 4: CASTLE EARLY! Your king is vulnerable in the center. Castle kingside now!",
        explanation: "Perfect! O-O (castling) gets your king to safety and connects your rooks. You should usually castle within the first 10 moves. A safe king is essential!",
        highlights: { squares: ['g1', 'f1', 'h1'], type: 'good' }
      },
      {
        fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 4',
        correctMoves: ['e8g8'],
        instruction: "Black should also castle! Get your king to safety.",
        explanation: "Excellent! Now both kings are safe. Notice how both sides: 1) Controlled the center, 2) Developed pieces, 3) Castled early. These are the CORE opening principles in action!",
        highlights: { squares: ['g8', 'f8', 'h8'], type: 'good' }
      }
    ],
    quizPositions: [
      {
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        correctMoves: ['e2e4', 'd2d4'],
        instruction: "Control the center with your first move!",
        explanation: "e4 or d4 controls the center!"
      },
      {
        fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
        correctMoves: ['g1f3', 'b1c3', 'f1c4', 'f1b5'],
        instruction: "Develop a piece!",
        explanation: "Perfect! Development is key."
      }
    ]
  },

  'tactical-forks-training': {
    id: 'tactical-forks-training',
    title: 'Fork Tactics - Interactive Training',
    type: 'tactics',
    description: 'Master the art of the fork through guided interactive puzzles.',
    steps: [
      {
        fen: '4k3/8/8/8/3r4/8/5N2/4K3 w - - 0 1',
        correctMoves: ['f2e4', 'f2d3'],
        instruction: "This is a KNIGHT FORK. Find a square where your knight attacks BOTH the Black king and rook at the same time.",
        explanation: "Ne4+ or Nd3+! The knight forks the king and rook. Black MUST move the king (it's in check), and then you capture the rook. Knights are perfect for forks because they jump in an L-shape and attack squares of both colors.",
        highlights: { squares: ['e4', 'd3', 'e8', 'd4'], type: 'good' }
      },
      {
        fen: '4k3/8/8/8/8/8/5N2/3RK3 w - - 0 1',
        correctMoves: ['f2d3', 'f2e4'],
        instruction: "Practice: Set up another fork! Where can the knight go to fork the king?",
        explanation: "Great! You're getting it. When looking for knight forks, scan for two pieces that are a 'knight move' apart. The fork square is where the knight can attack both.",
        highlights: { squares: ['d3', 'e4', 'e8'], type: 'good' }
      },
      {
        fen: 'r3k2r/8/8/8/8/8/3Q4/4K3 w q - 0 1',
        correctMoves: ['d2d8'],
        instruction: "QUEEN FORKS are powerful! Find a square where your queen forks the king AND a rook.",
        explanation: "Qd8+!! Beautiful! The queen gives check and attacks the rook on a8. After the king moves, you win the rook. Queen forks are deadly because the queen moves in so many directions.",
        highlights: { squares: ['d8', 'e8', 'a8', 'h8'], type: 'good' }
      },
      {
        fen: '4k3/5p2/4n3/8/8/8/5P2/3QK3 w - - 0 1',
        correctMoves: ['d1a4'],
        instruction: "The ROYAL FORK - forking the king and another piece. Where should the queen go?",
        explanation: "Qa4+! This checks the king AND attacks the knight on e6. When a fork includes check, it's especially powerful because your opponent MUST respond to the check first.",
        highlights: { squares: ['a4', 'e8', 'e6'], type: 'good' }
      },
      {
        fen: '2kr4/ppp5/8/8/8/3B4/PPP5/2KR4 w - - 0 1',
        correctMoves: ['d3a6'],
        instruction: "Even BISHOPS can fork! Find a diagonal where your bishop attacks two pawns.",
        explanation: "Ba6! The bishop forks the a7 and c7 pawns on the diagonal. Black can only save one pawn. Look for pieces on the same diagonal when hunting for bishop forks.",
        highlights: { squares: ['a6', 'a7', 'c7'], type: 'good' }
      },
      {
        fen: '4k3/1b6/3n4/8/8/8/5PPP/4R1K1 w - - 0 1',
        correctMoves: ['e1e8'],
        instruction: "ROOK FORKS work along ranks and files. Find a square where the rook forks two pieces.",
        explanation: "Re8+! The rook forks the king and the bishop on b7. Rook forks are most common in endgames when there are fewer pieces blocking ranks and files.",
        highlights: { squares: ['e8', 'e8', 'b7'], type: 'good' }
      },
      {
        fen: '3r1rk1/5ppp/8/8/5N2/8/5PPP/5RK1 w - - 0 1',
        correctMoves: ['f4e6'],
        instruction: "Real game situation! Black has two rooks. Find the knight fork that wins material.",
        explanation: "Ne6+! This is a FAMILY FORK (also called a royal fork) - it checks the king AND attacks the rook on f8. After Black moves the king, you play Nxf8+ (capturing the rook WITH CHECK!)",
        highlights: { squares: ['e6', 'g8', 'f8'], type: 'good' }
      },
      {
        fen: 'r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
        correctMoves: ['c3d5'],
        instruction: "Complex position from a real game! White has a knight on c3. Find the fork that wins a piece.",
        explanation: "Nd5!! This forks the knight on f6 AND the bishop on c5. Black can only save one piece. In complex positions, always scan for fork opportunities - they're often hiding in plain sight!",
        highlights: { squares: ['d5', 'f6', 'c5'], type: 'good' }
      }
    ],
    quizPositions: [
      {
        fen: '4k3/8/8/3r4/8/8/5N2/4K3 w - - 0 1',
        correctMoves: ['f2e4', 'f2d3'],
        instruction: "Fork the king and rook!",
        explanation: "Knight fork!"
      },
      {
        fen: 'r3k2r/8/8/8/8/8/3Q4/4K3 w q - 0 1',
        correctMoves: ['d2d8'],
        instruction: "Queen fork!",
        explanation: "Qd8+ wins the rook!"
      }
    ]
  },

  'italian-game': {
    id: 'italian-game',
    title: 'Italian Game',
    type: 'opening',
    description: 'Learn the classical Italian Game opening with e4, Nf3, Bc4. Control the center and develop quickly.',
    steps: [
      {
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        correctMoves: ['e2e4'],
        instruction: "White starts by controlling the center. Move your king's pawn two squares forward.",
        explanation: "1.e4 - The king's pawn opening. This move immediately fights for the center (d5 and f5 squares) and opens lines for the queen and bishop.",
        highlights: { squares: ['e4', 'd5', 'f5'], type: 'good' }
      },
      {
        fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
        correctMoves: ['e7e5'],
        instruction: "Black mirrors White's strategy. Respond with your own central pawn.",
        explanation: "1...e5 - Black fights for the center too. This is the most principled response, leading to open, tactical games.",
        highlights: { squares: ['e5', 'd4', 'f4'], type: 'good' }
      },
      {
        fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2',
        correctMoves: ['g1f3'],
        instruction: "Develop your kingside knight toward the center. Which knight move attacks Black's e5 pawn?",
        explanation: "2.Nf3 - Develops a piece AND attacks e5. Knights before bishops is a good rule. Notice the knight controls key central squares d4 and e5.",
        highlights: { squares: ['f3', 'e5', 'd4'], type: 'good' }
      },
      {
        fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
        correctMoves: ['b8c6'],
        instruction: "Black should defend the e5 pawn and develop. Bring out your queenside knight.",
        explanation: "2...Nc6 - Defends e5 and develops a piece. The knight on c6 is well-placed, controlling d4 and supporting e5.",
        highlights: { squares: ['c6', 'e5', 'd4'], type: 'good' }
      },
      {
        fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
        correctMoves: ['f1c4'],
        instruction: "This is the KEY move of the Italian Game. Develop your light-squared bishop to its most active square, aiming at f7.",
        explanation: "3.Bc4 - The Italian bishop! Aims at f7, the weakest point in Black's position (only defended by the king). This rapid development puts pressure on Black.",
        highlights: { squares: ['c4', 'f7'], type: 'good' }
      },
      {
        fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
        correctMoves: ['f8c5'],
        instruction: "Black responds symmetrically. Develop your own light-squared bishop to an active square.",
        explanation: "3...Bc5 - The Giuoco Piano (Italian for 'quiet game'). Black mirrors White's setup. Both sides have developed quickly and are fighting for the center.",
        highlights: { squares: ['c5', 'f2'], type: 'good' }
      },
      {
        fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        correctMoves: ['d2d3', 'c2c3'],
        instruction: "Now White typically plays d3 or c3. Let's play d3 to support the center and prepare to develop the last minor piece.",
        explanation: "4.d3 - Supports e4, opens the diagonal for the c1 bishop, and prepares Nc3. White maintains central control. Now both sides will castle and fight for space in the center.",
        highlights: { squares: ['d3', 'e4', 'c1'], type: 'good' }
      },
      {
        fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4',
        correctMoves: ['g8f6'],
        instruction: "Complete your development. Bring your last knight out to attack e4.",
        explanation: "4...Nf6 - Black develops and puts pressure on e4. After this, both sides will typically castle kingside. The Italian Game leads to rich middlegame positions with chances for both sides.",
        highlights: { squares: ['f6', 'e4'], type: 'good' }
      }
    ],
    quizPositions: [
      {
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        correctMoves: ['e2e4'],
        instruction: "Start the Italian Game opening.",
        explanation: "1.e4 opens the game and controls the center."
      },
      {
        fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
        correctMoves: ['g1f3'],
        instruction: "Develop a knight and attack Black's center.",
        explanation: "Nf3 develops and attacks e5."
      },
      {
        fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
        correctMoves: ['f1c4'],
        instruction: "Play the signature Italian Game move.",
        explanation: "Bc4 aims at the weak f7 square!"
      }
    ]
  },

  'forks': {
    id: 'forks',
    title: 'Tactical Forks',
    type: 'tactics',
    description: 'Master the fork tactic: attacking two or more pieces at once, forcing your opponent to lose material.',
    steps: [
      {
        fen: '4k3/8/8/8/3r4/8/5N2/4K3 w - - 0 1',
        correctMoves: ['f2e4', 'f2d3'],
        instruction: "The knight fork is the most common. Find the knight move that attacks both the king and rook simultaneously.",
        explanation: "Ne4+ or Nd3+ - The knight forks the king and rook! Black must move the king out of check, and White captures the rook next move. Knights are perfect for forks because they attack in an L-shape.",
        highlights: { squares: ['e4', 'e8', 'd4'], type: 'good' }
      },
      {
        fen: 'r3k2r/8/8/8/8/8/3Q4/4K3 w q - 0 1',
        correctMoves: ['d2d8'],
        instruction: "Queens can fork too! Find a queen move that attacks both Black rooks at once.",
        explanation: "Qd8+! - The queen forks king and rook. After the king moves, White captures the rook on a8. This is also a back-rank tactic!",
        highlights: { squares: ['d8', 'e8', 'a8', 'h8'], type: 'good' }
      },
      {
        fen: '4k3/5p2/4n3/8/8/8/5P2/3QK3 w - - 0 1',
        correctMoves: ['d1a4'],
        instruction: "The royal fork: forking king and knight. Find it!",
        explanation: "Qa4+! - This checks the king AND attacks the knight. Black must deal with check first, then loses the knight. Always look for checks that attack other pieces!",
        highlights: { squares: ['a4', 'e8', 'e6'], type: 'good' }
      },
      {
        fen: '2kr4/ppp5/8/8/8/3B4/PPP5/2KR4 w - - 0 1',
        correctMoves: ['d3a6'],
        instruction: "Even bishops can fork! Find the diagonal move that attacks two pawns at once.",
        explanation: "Ba6! - The bishop forks the a7 and c7 pawns. Black can only save one. While less dramatic than forking major pieces, winning a pawn through a fork is still valuable.",
        highlights: { squares: ['a6', 'a7', 'c7'], type: 'good' }
      },
      {
        fen: '3r1rk1/5ppp/8/8/5N2/8/5PPP/5RK1 w - - 0 1',
        correctMoves: ['f4e6'],
        instruction: "A practical example: Black has two rooks. Find the knight fork that wins material.",
        explanation: "Ne6+ - Forks king and f8 rook! This is a family fork (king + another piece). Black moves the king, and White captures the f8 rook with check. Two key points: 1) The fork gives check, forcing Black's response. 2) After Nxf8+, it's still check!",
        highlights: { squares: ['e6', 'g8', 'f8'], type: 'good' }
      },
      {
        fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        correctMoves: ['f3g5'],
        instruction: "A classic opening trap! White can fork the king and h7 pawn. Find it. (Hint: the knight can go to g5)",
        explanation: "Ng5! - Attacks f7 with the bishop AND h7 with the knight. If Black takes Nxh7?, then Bxf7+ wins the game (forks king and h7 knight). This Fried Liver Attack pattern wins many beginner games.",
        highlights: { squares: ['g5', 'f7', 'h7'], type: 'good' }
      },
      {
        fen: '4k3/1b6/3n4/8/8/8/5PPP/4R1K1 w - - 0 1',
        correctMoves: ['e1e8'],
        instruction: "Sometimes a rook can fork too! Find the rook move that attacks two pieces.",
        explanation: "Re8+! - The rook forks the king and bishop on b7. After the king moves, Rxb7 wins the bishop. Rooks fork along ranks and files.",
        highlights: { squares: ['e8', 'e8', 'b7'], type: 'good' }
      },
      {
        fen: 'r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
        correctMoves: ['c3d5'],
        instruction: "In this realistic middle game position, find White's knight fork that wins a piece.",
        explanation: "Nd5! - This forks the knight on f6 AND the bishop on c5. Black can only save one piece. Notice how the fork works even in a complex position with many pieces. Always scan for knight fork opportunities!",
        highlights: { squares: ['d5', 'f6', 'c5'], type: 'good' }
      }
    ],
    quizPositions: [
      {
        fen: '4k3/8/8/3r4/8/8/5N2/4K3 w - - 0 1',
        correctMoves: ['f2e4', 'f2d3'],
        instruction: "Fork the king and rook.",
        explanation: "The knight forks both pieces!"
      },
      {
        fen: 'r3k2r/8/8/8/8/8/3Q4/4K3 w q - 0 1',
        correctMoves: ['d2d8'],
        instruction: "Queen fork on the back rank.",
        explanation: "Qd8+ forks king and rook."
      },
      {
        fen: '3r1rk1/5ppp/8/8/5N2/8/5PPP/5RK1 w - - 0 1',
        correctMoves: ['f4e6'],
        instruction: "Knight forks the king and rook.",
        explanation: "Ne6+ is a family fork!"
      },
      {
        fen: 'r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
        correctMoves: ['c3d5'],
        instruction: "Find the winning knight fork.",
        explanation: "Nd5 forks the knight and bishop!"
      }
    ]
  },

  'pin-tactics': {
    id: 'pin-tactics',
    title: 'Pin Tactics - Interactive',
    type: 'tactics',
    description: 'Master pins: when a piece cannot move without exposing a more valuable piece.',
    steps: [
      {
        fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        correctMoves: ['f3g5'],
        instruction: "WHITE TO PLAY: The Black knight on f6 defends the important h7 square. But look - Black's queen is on d8. Can you PIN the knight?",
        explanation: "Ng5! The knight on g5 attacks h7, and the f6 knight cannot move because it would expose the queen to your bishop on c4! This is an ABSOLUTE PIN (pinned against the king/queen). Pins are incredibly powerful.",
        highlights: { squares: ['g5', 'f6', 'd8', 'c4'], type: 'good' }
      },
      {
        fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/3nP3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4',
        correctMoves: ['c1g5'],
        instruction: "Black has a knight on d4. But there's a pin available! Develop your bishop with a pin.",
        explanation: "Bg5! You pin the knight on f6 to the queen on d8. Now if the knight moves, you win the queen. Pins restrict your opponent's options dramatically.",
        highlights: { squares: ['g5', 'f6', 'd8'], type: 'good' }
      },
      {
        fen: 'r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 0 8',
        correctMoves: ['c1g5'],
        instruction: "REAL GAME POSITION: How can White create a pin and put pressure on Black's position?",
        explanation: "Bg5! This pins the f6 knight to the queen. Black's knight is now restricted. Pins are one of the most common tactical themes in chess.",
        highlights: { squares: ['g5', 'f6', 'd8'], type: 'good' }
      }
    ],
    quizPositions: [
      {
        fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        correctMoves: ['f3g5'],
        instruction: "Pin the knight!",
        explanation: "Ng5 pins f6!"
      }
    ]
  },

  'endgame-king-activity': {
    id: 'endgame-king-activity',
    title: 'Endgame: King Activity',
    type: 'endgame',
    description: 'Learn how the king becomes a powerful attacking piece in the endgame.',
    steps: [
      {
        fen: '8/8/8/4k3/8/8/4P3/4K3 w - - 0 1',
        correctMoves: ['e1d2', 'e1f2', 'e1d1', 'e1f1'],
        instruction: "ENDGAME PRINCIPLE: The king is STRONG in the endgame! Activate your king by bringing it toward the center.",
        explanation: "Good! In the endgame, there are fewer pieces, so the king is safer. Activate it! The king can control squares, support pawns, and attack enemy pawns.",
        highlights: { squares: ['d2', 'f2', 'e3'], type: 'good' }
      },
      {
        fen: '8/8/8/4k3/4p3/8/3KP3/8 w - - 0 1',
        correctMoves: ['d2e3'],
        instruction: "Black's pawn is advancing! Stop it with your king.",
        explanation: "Ke3! Your king blockades the pawn. An active, centralized king is often worth more than a pawn in the endgame!",
        highlights: { squares: ['e3', 'e4'], type: 'good' }
      },
      {
        fen: '8/8/4k3/8/4P3/8/3K4/8 w - - 0 1',
        correctMoves: ['d2e3'],
        instruction: "Support your pawn! Bring the king up to help push it forward.",
        explanation: "Ke3! The king supports the pawn's advance. In king and pawn endgames, the side with the more active king usually wins. Rule: King and pawn vs lone king is winning if the king can reach the 6th rank with the pawn.",
        highlights: { squares: ['e3', 'e4', 'e5'], type: 'good' }
      },
      {
        fen: '8/8/8/3k4/8/3K4/3P4/8 w - - 0 1',
        correctMoves: ['d3e4'],
        instruction: "This is OPPOSITION! When kings face each other with one square between them. Move your king to TAKE THE OPPOSITION.",
        explanation: "Ke4! Now the kings are facing each other. Whoever is NOT to move 'has the opposition' and can make progress. Opposition is KEY in king and pawn endgames.",
        highlights: { squares: ['e4', 'd5', 'e5'], type: 'good' }
      }
    ],
    quizPositions: [
      {
        fen: '8/8/8/4k3/4p3/8/3KP3/8 w - - 0 1',
        correctMoves: ['d2e3'],
        instruction: "Stop Black's pawn!",
        explanation: "Ke3 blockades it!"
      }
    ]
  },

  'middlegame-outposts': {
    id: 'middlegame-outposts',
    title: 'Middlegame: Outposts & Weak Squares',
    type: 'middlegame',
    description: 'Learn to identify and exploit weak squares that cannot be defended by pawns.',
    steps: [
      {
        fen: 'r1bq1rk1/ppp2ppp/2n5/3p4/3P4/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 9',
        correctMoves: ['c3e4'],
        instruction: "WEAK SQUARE CONCEPT: Black has a weak square on e5 (no Black pawns can defend it). Place your knight there!",
        explanation: "Ne4! Your knight occupies an OUTPOST - a square that cannot be attacked by enemy pawns. From e5, the knight controls many key squares. Outposts are incredibly powerful!",
        highlights: { squares: ['e4', 'd6', 'f6', 'c5', 'g5'], type: 'good' }
      },
      {
        fen: 'r1bq1rk1/ppp2ppp/2n5/3pN3/3P4/5N2/PPP2PPP/R1BQ1RK1 b - - 1 9',
        correctMoves: ['c6e7'],
        instruction: "BLACK'S TURN: The White knight on e5 is strong. You need to challenge it. What's your plan?",
        explanation: "Ne7! You prepare ...f6 to kick the knight away. When your opponent has a piece on a strong outpost, you need to either trade it or force it to move.",
        highlights: { squares: ['e7', 'f6'], type: 'good' }
      },
      {
        fen: 'r1bq1rk1/ppp1nppp/8/3pN3/3P4/5N2/PPP2PPP/R1BQ1RK1 w - - 2 10',
        correctMoves: ['f3g5', 'f3e5'],
        instruction: "Your outpost is being challenged. You can trade knights or reposition. What do you do?",
        explanation: "You can maintain the knight with defensive moves, trade it off for Black's knight, or reposition it. Knights on outposts are valuable, so forcing trades can equalize!",
        highlights: { squares: ['g5', 'e5'], type: 'good' }
      }
    ],
    quizPositions: [
      {
        fen: 'r1bq1rk1/ppp2ppp/2n5/3p4/3P4/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 9',
        correctMoves: ['c3e4'],
        instruction: "Place your knight on the outpost!",
        explanation: "Ne4 - perfect outpost!"
      }
    ]
  },
};
