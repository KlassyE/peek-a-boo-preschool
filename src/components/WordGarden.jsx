import { useMemo, useRef, useState } from 'react';
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { wordRounds } from '../content/siteContent';

const confettiTemplates = [
  { piece: 'YAY', shape: 'tag' },
  { piece: 'WIN', shape: 'tag' },
  { piece: 'WOW', shape: 'tag' },
  { piece: 'STAR', shape: 'tag' },
  { piece: '*', shape: 'star' },
  { piece: '+', shape: 'star' },
  { piece: '', shape: 'dot' },
  { piece: '', shape: 'ribbon' },
  { piece: '', shape: 'square' },
];

function shuffleLetters(word, roundIndex) {
  const letters = word.split('');
  const rotation = roundIndex % letters.length;
  return [...letters.slice(rotation), ...letters.slice(0, rotation)].reverse();
}

function WordGarden() {
  const [roundIndex, setRoundIndex] = useState(0);
  const [chosenLetters, setChosenLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [confettiBursts, setConfettiBursts] = useState([]);
  const chosenLettersRef = useRef([]);

  const round = wordRounds[roundIndex];
  const targetLetters = round.word.split('');
  const scrambledLetters = useMemo(
    () => shuffleLetters(round.word, roundIndex),
    [round.word, roundIndex],
  );
  const currentGuess = chosenLetters.join('');
  const isComplete = currentGuess.length === round.word.length;
  const isCorrect = isComplete && currentGuess === round.word;

  const celebrateWord = (nextScore) => {
    const id = `${round.word}-${roundIndex}-${nextScore}`;
    const pieces = Array.from({ length: 54 }, (_, index) => {
      const template = confettiTemplates[index % confettiTemplates.length];

      return {
        ...template,
        id: `${id}-${template.shape}-${index}`,
        angle: (index * 47) % 360,
        distance: 82 + (index % 7) * 20,
        delay: (index % 9) * 24,
        spin: index % 2 === 0 ? 300 : -300,
        x: 10 + ((index * 23) % 82),
        y: 18 + ((index * 31) % 58),
      };
    });

    setConfettiBursts((currentBursts) => [
      ...currentBursts.slice(-2),
      { id, pieces },
    ]);

    window.setTimeout(() => {
      setConfettiBursts((currentBursts) => currentBursts.filter((burst) => burst.id !== id));
    }, 1200);
  };

  const pickLetter = (letter) => {
    const currentLetters = chosenLettersRef.current;

    if (currentLetters.length === round.word.length) {
      return;
    }

    if (letter === targetLetters[currentLetters.length]) {
      const nextGuess = [...currentLetters, letter];
      chosenLettersRef.current = nextGuess;
      setChosenLetters(nextGuess);

      if (nextGuess.join('') === round.word) {
        const nextScore = score + 1;
        setScore((currentScore) => currentScore + 1);
        celebrateWord(nextScore);
      }
    } else {
      chosenLettersRef.current = [];
      setChosenLetters([]);
    }
  };

  const resetRound = () => {
    chosenLettersRef.current = [];
    setChosenLetters([]);
  };

  const goNext = () => {
    chosenLettersRef.current = [];
    setChosenLetters([]);
    setRoundIndex((currentIndex) => (currentIndex + 1) % wordRounds.length);
  };

  return (
    <section className={`word-garden ${confettiBursts.length > 0 ? 'is-celebrating' : ''}`} id="word-garden" aria-labelledby="word-garden-title">
      <div className="word-confetti-layer" aria-hidden="true">
        {confettiBursts.map((burst) => (
          <div className="word-confetti-burst" key={burst.id}>
            {burst.pieces.map((piece) => (
              <span
                className={`word-confetti-piece ${piece.shape}`}
                key={piece.id}
                style={{
                  '--confetti-angle': `${piece.angle}deg`,
                  '--confetti-distance': `${piece.distance}px`,
                  '--confetti-delay': `${piece.delay}ms`,
                  '--confetti-spin': `${piece.spin}deg`,
                  '--confetti-x': `${piece.x}%`,
                  '--confetti-y': `${piece.y}%`,
                }}
              >
                {piece.piece}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="section-kicker">Three-letter word game</div>
      <div className="word-garden-grid">
        <div>
          <h2 id="word-garden-title">Word Garden</h2>
          <p>{round.clue}</p>
          <div className="score-pill">
            <Sparkles size={18} aria-hidden="true" />
            <span>{score} bright wins</span>
          </div>
        </div>

        <div className="word-board" aria-live="polite">
          <div className="letter-slots" aria-label={`Build the word ${round.word}`}>
            {targetLetters.map((letter, index) => (
              <span key={`${round.word}-${letter}-${index}`}>{chosenLetters[index] || ''}</span>
            ))}
          </div>

          <div className="letter-tray">
            {scrambledLetters.map((letter, index) => (
              <button
                className="letter-tile"
                type="button"
                key={`${round.word}-${letter}-${index}`}
                onClick={() => pickLetter(letter)}
                aria-label={`Choose ${letter}`}
              >
                {letter}
              </button>
            ))}
          </div>

          <div className="word-actions">
            <button type="button" className="icon-button" onClick={resetRound} aria-label="Reset word">
              <RotateCcw size={19} aria-hidden="true" />
            </button>
            <button type="button" className="next-button" onClick={goNext}>
              <span>{isCorrect ? round.cheer : 'Next word'}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WordGarden;