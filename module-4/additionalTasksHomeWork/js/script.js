'use strict';

//task-1

/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';

// user.hobby = 'javascript';

// user.premium  = false

// // const keys =Object.keys(user)

// // for(let key of keys){
// //     console.log(`${key}: ${user[key]}`);
// // }

// const keys =Object.entries(user)
// for(let key of keys){
//     console.log(`${key[0]}:${key[1]}`);
// }

// console.log(keys);

// console.log(user);

//task-2

/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };

// const tasks = Object.entries(tasksCompleted);// перетвоив key:value обєкта в окремі масіви

// let firstArr = tasks[0];// виділив 1 масів
// let big = firstArr[1]; //зробив value 1 масіва найбільшим
// let result; // створив перемінну в яку потім запишу результат

// for (let i of tasks) { // переберу кожний масив
//   if (i[1] > big) { // порівняю value кожного з значенням big ,  якщо воно буде більше то запишу в big
//     big = i[1]; // записую в big
//   }

//   if (i[1] === big) { // якщо value масива співпадає з big то запишу це в result
//     result = i; // записую
//   }
// }

// console.log(`${result[0]}: ${result[1]}`); // вивожу result (key: value)

// task-3

/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки

// function countProps(obj) {
//   return Object.entries(obj).length;
// }

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 3, c: 'hello' })); // 3

// task-4

/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// function isObjectEmpty(obj) {
//   const entr = Object.entries(obj);
//   if (entr.length) {
//     return false;
//   }
//   return true;
// }

// // Вызовы функции для проверки
// console.log(isObjectEmpty({})); // true

// console.log(isObjectEmpty({ a: 1 })); // false

// console.log(isObjectEmpty({ a: 1, b: 2 })); // false

// task-5

/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

// function countTotalSalary(salaries) {
//   let sala = Object.values(salaries);
//   let result = 0;
//   for (let i of sala) {
//     result += i;
//   }

//   return result;
// }

// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// task-6

/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful' },
//   { name: 'Ajax', age: 3, mood: 'tired' },
// ];

// function getAllPropValues(arr, prop) {
//   let newArr = [];
//   for (let key of arr) {
//     const userProp = key[prop];

//     if (userProp) {
//       newArr.push(userProp);
//     }
//   }

//   return newArr;
// }

// // Вызовы функции для проверки
// console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']

// console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']

// console.log(getAllPropValues(users, 'active')); // []

// task-7

// const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];
// function combine(names, prices) {
//   for (let i = 0; i < names.lendth; i++) {
//     const name = names[i];
//     console.log(name);
//     const price = prices[i];
//     const newObj = { name: price };

//   }
//   return newObj
// }

/*
 * Есть два массива names и prices с именами и ценами товаров.
 * Напишите функцию combine(names, prices), которая получает
 * эти два массива и возвращает массив объектов со свойствами name и price.
 */

// const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];
// let newArr = [];
// function combine(names, prices) {


  
//   for (let i = 0, max = names.length; i < max; i += 1) {
//     const name = names[i];
//     const \
//     // console.log(names[i]);
//     // console.log(prices[ i]);

//     newArr = {name :names[i] , prices: prices[1] }
//     // console.log(newArr);
//   }

//   return newArr;
// }

// console.log(newArr);

// const products = combine(names, prices);
// console.log(products); // массив объектов со свойствами name и price

// /////////////////////////////////////
//Object.assing()

// const defaultSetings = {
//   a: 1,
//   b: true,
//   c: true,
// };
// const userSettings = {
//   b: false,
//   c: false,
// };

// const updatesSettings = Object.assign({}, defaultSetings,userSettings);

// console.log(updatesSettings);
