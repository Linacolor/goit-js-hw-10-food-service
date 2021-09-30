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

//THEME//
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeThemePage() {
  let themePage = Theme[localStorage.getItem('theme')];
  if (themePage) {
    bodyEl.classList.add(themePage);
    if (localStorage.getItem('theme') == 'LIGHT') {
      checkboxEl.checked = false;
    } else {
      checkboxEl.checked = true;
    }
  } else {
    bodyEl.classList.add(Theme[0]);
    localStorage.setItem('theme', Theme[0]);
  }
}

function setTheme() {
  if (bodyEl.classList.contains('light-theme')) {
    bodyEl.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'DARK');
  } else {
    bodyEl.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'LIGHT');
  }
}

changeThemePage();
checkboxEl.addEventListener('change', setTheme);
