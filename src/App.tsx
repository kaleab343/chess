import { useState } from 'react';
import ChapterSelect from './components/ChapterSelect';
import LessonView from './components/LessonView';
import Tutorial from './components/Tutorial';
import { Chapter } from './types';
import './App.css';

type View = 'menu' | 'lesson' | 'tutorial';

function App() {
  const [currentView, setCurrentView] = useState<View>('menu');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const handleSelectChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setCurrentView('lesson');
  };

  const handleBackToMenu = () => {
    setCurrentView('menu');
    setSelectedChapter(null);
  };

  return (
    <div id="app">
      {currentView === 'lesson' && selectedChapter ? (
        <LessonView 
          chapter={selectedChapter} 
          onBack={handleBackToMenu}
        />
      ) : currentView === 'tutorial' ? (
        <div className="lesson-view">
          <div className="lesson-header">
            <h2>Interactive Chess Pattern Bible</h2>
            <button className="back-btn" onClick={handleBackToMenu}>
              ← Back to Menu
            </button>
          </div>
          <Tutorial onSelectChapter={handleSelectChapter} />
        </div>
      ) : (
        <ChapterSelect 
          onSelectChapter={handleSelectChapter}
          onOpenTutorial={() => setCurrentView('tutorial')}
        />
      )}
    </div>
  );
}

export default App;
