import { notepad } from './app';
import { createListItem } from './create';
import { REFS } from './app';

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

export { addItemToList, removeListItem, renderNoteList };
