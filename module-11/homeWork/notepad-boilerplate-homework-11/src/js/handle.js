import { addItemToList, removeListItem, renderNoteList } from './render';
import { MicroModal, REFS, notyf, notepad } from './app';

function handleShowForm() {
  MicroModal.show('note-editor-modal');
  // REFS.newForm.classList.replace('micromodal-slide', 'micromodal-slide.is-open');
}
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
    // REFS.newForm.classList.replace('micromodal-slide.is-open', 'micromodal-slide');
    MicroModal.close('note-editor-modal');
  } else {
    notyf.error('Для добавления заметки необходимо заполнить все поля!!!');
  }
}
function handleDeleteNote(event) {
  if (event.target.parentNode.dataset.action === 'delete-note')
    removeListItem(event.target.closest('li'));
}

export { handleShowForm, handleFilterChange, handleSubmit, handleDeleteNote };
