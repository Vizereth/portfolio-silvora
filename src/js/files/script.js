import './utilities.js';

import initMobileMenu from './menu.js';
import initFilterizr from '../../modules/sections/portfolio/portfolio.js';
import countTextareaCharacters from '../../modules/sections/contact/contact.js';

window.addEventListener('load', () => {
  initMobileMenu();
  initFilterizr();
  countTextareaCharacters();
});
