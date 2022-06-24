const burger = document.querySelector('.burger');
burger.addEventListener('click', showMenu);
function showMenu() {
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const mainContainer = document.querySelector('.main-container');

    nav.classList.toggle('nav-active');
    mainContainer.classList.toggle('width50');
    if (mainContainer.style.animation) {
        mainContainer.style.animation = '';
    } else {
        mainContainer.style.animation = `decrease50 0.5s forwards`
    }
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
        }
    });

    burger.classList.toggle('toggle');
}
