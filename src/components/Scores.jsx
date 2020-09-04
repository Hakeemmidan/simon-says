import React from 'react'

export const Scores = (props) => {
  let currLevel = props.currLevel;
  let highScore = props.highScore;

  return (
    <div className="Scores">
      <div className="level-container">
        level:
        <div>{currLevel}</div>
      </div>
      <div>
        high score:
        <div>{highScore}</div>
      </div>
    </div>
  );
}
