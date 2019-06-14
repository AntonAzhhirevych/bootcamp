'use strict';
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

const sub = document.querySelector('button[data-action="sub"]');
console.log(sub);
const add = document.querySelector('button[data-action="add"]');
console.log(add);
const result = document.querySelector('.value');
console.log(result);




class Counter{
  constructor(onChange){
    this.
  }
}


















// class Value {
//   constructor(onChange) {
//     this.value = 0;
//     this.onChange = onChange;
//   }
//   increment() {
//     this.value++;
//     onChange(this.value);
//   }
//   decrement() {
//     this.value--;
//     onChange(this.value);
//   }
// }

// function onChange(value) {
//   result.textContent = value;
// }
// const value = new Value(onChange);

// sub.addEventListener('click', value.decrement);
// add.addEventListener('click', value.increment);

//------------------------------------
