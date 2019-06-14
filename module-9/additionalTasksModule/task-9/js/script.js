'use strict';
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

console.log('hello');

const refs = {
  openModal: document.querySelector('.btn'),
  modal: document.querySelector('.modal'),
  closeModal: document.querySelector('.close-btn'),
  background: document.querySelector('.js-modal-backdrop'),
};

function buttonOpenModal(e) {
  refs.modal.classList.remove('modal-hidden');
}

function buttonCloseModal(e) {
  refs.modal.classList.add('modal-hidden');
}

function backgroundCloseModal(e) {
  refs.modal.classList.add('modal-hidden');
}
refs.openModal.addEventListener('click', buttonOpenModal);
refs.background.addEventListener('click', backgroundCloseModal);

refs.closeModal.addEventListener('click', buttonCloseModal);
