import * as api from './servises/api';
import { card } from './servises/render';

class Notepad {
  constructor(notes = []) {
    this.notes = notes;
  }
  get() {
    return api.getNotes().then(posts => {
      posts.map(post => this.notes.push(post));
      return this.notes;
    });
  }

  add(item) {
    // після виконнаня функції  saveNotes виконаємо наступне
    return api.saveNotes(item).then(saveItem => {
      //заметку додали  на сервер в функції saveNotes,
      //на сервері було сформовано ID,
      // тепер повністю готову заметку додаємо в масив
      this.notes.push(saveItem);
      //+ додамо в HTML
      const listItem = document.querySelector('.note-list');
      const item = card(saveItem);
      listItem.insertAdjacentHTML('beforeend', item);
      //повернемо
      return saveItem;
    });
  }
  delete(id) {
    // видаляємо на сервери
    return api.deleteNotes(id).then(() => {
      //після того як видалили на сервери ми видаляємо з масиву
      return (this.notes = this.notes.filter(item => item.id !== id));
    });
  }

  updateNotes(id, post) {
    return api.updateNotes(id, post).then(updateitem => {
      this.notes.map(item => (item.id === updateitem.id ? updateitem : item));
    });
  }

  //результат пошуку
  filterNotesByQuery(query) {
    return new Promise(resolve => {
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
}

export default Notepad;
