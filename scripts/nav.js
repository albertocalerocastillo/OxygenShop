const menuButton = document.querySelector('.header__menu-button');

const menu = document.querySelector('.header__menu');

const menuHamburguesa = () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
    }
    else {
        menu.classList.add('active')
    }
};

menuButton.addEventListener('click', menuHamburguesa);