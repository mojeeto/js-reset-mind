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
  document.cookie = 'userid=' + userId + '; max-age=2'; // 2 seconds
  // document.cookie = 'userid=' + userId + '; expires=somedata'; // 2 seconds
  // also we can add more cookie like this
  // document.cookie = 'somekey=somevalue';
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
  // the advantage of cookie is that we can set expire time and 
  // sent in to server side with http request
})
