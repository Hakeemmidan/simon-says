import {toast} from 'react-toastify';

let easterEggFound = {
  egg1: false,
  egg2: false,
  egg3: false,
};

export const notifyEasterEgg1 = () => {
  easterEggFound.egg1 = true;

  toast.success('You found egg #1!', {
    onClose: () =>
      !easterEggFound.egg2
        ? toast.dark("Let's see if you can find 🥚 #2")
        : null,
    autoClose: 3000,
  });
};

export const notifyEasterEgg2 = () => {
  easterEggFound.egg2 = true;

  toast.success('You found egg #2!', {
    onClose: () =>
      !easterEggFound.egg1
        ? toast.dark('Ask Simon for #1, maybe he knows 😏')
        : null,
    autoClose: 3000,
  });
};
