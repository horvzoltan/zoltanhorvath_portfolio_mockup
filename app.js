const burger = document.querySelector('.burger');
burger.addEventListener('click', showMenu);
function showMenu() {
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    nav.classList.toggle('nav-active')

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
        }
    });
    burger.classList.toggle('toggle');
}


// // When the user scrolls the page, execute myFunction
// window.onscroll = function () { myFunction() };

// // Get the navbar
// let navbar = document.querySelector('nav');
// let mainContainer = document.querySelector('.main-container');


// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >= 8) {
//         navbar.classList.add('sticky')
//         mainContainer.classList.add('container-with-sticky')
//     } else {
//         navbar.classList.remove('sticky');
//         mainContainer.classList.remove('container-with-sticky');
//     }
// }
