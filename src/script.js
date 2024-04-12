'use strict';

//// ELEMENTS SELECTION
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

//  FUNCTION EXPRESSION

const openModal = function () {
  modal.classList.remove('hidden'); //CAN REMOVE MULTIPLE CLASSES BY SIMPLY PASSING THE MULTIPLE CLASS NAMES
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// OPENING MODAL WINDOW
for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', openModal);
}

// CLOSING MODAL WINDOW
btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// ESC KEY PRESS EVENT
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
