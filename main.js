// const navToggle = document.querySelector('.nav-toggle');
// const nav = document.querySelector('.nav');


// navToggle.addEventListener('click', () => {
//     nav.classList.toggle('nav--visible');
// })

const menuButton = document.getElementById('menu-button');
const nav = document.querySelector('.link');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('--visible');
})