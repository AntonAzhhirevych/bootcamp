class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }
  get notes() {
    return this._notes;
  }
  //створення унікального id
  generatorId() {
    const shortid = require('shortid');
    return shortid.generate();
  }

  findNoteById(id) {
    this.notes.find(obj => obj.id === id);
  }

  saveNote(note) {
    return new Promise(resolve => {
      //додаємо в масив
      this.notes.push(note);
      //повертаємо проміс
      resolve(note);
      //результат записуємо localStorage
      localStorage.setItem('notes', JSON.stringify(this.notes));
    });
  }

  deleteNote(id) {
    return new Promise(resolve => {
      this.notes.filter(obj => {
        if (obj.id === id) {
          // видаляємо з масиву
          this.notes.splice(this.notes.indexOf(obj), 1);
          //повертаємо проміс
          resolve(id);
          //записуємо в localStorage
          localStorage.setItem('notes', JSON.stringify(this.notes));
        }
      });
    });
  }

  updateNoteContent(id, updatedContent) {
    return new Promise(resolve => {
      const elem = this.notes.find(obj => obj.id === id);
      if (elem) {
        resolve(Object.assign(elem, updatedContent));
      }
    });
  }
  updateNotePriority(id, priority) {
    return new Promise(resolve => {
      resolve(this.notes.find(obj => (obj.id === id ? (obj.priority = priority) : null)));
    });
  }

  //результат пошуку
  filterNotesByQuery(query) {
    return new Promise(resolve => {
      //результат пошуку
      const newArr = [];
      //перебераємо масив заметок
      this.notes.filter(obj => {
        // переводимо в потрібний нам регістр
        const titleLower = obj.title.toLowerCase();
        const bodyLower = obj.body.toLowerCase();
        //якщо введенні символи співпадають повернемо новий масив
        if (titleLower.includes(query.toLowerCase()) || bodyLower.includes(query.toLowerCase())) {
          // додаємо в новий масив
          newArr.push(obj);
        }
        //повертаємо проміс
        resolve(newArr);
      });
    });
  }

  filterNotesByPriority(priority) {
    return new Promise(resolve => {
      const newArr = [];

      this.notes.filter(obj => {
        if (obj.priority === priority) {
          newArr.push(obj);
        }
      });
      resolve(newArr);
    });
  }
}

export default Notepad;
