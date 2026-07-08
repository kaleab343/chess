// React hooks
const { useState, useEffect, useRef } = React;

// ===== LESSON DATA FORMAT =====
// Each lesson step structure:
// {
//   fen: "starting FEN position",
//   correctMoves: ["e2e4", "e7e5"], // array of acceptable moves
//   instruction: "What to tell the learner",
//   explanation: "Why this move is good (shown after correct move)",
//   highlights: { squares: ["e4"], type: "good" } // optional
// }

// ===== CHAPTER DATA =====
const CHAPTERS = {
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
  }
};

// ===== BOARD COMPONENT =====
function Board({ game, onMove, highlights = {} }) {
  const boardRef = useRef(null);
  const boardInstanceRef = useRef(null);

  useEffect(() => {
    // Initialize board
    const config = {
      draggable: true,
      position: game.fen(),
      onDragStart: (source, piece) => {
        // Don't pick up pieces if game is over or not player's turn
        if (game.game_over()) return false;
        
        // Only pick up pieces for the side to move
        if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
            (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
          return false;
        }
      },
      onDrop: (source, target) => {
        // See if the move is legal
        const move = game.move({
          from: source,
          to: target,
          promotion: 'q' // always promote to queen for simplicity
        });

        // Illegal move
        if (move === null) return 'snapback';

        // Legal move - notify parent
        onMove(move);
      },
      onSnapEnd: () => {
        boardInstanceRef.current.position(game.fen());
      }
    };

    boardInstanceRef.current = Chessboard('chess-board', config);

    return () => {
      if (boardInstanceRef.current) {
        boardInstanceRef.current.destroy();
      }
    };
  }, []);

  // Update board when game state changes
  useEffect(() => {
    if (boardInstanceRef.current) {
      boardInstanceRef.current.position(game.fen());
    }
  }, [game]);

  // Apply highlights
  useEffect(() => {
    // Remove all existing highlights
    document.querySelectorAll('[data-square]').forEach(sq => {
      sq.classList.remove('highlight-square', 'highlight-correct', 'highlight-incorrect', 'highlight-danger', 'highlight-good');
    });

    // Add new highlights
    if (highlights.squares && highlights.squares.length > 0) {
      highlights.squares.forEach(square => {
        const squareEl = document.querySelector(`[data-square="${square}"]`);
        if (squareEl) {
          squareEl.classList.add(`highlight-${highlights.type || 'square'}`);
        }
      });
    }
  }, [highlights]);

  return <div id="chess-board" ref={boardRef}></div>;
}

// ===== MOVE LIST COMPONENT =====
function MoveList({ moves }) {
  return (
    <div className="move-list">
      <h4>Moves Played</h4>
      {moves.length === 0 ? (
        <div style={{color: '#a0aec0', fontStyle: 'italic'}}>No moves yet</div>
      ) : (
        moves.map((move, idx) => (
          <div key={idx} className="move-item">
            {Math.floor(idx / 2) + 1}. {idx % 2 === 0 ? move : `... ${move}`}
          </div>
        ))
      )}
    </div>
  );
}

// ===== LESSON ENGINE COMPONENT =====
function LessonEngine({ chapter, onComplete, onBack }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [game, setGame] = useState(new Chess());
  const [moveHistory, setMoveHistory] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [highlights, setHighlights] = useState({});

  const currentStep = chapter.steps[currentStepIndex];
  const isComplete = currentStepIndex >= chapter.steps.length;

  // Initialize game position for current step
  useEffect(() => {
    if (!isComplete && currentStep) {
      const newGame = new Chess(currentStep.fen);
      setGame(newGame);
      setFeedback(null);
      setShowNext(false);
      
      // Show instruction highlights if any
      if (currentStep.highlights) {
        setHighlights(currentStep.highlights);
      } else {
        setHighlights({});
      }
    }
  }, [currentStepIndex, isComplete]);

  const handleMove = (move) => {
    const moveString = move.from + move.to;
    
    // Check if move is correct
    if (currentStep.correctMoves.includes(moveString)) {
      // Correct move!
      setFeedback({
        type: 'correct',
        message: currentStep.explanation
      });
      setShowNext(true);
      setMoveHistory([...moveHistory, move.san]);
      
      // Highlight the move
      setHighlights({ squares: [move.to], type: 'correct' });
    } else {
      // Incorrect move - undo it
      game.undo();
      setGame(new Chess(game.fen()));
      
      setFeedback({
        type: 'incorrect',
        message: "Not quite! Think about what the position needs. Try again."
      });
      
      // Highlight the incorrect square briefly
      setHighlights({ squares: [move.to], type: 'incorrect' });
      
      setTimeout(() => {
        setHighlights(currentStep.highlights || {});
      }, 1500);
    }
  };

  const handleNext = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  if (isComplete) {
    return (
      <div className="completion-panel">
        <h3>🎉 Chapter Complete!</h3>
        <p>You've finished the {chapter.title} lesson. Great work!</p>
        <div>
          <button className="quiz-btn" onClick={() => onComplete('quiz')}>
            Take Quiz
          </button>
          <button className="retry-btn" onClick={() => setCurrentStepIndex(0)}>
            Practice Again
          </button>
          <button className="back-btn" onClick={onBack}>
            Back to Chapters
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="board-container">
        <Board game={game} onMove={handleMove} highlights={highlights} />
        <MoveList moves={moveHistory} />
      </div>
      
      <div className="instruction-panel">
        <div className="step-counter">
          Step {currentStepIndex + 1} of {chapter.steps.length}
        </div>
        <h3>Your Task</h3>
        <div className="instruction-text">
          {currentStep.instruction}
        </div>
        
        {feedback && (
          <div className={`feedback ${feedback.type}`}>
            <h4>{feedback.type === 'correct' ? '✓ Correct!' : '✗ Incorrect'}</h4>
            <p>{feedback.message}</p>
            {showNext && (
              <button className="next-btn" onClick={handleNext}>
                {currentStepIndex < chapter.steps.length - 1 ? 'Next Step →' : 'Complete Lesson'}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

// ===== QUIZ ENGINE COMPONENT =====
function QuizEngine({ chapter, onBack }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [game, setGame] = useState(new Chess());
  const [feedback, setFeedback] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [highlights, setHighlights] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = chapter.quizPositions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion) {
      const newGame = new Chess(currentQuestion.fen);
      setGame(newGame);
      setFeedback(null);
      setShowNext(false);
      setHighlights({});
    }
  }, [currentQuestionIndex]);

  const handleMove = (move) => {
    const moveString = move.from + move.to;
    
    if (currentQuestion.correctMoves.includes(moveString)) {
      // Correct!
      setScore(score + 1);
      setAttempts(attempts + 1);
      setFeedback({
        type: 'correct',
        message: currentQuestion.explanation
      });
      setShowNext(true);
      setHighlights({ squares: [move.to], type: 'correct' });
    } else {
      // Wrong
      game.undo();
      setGame(new Chess(game.fen()));
      setAttempts(attempts + 1);
      
      setFeedback({
        type: 'incorrect',
        message: "Incorrect. Think about the tactic here."
      });
      setHighlights({ squares: [move.to], type: 'incorrect' });
      
      setTimeout(() => {
        setHighlights({});
      }, 1500);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < chapter.quizPositions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizComplete(true);
    }
  };

  if (quizComplete) {
    const percentage = Math.round((score / attempts) * 100);
    return (
      <div className="completion-panel">
        <h3>Quiz Complete!</h3>
        <p style={{fontSize: '3em', margin: '20px 0'}}>
          {score} / {attempts}
        </p>
        <p style={{fontSize: '1.5em', color: percentage >= 80 ? '#48bb78' : '#ed8936'}}>
          {percentage}% Accuracy
        </p>
        <p style={{marginTop: '20px'}}>
          {percentage >= 80 ? "Excellent work! You've mastered this chapter." : 
           percentage >= 60 ? "Good job! Consider practicing the lesson again." :
           "Keep practicing! Review the lesson to improve."}
        </p>
        <button className="back-btn" onClick={onBack} style={{marginTop: '30px'}}>
          Back to Chapters
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="quiz-header">
        <div className="quiz-score">
          <span>Question {currentQuestionIndex + 1} of {chapter.quizPositions.length}</span>
          <span>Score: {score} / {attempts}</span>
        </div>
      </div>
      
      <div className="board-container">
        <Board game={game} onMove={handleMove} highlights={highlights} />
      </div>
      
      <div className="instruction-panel">
        <h3>Quiz Mode</h3>
        <div className="instruction-text">
          {currentQuestion.instruction}
        </div>
        
        {feedback && (
          <div className={`feedback ${feedback.type}`}>
            <h4>{feedback.type === 'correct' ? '✓ Correct!' : '✗ Incorrect'}</h4>
            <p>{feedback.message}</p>
            {showNext && (
              <button className="next-btn" onClick={handleNext}>
                {currentQuestionIndex < chapter.quizPositions.length - 1 ? 'Next Question →' : 'Finish Quiz'}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}


// ===== LESSON VIEW COMPONENT =====
function LessonView({ chapter, onBack }) {
  const [mode, setMode] = useState('lesson'); // 'lesson' or 'quiz'

  const handleComplete = (nextMode) => {
    if (nextMode === 'quiz') {
      setMode('quiz');
    }
  };

  return (
    <div className="lesson-view">
      <div className="lesson-header">
        <h2>{chapter.title}</h2>
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
      </div>

      <div className="lesson-content">
        {mode === 'lesson' ? (
          <LessonEngine 
            chapter={chapter} 
            onComplete={handleComplete} 
            onBack={onBack}
          />
        ) : (
          <QuizEngine 
            chapter={chapter} 
            onBack={onBack}
          />
        )}
      </div>
    </div>
  );
}

// ===== CHAPTER SELECT COMPONENT =====
function ChapterSelect({ onSelectChapter }) {
  const [progress, setProgress] = useState({});

  const chapterList = Object.values(CHAPTERS);

  return (
    <div className="chapter-select">
      <h1>♟️ Interactive Chess Teacher</h1>
      <p className="subtitle">
        Learn chess through interactive lessons. Play the moves yourself on a real board.
      </p>

      <div className="chapter-grid">
        {chapterList.map(chapter => (
          <div
            key={chapter.id}
            className={`chapter-card ${progress[chapter.id]?.completed ? 'completed' : ''}`}
            onClick={() => onSelectChapter(chapter)}
          >
            <span className={`chapter-type ${chapter.type}`}>
              {chapter.type}
            </span>
            <h3>{chapter.title}</h3>
            <p>{chapter.description}</p>
            
            {progress[chapter.id] && (
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{width: `${progress[chapter.id].percentage || 0}%`}}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== MAIN APP COMPONENT =====
function App() {
  const [selectedChapter, setSelectedChapter] = useState(null);

  return (
    <div id="app">
      {selectedChapter ? (
        <LessonView 
          chapter={selectedChapter} 
          onBack={() => setSelectedChapter(null)}
        />
      ) : (
        <ChapterSelect onSelectChapter={setSelectedChapter} />
      )}
    </div>
  );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('app'));
