'use strict';

// console.log(document); // для того чтоб увидеть нашу розметку
// // console.log(window); //весь документ

// // console.log(document.getElementsByClassName('container')); //для поиска класа

// // const container = document.querySelector('li'); //доходит до первого совпадения
// // console.log(container);
// // const container1 = document.querySelectorAll('li'); // все
// // // console.log(container1.firstElementChild);

// // // const innerBox = container1.firstElementChild;

// // console.log(container1.firstElementChild);

// // const input = document.querySelector('.container');
// // const ul = input.firstElementChild;
// // console.log(ul.firstElementChild);

// const container = document.querySelectorAll('.container');
// console.log(container);
// console.log(container.contains(''));
// const menu = document.querySelector('#menu');
// menu.style.textTransform = 'uppercase';
// menu.style.fontSize = '2rem';
// console.log(menu); // ...

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = '#3e3e';
// console.log(firstMenuItem); // ...

// const galleryItems = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Two Brown Hen and One Red Rooster',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Macaw Birds',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: '2 Lion on Grass Field during Daytime',
//   },
// ];

// const container = document.querySelector('.container');

// const innerBox = document.querySelector('.inner-box');

// const arr = galleryItems.map(image => `<li><img src="${image.url}"/></li>`);

// innerBox.innerHTML = arr;
// const boxChildren = innerBox.children;

// const boxChildrenArray = Array.from(boxChildren);
// boxChildrenArray.map(el => el.classList.add('element'));
// console.log(boxChildrenArray);

// const createEl = document.createElement('div');
// innerBox.appendChild(createEl);

// container.style.width = '300px';
// // const list = document.querySelector('li');
// // console.log();

// container.classList.add('backgraund'); // додає клас
// console.log(container.classList.contains('backgraund')); //перевіряє на наявність класу повертає буль

// container.classList.remove('backgraund'); //удаляє клас
// container.classList.replace('backgraund', 'newBackgraund'); //замінює клас

// const li = innerBox.children;

// console.log(li);

// console.log(li.);
// li;

// li.classList.add('box');

// console.log();

// const container = document.createElement('div');
// container.classList.add('container');
// container.style.width = '300px';
// container.style.height = '300px';

// const innerContainer = document.createElement('div');
// innerContainer.classList.add('inner');

// const body = document.body;

// body.prepend(container);

// body.insertAdjacentElement('afterbegin', container);

// container.append(innerContainer);

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

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

///---------------------------------------------------------------------------------------------------------------------------------------------

// const data = [
//   {
//     id: 'id-1',
//     body: 'lorem',
//   },
//   {
//     id: 'id-2',
//     body: ' MARS',
//   },
//   {
//     id: 'id-3',
//     body: 'Kalis',
//   },
//   {
//     id: 'id-4',
//     body: 'ATB',
//   },
// ];

// function creatListItem({ id, body }) {
//   const container = document.querySelector('.container');
//   const inner = document.createElement('h2');
//   inner.textContent = body;
//   inner.classList.add('inner');
//   inner.dataset.id = id; //???????????????????????????????????
//   container.appendChild(inner);

//   console.log(container);

//   return container;
// }

// const listItems = data.map(inner => creatListItem(inner));
// const inner = document.querySelector('.inner');

// const inner1 = creatListItem(data[0]); //????????????????????????????????????
// creatListItem(inner1);

// creatListItem(inner1);
// creatListItem();

//FRAGMENT

const container = document.querySelector('.container');

const fragment = document.createDocumentFragment();

console.dir(fragment);

for (let i = 0, max = 10; i < 10; i++) {
  const item = document.createElement('li');
  item.textContent = 'HELLO';
  fragment.appendChild(item);
}

container.appendChild(fragment);
