'use strict';

/////////////////////////////чиста функція

// function create(arr) {
//   for (let el of arr) {
//       arr = el*2
//   }

//   return arr
//   // коли використовуємо глобальну функцію в середині це вважається грязною функцією
//   //імутабельність даних

//   // console.log(arr);
// }

// function create2(arr) {
//   let newArr = [];
//   for (let el of arr) {
//       newArr.push(el*2)
//   }

//   return console.log(newArr);
//   // console.log(arr);
// }

// create()
// create2(arr)

/////////////////////////////////////////////////

//--------------------------------------------------функціональні методи масивів
// let a = [1,2,3,4,5,6,7,8,9,10]
// array.method(function(el,index,arr){})

//----------------------------------------------------MAP---------------------------------------------------------

// //map  - ЗАВЖДИ ПОВЕРТАЄ НОВИЙ МАСИВ НЕ МУТУЮЧИ ОСНОВНИЙ

// let arr = [1, 2, 3, 4, 5];

//обичний метод

// function double(arr) {
//   let newArr = [];
//   for (let i = arr[0], max = arr.length + 1; i < max; i += 1) {
//     newArr.push(i * 2);
//   }

//   return newArr;
// }

// console.log(double(arr));

//метод map

// let result = arr.map(function(el) {
//   return el * 2;
// });

// метод мап в стрелочні функції

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = arr.map(el => el * 2);

// console.table(result);

//--------------------------------------------------FILTER---------------------------------------------

//filter  - ЗАВЖДИ ПОВЕРТАЄ НОВИЙ МАСИВ НЕ МУТУЮЧИ ОСНОВНИЙ

// let arr = [1, 2, 3, 4, 5];

// let result = arr.filter(function(el) {
//   if (el < 5) {
//     return el;
//   }
// });

// let result = arr.filter(el => {
//   if (el < 5) {
//     return el;
//   }
// });

// let result = arr.filter(el => (el < 5 ? el : null));

// let result = arr.filter(el => (el < 5 ));

//----------------------------------------------------FIND------------------------------------------------

//find  ШУКАЄ ДО ТОГО ЗНАЧЕННЯ ЯКЕ МИ ВКАЗАЛИ ДАЛІ НЕ ЙДЕ

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = arr.find(el => el === 7);

//----------------------------------------------------EVERY-------------------------------------------------

//РЕЗУЛЬТАТОМ ЗАВДИ БУДЕ TRUE АБО FALSE

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = arr.every(el => el < 11);

//----------------------------------------------------SOME------------------------------------------------
//

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = arr.some(el => el < 20);

//----------------------------------------------------REDUCE-----------------------------------------------------

//  ОБЄДНУЄ ВСІ ЕЛЕМЕНТИ
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let total = 0;
// for (let el of arr) {
//   total += el;
// }

// let result = arr.reduce(function(acc, el) {
//   return acc + el;
// }, 0);

// let result = arr.reduce((acc, el) => acc + el, 0);

// console.log(result);

// let card = [
//   {
//     price: 105,
//     name: 'phone',
//   },
//   {
//     price: 35,
//     name: 'car',
//   },
//   {
//     price: 55,
//     name: 'shoes',
//   },
// ];

// let result = card.reduce((acc,el)=> acc+ el.price,0)

//-----------------------------------------------SORT--------------------------------

// МЕДОЯ ЯКИЙ ЗМІНЮЄ ОРИГІНАЛ  &&  ПОРІВНЮЄ ПОЧЕРЗІ ЕЛЕМЕНТИ МАСИВУ
// МЕТОД ЯКИЙ ПОРІВНЮЄ ЕЛЕМЕНТИ МАСИВУ

const numbers = [2, 1, 4, 3, 5];
// Отсортирует по возрастанию
console.log('Before sort: ', numbers); // [2, 1, 4, 3, 5]
console.log('After sort: ', numbers.sort()); // [1, 2, 3, 4, 5]

const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// Отсортирует по алфавиту
console.log('Before sort: ', clients); // ["Mango", "Ajax", "Poly", "Chelsey"]
console.log('After sort: ', clients.sort()); // ["Ajax", "Chelsey", "Mango", "Poly"]

// console.log(arr.sort());

// arr.sort(function(a,b){// цей запис актуальний тільки для чисел
//    return a-b // b-a СТАВИТЬ ЕЛЕМЕНТУ ПО ВОЗРОСТАННЮ ТА НАВПАКИ
// })

// arr.sort((a, b) => b - a);
// console.log(arr);

//------------------------------------------ CHANING------------------------------------

// const arr = ['mango', 'poly', 'gena'];

// const result = [...new Set(arr)];

// console.log(result);

const arr = [12, 34, 56, 77, 33, 11];

const result = arr.reduce((acc, el) => {
  return acc + el;
});

console.log(result);