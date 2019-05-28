'use strict';

// const coffee = 30;
// const milk = 5;
// const tea = 15;

// let result;

// const userQuestion = confirm('Вы готовы сделать заказ?');

// if (!userQuestion) {
//   alert('Хорошего дня!');
// } else {
//   const userChoice = prompt('1 - Coffee , 2 - Tea');
//   if (userChoice !== null) {
//     switch (userChoice) {
//       case '1':
//         let plusMilk = confirm('добавить молоко в кофе?');
//         if (plusMilk) {
//           result = 'coffee + milk';
//           alert(`Вы заказали ${result} , c вас ${coffee + milk} $`);
//         } else {
//           result = 'Coffee';
//           alert(`Вы заказали ${result} , c вас ${coffee}`);
//         }
//         break;
//       case '2':
//         let whatTea = prompt('какой чай вы хотите : 1 - фруктовый; 2 - черный; 3 - зеленый;');
//         switch (whatTea) {
//           case '1':
//             result = 'фруктовый чай';
//             alert(`Вы заказали ${result} , c вас ${tea}$`);

//             break;
//           case '2':
//             result = 'черный чай';
//             alert(`Вы заказали ${result} , c вас ${tea}$`);

//             break;
//           case '3':
//             result = 'зеленый чай';
//             alert(`Вы заказали ${result} , c вас ${tea}$`);

//             break;
//         }
//         break;
//     }
//   } else {
//     alert('Хорошего дня!');
//   }
// }

// CLASS WORK

// let result;
// const tea = 14;
// const coffee = 30;
// const milk = 7;
// const sale = Math.floor(Math.random() * 20);
// let drink;
// const takeAway = confirm('take away?');
// if (takeAway || !takeAway) {
//   let choose = prompt('chose what you want ! 1 - coffe; 2 - tea');
//   if (choose !== null && choose !== '') {
//     switch (choose) {
//       case '1':
//         let plusMilk = confirm('do you want to add milk to coffee?');
//         if (plusMilk) {
//           choose = 'coffee';
//           drink = coffee + milk;
//           break;
//         } else {
//           choose = 'coffee';
//           drink = coffee;
//           break;
//         }
//       case '2':
//         choose = 'tea';
//         drink = tea;
//         break;
//     }
//     const money = prompt('how money do you have ??');
//     const chack = money - drink;
//     result = `you choose ${choose} dont forget your change ${chack}`;
//     if (!takeAway) {
//       result = `you choose ${choose} you have sale ${sale} dont forget your change ${chack +
//         sale}  dont  foget clean`;
//     }
//     alert(result);
//   }
// }
