// querySelectorAll will take snapshot then return the snapshot
//const listItemsElements = document.querySelectorAll("li");
// but getElementsByTagName will not take snapshot
const listItemsElements = document.getElementsByTagName("li");

// now if i change the dome with document.body the getElementsByTagName will reflect
// but with querySelector it's not happends

for (const listItemElement of listItemsElements) {
  listItemElement.textContent += " new number";
  console.dir(listItemElement);
}

const h1 = document.getElementById("main-title");
h1.style.color = "white";
h1.style.backgroundColor = "black";
h1.style.padding = "5px 10px";
