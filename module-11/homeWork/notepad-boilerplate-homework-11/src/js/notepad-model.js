class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }
  get notes() {
    return this._notes;
  }

  generatorId() {
    const shortid = require('shortid');
    return shortid;
  }

  findNoteById(id) {
    this.notes.find(obj => obj.id === id);
  }

  saveNote(note) {
    return this.notes.push(note);
  }

  deleteNote(id) {
    this.notes.filter(obj => obj.id !== id);
  }

  updateNoteContent(id, updatedContent) {
    const elem = this.notes.find(obj => obj.id === id);
    if (elem) {
      Object.assign(elem, updatedContent);
    }
  }
  updateNotePriority(id, priority) {
    this.notes.find(obj => (obj.id === id ? (obj.priority = priority) : null));
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
