const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("DONE!");
    }, duration);
  });

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (data) => {
      console.log(data);
    },
    (error) => {
      setTimer(2000).then((data) => {
        console.log(data);
      });
      // console.log(error);
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

