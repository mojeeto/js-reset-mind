'use strict';

const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');


// open connection
// it's take name of DB and integer version it's on your wish
const requestDB = indexedDB.open("SomeDB", 1);

// this method is for when open connection is going fine
// requestDB.onsuccess = (event) => {
//   console.log("The connection is ok and the event value is " + event);
// }

// fore intract with db we have to use onupgradeneeded
requestDB.onupgradeneeded = (event) => {
  const db = event.target.result;

  // table name and pvot key
  const productsTable = db.createObjectStore('products', { keyPath: 'id' });

  productsTable.transaction.oncomplete = (event) => {
    const productsStore = db.transaction('products', 'readwrite').objectStore('products');
    productsStore.add({
      id: "1", title: "something", price: "2,000$"
    })
  }
}

requestDB.onerror = (event) => {
  console.log("Something went wronge", event);
}
