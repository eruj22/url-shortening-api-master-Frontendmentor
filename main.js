const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__hamburger');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});