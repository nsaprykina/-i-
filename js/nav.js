let headerButton = document.querySelector('.header__button');
let headerBlock = document.querySelector('.header__block');

headerButton.onclick = function() {
    console.log('Клац!')
    headerBlock.classList.toggle('header__block--open');
}