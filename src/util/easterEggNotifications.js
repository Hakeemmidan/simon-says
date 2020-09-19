import {toast} from 'react-toastify';

let easterEggFound = {
  egg1: false,
  egg2: false,
  egg3: false,
};

let numEggToBeFound = 0;

const egg1Hint = () => toast.dark('Ask Simon for #1, maybe he knows 😏');
const egg2Hint = () =>
  toast.dark("Let's see if you can find 🥚 #2 MUHAHAHA", {
    position: 'bottom-center',
  });
const egg3Hint = () =>
  toast.dark("You're really on TARGET, but I wonder if you can find egg #3");

const giveHint = () => {
  if (!easterEggFound.egg1) {
    egg1Hint();
  } else if (!easterEggFound.egg2) {
    egg2Hint();
  } else if (!easterEggFound.egg3) {
    egg3Hint();
  }
};

export const notifyEasterEgg1 = () => {
  if (!easterEggFound.egg1) {
    easterEggFound.egg1 = true;
    numEggToBeFound++;

    toast.success(`${numEggToBeFound}/3 eggs found!`, {
      onClose: () => giveHint(),
      autoClose: 3000,
    });
  }
};

export const notifyEasterEgg2 = () => {
  if (!easterEggFound.egg2) {
    easterEggFound.egg2 = true;
    numEggToBeFound++;

    toast.success(`${numEggToBeFound}/3 eggs found!`, {
      onClose: () => giveHint(),
      autoClose: 3000,
    });
  }
};

export const notifyEasterEgg3 = () => {
  if (!easterEggFound.egg3) {
    easterEggFound.egg3 = true;
    numEggToBeFound++;

    toast.success(`${numEggToBeFound}/3 eggs found!`, {
      onClose: () => giveHint(),
      autoClose: 3000,
    });
  }
};
