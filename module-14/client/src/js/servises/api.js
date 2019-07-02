// import notepad from '../script';
export const URL = 'http://localhost:3000/posts'; // адреса сервера

// ПРОСМОТР ЗАМЕТОК
export const getNotes = async () => {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const notes = response.json();
      return notes;
    } else {
    }
  } catch (error) {
    throw error;

    // throw new Error('запрос на сервер' + result.statusText);
  }
};

//по http  можемо надсилати тільки строку
// ДОБАВЛЕНИЕ
// створили обєкт settings який несе информацію для роботи з даними на сервери
// робмо перевірку з поверненням актуальної інформації

export const saveNotes = async post => {
  const settings = {
    method: 'POST', // POST-добавити
    headers: {
      'Content-Type': 'application/json', // формат контента
    },
    body: JSON.stringify(post), // весь контент переводимо в строку
  };
  const response = await fetch(URL, settings);
  try {
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    throw error;
  }

  // throw new Error('запрос на сервер' + response.statusText); // якщо буде помилка то повернемо помилку
};

//УДАЛЕНИЕ ЗАМЕТКИ
// settings - обект  з информациєю по роботі з сервером
export const deleteNotes = async id => {
  console.log('TEST ID', id);
  const settings = {
    method: 'DELETE', // метод видалення
  };
  const response = await fetch(`${URL}/${id}`, settings);
  try {
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
};

// ИЗМЕНЕНИЯ
export const updateNotes = async (id, post) => {
  const settings = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  };

  const response = await fetch(`${URL}/${id}`, settings);
  try {
    if (response.ok) {
      return response.json();
    }
  } catch (eroor) {
    throw error;
  }
};
