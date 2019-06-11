'use strict';

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:

  - Текст непосредственно в нём (название категории)

  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
const categories = document.querySelector('.categories');

console.log(categories.firstElementChild.childElementCount);

// categories.map(el => el);

// const categoriesItem = document.querySelectorAll('li');
// console.log(categoriesItem);

// categoriesItem.classList.add('categories434');
// categoriesItem.map(el => el.classList.add('element'));
// console.log(categoriesUl.textContent);

// console.log(categories.firstElementChild.textContent);

// categories.map(el => console.log(el));

// categories.map(
//   element => console.log(element),
//   // console.log(element.firstChild);
//   // console.log(element.firstElementChild.childElementCount);
// );

// const text = document.querySelector('.text');

// console.log(text.textContent);

// text.textContent = 'new text';

// console.log(text.textContent);

// let counter = 0;

// setInterval(function() {
//   text.textContent = counter++;
//   if (counter > 3) {
//     text.style.color = 'pink';
//     text.style.fontSize = '150px';
//   }
//   if (counter > 6) {
//     text.style.color = 'tomato';
//   }
// }, 1000);

//task-3

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
