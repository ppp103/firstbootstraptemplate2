const modalOpen = document.querySelectorAll('.item-img');
const modal = document.querySelector('.item-modal');
const modalClose = document.querySelector('.modal-close-btn');
const modalContainer = document.querySelector('.modal-container');

const closeModal = function () {
    modal.classList.add('hidden');
}

//hien modal
for (let i = 0; i < modalOpen.length; i++) {
    modalOpen[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
    });
}

//tat modal = dau 'x'
modalClose.addEventListener('click', closeModal);

//tat modal = click vao overlay
modal.addEventListener('click', closeModal);

//fix vc click vao element ben trong modal-container se tat modal
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});

//tat modal = nut esc
document.addEventListener('keydown', function (event) {
    if (event.key == 'Escape') {
        closeModal();
    }
});