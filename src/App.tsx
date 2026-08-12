import { useEffect, useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';
import { getRandomWord } from './helpers/getRandomWord';

import './App.css';

function App() {

  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attemps, setAttemps] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (attemps >= 9) {
      setLose(true);
    }
  }, [attemps])

  useEffect(() => {

    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (currentHiddenWord === word) {
      setWon(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hiddenWord])

  const checkLetter = (letter: string) => {

    if (lose) return;
    if (lose) return;

    if (!word.includes(letter)) {
      setAttemps(Math.min(attemps + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(' '));
  }


  const newGame = () => {
    const newWord = getRandomWord();
    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));

    setAttemps(0);
    setWon(false);
    setLose(false);

  }

  return (
    <div className="card">

      {/* Imagenes */}
      <HangImage imageNumber={attemps} />

      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>


      {/* Contador */}
      <h3>Intentos: {attemps}</h3>

      {/* Mensaje si perdio */}
      {
        (lose)
          ? <h2>Perdió {word}</h2>
          : ''
      }

      {/* Mensaje si gano */}
      {
        (won)
          ? <h2>Felicidades, GANO!!!!</h2>
          : ''
      }


      {/* Botones de letras */}
      {
        letters.map((letter) => (
          <button disabled={lose || won} key={letter}
            onClick={() => checkLetter(letter)}>{letter} </button>
        ))
      }

      <br /><br /><br />

      <button onClick={newGame}>¿Nuevo juego?</button>

    </div>
  )
}

export default App;
