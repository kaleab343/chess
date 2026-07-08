import { useState } from 'react';
import { Chapter } from '../types';
import LessonEngine from './LessonEngine';
import QuizEngine from './QuizEngine';

interface LessonViewProps {
  chapter: Chapter;
  onBack: () => void;
}

function LessonView({ chapter, onBack }: LessonViewProps) {
  const [mode, setMode] = useState<'lesson' | 'quiz'>('lesson');

  const handleComplete = (nextMode: string) => {
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

export default LessonView;
