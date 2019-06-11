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

const categories = document.querySelectorAll('');
console.log(categories);

// const newArr = Array.from(categories);

categories.forEach(item => console.log(item));

// console.log(categories);

// количество
// console.log(categories.firstElementChild.childElementCount);
