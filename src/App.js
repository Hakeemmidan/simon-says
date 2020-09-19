import React from 'react';
import {ToastContainer, Slide} from 'react-toastify';
import {GameContainer} from './components/GameContainer';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer transition={Slide} />
      <GameContainer />
    </div>
  );
}

export default App;
