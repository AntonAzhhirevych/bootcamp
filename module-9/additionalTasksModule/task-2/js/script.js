'use strict';

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые будут введены в инпуты и запишите их сумму в span.result.
*/

const result = document.querySelector('.result');

const add = document.querySelector('.add');

const text = document.querySelectorAll('input');

console.log(text);
console.log(add);

console.log(result);

const addResult = () => {
  result.textContent = +text[0].value + +text[1].value;
};

add.addEventListener('click', addResult);
