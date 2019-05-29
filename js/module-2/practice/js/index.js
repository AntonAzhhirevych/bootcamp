'use strict';

//////////////////SPLIT JOIN

// let string = 'Hello world';

// let arrString = string.split('');

// console.log(typeof arrString);

// let goString = arrString.join('')

// console.log(typeof goString);

/////////////////////SLICE

// let slice = [1,2,3,4,5]
// let slice1 =slice
// console.log(slice1);
// slice1.push(22)
// console.log(slice1);
// console.log(slice);

// let goSlice = slice.slice(0,3)

// goSlice.push(10)

// console.log(slice);
// console.log(goSlice);

// console.log(slice);
// console.log(goSlice);

/////////////.reverse()

// let array = [1,2,3,4,5]

// console.log(array.reverse());

//////////////concat

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9]
// let arr3 = [10,11,12]

// let arrayConcat = arr1.concat(arr2,arr3)

// console.log(arrayConcat);

// const clients = ["Mango", "Ajax", "Poly", "Chelsey"];

// const newArr = clients.concat(["Monkong", "Singu"]);

// console.log(newArr);
// // ["Mango", "Ajax", "Poly", "Chelsey", "Monkong", "Singu"]

// console.log(clients);
// // ["Mango", "Ajax", "Poly", "Chelsey"]

//////////////////////Array.isArray....

// let array = [1,2,3,4,5]

// console.log(Array.isArray(array));

// const arr = [1,2,3,4]
// const newArr =['att','aaaa']

// const arr1 = arr.concat(newArr)

// console.log(arr1);

/////////////////////////////ЦЫКЛ//////////////////////////////////////////////
//
//while
//
// let counter = 0;

// while (counter < 10) {

//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while(clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// console.log(clientCounter);

//
//Do while
//
// let i = 0;

// do {
//   let us = Number(prompt('num'));
//   if (us < 4) {
//     i++;
//     console.log(i);
//   }
// } while (i < 4);

// let input = 0;

// do {
//   input = Number( prompt('Введите число больше 10', '') );
// } while(input <= 10);

// const number = 10;

// for(let i = 3; i < number; i += 1) {
//   console.log(i);
// }

// for(let i = 0, max = 10; i < max; i += 1) {
//     console.log(`${max} % ${i} = `, max % i);
//   }
// const clients = ['Mango', 'Ajax', 'Poly'];
// for(let i = 0, max = clients.length; i < max; i += 1) {
//    console.log(clients[i]);
//   }

// const numbers = [];

// for(let i = 0; i < 10; i += 1) {
//   numbers.push(i);
// }

// console.log(numbers);

// Итерация по строке
// const iterable = 'javascript';

// for (const value of iterable) {
//   console.log(value);
// }

//по масиву

// const iterable = [1,2,3,4,5]

// for(let variable of iterable){
//     console.log(variable);
// }

// const name = ['Khabib','Ajax', 'Kiwi', 'Conor','Siri']

// const secondName  = 'Kabib'

// let coment;

// for(let nam of name){

//     if(nam === secondName){
//         coment = 'yes'

//     }
//         console.log('no');

// }
// console.log(coment);

// Используем цикл для вывода только нечетных чисел!
// Для чётных i срабатывает continue, выполнение тела
// прекращается и управление передаётся на следующую итерацию.

// const str = 'hello my name is Conor'

// for(let i =0,max=str.length;i<max;i++){
//    let current =(str[i]);
//    console.log(current );
//     if(current==='C'){
//         console.log('yes');
//         break
//     }
// }

// const ar = ['Mango', 'Ajax', 'Poly', 'Chelseydfdf', 'Monkosdsdsdsdsdng', 'Singu'];

// let small = ar[0];

// for (let key of ar) {
//   if (key.length > small.length) {
//     small = key;
//   }
 
// }



