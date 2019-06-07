'use strict';
// (a,b)=> a.first > b.first

// task-1

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan принимает два параметра - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//     const result = [];

//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       if (arr[i] > num) {
//         result.push(arr[i]);
//       }
//     }

//     return result;
//   };

//result

// function findGreaterThan(num, arr) {
//   return arr.filter(el => el > num);
// }

// console.log(findGreaterThan(2, [1, 2, 3, 4, 5])); // [3, 4, 5,]
// console.log(findGreaterThan(3, [1, 2, 3, 4, 5])); // [4, 5,]
// console.log(findGreaterThan(1, [1, 2, 3, 4, 5])); // [2, 3, 4, 5,]

/* 
    Функция multiplyBy принимает два параметра - число и массив. 
    Возвращает массив все значения которого умножены на число.
  */

// const multiplyBy = (num, arr) => {
//   let result = [];

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     result.push(arr[i] * num);
//   }

//   return result;
// };

//result

// function multiplyBy(num, arr) {
//   return arr.map(el => el * num);
// }

// console.log(multiplyBy(2, [1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
// console.log(multiplyBy(3, [1, 2, 3, 4, 5])); // [3, 6, 9, 12, 15]
// console.log(multiplyBy(4, [1, 2, 3, 4, 5])); // [4, 8, 12, 16, 20]

/* 
    Функция summAllNumbers принимает любое число аргументов.
    Возвращает число - сумму всех аргументов.
  */
// function summAllNumbers(...args) {
//   let accumulator = 0;

//   for (let i = 0, max = args.length; i < max; i += 1) {
//     accumulator += args[i];
//   }

//   return accumulator;
// }

//result

// function summAllNumbers(...args) {
//   return args.reduce((acc, current) => (acc += current));
// }

// console.log(summAllNumbers(1, 2, 3)); // 6
// console.log(summAllNumbers(1, 2, 3, 4)); // 10
// console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15

// /*
//     Функция findEvery получает два аргумента - число и массив.
//     Возвращает true если все элементы массива больше или равны числу.
//     Иначе если есть хоть один элемент меньше числа, то возвращается false.
//   */

// const findEvery = (num, arr) => {
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] < num) {
//       return false;
//     }
//   }

//   return true;
// };

// function findEvery(num, arr) {
//   return arr.every(el => el >= num);
// }

// console.log(findEvery(5, [5, 6, 7, 8, 9])); // true
// console.log(findEvery(6, [5, 6, 7, 8, 9])); // false
// console.log(findEvery(4, [5, 6, 7, 8, 9])); // true

//task-2

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
//   console.log(prop);
//   const value = arr.map(el => el[prop]);

//   return value;
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

const guests = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true },
];

function setGuestState(users, period) {
  users.map(el => {
    if (el.inactiveDay > period) {
      return (el.isActive = false);
    }
  });
}

// Вызовы функции для проверки
setGuestState(guests, 10); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
console.log(guests);

setGuestState(guests, 20); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
setGuestState(guests, 50); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
