import React from 'react';
import {ToastContainer, Slide} from 'react-toastify';
import {GameContainer} from './components/GameContainer';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      {/* used to play celebration sound */}
      <iframe
        id="sound"
        width="0"
        height="0"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src=""
      ></iframe>
      <ToastContainer position="top-center" transition={Slide} />
      <GameContainer />
    </div>
  );
}

export default App;
