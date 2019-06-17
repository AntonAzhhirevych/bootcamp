'use strict';
const form = document.querySelector('.form');
console.log(form);
const loginInput = form.querySelector('input[type="text"]');
console.log(loginInput);
const passInput = form.querySelector('input[type="password"]');
console.log(passInput);
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Предотвращаем поведение по умолчанию
  event.preventDefault();

  const login = loginInput.value.trim();
  console.log(login);
  const password = passInput.value.trim();
  console.log(password);

  if (login !== '' && password !== '') {
    form.reset();

    alert(`
    Спасибо за регистрацию!
    Логин: ${login} 
    Пароль: ${password}
  `);
  }
}
