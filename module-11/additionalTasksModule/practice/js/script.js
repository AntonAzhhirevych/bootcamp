const template = document.querySelector('#template').innerHTML.trim();
console.log(template);

const obj = {
  title: 'hello',
  text: 'world',
};

const res = Handlebars.compile(template);

console.log(res);

console.log(res(obj));
