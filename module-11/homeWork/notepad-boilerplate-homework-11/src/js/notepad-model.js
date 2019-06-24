class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }
  get notes() {
    return this._notes;
  }

  generatorId() {
    const shortid = require('shortid');
    return shortid.generate();
  }

  findNoteById(id) {
    this.notes.find(obj => obj.id === id);
  }

  saveNote(note) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.notes.push(note);
        resolve(note);
        localStorage.setItem('notes', JSON.stringify(this.notes));
      }, 200);
    });

    // return note;
  }

  deleteNote(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.notes.filter(obj => {
          if (obj.id === id) {
            this.notes.splice(this.notes.indexOf(obj), 1);
            localStorage.setItem('notes', JSON.stringify(this.notes));
            resolve(id);
          }
        });
      }, 200);
    });
  }

  updateNoteContent(id, updatedContent) {
    return new Promise(resolve => {
      setTimeout(() => {
        const elem = this.notes.find(obj => obj.id === id);
        if (elem) {
          resolve(Object.assign(elem, updatedContent));
        }
      });
    });
  }
  updateNotePriority(id, priority) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.notes.find(obj => (obj.id === id ? (obj.priority = priority) : null)));
      });
    }, 300);
  }
  filterNotesByQuery(query) {
    const newArr = [];
    this.notes.filter(obj => {
      const titleLower = obj.title.toLowerCase(); // переводимо в потрібний нам регістр
      const bodyLower = obj.body.toLowerCase();
      if (titleLower.includes(query.toLowerCase()) || bodyLower.includes(query.toLowerCase())) {
        newArr.push(obj);
      }
    });
    return newArr;
  }
  filterNotesByPriority(priority) {
    const newArr = [];

    this.notes.filter(obj => {
      if (obj.priority === priority) {
        newArr.push(obj);
      }
    });
    return newArr;
  }
}

export default Notepad;
