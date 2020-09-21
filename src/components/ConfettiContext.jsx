import React, {useState} from 'react';
import ReactConfetti from 'react-confetti';

// This is what each component should import
export const ConfettiContext = React.createContext();

export const ConfettiContextProvider = ({children}) => {
  const [runConfetti, setRunConfetti] = useState(false);

  return (
    <ConfettiContext.Provider
      value={{
        setRunConfetti,
      }}
    >
      <ReactConfetti run={runConfetti} />
      {children}
    </ConfettiContext.Provider>
  );
};
