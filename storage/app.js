const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'userId_1';

storeBtn.addEventListener('click', () => {
  localStorage.setItem("uid", userId);
})

retrBtn.addEventListener('click', () => {
  const uid = localStorage.getItem("uid");
  if (uid) console.log('the user id is ' + uid);
  else console.log("uid not found!");
})
