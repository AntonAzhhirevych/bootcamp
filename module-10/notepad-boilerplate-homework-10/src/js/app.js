import Notepad from './notepad-model';
import initialNotes from './initial-notes';
import { addItemToList, removeListItem, renderNoteList } from './render';
const notepad = new Notepad(initialNotes);

//---------------------------------------------REFERENSE-------------------------------------------------------------------------

export const REFS = {
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

renderNoteList(REFS.noteList, notepad.notes);

export { notepad };
export default { REFS };
