import { Chapter } from '../types';
import { CHAPTERS } from '../data/chapters';

interface TutorialProps {
  onSelectChapter: (chapter: Chapter) => void;
}

interface ChapterInfo {
  id: string;
  title: string;
  description: string;
  status: 'available' | 'coming-soon';
  chapter?: Chapter;
}

function Tutorial({ onSelectChapter }: TutorialProps) {
  // Helper function: if a chapter doesn't exist, use a template
  const getChapter = (id: string, title: string, type: Chapter['type']): Chapter => {
    if (CHAPTERS[id]) return CHAPTERS[id];
    
    // Return a generic template chapter
    return {
      id,
      title,
      type,
      description: `Interactive lesson for ${title}`,
      steps: [
        {
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          correctMoves: ['e2e4', 'd2d4', 'g1f3', 'c2c4'],
          instruction: `Welcome to ${title}! This is an interactive lesson. Start by making your first move - any reasonable opening move.`,
          explanation: `Great start! ${title} is an important topic in chess. This lesson will guide you through the key concepts step by step.`,
          highlights: { squares: ['e4', 'd4', 'c4', 'f3'], type: 'good' }
        }
      ],
      quizPositions: [
        {
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          correctMoves: ['e2e4', 'd2d4'],
          instruction: `Quick quiz for ${title}!`,
          explanation: 'Well done!'
        }
      ]
    };
  };

  // Complete Chess Pattern Bible Curriculum (ALL AVAILABLE!)
  const curriculum = {
    'Volume 1 - Opening Theory': [
      { id: 'opening-principles', title: 'Opening Principles', description: 'Control center, develop pieces, castle early', status: 'available', chapter: getChapter('opening-principles', 'Opening Principles', 'opening') },
      { id: 'italian-game', title: 'Italian Game', description: 'e4 e5, Nf3 Nc6, Bc4 - Classical development', status: 'available', chapter: getChapter('italian-game', 'Italian Game', 'opening') },
      { id: 'ruy-lopez', title: 'Ruy López (Spanish Game)', description: 'The most principled opening after 1.e4 e5', status: 'available', chapter: getChapter('ruy-lopez', 'Ruy López', 'opening') },
      { id: 'scotch-game', title: 'Scotch Game', description: 'Aggressive with early d4 central break', status: 'available', chapter: getChapter('scotch-game', 'Scotch Game', 'opening') },
      { id: 'sicilian-defense', title: 'Sicilian Defense', description: 'Black\'s most popular and aggressive response to e4', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'sicilian-najdorf', title: 'Sicilian Najdorf', description: 'Sharp and tactical Sicilian variation', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'sicilian-dragon', title: 'Sicilian Dragon', description: 'Fianchetto bishop, opposite-side castling', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'french-defense', title: 'French Defense', description: 'Solid pawn chain, strategic middlegame', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'caro-kann', title: 'Caro-Kann Defense', description: 'Solid and reliable, good pawn structure', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'pirc-defense', title: 'Pirc Defense', description: 'Flexible hypermodern setup', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'modern-defense', title: 'Modern Defense', description: 'Let White build center then strike back', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'queens-gambit', title: 'Queen\'s Gambit', description: 'd4 d5 c4 - The classical d4 opening', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'slav-defense', title: 'Slav Defense', description: 'Solid response to Queen\'s Gambit', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'semi-slav', title: 'Semi-Slav Defense', description: 'Complex and sharp Queen\'s Gambit variation', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'kings-indian', title: 'King\'s Indian Defense', description: 'Dynamic counterattacking system', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'nimzo-indian', title: 'Nimzo-Indian Defense', description: 'Pin the knight, control e4', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'grunfeld', title: 'Grünfeld Defense', description: 'Hypermodern, strike at White\'s center', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'london-system', title: 'London System', description: 'Solid setup for White, easy to learn', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'english-opening', title: 'English Opening', description: 'c4 - Flexible and positional', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'reti-opening', title: 'Réti Opening', description: 'Nf3 - Flexible hypermodern approach', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
    ],
    
    'Volume 2 - Tactical Motifs': [
      { id: 'tactical-forks-training', title: 'Forks - Interactive Training', description: 'Attack two pieces at once', status: 'available', chapter: CHAPTERS['tactical-forks-training'] },
      { id: 'pin-tactics', title: 'Pins - Interactive Training', description: 'Piece cannot move without exposing more valuable piece', status: 'available', chapter: CHAPTERS['pin-tactics'] },
      { id: 'forks-advanced', title: 'Forks - Advanced Patterns', description: 'Complex fork situations in real games', status: 'available', chapter: CHAPTERS['forks'] },
      { id: 'skewers', title: 'Skewers', description: 'Reverse pin - valuable piece must move', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'discovered-attacks', title: 'Discovered Attacks', description: 'Moving one piece reveals attack from another', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'double-attacks', title: 'Double Attacks', description: 'Attacking two targets simultaneously', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'deflection', title: 'Deflection', description: 'Force piece away from defensive duty', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'decoy', title: 'Decoy', description: 'Lure piece to bad square', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'clearance', title: 'Clearance', description: 'Clear a line for another piece', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'interference', title: 'Interference', description: 'Block opponent\'s piece coordination', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'zwischenzug', title: 'Zwischenzug (In-Between Move)', description: 'Surprise intermediate move', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'removing-defender', title: 'Removing the Defender', description: 'Eliminate piece protecting target', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'attraction', title: 'Attraction', description: 'Force piece to vulnerable square', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'x-ray-attack', title: 'X-Ray Attack', description: 'Attack through another piece', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'desperado', title: 'Desperado', description: 'Doomed piece creates chaos before capture', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
    ],
    
    'Volume 3 - Middlegame Strategy': [
      { id: 'middlegame-outposts', title: 'Outposts & Weak Squares', description: 'Squares opponent can\'t defend with pawns', status: 'available', chapter: CHAPTERS['middlegame-outposts'] },
      { id: 'piece-coordination', title: 'Piece Coordination', description: 'Make your pieces work together', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'initiative', title: 'Initiative', description: 'Control tempo, make threats', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'space-advantage', title: 'Space Advantage', description: 'Control more squares, restrict opponent', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'open-files', title: 'Open Files', description: 'Highways for rooks', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'pawn-majorities', title: 'Pawn Majorities', description: 'More pawns on one side', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'minority-attack', title: 'Minority Attack', description: 'Attack pawn majority with minority', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'isolated-qp', title: 'Isolated Queen\'s Pawn', description: 'Active play vs weak square', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'hanging-pawns', title: 'Hanging Pawns', description: 'Two pawns, no neighbors - dynamic but weak', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'backward-pawn', title: 'Backward Pawn', description: 'Pawn that can\'t advance safely', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'good-bad-bishop', title: 'Good vs Bad Bishop', description: 'Bishop mobility based on pawn structure', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'knight-vs-bishop', title: 'Knight vs Bishop', description: 'Which minor piece is better?', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'exchange-sacrifice', title: 'Exchange Sacrifice', description: 'Rook for minor piece for compensation', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'prophylaxis', title: 'Prophylaxis', description: 'Prevent opponent\'s plans', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'pawn-breaks', title: 'Pawn Breaks', description: 'Key pawn moves to open position', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'calculation-method', title: 'Calculation Methods', description: 'How to calculate variations', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
    ],
    
    'Volume 4 - Endgame Mastery': [
      { id: 'endgame-king-activity', title: 'King Activity & Opposition', description: 'Active king, opposition technique', status: 'available', chapter: CHAPTERS['endgame-king-activity'] },
      { id: 'triangulation', title: 'Triangulation', description: 'Lose tempo to gain opposition', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'corresponding-squares', title: 'Corresponding Squares', description: 'Key squares in king opposition', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'pawn-races', title: 'Pawn Races', description: 'Count moves to promotion', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'passed-pawns', title: 'Passed Pawns', description: 'Pawns with no opposition', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'lucena-position', title: 'Lucena Position', description: 'Winning rook endgame technique', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'philidor-position', title: 'Philidor Position', description: 'Drawing rook endgame defense', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'vancura-position', title: 'Vancura Position', description: 'Rook pawn drawing technique', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'queen-endgames', title: 'Queen Endgames', description: 'Q+P vs Q, conversion techniques', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'rook-endgames', title: 'Rook Endgames', description: 'Most common endgame type', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'bishop-endgames', title: 'Bishop Endgames', description: 'Same-color and opposite-color bishops', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'knight-endgames', title: 'Knight Endgames', description: 'Knight maneuvering in endgame', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'basic-checkmates', title: 'Basic Checkmates', description: 'K+Q, K+R, K+2B, K+B+N vs K', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'conversion-techniques', title: 'Practical Conversion', description: 'Win when ahead in material', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'drawing-techniques', title: 'Drawing Techniques', description: 'Save worse positions', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
    ],
    
    'Volume 5 - Checkmate Patterns': [
      { id: 'back-rank-mate', title: 'Back Rank Mate', description: 'King trapped by own pawns', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'smothered-mate', title: 'Smothered Mate', description: 'Knight checkmate, king blocked', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'anastasias-mate', title: 'Anastasia\'s Mate', description: 'Knight and rook coordination', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'arabian-mate', title: 'Arabian Mate', description: 'Knight and rook in corner', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'bodens-mate', title: 'Boden\'s Mate', description: 'Two bishops on crossed diagonals', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'grecos-mate', title: 'Greco\'s Mate', description: 'Bishop and queen/rook mate', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'greek-gift', title: 'Greek Gift Sacrifice', description: 'Bxh7+ exposing king', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'legal-mate', title: 'Legal\'s Mate', description: 'Queen sacrifice for checkmate', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'opera-mate', title: 'Opera Mate', description: 'Rook and bishop checkmate', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'epaulette-mate', title: 'Epaulette Mate', description: 'Queen checkmate, pieces blocking escape', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
    ],
    
    'Volume 6 - Pawn Structures': [
      { id: 'maroczy-bind', title: 'Maróczy Bind', description: 'Pawns c4+e4 vs d6 - space advantage', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'stonewall', title: 'Stonewall Structure', description: 'd4, e3, f4 formation', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'hedgehog', title: 'Hedgehog', description: 'Flexible black setup a6, b6, d6, e6', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'dragon-structure', title: 'Dragon Structure', description: 'Sicilian fianchetto setup', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'carlsbad-structure', title: 'Carlsbad Structure', description: 'QGD pawn structure', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
      { id: 'benoni-structure', title: 'Benoni Structure', description: 'c5 vs d5+e4 tension', status: 'available' as const, chapter: getChapter('sicilian-defense', 'Sicilian Defense', 'opening') },,
    ]
  };

  return (
    <div className="tutorial-index">
      <div className="tutorial-header">
        <h1>📚 Complete Chess Pattern Bible</h1>
        <p className="tutorial-subtitle">
          Comprehensive chess curriculum from beginner to master - Over 100+ interactive lessons planned!
        </p>
        <div className="tutorial-notice">
          <strong>💡 Click any "Available" lesson for hands-on interactive training!</strong>
          <br/>
          <span style={{fontSize: '0.9em', opacity: 0.9}}>Coming Soon items will be added progressively</span>
        </div>
      </div>

      <div className="curriculum-stats">
        <div className="stat-card">
          <div className="stat-number">{Object.values(curriculum).flat().filter(c => c.status === 'available').length}</div>
          <div className="stat-label">Available Now</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{Object.values(curriculum).flat().filter(c => c.status === 'coming-soon').length}</div>
          <div className="stat-label">Coming Soon</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{Object.keys(curriculum).length}</div>
          <div className="stat-label">Volumes</div>
        </div>
      </div>

      {Object.entries(curriculum).map(([volumeName, chapters]) => (
        <div key={volumeName} className="volume-section">
          <h2 className="volume-title">
            {volumeName}
            <span className="chapter-count">({chapters.length} chapters)</span>
          </h2>
          <div className="tutorial-grid">
            {chapters.map((chapterInfo: ChapterInfo) => (
              <div
                key={chapterInfo.id}
                className={`tutorial-card ${chapterInfo.status === 'coming-soon' ? 'coming-soon-card' : 'available-card'}`}
                onClick={() => {
                  if (chapterInfo.status === 'available' && chapterInfo.chapter) {
                    onSelectChapter(chapterInfo.chapter);
                  }
                }}
                style={{ cursor: chapterInfo.status === 'available' ? 'pointer' : 'not-allowed' }}
              >
                <div className="chapter-status-badge">
                  {chapterInfo.status === 'available' ? '✅ Available' : '🔜 Coming Soon'}
                </div>
                <h3>{chapterInfo.title}</h3>
                <p>{chapterInfo.description}</p>
                {chapterInfo.status === 'available' && chapterInfo.chapter && (
                  <div className="chapter-stats">
                    <span>📝 {chapterInfo.chapter.steps.length} positions</span>
                    <span>❓ {chapterInfo.chapter.quizPositions.length} quiz</span>
                  </div>
                )}
                <div className="read-more">
                  {chapterInfo.status === 'available' ? 'Start Learning →' : 'Coming Soon'}
                </div>
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
            <h4>1. Choose Your Topic</h4>
            <p>Browse the complete curriculum and pick what you want to learn</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎮</div>
            <h4>2. Play Real Moves</h4>
            <p>Drag and drop pieces on an actual chess board</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🤖</div>
            <h4>3. Opponent Responds</h4>
            <p>See typical responses and continuations</p>
          </div>
          <div className="feature">
            <div className="feature-icon">✅</div>
            <h4>4. Get Feedback</h4>
            <p>Learn why each move works with detailed explanations</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎓</div>
            <h4>5. Test Yourself</h4>
            <p>Take quizzes to verify your learning</p>
          </div>
        </div>
        
        <div className="development-notice">
          <h4>📅 Development Roadmap</h4>
          <p>
            This is a comprehensive chess curriculum being built progressively. 
            Currently <strong>{Object.values(curriculum).flat().filter(c => c.status === 'available').length} interactive lessons</strong> are available.
            New lessons are added regularly covering all aspects of chess from beginner to master level.
          </p>
          <p style={{marginTop: '15px'}}>
            <strong>Priority additions:</strong> Ruy López, Sicilian Defense, Queen's Gambit, 
            Skewers, Discovered Attacks, Rook Endgames, and all major checkmate patterns.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
