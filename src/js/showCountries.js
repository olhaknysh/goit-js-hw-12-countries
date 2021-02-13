import countriesListMarkup from './markup/countriesList.hbs';
import oneCountryMarkup from './markup/oneCounrty.hbs';
import pnotify from './pnotify';
import refs from './refs';

function showCountries(countries) {
  if (!countries) {
    return;
  }
  const length = countries.length;

  if (length === 1) {
    const markup = oneCountryMarkup(countries);
    refs.listCountries.insertAdjacentHTML('beforeend', markup);
  }

  if (length > 2 && length < 10) {
    const markup = countriesListMarkup(countries);

    refs.listCountries.insertAdjacentHTML('beforeend', markup);
  }

  if (length > 10) {
    pnotify();
  }
}

export default showCountries;
