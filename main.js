// mobile navigation
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__hamburger');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// shortening url
const getUrl = document.querySelector('.url');
const getUrlBtn = document.querySelector('.cta-shorten');

const params = {
    'url': 'https://www.frontendmentor.io/solutions'
};
const options = {
    method: 'POST',
    body: JSON.stringify( params )
};
fetch( 'https://api.shrtco.de/v2/', options )
    .then( response => response.json() )
    .then( response => {
        console.log(response);
    } );
