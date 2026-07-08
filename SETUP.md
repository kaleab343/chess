# Setup Instructions

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Installation

1. Install dependencies:
```bash
npm install
```

or with yarn:
```bash
yarn install
```

## Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

or with yarn:
```bash
yarn dev
```

The app will open at `http://localhost:5173` (or another port if 5173 is busy).

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
chess/
├── src/
│   ├── components/
│   │   ├── Board.tsx           # Chess board with drag-and-drop
│   │   ├── ChapterSelect.tsx   # Main menu
│   │   ├── LessonEngine.tsx    # Guided lesson logic
│   │   ├── LessonView.tsx      # Lesson container
│   │   ├── MoveList.tsx        # Move history display
│   │   └── QuizEngine.tsx      # Quiz mode logic
│   ├── data/
│   │   └── chapters.ts         # All lesson content
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # Styles
│   ├── main.tsx               # Entry point
│   └── types.ts               # TypeScript interfaces
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **chess.js** - Chess rules and validation
- **CSS** - Custom styling

## Features

✅ Interactive chess board with piece movement
✅ Guided step-by-step lessons
✅ Instant feedback on moves
✅ Quiz mode for testing
✅ Two complete chapters (Italian Game & Forks)
✅ Progress tracking
✅ Responsive design
✅ Type-safe codebase

## Adding New Chapters

Edit `src/data/chapters.ts` and add a new chapter object following this structure:

```typescript
'new-chapter': {
  id: 'new-chapter',
  title: 'Chapter Title',
  type: 'opening' | 'tactics' | 'middlegame' | 'endgame',
  description: 'Short description',
  steps: [
    {
      fen: 'starting position in FEN notation',
      correctMoves: ['e2e4'], // UCI notation
      instruction: 'What to tell the student',
      explanation: 'Why this move works',
      highlights: { squares: ['e4'], type: 'good' }
    }
  ],
  quizPositions: [ /* same format */ ]
}
```

## Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will automatically use the next available port.

### Module not found errors
Run `npm install` to ensure all dependencies are installed.

### TypeScript errors
Run `npm run lint` to check for type errors without building.

## License

MIT - Free to use for educational purposes
