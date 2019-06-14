'use strict';

const clock = document.querySelector('.clock');
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');
const time = document.querySelector('.time');

let counter = 0;

function run() {
  const naw = new Date();
  time.textContent = naw.getUTCFullYear();

  const seconds = naw.getSeconds();
  const minutes = naw.getMinutes();
  const hours = naw.getHours();
  console.log('min', minutes);
  console.log('hours', hours);

  const handSeconds = (seconds / 60) * 360 + 90;
  const handMinutes = (minutes / 60) * 360 + 90;
  const handHours = (hours / 12) * 360 + 90;

  sec.style.transform = `rotate(${handSeconds}deg)`;
  min.style.transform = `rotate(${handMinutes}deg)`;
  hour.style.transform = `rotate(${handHours}deg)`;

  console.log(seconds);
}

setInterval(run, 1000);
