import { addItemToList, removeListItem, renderNoteList } from './render';
import { MicroModal, REFS, notyf, notepad } from '../app';

function handleShowForm() {
  MicroModal.show('note-editor-modal');
}
//для ф заметок
function handleFilterChange(event) {
  notepad.filterNotesByQuery(event.target.value).then(resolve => {
    renderNoteList(REFS.noteList, resolve);
    event.preventDefault();
  });
}

//для збереження нової заметки
function handleSubmit(event) {
  event.preventDefault();
  // .trim - убрати всі пробели
  const title = REFS.titleInput.value.trim();
  const body = REFS.bodyInput.value.trim();

  if (title !== '' && body !== '') {
    // почистити поля для ввода після збереження
    REFS.form.reset();
    // рендер функції
    addItemToList(title, body);
    MicroModal.close('note-editor-modal');
  } else {
    notyf.error('Для добавления заметки необходимо заполнить все поля!!!');
  }
}
//видалення
function handleDeleteNote(event) {
  //якщо натиснули на кнопку видалення виконаємо функцію
  if (event.target.parentNode.dataset.action === 'delete-note') {
    //closest - повертає найблищий родительский елемент
    removeListItem(event.target.closest('li'));
    // console.log(event.target.parentNode.dataset.action);
  }
}

export { handleShowForm, handleFilterChange, handleSubmit, handleDeleteNote };
