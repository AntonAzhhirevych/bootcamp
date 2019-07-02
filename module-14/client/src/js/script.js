import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React and Vue
import Notepad from './notes';
import { renderNoteList } from './servises/render';
import {
  handleShowForm,
  handleFilterChange,
  handleSubmit,
  handleDeleteNote,
} from './servises/handle';

//--NOTEPAD
const notepad = new Notepad();

//--PLAGINS
const notyf = new Notyf();
MicroModal.init();

//--REFERENSE
const REFS = {
  noteList: document.querySelector('.note-list'), //ul
  noteListLi: document.querySelector('note-list__item'), //ul > li
  form: document.querySelector('.note-editor'), // форма для создания новой заметки
  titleInput: document.querySelector('.note_title'), // название заметки
  bodyInput: document.querySelector('.note_body'), // текст
  searchForm: document.querySelector('.search-form__input'), // поле для фильтрации заметок
  button: document.querySelector('button[data-action="open-editor"]'),
  newForm: document.querySelector('.modal'),
  update: document.querySelector('.modal__btn'),
};

//--LISTENER
REFS.button.addEventListener('click', handleShowForm);

REFS.searchForm.addEventListener('input', handleFilterChange);

REFS.form.addEventListener('submit', handleSubmit);

REFS.noteList.addEventListener('click', handleDeleteNote);

notepad.get().then(initialNotes => renderNoteList(REFS.noteList, initialNotes));

export { notepad, REFS, MicroModal, notyf };
