import { useState } from 'react';
import { Chess, Move } from 'chess.js';
import { BoardHighlights } from '../types';

interface BoardProps {
  game: Chess;
  onMove: (move: Move) => void;
  highlights?: BoardHighlights;
}

const PIECE_SYMBOLS: Record<string, string> = {
  'wP': '♙', 'wN': '♘', 'wB': '♗', 'wR': '♖', 'wQ': '♕', 'wK': '♔',
  'bP': '♟', 'bN': '♞', 'bB': '♝', 'bR': '♜', 'bQ': '♛', 'bK': '♚'
};

function Board({ game, onMove, highlights }: BoardProps) {
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const board = game.board();

  const handleSquareClick = (square: string, row: number, col: number) => {
    const piece = board[row][col];

    if (selectedSquare) {
      // Try to move
      try {
        const move = game.move({
          from: selectedSquare,
          to: square,
          promotion: 'q'
        });

        if (move) {
          onMove(move);
          setSelectedSquare(null);
          return;
        }
      } catch (e) {
        // Invalid move
      }
      setSelectedSquare(null);
    }

    // Select new piece
    if (piece && piece.color === game.turn()) {
      setSelectedSquare(square);
    }
  };

  const getSquareName = (row: number, col: number): string => {
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
    return files[col] + ranks[row];
  };

  const getPieceSymbol = (piece: { type: string; color: string } | null): string => {
    if (!piece) return '';
    const key = piece.color + piece.type.toUpperCase();
    return PIECE_SYMBOLS[key] || '';
  };

  return (
    <div className="chess-board">
      {board.map((row: any[], rowIndex: number) => 
        row.map((piece: any, colIndex: number) => {
          const squareName = getSquareName(rowIndex, colIndex);
          const isLight = (rowIndex + colIndex) % 2 === 0;
          const isSelected = selectedSquare === squareName;
          const isHighlighted = highlights?.squares.includes(squareName);

          let highlightClass = '';
          if (isHighlighted && highlights) {
            highlightClass = `highlight-${highlights.type}`;
          }

          return (
            <div
              key={squareName}
              className={`square ${isLight ? 'light' : 'dark'} ${isSelected ? 'selected' : ''} ${highlightClass}`}
              onClick={() => handleSquareClick(squareName, rowIndex, colIndex)}
            >
              {getPieceSymbol(piece)}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Board;
