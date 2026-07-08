import { useState } from 'react';
import { Chapter, ChapterProgress } from '../types';
import { CHAPTERS } from '../data/chapters';

interface ChapterSelectProps {
  onSelectChapter: (chapter: Chapter) => void;
  onOpenTutorial: () => void;
}

function ChapterSelect({ onSelectChapter, onOpenTutorial }: ChapterSelectProps) {
  const [progress] = useState<Record<string, ChapterProgress>>({});
  const chapterList = Object.values(CHAPTERS);

  return (
    <div className="chapter-select">
      <h1>♟️ Interactive Chess Teacher</h1>
      <p className="subtitle">
        Learn chess through interactive lessons. Play the moves yourself on a real board.
      </p>

      <button className="tutorial-btn" onClick={onOpenTutorial}>
        📚 Open Chess Pattern Bible (Complete Theory)
      </button>

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

export default ChapterSelect;
