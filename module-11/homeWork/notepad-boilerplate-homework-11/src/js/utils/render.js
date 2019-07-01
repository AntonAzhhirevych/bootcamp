import { notyf, notepad, REFS, card } from '../app';

// функция для додавання нової замтки
function addItemToList(name, text) {
  // додаємо в HTML
  let listItem = card({
    id: notepad.generatorId(),
    title: name,
    body: text,
    priority: 0,
  });

  //додаємо в МАСИВ
  let listItemNote = {
    id: notepad.generatorId(),
    title: name,
    body: text,
    priority: 0,
  };
  //запускаємо функцію по збереженню нової заметки
  notepad.saveNote(listItemNote).then(() => {
    REFS.noteList.insertAdjacentHTML('beforeend', listItem);
    notyf.success('Заметка добавленна!!!');
  });
}

//функция для видалення заметки
const removeListItem = item => {
  notepad.deleteNote(item.dataset.id);
  // REMOVE - ВИДАЛЕННЯ ВУЗЛА З ДОМ ДЕРЕВА
  item.remove();
  notyf.success('Заметка успешно удалена!!!');
};

// функція для відображення заметок
// listRef - куда добавити
// notes - що добавити
function renderNoteList(listRef, notes) {
  const cards = notes.map(note => card(note));
  listRef.innerHTML = ''; // делает изначально ul пустим
  REFS.noteList.insertAdjacentHTML('beforeend', cards.join(' ')); // добавить в ul
  return listRef;
}

export { addItemToList, removeListItem, renderNoteList };
