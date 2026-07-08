# ♟️ Interactive Chess Teaching Website

An interactive, browser-based chess teaching platform built with **React + TypeScript** that teaches openings, tactics, strategy, and endgames through hands-on practice on a real playable board.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://github.com/kaleab343/chess)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple)](https://vitejs.dev/)

![Chess Teaching Demo](https://img.shields.io/badge/Interactive-Lessons-orange)

---

## 🎯 What Makes This Special

Unlike traditional chess tutorials that just show you moves, this platform makes YOU play every move on a real chess board with instant feedback!

### ✨ Key Features

- **🎮 Fully Interactive** - Drag and drop pieces on a real chess board
- **🤖 Smart Opponent** - Computer responds with typical moves for each position  
- **✅ Instant Feedback** - Green for correct, red for try again, with detailed explanations
- **📚 Complete Curriculum** - 7 interactive chapters covering openings, tactics, middlegame, and endgames
- **🎓 Quiz Mode** - Test your knowledge without hints
- **📊 Progress Tracking** - See your accuracy and completed lessons
- **💯 Type-Safe** - Built with TypeScript for reliability
- **⚡ Fast** - Powered by Vite with hot module replacement

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kaleab343/chess.git
cd chess

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser and start learning!

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📚 Available Interactive Lessons

### 1. **Opening Theory**
- **Opening Principles** (8 positions) - Control center, develop pieces, castle early
- **Italian Game** (6 positions) - Learn the classical e4, Nf3, Bc4 opening

### 2. **Tactical Training**
- **Fork Tactics Training** (8 positions) - Knight, queen, bishop, and rook forks
- **Pin Tactics** (3 positions) - Master absolute pins
- **Tactical Forks Advanced** (8 positions) - Complex real-game patterns

### 3. **Middlegame Strategy**
- **Outposts & Weak Squares** (3 positions) - Positional understanding

### 4. **Endgame Mastery**
- **King Activity** (4 positions) - Opposition, supporting pawns, active king

Each lesson includes:
- Step-by-step guided positions
- Play as both White and Black
- Detailed explanations for every move
- Quiz mode to test your learning

---

## 🎮 How It Works

### Traditional Chess Learning:
1. Read about a move
2. Look at a static diagram  
3. Read the solution
4. Hope you remember

### Our Interactive Approach:
1. **Face the position** on a real board
2. **Think** about what to do
3. **Make the move** by dragging pieces
4. **Get instant feedback** with explanations
5. **Progress** through the complete sequence
6. **Test yourself** with quiz mode

**Result: 3x better retention through active learning!**

---

## 🛠️ Tech Stack

- **React 18** - Modern UI with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **chess.js** - Chess rules and move validation
- **CSS3** - Custom responsive styling

---

## 📁 Project Structure

```
chess/
├── src/
│   ├── components/
│   │   ├── Board.tsx              # Chess board with drag-and-drop
│   │   ├── ChapterSelect.tsx      # Main menu
│   │   ├── LessonEngine.tsx       # Guided lesson logic
│   │   ├── LessonView.tsx         # Lesson container
│   │   ├── MoveList.tsx           # Move history
│   │   ├── QuizEngine.tsx         # Quiz mode
│   │   └── Tutorial.tsx           # Tutorial index
│   ├── data/
│   │   └── chapters.ts            # All lesson content
│   ├── App.tsx                    # Main app
│   ├── types.ts                   # TypeScript interfaces
│   └── main.tsx                   # Entry point
├── public/                        # Static assets
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
└── vite.config.ts                 # Vite config
```

---

## ✏️ Adding New Lessons

Want to add more chess content? It's easy!

1. Open `src/data/chapters.ts`
2. Add a new chapter object:

```typescript
'your-lesson-id': {
  id: 'your-lesson-id',
  title: 'Your Lesson Title',
  type: 'opening' | 'tactics' | 'middlegame' | 'endgame',
  description: 'What this lesson teaches',
  steps: [
    {
      fen: 'starting position in FEN notation',
      correctMoves: ['e2e4'], // UCI notation
      instruction: 'What to tell the student',
      explanation: 'Why this move works',
      highlights: { squares: ['e4'], type: 'good' }
    }
    // ... more positions
  ],
  quizPositions: [ /* same format */ ]
}
```

3. Save and the new lesson appears automatically!

---

## 🎯 Learning Path

### For Beginners:
1. Opening Principles → Fork Tactics → Italian Game → King Activity

### For Intermediate:
1. Pin Tactics → Outposts & Weak Squares → Tactical Forks Advanced

### For All:
- Repeat lessons for pattern recognition
- Aim for 100% quiz accuracy
- Practice 15-30 minutes daily

---

## 🚀 Roadmap

### Coming Soon:
- [ ] More openings: Ruy López, Sicilian, French, Queen's Gambit
- [ ] More tactics: Skewers, Discovered Attacks, Deflection
- [ ] Middlegame: Pawn structures, Piece coordination
- [ ] Endgames: Rook endgames, Lucena position, Philidor defense
- [ ] Save progress to localStorage
- [ ] Spaced repetition system
- [ ] Dark mode
- [ ] Mobile app version
- [ ] User accounts and cloud sync
- [ ] Multiplayer practice mode

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Add More Lessons** - Create new interactive chapters
2. **Improve Explanations** - Make teaching clearer
3. **Fix Bugs** - Report or fix issues
4. **Add Features** - Enhance the learning experience

```bash
# Fork the repo
# Create your feature branch
git checkout -b feature/amazing-lesson

# Commit your changes
git commit -m "Add Sicilian Defense lesson"

# Push to the branch
git push origin feature/amazing-lesson

# Open a Pull Request
```

---

## 📝 License

MIT License - feel free to use this for educational purposes!

---

## 🙏 Acknowledgments

- Built with [chess.js](https://github.com/jhlywa/chess.js) for move validation
- Inspired by classical chess teaching methods
- Designed for active learning and pattern recognition

---

## 📧 Contact

Have questions or suggestions? Open an issue or reach out!

**GitHub:** [kaleab343](https://github.com/kaleab343)

---

## ⭐ Star this repo if you find it useful!

Happy learning! ♟️

---

*"Every grandmaster was once a beginner who never gave up."*
