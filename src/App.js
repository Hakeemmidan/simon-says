import React from 'react';
import {ToastContainer, Slide, toast} from 'react-toastify';
import {GameContainer} from './components/GameContainer';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  toast.info(
    'This site uses a cookie to store the high score. By using website you agree for cookie use 🍪',
    {
      autoClose: false,
    }
  );
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
