'use strict';

///////////////////////////////////////// CALLBACK//////////////////////////

// function one(callback) {
//     return console.log(callback());
// }

// function two() {
//   return 'Hello';
// }

// one(two)

// const createCounter = () => {
//     // Локальная «свободная» переменная privateCounter,
//     // которая доступна только в замыкании.
//     let privateCounter = 0;

//     const increment = () => {
//       privateCounter += 1;
//       console.log(privateCounter);
//     };

//     return increment;
//   };

//   const counterA = createCounter();
//   counterA(); // 1
//   counterA(); // 2
//   counterA(); // 3

//   const counterB = createCounter();
//   counterB(); // 1
//   counterB(); // 2

// function get(arr, callback) {
//   let newArr = [];

//   for (let ar of arr) {
//       const result = callback(ar)
//       newArr.push(result)
//   }
//   return newArr
// }

// function double(val) {
//  return val * 2;
// }


// const numbers = [1,2,3,4,5]



// console.log(get(numbers,double));




