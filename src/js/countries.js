var debounce = require('lodash.debounce');
import refs from './refs';
import fetchCountries from './fetchCountries';
import showCountries from './showCountries';

const debouncedInput = debounce(event => {
  const inputValue = event.target.value;

  refs.listCountries.textContent = '';

  fetchCountries(inputValue).then(showCountries);
}, 500);

refs.input.addEventListener('input', debouncedInput);
