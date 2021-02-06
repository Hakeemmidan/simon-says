import React from 'react';
import {ToastContainer, Slide, toast} from 'react-toastify';
import {GameContainer} from './components/GameContainer';
import {ConfettiContextProvider} from './components/ConfettiContext';
import {getCookie} from './util/cookies';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  if (!getCookie('simonSaysHighScore')) {
    toast.info(
      'This site uses a cookie to store the high score. By using website you agree for cookie use 🍪',
      {
        autoClose: false,
      }
    );
  }

  return (
    <>
      <iframe
        title="soundCloud-placeholder-for-celeberation-music"
        id="sound"
        width="0"
        height="0"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src=""
      ></iframe>
      <ToastContainer position="top-center" transition={Slide} />
      <ConfettiContextProvider>
        <GameContainer />
      </ConfettiContextProvider>
    </>
  );
}

export default App;
