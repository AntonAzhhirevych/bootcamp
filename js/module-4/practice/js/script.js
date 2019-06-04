'use strict';

// const one = {
//   eng: 21,
//   ukr: 44,
//   his: 5,
// };

// const two = {
//   eng: 61,
//   ukr: 74,
//   his: 513,
// };

// const res = { ...one, ...two };

// console.log(res);

// // Создаем карту где ключом свойства будет цвет, а значением данные
// const fruitsByColor = {
//     red: ['apple', 'strawberry'],
//     yellow: ['banana', 'pineapple'],
//     purple: ['grape', 'plum'],

//  getFruitsWithColor(color) {
//     return fruitsByColor[color] || [];
//   }

// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// // console.log(fruits);

// function find(arr, callback) {
//   // console.log(arr);
//   // console.log(callback);
//   let result;
//   let mass = []
//   for (let key of arr) {
//     // console.log(key);
//     result = callback(key);
//     // console.log(result);

//     if(result){
//       mass.push(key)
//     }
//     return mass
//   }
// }

//    find(fruits, el => el.isFresh); //функция приймає елемент і повертає його імя

//=====================================================

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const find = (arr, callback)=> {
//   // console.log(arr);
//   let result;
//   const mass = [];
//   for (let key of arr) {
//     result = callback(key);
//     // console.log(result);

//     mass.push(key);
//   }
//   return mass;
// }

// function fn(el){
//   return el.name === 'apples'
// }

// console.log(find(fruits, fn));

//===============================THIS===============================================
const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const saveNote = {
  notes: [],
  saveNotes(note) {
    Object.assign(notes, ...note);
  },
};

saveNote.saveNotes({
  id: 'id-1',
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: Priority.HIGH,
});

console.log(notes);
