import React, {useState, useRef} from 'react';
import {Scores} from './Scores';
import {Toy} from './Toy';
import {
  notifyEasterEgg1,
  notifyEasterEgg2,
} from '../util/easterEggNotifications';
import {getCookie, setCookie} from '../util/cookies';

export const GameContainer = () => {
  // variables
  let highScoreCookie = getCookie('simonSaysHighScore');

  // state vars
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currLevel, setCurrLevel] = useState(0);
  const [highScore, setHighScore] = useState(
    highScoreCookie ? highScoreCookie : 0
  );

  // ref vars
  let gameColors = useRef([]); // game's randomly generated colors
  let reachedHighScore = useRef(false);

  // constants
  const COLORS_ARR = ['R', 'G', 'B', 'Y'];

  const incrementLevel = () => {
    // add random color to gameColors
    gameColors.current.push(
      COLORS_ARR[Math.floor(Math.random() * COLORS_ARR.length)]
    );

    gameOver ? setCurrLevel(1) : setCurrLevel(currLevel + 1);
  };

  const startGame = () => {
    setGameStarted(true);
    incrementLevel();
  };

  const restartGame = () => {
    reachedHighScore.current = false;
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
        </div>
      </div>
    );
  }

  if (gameOver) {
    if (currLevel > highScore) {
      setHighScore(currLevel);
      reachedHighScore.current = true;
      setCookie('simonSaysHighScore', currLevel, 30);
    }

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

          {reachedHighScore.current ? (
            <h1>New high score! ({highScore}) 🥳</h1>
          ) : (
            <>
              <h4>Level reached: {currLevel}</h4>
              <h4>High Score: {highScore}</h4>
            </>
          )}
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
