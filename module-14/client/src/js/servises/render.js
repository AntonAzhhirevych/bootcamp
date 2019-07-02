import { notyf, notepad, REFS } from '../script';

//TEMPLATE/HANDLEBARS
const template = document.querySelector('#template').innerHTML.trim();
const card = Handlebars.compile(template);

// функция для добавления новой заметки
function addItemToList(name, text) {
  let listItemNote = {
    title: name,
    body: text,
    priority: 0,
  };
  //запускаємо функцію по збереженню нової заметки
  notepad.add(listItemNote).then(() => {});
}

//видалення
const removeListItem = item => {
  notepad.delete(item.dataset.id);
  // REMOVE - ВИДАЛЕННЯ ВУЗЛА З ДОМ ДЕРЕВА
  item.remove();
  notyf.success('Заметка успешно удалена!!!');
};

// функция для  отрисовки заметок
// listRef - куда добавити
// notes - що добавити
function renderNoteList(listRef, notes) {
  const cards = notes.map(note => card(note));
  listRef.innerHTML = ''; // делает изначально ul пустим
  REFS.noteList.insertAdjacentHTML('beforeend', cards.join(' ')); // добавить в ul
  return listRef;
}

export { addItemToList, removeListItem, renderNoteList, card };
