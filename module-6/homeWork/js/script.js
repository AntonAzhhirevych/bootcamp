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

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Notepad.Priority.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Notepad.Priority.NORMAL,
  },
];

const notepad = new Notepad(initialNotes);

/*
  Смотрю что у меня в заметках после инициализации
*/
console.log('Все текущие заметки: ', notepad.notes);

/*
 * Добавляю еще 2 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Notepad.Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.notes);

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log('Заметки после обновления контента заметки с id-3: ', notepad.notes);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.notes);
