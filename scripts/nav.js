const menuButton = document.querySelector('.header__menu-button');

const menu = document.querySelector('.header__menu');

const menuHamburguesa = () => {
    menu.classList.toggle('active');
};

menuButton.addEventListener('click', menuHamburguesa);