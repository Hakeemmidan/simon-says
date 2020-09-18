import React, {useState, useRef} from 'react';
import {Scores} from './Scores';
import {Toy} from './Toy';
import {notifyEasterEgg1, notifyEasterEgg2} from '../util/easterEggs';

export const GameContainer = () => {
  // state vars
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currLevel, setCurrLevel] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // ref vars
  let gameColors = useRef([]); // game's randomly generated colors

  // constants
  const COLORS_ARR = ['R', 'G', 'B', 'Y'];

  const incrementLevel = () => {
    // add random color to gameColors
    gameColors.current.push(
      COLORS_ARR[Math.floor(Math.random() * COLORS_ARR.length)]
    );

    if (gameOver) {
      if (currLevel > highScore) setHighScore(currLevel);
      setCurrLevel(1);
    } else {
      setCurrLevel(currLevel + 1);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    incrementLevel();
  };

  const restartGame = () => {
    gameColors.current = [];
    incrementLevel();
    setGameOver(false);
  };

  if (!gameStarted) {
    return (
      <div className="game-screen">
        <div className="greetings-container">
          <h1>
            Sim<span onClick={notifyEasterEgg1}>o</span>n Says
          </h1>
          <div className="start-button" onClick={() => startGame()}>
            Start!
          </div>
          <h4 className="u-color-lightgray">
            [There are 3 easter eggs in this game, see if you can find them]
          </h4>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="game-screen">
        <div className="greetings-container">
          <h1>
            Sim<span onClick={notifyEasterEgg1}>o</span>n Says
          </h1>
          <div
            className="start-button u-orange-button"
            onClick={() => restartGame()}
          >
            Restart!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="GameContainer">
      <Toy
        gameColors={gameColors}
        incrementLevel={incrementLevel}
        setGameOver={setGameOver}
      />
      <Scores currLevel={currLevel} highScore={highScore} />
      <div onClick={notifyEasterEgg2} className="egg-emoji">
        🥚
      </div>
    </div>
  );
};
