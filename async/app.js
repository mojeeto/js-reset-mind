const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opt) =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (data) => resolve(data),
      (error) => reject(error),
      opt,
    );
  });

const setTimer = (duration) =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("DONE!");
      }, duration);
    } catch (err) {
      reject(err);
    }
  });

function trackUserHandler() {
  // in iran i dont have internet yet
  let data;
  getPosition()
    .then((posData) => {
      console.log(posData);
    })
    .catch((err) => {
      data = err;
      return setTimer(2000);
    })
    .then((d) => {
      console.log(d, data);
    });
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

