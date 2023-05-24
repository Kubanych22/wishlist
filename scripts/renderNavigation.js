import {createElement} from './helper.js';


const nav = document.querySelector('.nav');

// const burger = createBurgerMenu(nav);

export const renderNavigation = () => {
  nav.textContent = '';

  // <button className="nav__btn btn">Зарегистрироваться</button>
  // <button className="nav__btn btn">Войти</button>

  const buttonSighUp = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Зарегистрироваться'
  });

  buttonSighUp.addEventListener('click', () => {
    console.log('Зарегистрироваться');
  })

  const buttonLogin = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Войти'
  });

  buttonLogin.addEventListener('click', () => {
    console.log('Войти');
  })

  nav.append(buttonSighUp, buttonLogin);
}
