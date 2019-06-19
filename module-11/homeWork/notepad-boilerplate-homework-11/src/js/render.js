import { notyf, notepad, REFS, card } from './app';

// функция для добавления новой заметки
function addItemToList(name, text) {
  let listItem = card({
    id: notepad.generatorId(), // генератор id
    title: name,
    body: text,
    priority: 0,
  });
  REFS.noteList.insertAdjacentHTML('beforeend', listItem); // добавить в ul
  notyf.success('Заметка добавленна!!!');
}

//функция для удаления заметки
const removeListItem = item => {
  notepad.deleteNote(item.dataset.id);
  item.remove();
  notyf.success('Заметка успешно удалена!!!');
};

// функция для  отрисовки заметок
function renderNoteList(listRef, notes) {
  const cards = notes.map(note => card(note));
  listRef.innerHTML = ''; // делает изначально ul пустим
  // listRef.innerHTML = cards;
  REFS.noteList.insertAdjacentHTML('beforeend', cards.join(' ')); // добавить в ul

  return listRef;
}

export { addItemToList, removeListItem, renderNoteList };
