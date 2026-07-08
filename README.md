# Interactive Chess Teaching Website

An interactive, browser-based chess teaching platform that teaches openings, tactics, strategy, and endgames through hands-on practice on a real playable board.

## Features

### Core Experience
- **Real Playable Board** - Every lesson uses chess.js for move validation and chessboard.js for rendering
- **Guided Move-by-Move Lessons** - Learn by doing: the site shows positions, gives instructions, and waits for YOU to make the moves
- **Instant Feedback** - Correct moves are highlighted in green with explanations; incorrect moves show what's wrong
- **Interactive Highlighting** - Color-coded squares show best moves, danger zones, and key tactical themes
- **Quiz Mode** - Test your knowledge without hints after completing each chapter
- **Progress Tracking** - Track your completion and accuracy

### Current Chapters (MVP)

#### 1. Italian Game (Opening)
Learn the classical e4, Nf3, Bc4 opening with step-by-step guidance:
- Opening principles: center control and rapid development
- The key Bc4 move targeting f7
- Black's typical responses
- Setting up for the middlegame

#### 2. Tactical Forks (Tactics)
Master the fork tactic with 8 progressive puzzles:
- Knight forks (the most common)
- Queen forks on the back rank
- Royal forks (king + piece)
- Rook forks
- Bishop forks
- Complex middle game fork patterns

## How to Use

### Getting Started
1. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari)
2. Choose a chapter from the main menu
3. Follow the on-screen instructions for each position
4. Drag and drop pieces to make your moves
5. Get instant feedback and learn why each move works

### Lesson Flow
1. **Read the instruction** for the current position
2. **Make your move** on the board by dragging a piece
3. **Get feedback** - correct moves advance with an explanation; incorrect moves let you retry
4. **Complete the lesson** through all positions
5. **Take the quiz** to test what you learned without hints

### Tips
- Take your time on each move - think before you drag
- Read the explanations carefully - they teach the "why" behind each move
- Retry lessons as many times as you want
- Aim for 80%+ accuracy on quizzes to show mastery

## Technical Details

### Architecture
- **Single-page React app** - Clean component structure
- **chess.js** - Handles all move validation and game state
- **chessboard.js** - Renders the interactive board
- **No backend required** - Runs entirely in the browser

### Component Structure
- `Board` - Renders the chess board and handles drag-and-drop
- `LessonEngine` - Manages lesson state, validates moves, provides feedback
- `QuizEngine` - Handles quiz mode with scoring
- `MoveList` - Shows the current game's move history
- `ChapterSelect` - Main menu with all available chapters

### Data Format
Each lesson chapter uses a simple JSON structure:
```javascript
{
  id: 'chapter-name',
  title: 'Chapter Title',
  type: 'opening' | 'tactics' | 'middlegame' | 'endgame',
  description: 'Short description',
  steps: [
    {
      fen: 'starting FEN position',
      correctMoves: ['e2e4', 'e7e5'], // acceptable move(s) in UCI format
      instruction: 'What to tell the learner',
      explanation: 'Why this move is good',
      highlights: { squares: ['e4'], type: 'good' } // optional
    }
  ],
  quizPositions: [ /* same structure as steps */ ]
}
```

## Adding New Chapters

To add more chapters, simply add new entries to the `CHAPTERS` object in `app.js`:

```javascript
'chapter-id': {
  id: 'chapter-id',
  title: 'New Chapter',
  type: 'tactics', // or 'opening', 'middlegame', 'endgame'
  description: 'What this chapter teaches',
  steps: [
    // ... your lesson steps
  ],
  quizPositions: [
    // ... quiz questions
  ]
}
```

### Move Format
Moves use UCI notation (from-square + to-square):
- `e2e4` = e2 to e4
- `g1f3` = knight from g1 to f3
- `e7e8q` = pawn promotes to queen

## Roadmap

### Planned Chapters

**Openings**
- Ruy López, Scotch Game
- Sicilian Defense (Najdorf, Dragon)
- French Defense, Caro-Kann
- Queen's Gambit, Slav, King's Indian
- London System, English Opening, Réti

**Tactics**
- Pins, Skewers, Discovered Attacks
- Deflection, Decoys, Removal of Defender
- Zwischenzug, Clearance
- Greek Gift Sacrifice

**Middlegame**
- Piece Coordination, Initiative
- Weak Squares, Open Files
- Pawn Structures (isolated, hanging, backward pawns)
- Minor Piece Battles

**Endgames**
- King & Pawn Endings
- Lucena & Philidor Positions
- Rook Endings
- Basic Queen/Bishop/Knight Mates

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (touch-enabled)

## License

Free to use and modify for educational purposes.

## Credits

Built with:
- [chess.js](https://github.com/jhlywa/chess.js) - Chess move validation
- [chessboard.js](https://chessboardjs.com/) - Interactive board
- [React](https://react.dev/) - UI framework
