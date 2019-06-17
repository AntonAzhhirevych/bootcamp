'use strict';

class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }
  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };
  get notes() {
    return this._notes;
  }

  generateUniqueId = () =>
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  findNoteById = function(id) {
    this.notes.find(obj => {
      if (obj.id === id) {
        return obj;
      }
    });
    return undefined;
  };

  saveNote = function(note) {
    return this.notes.push(note);
  };

  deleteNote = function(id) {
    this.notes.find(obj => (obj.id === id ? obj : undefined));
  };

  updateNoteContent = function(id, updatedContent) {
    this.notes.find(obj =>
      obj.id === id ? (obj = Object.assign(obj, updatedContent)) : null
    );
  };
  updateNotePriority = function(id, priority) {
    this.notes.find(obj => (obj.id === id ? (obj.priority = priority) : null));
  };
  filterNotesByQuery = function(query) {
    const newArr = [];

    this.notes.filter(obj => {
      const titleLower = obj.title.toLowerCase(); // переводимо в потрібний нам регістр
      const bodyLower = obj.body.toLowerCase();
      if (
        titleLower.includes(query.toLowerCase()) ||
        bodyLower.includes(query.toLowerCase())
      ) {
        newArr.push(obj);
      }
    });
    return newArr;
  };
  filterNotesByPriority = function(priority) {
    const newArr = [];

    this.notes.filter(obj => {
      if (obj.priority === priority) {
        newArr.push(obj);
      }
    });
    return newArr;
  };
}

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

const notepad = new Notepad(initialNotes);

//---------------------------------------------REFERENSE-------------------------------------------------------------------------

const REFS = {
  noteList: document.querySelector('.note-list'), //ul
  form: document.querySelector('.note-editor'), // форма для создания новой заметки
  titleInput: document.querySelector('.note_title'), // название заметки
  bodyInput: document.querySelector('.note_body'), // текст
  searchForm: document.querySelector('.search-form__input'), // поле для фильтрации заметок
  deleteNote: document.querySelector('button[data-action="edit-note"]'),
};
// console.log(REFS.titleInput);
// console.log(REFS.bodyInput);
//------------------------------------------LISTENER------------------------------------------------------------------

REFS.searchForm.addEventListener('input', handleFilterChange);

REFS.form.addEventListener('submit', handleSubmit);

REFS.noteList.addEventListener('click', handleDeleteNote);
//---------------------------------------HANDLE FUNCTION----------------------------------------------------------------

function handleFilterChange(event) {
  // console.log(e.target.value);
  const filterNotes = notepad.filterNotesByQuery(event.target.value);
  renderNoteList(REFS.noteList, filterNotes);
  event.preventDefault();

  // console.table(search);
}
function handleSubmit(event) {
  event.preventDefault();
  const title = REFS.titleInput.value.trim(); // .trim - убрать все пробели
  // console.log('title', title);
  const body = REFS.bodyInput.value.trim();
  // console.log('body', body);

  if (title !== '' && body !== '') {
    REFS.form.reset(); // очистит поля для ввода после сохранения
    addItemToList(title, body); // рендер функция
  } else {
    alert('Для добавления заметки необходимо заполнить все поля!!!');
  }
}
function handleDeleteNote(event) {
  if (event.target.parentNode.dataset.action === 'delete-note')
    removeListItem(event.target.closest('li'));
}
//-------------------------------------CREATE LIST--------------------------------------------------------------
function createListItem(note) {
  const noteListItem = document.createElement('li');
  noteListItem.classList.add('note-list__item');
  noteListItem.dataset.id = note.id;

  const Note = document.createElement('div');
  Note.classList.add('note');
  noteListItem.appendChild(Note);

  Note.appendChild(createNoteContent(note));
  Note.appendChild(createNoteFooter(note.priority));
  return noteListItem;
}

function createNoteContent(note) {
  const noteContent = document.createElement('div');
  noteContent.classList.add('note__content');

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note__title');
  noteTitle.textContent = note.title;

  const noteBody = document.createElement('p');
  noteBody.classList.add('note__body');
  noteBody.textContent = note.body;

  noteContent.append(noteTitle, noteBody);

  return noteContent;
}

function createActionButton(icon, data) {
  const button = document.createElement('button');
  button.classList.add('action');
  button.dataset.action = data;

  const buttonInner = document.createElement('i');
  buttonInner.classList.add('material-icons');
  buttonInner.classList.add('action__icon');
  buttonInner.textContent = icon;

  button.appendChild(buttonInner);

  return button;
}

function createNoteFooter(Priority) {
  const noteFooter = document.createElement('footer');
  noteFooter.classList.add('note__footer');

  const noteSection = document.createElement('section');
  noteSection.classList.add('note__section');

  const notePriority = document.createElement('span');
  notePriority.classList.add('note__priority');
  notePriority.textContent = `Priority : ${Priority}`;

  const noteSection2 = document.createElement('section');
  noteSection.classList.add('note__section');

  noteFooter.append(noteSection, noteSection2);

  noteSection.append(
    createActionButton(ICON_TYPES.ARROW_DOWN, NOTE_ACTIONS.INCREASE_PRIORITY),
    createActionButton(ICON_TYPES.ARROW_UP, NOTE_ACTIONS.DECREASE_PRIORITY)
  );

  noteSection.appendChild(notePriority);

  noteSection2.append(
    createActionButton(ICON_TYPES.EDIT, NOTE_ACTIONS.EDIT),
    createActionButton(ICON_TYPES.DELETE, NOTE_ACTIONS.DELETE)
  );

  return noteFooter;
}

//-----------------------------------RENDER FUNCTION-----------------------------------------
// функция для добавления новой заметки
function addItemToList(name, text) {
  let listItem = createListItem({
    id: notepad.generateUniqueId(), // генератор id
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
// функция для  отрисовки новой заметки
function renderNoteUser(listRef, notes) {
  const cards = createListItem(notes);
  listRef.append(...cards);
  return listRef;
}

renderNoteList(REFS.noteList, notepad.notes);
