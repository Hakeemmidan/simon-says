import React, { useState, useRef } from 'react'
import { Scores } from './Scores';
import { Toy } from './Toy';

export const GameContainer = () => {
  // state vars
  const [gameIsStarted, setGameStarted] = useState(false);
  const [gameIsOver, setGameOver] = useState(false);
  const [currLevel, setCurrLevel] = useState(1);
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
    setCurrLevel(currLevel + 1);
  };
  
  const startGame = () => {
    setGameStarted(true);
    incrementLevel();
  }

  if (!gameIsStarted) {
    return (
      <div className="start-game-screen">
        <div className="greetings-container">
          <h1>Simon Says</h1>
          <div className="start-button" onClick={() => startGame()}>
            Start!
          </div>
        </div>
      </div>
    );
  };

  if (gameIsOver) {
    // return a screen asking user to play again
    // when they click restart, maintain high score but reset currLevel
    // set gameIsOver to false
  };

  return (
    <div className="GameContainer">
      <Toy gameColors={gameColors} incrementLevel={incrementLevel} setGameOver={setGameOver} />
      <Scores currLevel={currLevel} highScore={highScore} />
    </div>
  );
}

