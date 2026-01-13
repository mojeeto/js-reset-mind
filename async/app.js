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

// if function be a async function the function will return the return thing on the function wrapped promise that means this function with async keyword will return Promise<void>
async function trackUserHandler() {
  try {
    const postData = await getPosition();
    const timeData = await setTimer(2000);
    console.log(postData, timeData);
  } catch (err) {
    const timeData = setTimer(2000);
    console.log(err, timeData);
  }
  /*
  // in iran i dont have internet yet
  let data;
  getPosition()
    .then((posData) => {
      console.log(posData);
      // every thing can be return in this function and the retuned function turn in to promise type and can be use in other then method
      // for example we can `return 'Some String'` and it's cast to promise and we can use the then method again and use this string as data argument
      return "Some String";
    })
    .then((data) => {
      // data is Some String
      console.log(data);
      // in thin method we can have throwed error than handled by catch chane method
    })
    .catch((err) => {
      data = err;
      return setTimer(2000);
    })
    .then((d) => {
      console.log(d, data);
      // also in thins method we can throw an error and we can catch it by adding other catch method after this then chained method
      // overall we can have multiple catch method and then and each then method can throw an error than handled by another catch method below that
    });
  // this line execute first because the js not block the code for getting permission from user
  // console.log("Getting user position...");
  */
}

button.addEventListener("click", trackUserHandler);

/*
let result = 0;

for (let i = 0; i < 1000000000; i++) {
  result += i;
}

console.log(result);
*/

