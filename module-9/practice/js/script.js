'use strict';

// const btn = document.querySelector('.button');

// btn.onclick = function(even) {
//   console.log(event.target.className); // class name - покажет клас
// };

// // console.log(btn);

// const body = document.body;
// const text = document.querySelector('.text');
// const word = document.querySelector('.word');
// console.log(body);

// const chackBox = function(e) {
//   console.log(e.target.keycode);

//   if (e.target.nodeName === 'BUTTON') {
//     alert('button');
//   }
// };

// body.addEventListener('click', chackBox);

// function showWords(e) {
//   console.log(e.target);
//   word.textContent = this.value;
// }

// text.addEventListener('input', showWords);

// const button = document.querySelector('.button');
// const input = document.querySelector('.input');

// input.addEventListener('click', function(e) {
//   console.log(e);
// });
// button.addEventListener('click', function(e) {
//   console.log(e.currentTarget);
// });

//--------------------------------------------------ADD/REMOVE ===CLICK====-----------------------------

//-----------------------силки на дом узли querySelector-----------------------------------------
const refs = {
  add: document.querySelector('.buttonAdd'),
  remove: document.querySelector('.buttonRemove'),
  click: document.querySelector('.buttonClick'),
  input: document.querySelector('.input'),
  form: document.querySelector('.form'),
  button: document.querySelector('.button'),
};
//--------------------------------------------------------------------------------------------------

function createListItem({ id, body }) {
  const noteListItem = document.createElement('li');
  noteListItem.classList.add('note-list__item');
  noteListItem.dataset.id = id;

  const text = document.createElement('p');
  text.classList.add('text');
  text.textContent = body;

  const Note = document.createElement('div');
  Note.classList.add('note');
  // noteListItem.appendChild(Note);

  Note.appendChild(createNoteContent(note));
  Note.appendChild(createNoteFooter(note.priority));
  return noteListItem;
}

function CLICK() {
  alert('CLICK!');
}

function handleEditorSubmit(event) {
  event.preventDefault();
  const [inp] = event.target.elements;
  const inputValue = inp.value;
  console.log(inp.value);

  if (inputValue === '') {
    alert('ты ничего не ввел');
  }

  const listItem = createListItem({ id: Date.now(), body: inputValue });
}

refs.form.addEventListener('submit', handleEditorSubmit);

refs.add.addEventListener('click', function() {
  refs.click.addEventListener('click', CLICK);
});

refs.remove.addEventListener('click', function() {
  refs.click.removeEventListener('click', CLICK);
});

//------------------------------------------------------------------

event.currentTarget.reset(); // повертаэ форму в текущий стан

// function change(e) {
//   e.preventDefault();

//   input.forEach(el => {
//     if (el.checked) {
//       result.textContent = `Result: ${el.parentElement.textContent}`;
//     }
//   });
// }
// form.addEventListener('submit', change);
