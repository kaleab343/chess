import { Chapter } from '../types';
import { CHAPTERS } from '../data/chapters';

interface TutorialProps {
  onSelectChapter: (chapter: Chapter) => void;
}

function Tutorial({ onSelectChapter }: TutorialProps) {
  const tutorialChapters = {
    'Opening Theory': [
      CHAPTERS['opening-principles'],
      CHAPTERS['italian-game'],
    ],
    'Tactical Training': [
      CHAPTERS['tactical-forks-training'],
      CHAPTERS['pin-tactics'],
      CHAPTERS['forks'],
    ],
    'Middlegame Strategy': [
      CHAPTERS['middlegame-outposts'],
    ],
    'Endgame Mastery': [
      CHAPTERS['endgame-king-activity'],
    ],
  };

  return (
    <div className="tutorial-index">
      <div className="tutorial-header">
        <h1>📚 Interactive Chess Pattern Bible</h1>
        <p className="tutorial-subtitle">
          Master chess through hands-on interactive lessons. Play every move yourself on a real board!
        </p>
        <div className="tutorial-notice">
          <strong>💡 All lessons are fully interactive!</strong> You'll play the moves, see opponent responses, and get instant feedback.
        </div>
      </div>

      {Object.entries(tutorialChapters).map(([category, chapters]) => (
        <div key={category} className="volume-section">
          <h2 className="volume-title">{category}</h2>
          <div className="tutorial-grid">
            {chapters.map(chapter => (
              <div
                key={chapter.id}
                className={`tutorial-card chapter-type-${chapter.type}`}
                onClick={() => onSelectChapter(chapter)}
              >
                <div className={`chapter-type ${chapter.type}`}>
                  {chapter.type}
                </div>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                <div className="chapter-stats">
                  <span>📝 {chapter.steps.length} interactive positions</span>
                  <span>❓ {chapter.quizPositions.length} quiz questions</span>
                </div>
                <div className="read-more">Start Learning →</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="tutorial-footer">
        <h3>🎯 How Interactive Lessons Work</h3>
        <div className="tutorial-features">
          <div className="feature">
            <div className="feature-icon">♟️</div>
            <h4>Play Real Moves</h4>
            <p>Drag and drop pieces on a real chess board</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🤖</div>
            <h4>Opponent Responds</h4>
            <p>The computer plays back, showing typical responses</p>
          </div>
          <div className="feature">
            <div className="feature-icon">✅</div>
            <h4>Instant Feedback</h4>
            <p>Learn why each move works with detailed explanations</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎓</div>
            <h4>Quiz Yourself</h4>
            <p>Test your knowledge without hints after each lesson</p>
          </div>
        </div>
        <p className="coming-soon">
          <strong>🚀 Coming Soon:</strong> Ruy López, Sicilian Defense, French Defense, Queen's Gambit, 
          Skewer Tactics, Discovered Attacks, Pawn Structure Mastery, Rook Endgames, and 50+ more interactive chapters!
        </p>
      </div>
    </div>
  );
}

export default Tutorial;
