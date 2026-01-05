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

class ShoppingCart {
  items = [];
  price = 0;

  constructor(shopInstance) {
    this.shopInstance = shopInstance;
  }

  addProduct(product) {
    this.items.push(product);
    this.price += product.price;
    this.shopInstance.reRender();
  }

  render() {
    const sectionElement = document.createElement("section");
    sectionElement.innerHTML = `
        <h2>Tital: \$${this.price}</h2>
        <button>Order Now!</button> `;
    sectionElement.classList.add("cart");
    return sectionElement;
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
    this.shoppingCart.addProduct(this.product);
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
    this.shoppingCart = new ShoppingCart(this);
    this.productList = new ProductList(this.shoppingCart);
    this.renderHook = document.getElementById("app");
  }

  render() {
    this.renderHook.append(this.shoppingCart.render());
    this.renderHook.append(this.productList.render());
  }

  reRender() {
    this.renderHook.innerHTML = "";
    this.render();
  }
}

class App {
  static init() {
    new Shop().render();
  }
}

App.init();
