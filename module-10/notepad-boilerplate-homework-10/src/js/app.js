import Notepad from './notepad-model';
import initialNotes from './initial-notes';
import { ICON_TYPES, NOTE_ACTIONS } from './utils/constants';

const notepad = new Notepad(initialNotes);

//---------------------------------------------REFERENSE-------------------------------------------------------------------------

const REFS = {
  noteList: document.querySelector('.note-list'), //ul
  form: document.querySelector('.note-editor'), // форма для создания новой заметки
  titleInput: document.querySelector('.note_title'), // название заметки
  bodyInput: document.querySelector('.note_body'), // текст
  searchForm: document.querySelector('.search-form__input'), // поле для фильтрации заметок
  deleteNote: document.querySelector('button[data-action="edit-note"]'),
};

//------------------------------------------LISTENER------------------------------------------------------------------

REFS.searchForm.addEventListener('input', handleFilterChange);

REFS.form.addEventListener('submit', handleSubmit);

REFS.noteList.addEventListener('click', handleDeleteNote);
//---------------------------------------HANDLE FUNCTION----------------------------------------------------------------

function handleFilterChange(event) {
  const filterNotes = notepad.filterNotesByQuery(event.target.value);
  renderNoteList(REFS.noteList, filterNotes);
  event.preventDefault();
}
function handleSubmit(event) {
  event.preventDefault();
  const title = REFS.titleInput.value.trim(); // .trim - убрать все пробели
  const body = REFS.bodyInput.value.trim();

  if (title !== '' && body !== '') {
    REFS.form.reset(); // очистит поля для ввода после сохранения
    addItemToList(title, body); // рендер функция
  } else {
    alert('Для добавления заметки необходимо заполнить все поля!!!');
  }
}
function handleDeleteNote(event) {
  if (event.target.parentNode.dataset.action === 'delete-note')
    removeListItem(event.target.closest('li'));
}
//-------------------------------------CREATE LIST--------------------------------------------------------------
renderNoteList(REFS.noteList, notepad.notes);

function createListItem(note) {
  const noteListItem = document.createElement('li');
  noteListItem.classList.add('note-list__item');
  noteListItem.dataset.id = note.id;

  const Note = document.createElement('div');
  Note.classList.add('note');
  noteListItem.appendChild(Note);

  Note.appendChild(createNoteContent(note));
  Note.appendChild(createNoteFooter(note.priority));
  return noteListItem;
}

function createNoteContent(note) {
  const noteContent = document.createElement('div');
  noteContent.classList.add('note__content');

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note__title');
  noteTitle.textContent = note.title;

  const noteBody = document.createElement('p');
  noteBody.classList.add('note__body');
  noteBody.textContent = note.body;

  noteContent.append(noteTitle, noteBody);

  return noteContent;
}

function createActionButton(icon, data) {
  const button = document.createElement('button');
  button.classList.add('action');
  button.dataset.action = data;

  const buttonInner = document.createElement('i');
  buttonInner.classList.add('material-icons');
  buttonInner.classList.add('action__icon');
  buttonInner.textContent = icon;

  button.appendChild(buttonInner);

  return button;
}

function createNoteFooter(Priority) {
  const noteFooter = document.createElement('footer');
  noteFooter.classList.add('note__footer');

  const noteSection = document.createElement('section');
  noteSection.classList.add('note__section');

  const notePriority = document.createElement('span');
  notePriority.classList.add('note__priority');
  notePriority.textContent = `Priority : ${Priority}`;

  const noteSection2 = document.createElement('section');
  noteSection.classList.add('note__section');

  noteFooter.append(noteSection, noteSection2);

  noteSection.append(
    createActionButton(ICON_TYPES.ARROW_DOWN, NOTE_ACTIONS.INCREASE_PRIORITY),
    createActionButton(ICON_TYPES.ARROW_UP, NOTE_ACTIONS.DECREASE_PRIORITY),
  );

  noteSection.appendChild(notePriority);

  noteSection2.append(
    createActionButton(ICON_TYPES.EDIT, NOTE_ACTIONS.EDIT),
    createActionButton(ICON_TYPES.DELETE, NOTE_ACTIONS.DELETE),
  );

  return noteFooter;
}

//-----------------------------------RENDER FUNCTION-----------------------------------------
// функция для добавления новой заметки
function addItemToList(name, text) {
  let listItem = createListItem({
    id: notepad.generatorId(), // генератор id
    title: name,
    body: text,
    priority: 0,
  });
  REFS.noteList.append(listItem); // добавить в ul
}
//функция для удаления заметки
const removeListItem = item => {
  notepad.deleteNote(item.dataset.id);
  item.remove();
};

// функция для  отрисовки заметок
function renderNoteList(listRef, notes) {
  const cards = notes.map(note => createListItem(note));
  listRef.innerHTML = ''; // делает изначально ul пустим
  listRef.append(...cards);
  return listRef;
}
