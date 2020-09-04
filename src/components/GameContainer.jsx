import React, { useState } from 'react'
import { Scores } from './Scores';
import Toy from './Toy';

export const GameContainer = () => {
  const [gameIsStarted, setGameStarted] = useState(false);
  const [gameIsOver, setGameOver] = useState(false);
  const [currLevel, setCurrLevel] = useState(0);
  const [highScore, setHighScore] = useState(0);

  let gameColors = []; // game generated colors

  const setNewLevel = () => {
    // setCurrLevel(currLevel + 1);
    // add random color to gameColors before passing down to Toy
  };

  if (!gameIsStarted) {
    return (
      <div className="start-game-screen">
        <div className="greetings-container">
          <h1>Simon Says</h1>
          <div className="start-button" onClick={() => setGameStarted(true)}>
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
      <Toy gameColors={gameColors}/>
      <Scores currLevel={currLevel} highScore={highScore}/>
    </div>
  )
}

