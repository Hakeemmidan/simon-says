import {toast} from 'react-toastify';

// variables
let easterEggFound = {
  egg1: false,
  egg2: false,
  egg3: false,
};
let numEggsFound = 0;

// constants
const TOTAL_EGGS_COUNT = 3;

// hint notifications
const giveHint = () => {
  if (!easterEggFound.egg1) {
    egg1Hint();
  } else if (!easterEggFound.egg2) {
    egg2Hint();
  } else if (!easterEggFound.egg3) {
    egg3Hint();
  }
};
const egg1Hint = () =>
  toast.dark('Ask Simon for #1, maybe he knows 😏', {
    toastId: 'egg-1-hint-toast',
  });
const egg2Hint = () =>
  toast.dark("Let's see if you can find 🥚 #2 MUHAHAHA", {
    toastId: 'egg-2-hint-toast',
  });
const egg3Hint = () =>
  toast.dark("You're really on TARGET, but I wonder if you can find egg #3", {
    toastId: 'egg-3-hint-toast',
  });

// egg found notifications
export const notifyEasterEgg1 = () => {
  if (!easterEggFound.egg1) {
    easterEggFound.egg1 = true;
    numEggsFound++;

    if (allEasterEggsFound()) {
      celeberate();
      return;
    }

    toast.success(`${numEggsFound}/3 eggs found!`, {
      onClose: () => giveHint(),
      autoClose: 3000,
    });
  }
};

export const notifyEasterEgg2 = () => {
  if (!easterEggFound.egg2) {
    easterEggFound.egg2 = true;
    numEggsFound++;

    if (allEasterEggsFound()) {
      celeberate();
      return;
    }

    toast.success(`${numEggsFound}/3 eggs found!`, {
      onClose: () => giveHint(),
      autoClose: 3000,
    });
  }
};

export const notifyEasterEgg3 = () => {
  if (!easterEggFound.egg3) {
    easterEggFound.egg3 = true;
    numEggsFound++;

    if (allEasterEggsFound()) {
      celeberate();
      return;
    }

    toast.success(`${numEggsFound}/3 eggs found!`, {
      onClose: () => giveHint(),
      autoClose: 3000,
    });
  }
};

export const allEasterEggsFound = () => {
  return numEggsFound === TOTAL_EGGS_COUNT;
};

const celeberate = () => {
  toast.success(
    'You found all easter eggs! \n Get ready for a dance party🥳🎊🎉💃',
    {autoClose: 9000}
  );
  const soundHTMLEl = document.getElementById('sound');
  soundHTMLEl.src =
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230707340&color=%23ff5500&auto_play=true&aallow_comments=false';
  soundHTMLEl.height = '100px';
  soundHTMLEl.width = '245px';
};
