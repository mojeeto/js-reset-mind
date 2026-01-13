const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    },
  );
  // this line execute first because the js not block the code for getting permission from user
  console.log("Getting user position...");
}

button.addEventListener("click", trackUserHandler);

/*
let result = 0;

for (let i = 0; i < 1000000000; i++) {
  result += i;
}

console.log(result);
*/

