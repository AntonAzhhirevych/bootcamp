'use strict';

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

// const menu = document.querySelector('.menu');
// const li = document.querySelectorAll('li a');

// function clickLi(e) {
//   e.preventDefault();
//   li.forEach(el => el.classList.remove('active'));

//   e.target.classList.add('active');
// }

// menu.addEventListener('click', clickLi);

