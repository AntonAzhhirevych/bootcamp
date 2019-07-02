// import notepad from '../script';
export const URL = 'http://localhost:3000/posts'; // адреса сервера

// ПРОСМОТР ЗАМЕТОК
export const getNotes = () => {
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('запрос на сервер' + response.statusText);
  });
};

//по http  можемо надсилати тільки строку
// ДОБАВЛЕНИЕ
// створили обєкт settings який несе информацію для роботи з даними на сервери
// робмо перевірку з поверненням актуальної інформації
export const saveNotes = post => {
  const settings = {
    method: 'POST', // POST-добавити
    headers: {
      'Content-Type': 'application/json', // формат контента
    },
    body: JSON.stringify(post), // весь контент переводимо в строку
  };
  return fetch(URL, settings).then(response => {
    if (response.ok) {
      // якщо response true то повернемо в json форматі
      // console.log(response.ok);
      return response.json();
    }
    throw new Error('запрос на сервер' + response.statusText); // якщо буде помилка то повернемо помилку
  });
};

//УДАЛЕНИЕ ЗАМЕТКИ
// settings - обект  з информациєю по роботі з сервером
export const deleteNotes = id => {
  console.log('TEST ID', id);
  const opt = {
    method: 'DELETE', // метод видалення
  };
  return fetch(`${URL}/${id}`, opt).then(response => {
    if (response.ok) {
      console.log('response.ok :', response.ok);
      return response.json();
    }
    console.log('response.ok :', response.ok);
    throw new Error('запрос на сервер : ' + response.statusText);
  });
};

// ИЗМЕНЕНИЯ
export const updateNotes = (id, post) => {
  const opts = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  };

  return fetch(`${URL}/${id}`, opts).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('запрос на сервер' + response.statusText);
  });
};
