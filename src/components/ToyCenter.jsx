import React, {useState} from 'react';
import {notifyEasterEgg3} from '../util/easterEggNotifications';

export const ToyCenter = () => {
  // state vars
  const [centerAnimated, setCenterAnimated] = useState(false);

  return (
    <>
      <circle
        className={centerAnimated ? 'animated-toy-center-ring' : ''}
        cx={100.666}
        cy={100.666}
        r={33.333}
      />
      <circle
        className={centerAnimated ? 'animated-toy-center' : ''}
        onClick={() => {
          notifyEasterEgg3();
          setCenterAnimated(true);
        }}
        fill="#4C4C4D"
        cx={100.666}
        cy={100.666}
        r={28.07}
      />
    </>
  );
};
