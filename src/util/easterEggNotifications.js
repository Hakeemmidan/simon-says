import {toast} from 'react-toastify';

let easterEggFound = {
  egg1: false,
  egg2: false,
  egg3: false,
};

let numEggToBeFound = 0;

export const notifyEasterEgg1 = () => {
  if (!easterEggFound.egg1) {
    easterEggFound.egg1 = true;
    numEggToBeFound++;

    toast.success(`${numEggToBeFound}/3 eggs found!`, {
      onClose: () =>
        !easterEggFound.egg2
          ? toast.dark("Let's see if you can find 🥚 #2")
          : null,
    });
  }
};

export const notifyEasterEgg2 = () => {
  if (!easterEggFound.egg2) {
    easterEggFound.egg2 = true;
    numEggToBeFound++;

    toast.success(`${numEggToBeFound}/3 eggs found!`, {
      onClose: () =>
        !easterEggFound.egg1
          ? toast.dark('Ask Simon for #1, maybe he knows 😏')
          : null,
    });
  }
};

export const notifyEasterEgg3 = () => {
  if (!easterEggFound.egg3) {
    easterEggFound.egg3 = true;
    numEggToBeFound++;

    toast.success(`${numEggToBeFound}/3 eggs found!`, {
      onClose: () =>
        !easterEggFound.egg1
          ? toast.dark('Ask Simon for #1, maybe he knows 😏')
          : null,
    });
  }
};
