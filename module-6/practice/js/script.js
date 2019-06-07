'use strict';

// const Guest = function(name, room) {
//     this.name = name;
//     this.room = room;
//   };

//   const mango = new Guest('Mango', 28);

//   console.log(mango);

//   Guest.prototype.showGuestInfo = function(){
//       console.log(`${this.name}:${this.room}`);

//   }

//   mango.showGuestInfo()

//   const poly = new Guest('Poly', 45);

//   console.log(poly);

//   poly.showGuestInfo()

// class Guest {
//     constructor(name,roomNumber){
//         this._name = name;
//         this._roomNumber = roomNumber;
//     }
//     get name(){
//         return this._name
//     }

//     set name(value){
//         this._name = value
//     }

//     getFullInfo(){
//         console.log(this.name);

//     }
// }

// const guest = new Guest('Mango', 66) ;
// const guest1 = new Guest('Mango1', 661) ;

// console.log(guest);
// console.log(guest1);

// console.log(guest.name);

// guest.name = 'Tony'

// console.log(guest);

// guest.getFullInfo()
// guest1.getFullInfo()

const Hero = function(name, hp, life) {
  this.name = name;

  this.hp = hp;
  this.life = life;

  this.KillBro = function(elem) {
    elem.hp = this.life;
  };
};

Hero.prototype.minusHp = function(minus) {
  console.log(`${this.name} hit ${minus}`);
  this.hp = this.hp - minus;
};

const Villain = function(name, ho, weapon) {};

const hero = new Hero('Gorosh', 2000, 10000);

// class Guest {
//     // аналог функции-конструктора
//     constructor(name, roomNumber) {
//       this.name = name;
//       this.roomNumber = roomNumber;
//     }
//   }

//   const mango = new Guest('Mango', 26);

//   console.log(mango); // {name: Mango, roomNumber: 26}
//   console.log(mango instanceof Guest); // true
//   console.log(mango instanceof Object); // true
