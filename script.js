'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// This function close the modal adding the hidden class bck with modal class and overlay class
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//----------------------------------------------------
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//--------------------------------------------------
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// --------------------------------------------

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
//----------------------------------------------------------
// Note Im not adding the (), because I want to exccute the function when and only click happens
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//---------------------------Lsitening in the whole document

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
