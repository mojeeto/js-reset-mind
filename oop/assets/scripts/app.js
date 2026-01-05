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

class ProductItem {
  constructor(product) {
    this.product = product;
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
    return productElement;
  }
}

class ProductList {
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
    const mainApp = document.getElementById("app");
    const productList = document.createElement("ul");
    productList.classList.add("product-list");
    for (const product of this.products) {
      const productItem = new ProductItem(product);
      productList.append(productItem.render());
    }
    mainApp.append(productList);
  }
}

new ProductList().render();
