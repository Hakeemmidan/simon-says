import {toast} from 'react-toastify';

let easterEggFound = {
  egg1: false,
  egg2: false,
  egg3: false,
};

export const notifyEasterEgg2 = () => {
  easterEggFound['egg2'] = true;

  toast.success('You found egg #2!', {
    onClose: () =>
      !easterEggFound['egg1']
        ? toast.dark('Ask Simon for #1, maybe he knows 😏')
        : null,
  });
};
