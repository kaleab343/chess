import { useState, useEffect } from 'react';
import { Chess, Move } from 'chess.js';
import { Chapter, Feedback, BoardHighlights } from '../types';
import Board from './Board';
import MoveList from './MoveList';

interface LessonEngineProps {
  chapter: Chapter;
  onComplete: (mode: string) => void;
  onBack: () => void;
}

function LessonEngine({ chapter, onComplete, onBack }: LessonEngineProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [game, setGame] = useState(new Chess());
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [showNext, setShowNext] = useState(false);
  const [highlights, setHighlights] = useState<BoardHighlights | undefined>();

  const currentStep = chapter.steps[currentStepIndex];
  const isComplete = currentStepIndex >= chapter.steps.length;

  useEffect(() => {
    if (!isComplete && currentStep) {
      const newGame = new Chess(currentStep.fen);
      setGame(newGame);
      setFeedback(null);
      setShowNext(false);
      
      if (currentStep.highlights) {
        setHighlights(currentStep.highlights);
      } else {
        setHighlights(undefined);
      }
    }
  }, [currentStepIndex, isComplete, currentStep]);

  const handleMove = (move: Move) => {
    const moveString = move.from + move.to;
    
    if (currentStep.correctMoves.includes(moveString)) {
      setFeedback({
        type: 'correct',
        message: currentStep.explanation
      });
      setShowNext(true);
      setMoveHistory([...moveHistory, move.san]);
      setHighlights({ squares: [move.to], type: 'correct' });
    } else {
      game.undo();
      setGame(new Chess(game.fen()));
      
      setFeedback({
        type: 'incorrect',
        message: "Not quite! Think about what the position needs. Try again."
      });
      
      setHighlights({ squares: [move.to], type: 'incorrect' });
      
      setTimeout(() => {
        setHighlights(currentStep.highlights);
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

export default LessonEngine;
