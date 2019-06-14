'use strict';

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

const input = document.querySelector('.input');
const textUp = document.querySelector('.message');
const textDown = document.querySelector('.input-value');

function addText(e) {
  textUp.textContent = 'Input is in focus!';
  textDown.textContent = `Current input value: ${e.target.value}`;
}

input.addEventListener('input', addText);
