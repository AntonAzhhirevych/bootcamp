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

// const numbers = [2, 1, 4, 3, 5];
// // Отсортирует по возрастанию
// console.log('Before sort: ', numbers); // [2, 1, 4, 3, 5]
// console.log('After sort: ', numbers.sort()); // [1, 2, 3, 4, 5]

// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// // Отсортирует по алфавиту
// console.log('Before sort: ', clients); // ["Mango", "Ajax", "Poly", "Chelsey"]
// console.log('After sort: ', clients.sort()); // ["Ajax", "Chelsey", "Mango", "Poly"]

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
// console.time('start');

// const arr = [12, 34, 56, 77, 33, 11];

// const result = arr.reduce((acc, el) => {
//   return acc + el;
// });

// console.log(result);

// const numbers = [1, 2, 3, 5, 6, 4, 7, 9, 8];

// const sort = [...numbers, 12, 123];

// console.log(sort);
// console.log(numbers);

//-------------------------------------------------

// task-2

/*
  Напиши функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно использу перебирающие методы массивов, никаких for!
*/

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// function getPropValues(arr, prop) {
//   return arr.map(el => el[prop]);
// }

// // Вызовы функции для проверки
// console.log(getPropValues(guests, 'name')); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
// console.log(getPropValues(guests, 'age')); // [20, 18, 30, 45]
// console.log(getPropValues(guests, 'isActive')); // [true, false, true, false]

// task-3

/*      
  Напиши функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const users = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true },
// ];

// function setGuestState(guests, period) {
//   guests.map(el => {
//     if (el.inactiveDays > period) {
//       el.isActive = false;
//     } else {
//       el.isActive = true;
//     }
//   });

//   return guests;
// }

// // Вызовы функции для проверки
// console.log(setGuestState(users, 10)); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(setGuestState(users, 20)); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(setGuestState(users, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

// task-4

/*  
  Напиши функию getActiveGuests(guests), принимающую массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
         
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

const guests = [
  { name: 'Mango', age: 20, isActive: true },
  { name: 'Poly', age: 18, isActive: false },
  { name: 'Ajax', age: 30, isActive: true },
  { name: 'Chelsey', age: 45, isActive: false },
];

// let result = [];
function getActiveGuests(guests) {
  return guests.filter(el => (el.isActive === true ? el : null));
}

// // Вызовы функции для проверки
console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax

// console.log(result);
