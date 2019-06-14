'use strict';

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

const inputList = document.querySelector('.input-list');

// console.log(inputList);
const addEfect = e => {
  let userLength = e.target.value.length;
  let dataLength = +e.target.dataset.length;

  if (userLength !== dataLength) {
    e.target.classList.add('invalid');
  } else {
    e.target.classList.add('valid');
  }
};

inputList.addEventListener('change', addEfect);
