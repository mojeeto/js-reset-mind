// recap
const person = {
  "fore name": "Mojtaba",
  age: 24,
  hobbies: ["Learning Computer Tec", "Driving", "Parkour"],
  greet: function () {
    console.log("Hello, World. I'm", this["fore name"]);
  },
};

// deleting properties
delete person.age;
// we can use null or undefined but the best way is delete option
// undefined that menas for programmers in javascript the age property
// not exists means if we assing the age to undefined programmers will know that
// we don't use age property again
// but if we assign it to null then that means programmers must know that age
// is exists and we use it again but for somehow we don't assign a data to it
// assign a new property
person.isAdming = true;

person.greet();
console.log(person);
