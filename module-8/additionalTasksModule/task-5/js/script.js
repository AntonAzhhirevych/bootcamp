'use strict';

/*
      Есть список с классом .size-filter из произвольного 
      количества чекбоксов, каждый из которых содержит 
      размер одежды в фильтре.
      
      Напишите функцию collectInputData(inputs), которая
      принимает 1 параметр inputs - массив тех инпутов
      у которых состояние checked.
      
      Возвращает массив значений атрибута value.
    */

const value = [];
const checked = document.querySelectorAll('input[checked]');

console.log(checked.forEach(el => value.push(el.value)));

console.log(value);
