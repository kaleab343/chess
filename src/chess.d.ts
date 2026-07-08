declare module 'chess.js' {
  export interface Move {
    from: string;
    to: string;
    san: string;
    promotion?: string;
    flags: string;
    piece: string;
    captured?: string;
  }

  export interface Piece {
    type: string;
    color: 'w' | 'b';
  }

  export class Chess {
    constructor(fen?: string);
    move(move: string | { from: string; to: string; promotion?: string }): Move | null;
    undo(): Move | null;
    fen(): string;
    turn(): 'w' | 'b';
    game_over(): boolean;
    board(): (Piece | null)[][];
  }
}
