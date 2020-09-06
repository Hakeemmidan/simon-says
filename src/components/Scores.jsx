import React from 'react';

export const Scores = (props) => {
  let currLevel = props.currLevel;
  let highScore = props.highScore;

  return (
    <div className="Scores">
      <div>
        <b>Level:</b>
        <div>{currLevel}</div>
      </div>
      <div>
        <b>High Score:</b>
        <div>{highScore}</div>
      </div>
    </div>
  );
};
