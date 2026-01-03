// the best way to create an array
const numbers = [1, 2, 3];

// constructor function for create new array
// new array(5) ==> create array with 5 length
// new array(1,2) ==> create array with 2 length [1,2]
// new array("Hi", "Mojtaba") ==> create array with 2 length ['Hi', 'Mojtaba']
const moreNumbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// Also we can user Array instead of new array
const moreNumbers2 = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const moreNumbers3 = Array.of(1, 2, 3, 4); // create array again

// create array from itrable data that we gived
// also it's can be HTMLCollection or NodeList
const newArray = Array.from("Hello");
console.log(newArray);

const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading"); // push the data to the end of array
hobbies.unshift("Driving"); // add data to the first of array
// pop return the removed data
const removedData = hobbies.pop(); // remove the last index data of array
hobbies.shift(); // remove the first index data of array
// shift and unshift is slower of pop and push
// because push and pop working with last data of array

// with splice we can edit the array
// numbers.splice(startIndex, deleteCount, items[])
// numbers.splice(0) ==> clear the whole array
// numbers.splice(0, 1) ==> delete the first item of array
// numbers.splice(0, 1, "hello") ==> delete the first item and replace it with "hello"
// splice also return the removed items
// we can use -1 for selecting the last element of array
