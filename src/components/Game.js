import "./Game.css";
import { useState, useRef } from "react";
import InputEmpty from "./InputEmpty";

const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (letter === "") {
      setInputEmptyVerify(true);
      letterInputRef.current.focus();
    } else {
      verifyLetter(letter);
      // victoryCondition();
      setLetter("");
      setInputEmptyVerify(false);
      letterInputRef.current.focus();
    }
  };

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);
  const [inputEmptyVerify, setInputEmptyVerify] = useState(false);

  return (
    <div className="game">
      <p className="points">
        Pontuação: <span>{score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>
        Você ainda tem <span>{guesses}</span> tentativa(s).
      </p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blackSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            type="text"
            name="letter"
            maxLength="1"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      {inputEmptyVerify && <InputEmpty />}
      <div className="wrongLettersContainer">
        <p>Letras erradas já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span className="letter_Wrong" key={i}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
