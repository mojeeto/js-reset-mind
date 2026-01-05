class Product {
  // title = "DEFAULT";
  // description;
  // imageUrl;
  // price;

  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class Component {
  constructor(renderHookId) {
    this.renderHookId = renderHookId;
  }

  createRootElement(tagName = "", className = "", attributes = []) {
    let element = document.createElement("div");
    if (tagName && tagName !== "") element = document.createElement(tagName);
    if (className && className !== "") element.className = className;
    if (attributes && attributes.length > [])
      for (const attribute in attributes)
        if (
          typeof attribute === "object" &&
          attribute.keyName !== undefined &&
          attribute.keyValue !== undefined
        )
          element.attributes(attribute.keyName, attribute.keyValue);
    document.getElementById(this.renderHookId).append(element);
    return element;
  }
}

// the other way of updating total price is that get reference of h2 tag
// then after update items, change the innerHTML of h2 tag
class ShoppingCart extends Component {
  items = [];
  // price = 0;

  // use getter and setter for pushing products in items field
  set cartItem(value) {
    this.items = value;
    this.totalOutputHTML.textContent = `Total: \$${this.totalAmout.toFixed(2)}`;
  }

  get cartItem() {
    return this.items;
  }

  // this field it's just return total amount of products price in items field
  get totalAmout() {
    return this.items.reduce((pValue, nValue) => pValue + nValue.price, 0);
  }

  constructor(renderHookId, shopInstance) {
    super(renderHookId);
    this.shopInstance = shopInstance;
  }

  addProduct(product) {
    this.cartItem = [...this.cartItem, product];
    //this.items.push(product);
    //this.price = Math.round((this.price + product.price) * 100) / 100;
    //this.shopInstance.reRender();
  }

  render() {
    // const sectionElement = document.createElement('section');
    const sectionElement = this.createRootElement("section", "cart");
    sectionElement.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button> `;
    //sectionElement.classList.add("cart");
    // use query selector for live changable and get the first h2 tag
    this.totalOutputHTML = sectionElement.querySelector("h2");
  }
}

class ProductItem {
  constructor(product, shoppingCart) {
    this.product = product;
    this.shoppingCart = shoppingCart;
  }

  // i figure out we can use arrow function for this method
  // bese the arrow functions always for this keyword refer to outside of
  // the method or function whatever
  // but the regular function always for this keyword refer to who call that method
  // or function whatever
  addToCart() {
    //this.shoppingCart.addProduct(this.product);
    App.addProduct(this.product);
  }

  render() {
    const productElement = document.createElement("li");
    productElement.classList.add("product-item");
    productElement.innerHTML = `
          <div>
            <!-- <img src='${this.product.imageUrl}' alt="${this.product.title}" /> -->
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>`;
    const addToCartBtn = productElement.querySelector("button");
    addToCartBtn.addEventListener("click", this.addToCart.bind(this));
    return productElement;
  }
}

class ProductList {
  constructor(shoppingCart) {
    this.shoppingCart = shoppingCart;
  }

  products = [
    new Product(
      "IPhone 17 Pro Max",
      "something",
      "This is a Phone for you",
      899.99,
    ),
    new Product(
      "MacBook Pro 14inch M5(Apple Silicon)",
      "something",
      "The Best labtop in the world!",
      1398.76,
    ),
  ];

  render() {
    const productList = document.createElement("ul");
    productList.classList.add("product-list");
    for (const product of this.products) {
      const productItem = new ProductItem(product, this.shoppingCart);
      productList.append(productItem.render());
    }
    return productList;
  }
}

class Shop {
  constructor() {
    this.shoppingCart = new ShoppingCart("app", this);
    this.productList = new ProductList(this.shoppingCart);
    this.renderHook = document.getElementById("app");
  }

  render() {
    // this.renderHook.append(this.shoppingCart.render());
    this.shoppingCart.render();
    this.renderHook.append(this.productList.render());
  }

  reRender() {
    this.renderHook.innerHTML = "";
    this.render();
  }
}

// instructure in this lecture use static as call addProduct in ShoppingCart
// but i'm using dependency injection and it's ok i think if it's not leak the memeory
// i hope that javascript GC can handler this

class App {
  static cart = null;

  static init() {
    const shop = new Shop();
    this.cart = shop.shoppingCart;
    shop.render();
  }

  static addProduct(product) {
    if (this.cart !== null) this.cart.addProduct(product);
  }
}

App.init();
