const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav-links');

//open,close
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('hidden');
});