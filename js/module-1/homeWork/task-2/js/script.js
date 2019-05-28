'use strict';

/*
  
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
    
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.

  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

const sharm = 15;
const hurgada = 25;
const taba = 6;
const userInput = Number(prompt('Введите количество мест!'));
console.log(userInput);
const incorrect = 'не корректный ввод!';
if (userInput === 0) {
  alert('Нам очень жаль, приходите еще!');
} else if (Number.isNaN(userInput) || !Number.isInteger(userInput)) {
  alert('Ошибка ввода');
} else if (userInput > hurgada) {
  alert('Извините, столько мест нет ни в одной группе!');
} else {
  if (userInput <= taba && userInput <= hurgada) {
    let question1 = prompt('Есть место в групе "taba" , "sharm" , "hurgada".  В какой групе вы хотите?');
    switch (question1) {
      case 'taba':
        alert('Приятного путешествия в группе taba!');
        break;
      case 'sharm':
        alert('Приятного путешествия в группе sharm!');
        break;
      case 'hurgada':
        alert('Приятного путешествия в группе hurgada!');
        break;
      default:
        alert(incorrect);
    }
  } else if (userInput > sharm && userInput <= hurgada) {
    let question2 = prompt('Есть место в групе "hurgada".  Вы согласны быть в етой групе?');
    switch (question2) {
      case 'да':
        alert('Приятного путешествия в группе hurgada!');
        break;
      case 'нет':
        alert('Нам очень жаль, приходите еще!');
        break;
      default:
        alert(incorrect);
    }
  } else if (userInput > taba && userInput <= hurgada) {
    let question3 = prompt('Есть место в групе "sharm" , "hurgada". В какой групе вы хотите?');
    switch (question3) {
      case 'sharm':
        alert('Приятного путешествия в группе sharm!');
        break;
      case 'hurgada':
        alert('Приятного путешествия в группе hurgada!');
        break;
      default:
        alert(incorrect);
    }
  }
}
