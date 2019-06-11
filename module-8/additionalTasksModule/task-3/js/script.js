'use strict';

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const list = document.querySelector('.list');
console.log(list);

const arr = elements.map(elem => `<li><p>${elem}</p></li>`);

list.innerHTML = arr;
