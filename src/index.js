import menu from './menu.json';
import menuTemplates from '../templates/markupmenu.hbs';
import refs from './js/refs';

const { menuEl, checkboxEl, bodyEl } = refs;

//MARKUP//
function createMenuMarkup(menu) {
  return menuTemplates(menu);
}
const menuMarkup = createMenuMarkup(menu);
menuEl.insertAdjacentHTML('beforeend', menuMarkup);
