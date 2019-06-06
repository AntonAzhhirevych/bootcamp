'use strict';

// task-1

/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

// class Account {
//   constructor(login, email) {
//     this.login = login;
//     this.email = email;
//   }
//   getInfo() {
//     console.log(`${this.login} : ${this.email}`);
//   }
// }

// const account = new Account('Mangozedog', 'mango@dog.woof');
// const newAccount = new Account('Mangozecat', 'cat@SpeechGrammarList.com');

// console.log(newAccount);
// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// newAccount.getInfo();

// task-2()

/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder {
//   constructor(string) {
//     this._value = string;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     return this._value + str;
//   }
//   pad(str) {
//     return str + this._value;
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// task-(3,4,5)

class Car {
  constructor({ maxSpeed = 0, price }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this.price = price;
  }

  get value() {
    return this.price;
  }
  set value(value) {
    return (this.price = value);
  }

  static getSpecs(car) {
    console.log(`${car.maxSpeed}, ${car.speed}, ${car.running} , ${car.distance}.`);
  }

  turnOn() {
    return (this.running = true);
  }

  turnOff() {
    return (this.running = false);
  }

  accelerate(spd) {
    if (spd <= this.maxSpeed) {
      return (this.speed = spd);
    }
  }

  decelerate(spd) {
    if (spd <= this.maxSpeed && spd > 0) {
      return (this.speed = spd);
    }
  }

  drive(hours) {
    // киллометраж
    if (this.running) {
      return (this.distance = hours * this.speed);
    }
  }
}

// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.value); // 2000

// car.value = 4000;
// console.log(car.value); // 4000
