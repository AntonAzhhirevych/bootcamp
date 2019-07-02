import { addItemToList, removeListItem, renderNoteList } from './render';
import { MicroModal, REFS, notyf, notepad } from '../script';
import { NOTIFICATION_MESSAGES } from '../servises/constants';

function handleShowForm() {
  MicroModal.show('note-editor-modal');
}

function handleFilterChange(event) {
  notepad.filterNotesByQuery(event.target.value).then(response => {
    renderNoteList(REFS.noteList, response);
    event.preventDefault();
  });
}
function handleSubmit(event) {
  event.preventDefault();
  const title = REFS.titleInput.value.trim(); // .trim - убрать все пробели
  const body = REFS.bodyInput.value.trim();

  if (title !== '' && body !== '') {
    REFS.form.reset(); // очистит поля для ввода после сохранения
    addItemToList(title, body); // рендер функция
    notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    MicroModal.close('note-editor-modal');
  } else {
    notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
  }
}

function handleDeleteNote(event) {
  if (event.target.parentNode.dataset.action === 'delete-note') {
    console.log(event.target.closest('li'));
    removeListItem(event.target.closest('li'));
  }
}
export { handleShowForm, handleFilterChange, handleSubmit, handleDeleteNote };
