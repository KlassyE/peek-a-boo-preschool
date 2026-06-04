import { useEffect, useState } from 'react';

const burstPieces = ['A', 'B', 'C', '1', '2', '3', 'BOO'];

function PlayfulEffects() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    const handlePointerMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    const handlePointerDown = (event) => {
      const id = `${Date.now()}-${Math.random()}`;
      const pieces = burstPieces.map((piece, index) => ({
        piece,
        id: `${id}-${piece}-${index}`,
        angle: index * 51,
        distance: 44 + index * 8,
      }));

      setBursts((currentBursts) => [
        ...currentBursts.slice(-5),
        {
          id,
          x: event.clientX,
          y: event.clientY,
          pieces,
        },
      ]);

      window.setTimeout(() => {
        setBursts((currentBursts) => currentBursts.filter((burst) => burst.id !== id));
      }, 900);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return (
    <>
      <div
        className="playful-cursor"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
        aria-hidden="true"
      >
        <span />
      </div>

      <div className="click-burst-layer" aria-hidden="true">
        {bursts.map((burst) => (
          <div
            className="click-burst"
            key={burst.id}
            style={{ left: burst.x, top: burst.y }}
          >
            {burst.pieces.map((piece) => (
              <span
                key={piece.id}
                style={{
                  '--burst-angle': `${piece.angle}deg`,
                  '--burst-distance': `${piece.distance}px`,
                }}
              >
                {piece.piece}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default PlayfulEffects;