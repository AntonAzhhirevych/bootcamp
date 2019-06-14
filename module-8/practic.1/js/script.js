'use strict';

const button = document.querySelector('.button');
const item = [...document.querySelectorAll('.item')];
console.dir(button);
console.log(item);

let itemSpan = document.querySelector('#itemSpan');

console.log(itemSpan.parentNode);
console.log(itemSpan.childNodes);
console.log(itemSpan.children);
console.log(itemSpan.firstElementChild);
console.log(itemSpan.nextElementSibling);

// const checked = document.querySelector('[type=checkbox]:checked');
// console.log(checked);

const img = document.querySelector('img');

console.log(getComputedStyle(img));
