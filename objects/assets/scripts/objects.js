// recap
const person = {
  name: "Mojtaba",
  age: 24,
  hobbies: ["Learning Computer Tec", "Driving", "Parkour"],
  greet: function () {
    console.log("Hello, World. I'm", this.name);
  },
};

person.greet();
