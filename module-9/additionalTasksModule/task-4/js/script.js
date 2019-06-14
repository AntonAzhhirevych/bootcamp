'use strict';

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

const refs = {
  form: document.querySelector('form'),
  input: document.querySelectorAll('input'),
  result: document.querySelector('.result'),
};

console.log(refs.form);

console.log(refs.input);

console.log(refs.result);

const addResult = e => {
  e.preventDefault(); // щоб не перезавантажувати браузер
  refs.input.forEach(el => {
    //перебираємо інпути і якщо є чекнута то записуємо в результат
    if (el.checked) {
      refs.result.textContent = `Result: ${el.parentElement.textContent}`;
    }
  });
};
refs.form.addEventListener('submit', addResult);
