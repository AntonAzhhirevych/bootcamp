'use strict';

/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

function createMovieCard() {
  const movie = document.createElement('div');
  const movie__image = document.createElement('img');
  const movie__body = document.createElement('div');
  const movie__title = document.createElement('h2');
  const movie__description = document.createElement('p');
  const movie__date = document.createElement('p');
  const movie__rating = document.createElement('p');

  movie.classList.add('movie');
  movie__image.classList.add('movie__image');
  movie__body.classList.add('movie__body');
  movie__title.classList.add('movie__title');
  movie__description.classList.add('movie__description');
  movie__date.classList.add('movie__date');
  movie__rating.classList.add('movie__rating');

  movie__image.textContent = src = 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
}
