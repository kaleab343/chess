import { Chess, Move } from 'chess.js';

export interface LessonStep {
  fen: string;
  correctMoves: string[];
  instruction: string;
  explanation: string;
  highlights?: {
    squares: string[];
    type: 'good' | 'danger' | 'square' | 'correct' | 'incorrect';
  };
}

export interface Chapter {
  id: string;
  title: string;
  type: 'opening' | 'tactics' | 'middlegame' | 'endgame';
  description: string;
  steps: LessonStep[];
  quizPositions: LessonStep[];
}

export interface ChapterProgress {
  completed: boolean;
  percentage: number;
  lastStudied?: Date;
  accuracy?: number;
}

export interface Feedback {
  type: 'correct' | 'incorrect';
  message: string;
}

export interface BoardHighlights {
  squares: string[];
  type: 'good' | 'danger' | 'square' | 'correct' | 'incorrect';
}

export type { Chess, Move };
