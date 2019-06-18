'use strict';
/*
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 *
 * Создай шаблон элемента списка указаного на вкладке HTML.
 * Отрендери список в DOM по данным из массива products.
 */

const products = [
  { name: 'Apples', quantity: 50 },
  { name: 'Grapes', quantity: 44 },
  { name: 'Cheese', quantity: 128 },
  { name: 'Milk', quantity: 93 },
];

const template = document.querySelector('#template').innerHTML.trim();
const container = document.querySelector('.products');
console.log(container);
console.log(template);

const result = Handlebars.compile(template);
console.log(result);

const product = result(products);
console.log(product);

container.innerHTML = product;
