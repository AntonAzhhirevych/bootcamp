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

  findNoteById = function(id) {
    // шукаємо обєкт по id в масиві.
    for (let obj of this.notes) {
      if (obj.id === id) {
        return obj; //якщо знайдемо то повернемо весь обєкт
      }
    }
    return undefined; //якщо ні undefined
  };

  saveNote = function(note) {
    // приймаємо новий обєкт
    return this.notes.push(note); // додаємо в масив
  };

  deleteNote = function(id) {
    // приймаємо id
    for (let obj of this.notes) {
      //переберемо наш масив обєктів
      if (obj.id === id) {
        const index = this.notes.indexOf(obj); //визначимо індекс обєкта
        this.notes.splice(index, 1); //видаляємо по індексу
      }
    }
  };

  updateNoteContent = function(id, updatedContent) {
    // обновлюємо контент по переданому id
    for (let obj of this.notes) {
      if (obj.id === id) {
        return (obj = Object.assign(obj, updatedContent)); // використовуємо метод assing
      }
    }
  };
  updateNotePriority = function(id, priority) {
    //оновлюємо приорітет
    for (let obj of this.notes) {
      if (obj.id === id) {
        obj.priority = priority;
        return obj;
      }
    }
  };
  filterNotesByQuery = function(query) {
    // новий масив по фільтру
    const newArr = [];

    for (let obj of this.notes) {
      const titleLower = obj.title.toLowerCase(); // переводимо в потрібний нам регістр
      const bodyLower = obj.body.toLowerCase();
      if (titleLower.includes(query) || bodyLower.includes(query)) {
        // шукаємо переданий аргумент в наших обєктах
        newArr.push(obj);
      }
    }
    return newArr;
  };
  filterNotesByPriority = function(priority) {
    const newArr = [];
    for (let obj of this.notes) {
      if (obj.priority === priority) {
        newArr.push(obj);
      }
    }
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

const noteList = document.querySelector('.note-list');

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

//-----------------------------------render-----------------------------------------

function renderNoteList(listRef, notes) {
  const cards = notes.map(note => createListItem(note));
  listRef.append(...cards);
  return listRef;
}

renderNoteList(noteList, notepad.notes);
