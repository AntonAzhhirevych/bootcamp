import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import Notepad from './notepad-model';
import { addItemToList, removeListItem, renderNoteList } from './render';
import initialNotes from '../assets/notes.json';
import 'notyf/notyf.min.css';
import { handleShowForm, handleFilterChange, handleSubmit, handleDeleteNote } from './handle';

const notepad = new Notepad(initialNotes);
MicroModal.init();
const notyf = new Notyf();

//--REFERENSE

export const REFS = {
  noteList: document.querySelector('.note-list'), //ul
  form: document.querySelector('.note-editor'), // форма для создания новой заметки
  titleInput: document.querySelector('.note_title'), // название заметки
  bodyInput: document.querySelector('.note_body'), // текст
  searchForm: document.querySelector('.search-form__input'), // поле для фильтрации заметок
  deleteNote: document.querySelector('button[data-action="edit-note"]'),
  button: document.querySelector('button[data-action="open-editor"]'),
  newForm: document.querySelector('.modal'),
};

//--LISTENER

REFS.button.addEventListener('click', handleShowForm);

REFS.searchForm.addEventListener('input', handleFilterChange);

REFS.form.addEventListener('submit', handleSubmit);

REFS.noteList.addEventListener('click', handleDeleteNote);

//--TEMPLATE
const template = document.querySelector('#template').innerHTML.trim();

const card = Handlebars.compile(template);

//--EXPORT

renderNoteList(REFS.noteList, notepad.notes);

export { notepad, card, notyf, MicroModal };
