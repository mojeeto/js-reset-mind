console.log("------------- More About Objects: START -------------");
const person = {
  name: "Mojtaba",
  greet() {
    console.log(this.name);
  },
};
console.log(`Person Object:`, person);
console.log(
  "Evey property(also function) we add in this object, has descriptor.",
);
console.log(
  "Via Object.getOwnPropertyDescriptors(person)\nFor person object:",
  Object.getOwnPropertyDescriptors(person),
);
console.log("Every property in this object has configuration");
console.log("Writable => that can we change the value or not");
console.log("Configurable => that can we delete this peroprty or not");
console.log(
  "Enumerable => that can we fine it on for in loop keys for example or not",
);
console.log(
  "We can change this configurations with\nObject.defineProperty(Object, 'PropertyName', { Configuration })",
);
console.log("------------- More About Objects: END -------------");
