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

// it's create an object from function because of new keyword
const person = new Person();

console.log(
  "This is a Person Constructor Function & Full information about below that",
);
console.log(Person);
console.dir(Person);

console.log("This is a Person Constructor Function Object & Full information");
console.log(person);

console.log(`
Let add some function to base class
the prototype property in constructor function it self can be like extends from some class in classes in javascript
Person(class).prototype(property, that added by default) = {
  in this object we can add some properties or methods that behavior like
  extends from other constructor function or class
}
`);

// as we learn the this keyword refer to which object that created base on class call the method
/*
Person.prototype = {
  customProperty: "Something",
  tellMeYourAge() {
    console.log(
      `The custom property: ${this.customProperty}\nThe Age: ${this.age}`,
    );
  },
};
*/

// best practice to add to prototype property

Person.prototype.customProperty = "Something";
Person.prototype.tellMeYourAge = function () {
  console.log(
    `The custom property: ${this.customProperty}\nThe Age: ${this.age}`,
  );
};

const person2 = new Person();

console.log(
  "This is a Person Constructor Function & Full information about below that After Customization the prototype property in Person",
);
console.log(Person);
console.dir(Person);

console.log(
  "This is a New Person Constructor Function Object & Full information",
);
console.log(person2);

person2.tellMeYourAge();

// if we have not access to the original of object that we have, we can use the constructor propery on that __proto__ object

const person3 = new person2.__proto__.constructor();
console.log(
  "const person3 = new person2.__proto__.constructor() ==> ",
  person3,
);
