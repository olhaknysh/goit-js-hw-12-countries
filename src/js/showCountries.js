import countriesListMarkup from './markup/countriesList.hbs';
import oneCountryMarkup from './markup/oneCounrty.hbs';
import pnotify from './pnotify';
import refs from './refs';

const amount = {
  oneCountry: 1,
  listCountries: 2,
};

function showCountries(countries) {
  if (!countries) {
    return;
  }

  if (countriesAmount(countries) === amount.oneCountry) {
    const markup = oneCountryMarkup(countries);
    refs.listCountries.insertAdjacentHTML('beforeend', markup);
  } else if (countriesAmount(countries) === amount.listCountries) {
    const markup = countriesListMarkup(countries);

    refs.listCountries.insertAdjacentHTML('beforeend', markup);
  } else {
    pnotify();
  }
}

function countriesAmount(countries) {
  const length = countries.length;
  if (length === 1) {
    return 1;
  } else if (length > 2 && length < 10) {
    return 2;
  }
}

export default showCountries;
