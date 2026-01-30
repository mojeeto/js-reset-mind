const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'userId_1';
const userData = {
  name: 'Mojtaba',
  age: 24,
  hobbies: ['driving', 'programming'],
}

// SessionStorage is live until the tab or the web application not closed
// and if we close the browser the sessionstorage will erase
// but localStorage is live until the user or browser delete it manualy

// JSON data is string data
storeBtn.addEventListener('click', () => {
  // sessionStorage.setItem("uid", userId);
  // localStorage.setItem('userData', JSON.stringify(userData));
  // set Cookie
  document.cookie = 'userid=' + userId;
})

retrBtn.addEventListener('click', () => {
  // const uid = sessionStorage.getItem("uid");
  // const user = localStorage.getItem("userData");
  // console.log(JSON.parse(user))
  // if (uid) console.log('the user id is ' + uid);
  // else console.log("uid not found!");
  // get cookie
  // we can read thins because it's not httpOnly and more
  console.log(document.cookie);
})
