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

class ElementAttribute {
  constructor(keyName, keyValue) {
    this.keyName = keyName;
    this.keyValue = keyValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.renderHookId = renderHookId;
    if (shouldRender) this.render();
  }

  render() {}

  createRootElement(tagName = "", className = "", attributes = []) {
    let element = document.createElement("div");
    if (tagName && tagName !== "") element = document.createElement(tagName);
    if (className && className !== "") element.className = className;
    if (attributes && attributes.length > [])
      for (const attribute of attributes)
        element.setAttribute(attribute.keyName, attribute.keyValue);
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
    super(renderHookId, false);
    // make parent call render method cancel
    // and call it manual by subclass for renderNowHandler property
    this.shopInstance = shopInstance;
    this.orderNowHandler = () => {
      console.log("Ordering...");
      console.log(this.items);
    };
    this.render();
  }

  addProduct(product) {
    this.cartItem = [...this.cartItem, product];
    //this.items.push(product);
    //this.price = Math.round((this.price + product.price) * 100) / 100;
    //this.shopInstance.reRender();
  }

  // orderNowHandler() {
  //  console.log("ordering...");
  //  console.log(this.items);
  //}

  // because of super keyword fields and properties will define and
  // initialize after parent constructor finished
  // so for this situation we can make it in constructor
  // just for this example
  // orderNowHandler = () => {
  //  console.log("ordering...");
  //  console.log(this.items);
  //};

  render() {
    // const sectionElement = document.createElement('section');
    const sectionElement = this.createRootElement("section", "cart");
    sectionElement.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button> `;
    const orderNowBtn = sectionElement.querySelector("button");
    // using bind()
    //orderNowBtn.addEventListener("click", this.orderNowHandler.bind(this));
    // using Arrow Function in eventHandler
    // orderNowBtn.addEventListener("click", () => this.orderNowHandler());
    // using Arrow Function as Handler
    orderNowBtn.addEventListener("click", this.orderNowHandler);

    //sectionElement.classList.add("cart");
    // use query selector for live changable and get the first h2 tag
    this.totalOutputHTML = sectionElement.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(renderHookId, product, shoppingCart) {
    super(renderHookId, false);
    this.product = product;
    this.shoppingCart = shoppingCart;
    this.render();
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
    const productElement = this.createRootElement("li", "product-item");
    //const productElement = document.createElement("li");
    //productElement.classList.add("product-item");
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
  }
}

class ProductList extends Component {
  products = [];

  constructor(renderHookId, shoppingCart) {
    super(renderHookId);
    this.shoppingCart = shoppingCart;
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
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
    this.renderProducts();
  }

  renderProducts() {
    for (const product of this.products)
      new ProductItem("product-list-id", product, this.shoppingCart);
  }

  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "product-list-id"),
    ]);
    if (this.products && this.products.length > 0) this.renderProducts();
  }
}

class Shop {
  constructor() {
    this.shoppingCart = new ShoppingCart("app", this);
    this.productList = new ProductList("app", this.shoppingCart);
  }

  render() {
    // this.renderHook.append(this.shoppingCart.render());
    // this.shoppingCart;
    //this.renderHook.append(this.productList.render());
    // this.productList;
  }

  reRender() {
    this.renderHook.innerHTML = "";
    // this.render();
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
    // shop.render();
  }

  static addProduct(product) {
    if (this.cart !== null) this.cart.addProduct(product);
  }
}

App.init();
