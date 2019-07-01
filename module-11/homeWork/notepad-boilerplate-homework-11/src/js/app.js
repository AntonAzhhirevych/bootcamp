import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import Notepad from './utils/notepad-model';
import { renderNoteList } from './utils/render';
// import initialNotes from '../assets/notes.json';
import 'notyf/notyf.min.css';
import { handleShowForm, handleFilterChange, handleSubmit, handleDeleteNote } from './utils/handle';

//--LOCALSTORAGE
//отримую локальні файли
//додаю в клас
const localNotes = JSON.parse(localStorage.getItem('notes'));
const notepad = new Notepad(localNotes);

//--PLAGINS
MicroModal.init();
const notyf = new Notyf();

//--REFERENSE
export const REFS = {
  noteList: document.querySelector('.note-list'), //ul
  noteListLi: document.querySelector('note-list__item'), //ul > li
  form: document.querySelector('.note-editor'), // форма для створення нової заметки
  titleInput: document.querySelector('.note_title'), // назва заметки
  bodyInput: document.querySelector('.note_body'), // текст
  searchForm: document.querySelector('.search-form__input'), // поле для фільтрації
  // deleteNote: document.querySelector('button[data-action="edit-note"]'),
  button: document.querySelector('button[data-action="open-editor"]'), // для відкриття модального вікна
  // newForm: document.querySelector('.modal'),
};

//--LISTENER
REFS.button.addEventListener('click', handleShowForm);

REFS.searchForm.addEventListener('input', handleFilterChange);

REFS.form.addEventListener('submit', handleSubmit);

REFS.noteList.addEventListener('click', handleDeleteNote);

//--TEMPLATE
//функція-шаблон по якій додаємо заметки в html
const template = document.querySelector('#template').innerHTML.trim();
const card = Handlebars.compile(template);
renderNoteList(REFS.noteList, notepad.notes);

//--EXPORT
export { notepad, card, notyf, MicroModal };
