import { useState, useEffect } from 'react';
import { Chess, Move } from 'chess.js';
import { Chapter, Feedback, BoardHighlights } from '../types';
import Board from './Board';

interface QuizEngineProps {
  chapter: Chapter;
  onBack: () => void;
}

function QuizEngine({ chapter, onBack }: QuizEngineProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [game, setGame] = useState(new Chess());
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [showNext, setShowNext] = useState(false);
  const [highlights, setHighlights] = useState<BoardHighlights | undefined>();
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = chapter.quizPositions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion) {
      const newGame = new Chess(currentQuestion.fen);
      setGame(newGame);
      setFeedback(null);
      setShowNext(false);
      setHighlights(undefined);
    }
  }, [currentQuestionIndex, currentQuestion]);

  const handleMove = (move: Move) => {
    const moveString = move.from + move.to;
    
    if (currentQuestion.correctMoves.includes(moveString)) {
      setScore(score + 1);
      setAttempts(attempts + 1);
      setFeedback({
        type: 'correct',
        message: currentQuestion.explanation
      });
      setShowNext(true);
      setHighlights({ squares: [move.to], type: 'correct' });
    } else {
      game.undo();
      setGame(new Chess(game.fen()));
      setAttempts(attempts + 1);
      
      setFeedback({
        type: 'incorrect',
        message: "Incorrect. Think about the tactic here."
      });
      setHighlights({ squares: [move.to], type: 'incorrect' });
      
      setTimeout(() => {
        setHighlights(undefined);
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
    const percentage = attempts > 0 ? Math.round((score / attempts) * 100) : 0;
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

export default QuizEngine;
