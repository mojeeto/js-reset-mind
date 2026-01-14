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
      const id = setTimeout(() => {
        resolve("DONE!, ID: " + id);
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

// this static method runs the all promise functions then return the fastest function value
// it's can be the second or first or third or ... because we can pass the miltiple function to this array
// the result of the other functions be ignored the winner function will valuable
/*
Promise.race([getPosition(), setTimer(2000)])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// with all static method all functions will execute then return the each data type returned as array to the then method
// if each one get an error the catch method triggered and other methods if they succid will be ignored and other hand don't execute
/*
Promise.all([setTimer(1000), setTimer(2000), setTimer(1500)]).then(
  (promisesData) => {
    console.log(promisesData);
  },
);
*/
// with this method the all functions will be execute and if they have error or success in they process they will be returned as object with contain all information, and the catch method will be useless
Promise.allSettled([setTimer(1000), setTimer(2000), setTimer(1500)]).then(
  (promisesData) => {
    console.log(promisesData);
  },
);

/*
let result = 0;

for (let i = 0; i < 1000000000; i++) {
  result += i;
}

console.log(result);
*/

