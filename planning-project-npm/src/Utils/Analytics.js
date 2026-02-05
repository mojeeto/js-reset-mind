const intervalID = setInterval(() => {
  console.log("Analytics...");
}, 2000);

setTimeout(() => {
  clearInterval(intervalID);
}, 6000);
