const navbar = document.querySelector(`.navbar`);

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-js');
    } else navbar.classList.remove('nav-js')
});