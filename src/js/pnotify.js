import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

function pnotify() {
  const myError = error({
    text: 'Too mane matches found.Please enter a more specific query!',
  });
}

export default pnotify;
