'use strict';

//
//task-1
//
/*
 * - Объяви две переменные хранящие информацию о товаре: name и price
 * - Присвой переменным следующие характеристики товара (сразу при объявлении)
 *   - название: Генератор защитного поля
 *   - цена: 1000
 * - Присвой товару новую цену - 2000
 * - Используя шаблонную строку выведи в консоли информацию о товаре,
 *   получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"
 */

// let name = 'Генератор защитного поля';
// let price = 1000;

// price = 2000;

// console.log(`Выбран ${name} , цена за штуку ${price}`);

//
//task-2
//

/*
  Есть три переменные содержащие составляющие даты: день, месяц, и год. 
  
  Создай переменную date, в которую запиши полную дату в формате день\месяц\год
  Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
  
  PS: используя шаблонные строки.
*/

// const day = 17;
// const month = 10;
// const year = 2048;
// const date = `${day}/${month}/${year}`
// const message  = `Доброе утро, cегодня ${date}, за бортом отличная погода!`

// console.log(date); // 17\10\2048
// console.log(message); // "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"

//
//task-3
//
/*
  Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
*/

// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';
// const message = `${name} прибывает на отдых ${date} в ${roomType}`
// console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс

//
//task-4
//
/*
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Была нажата отмена!'.
  - Если что-то другое — показывать alert с сообщением 'Неверный пароль, активирована система защиты!'
*/

// const correctPassword = 'jqueryismyjam';
// const userInput = prompt('пароль!')

// if(userInput === null){
//     console.log('Была нажата отмена!');
// }else if(userInput === correctPassword){
//   console.log( 'Доступ в секретный бункер разрешен!');
// }else{
//     console.log('Неверный пароль, активирована система защиты!');
// }

//
//task-5
//

/*
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  
  Сравни эти значения и по результатам выведи:
  
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
    
  Проверь работоспособность кода с разными значениями переменной ordered.
*/

// const total = 100;
// const ordered = 50;

// if (ordered > total) {
//   console.log('На складе недостаточно твоаров!');
// } else if (ordered < total) {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// } else if (total === ordered) {
//   console.log('Вы забираете весь товар cо склада!');
// }

//
//task-6
//
/*
  Напиши скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/

// const userInput = prompt('Введите произвольное целое число')

// if(userInput === null){
//     console.log('Ну и ладно, пока!')
// }else if(userInput){
//   console.log('Спасибо!')
// }else{
// console.log('Необходимо было ввести целое число!')
// }

//
//task-7
//
/* 
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное

  PS: используй тернарный оператор
*/

// const value = prompt()

// let type;

// if(value%2 === 0){
//   type = 'even'
// }else if(value %2 !== 0){
//   type = 'odd';
// }
// console.log(type);

//
//task-8
//

/* 
  Создай скрипт поиска отелей, где пользователь с помощью prompt должен ввести число от 1 до 5.
  Проверять что пользователь может ввести что-то кроме 1-5 не нужно!
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  В противном случае, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// const userInput = prompt('Введите число от 1 до 5');

// switch (userInput) {
//   case '1':
//     alert('Каталог хостелов');
//     break;
//   case '2':
//     alert('Каталог бюджетных отелей');
//     break;
//   case '3':
//     alert('Каталог отелей ***');
//     break;
//   case '4':
//     alert('Каталог отелей ****');
//     break;
//   case '5':
//     alert('Каталог лучших отелей');
//     break;
// }

//
//task-9
//

/* 
  Пользователь может оформить доставку товара к себе в страну, 
  указав ее в переменной country, но доставка есть не везде.
  
  Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
  Сообщение выглядит так: "Доставка в <<тут страна>> будет стоить <<тут цена>>"
  
  Ниже приведен список стран и стоимость доставки.
  
    Китай - 100 кредитов
    Южная Америка - 250 кредитов
    Австралия - 170 кредитов
    Индия - 80 кредитов
    Ямайка - 120 крдитов
  
  Если названия нет в списке, то выводи в консоль сообщение "В вашей стране доставка не доступна".
  Протестируй работоспособность кода подставив разные значения в переменную country.
  
  PS: используй switch
*/

// const country = 'Ямайка';

// switch (country) {
//   case 'Китай':
//     console.log(`Доставка в Китай будет стоить 100 кридитов`);
//     break;
//   case 'Южная Америка':
//     console.log(`Доставка в Южная Америка будет стоить 250 кридитов`);
//     break;
//   case 'Австралия':
//     console.log(`Доставка в Австралия  будет стоить 170 кридитов`);
//     break;
//   case 'Индия':
//     console.log(`Доставка в Индия будет стоить 80 кридитов`);
//     break;
//   case 'Ямайка':
//     console.log(`Доставка в Ямайка будет стоить 120 кридитов`);
//     break;
//   default:
//     console.log('В вашей стране доставка не доступна');
// }

//
//task-10
//
/* 
  Создай скрипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// const userInput = prompt('Введите число от 1 до 5');

// if (userInput >= 1 && userInput <= 5) {
//   switch (userInput) {
//     case '1':
//       alert('Каталог хостелов');
//       break;
//     case '2':
//       alert('Каталог бюджетных отелей');
//       break;
//     case '3':
//       alert('Каталог отелей ***');
//       break;
//     case '4':
//       alert('Каталог отелей ****');
//       break;
//     case '5':
//       alert('Каталог лучших отелей');
//       break;
//   }
// } else if (userInput === null) {
//   console.log('Очень жаль, приходите еще!');
// } else {
//   console.log('Неверный ввод, возможные варианты 1-5!');
// }
