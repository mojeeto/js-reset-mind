/*
class Person {
  name = "Mojtaba";

  constructor() {
    this.age = 24;
  }

  greet() {
    console.log(
      `Hello, My name is ${this.name} and I'm ${this.age} years old.`,
    );
  }
}
*/

function Person() {
  this.name = "Mojtaba";
  this.age = 24;
  this.greet = function () {
    console.log(
      `Hello, My name is ${this.name} and I'm ${this.age} years old.`,
    );
  };
}

const person = new Person();
person.greet();
