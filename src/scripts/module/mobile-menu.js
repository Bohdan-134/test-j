import {openPopup, closePopup} from './popup.js';

const openMobileMenu = document.getElementById("mobile_menu");

function generateMobileMenu() {
    const ul = document.createElement('ul');
    ul.classList.add('navigation_list__mobile');

    const menuItems = [
        { text: 'Destinations', href: '../../page404.html' },
        { text: 'Hotels', href: '../../page404.html' },
        { text: 'Flights', href: '../../page404.html' },
        { text: 'Bookings', href: '../../page404.html' }
    ];

    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('navigation_item__mobile');

        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;

        li.appendChild(a);
        ul.appendChild(li);
    });

    const authButtons = document.createElement('div');
    authButtons.classList.add('auth-buttons__mobile');

    const loginButton = document.createElement('button');
    loginButton.classList.add('login_btn__mobile');
    loginButton.textContent = 'Login';

    const signUpButton = document.createElement('button');
    signUpButton.classList.add('sign_up_btn__mobile');
    signUpButton.textContent = 'Sign up';

    authButtons.appendChild(loginButton);
    authButtons.appendChild(signUpButton);

    const languageContainer = document.createElement('div');
    languageContainer.classList.add('language__mobile');

    const languageText = document.createElement('span');
    languageText.classList.add('language_text__mobile');
    languageText.textContent = 'EN';

    const arrowIcon = document.createElement('img');
    arrowIcon.src = '../../img/header/arrow.svg';

    const languageList = document.createElement('ul');
    languageList.classList.add('language_list');

    const languages = [
        { text: 'EN', dataLan: 'EN' },
        { text: 'UA', dataLan: 'UA' }
    ];

    languages.forEach(language => {
        const li = document.createElement('li');
        li.classList.add('language_item');

        const button = document.createElement('button');
        button.classList.add('language_btn');
        button.setAttribute('data-lan', language.dataLan);
        button.textContent = language.text;

        li.appendChild(button);
        languageList.appendChild(li);
    });

    languageContainer.appendChild(languageText);
    languageContainer.appendChild(arrowIcon);
    languageContainer.appendChild(languageList);

    const mobileMenu = document.createElement('div');
    mobileMenu.appendChild(ul);
    mobileMenu.appendChild(authButtons);
    mobileMenu.appendChild(languageContainer);

    return mobileMenu;
}

openMobileMenu.addEventListener('click', () => {
    openPopup(generateMobileMenu().innerHTML);
})