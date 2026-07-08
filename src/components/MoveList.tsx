interface MoveListProps {
  moves: string[];
}

function MoveList({ moves }: MoveListProps) {
  return (
    <div className="move-list">
      <h4>Moves Played</h4>
      {moves.length === 0 ? (
        <div style={{color: '#a0aec0', fontStyle: 'italic'}}>No moves yet</div>
      ) : (
        moves.map((move, idx) => (
          <div key={idx} className="move-item">
            {Math.floor(idx / 2) + 1}. {idx % 2 === 0 ? move : `... ${move}`}
          </div>
        ))
      )}
    </div>
  );
}

export default MoveList;
