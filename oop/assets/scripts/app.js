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

const productList = {
  products: [
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
  ],

  render() {
    const mainApp = document.getElementById("app");
    const productList = document.createElement("ul");
    productList.classList.add("product-list");
    for (const product of this.products) {
      const productElement = document.createElement("li");
      productElement.classList.add("product-item");
      productElement.innerHTML = `
          <div>
            <!-- <img src='${product.imageUrl}' alt="${product.title}" /> -->
            <div class="product-item__content">
              <h2>${product.title}</h2>
              <h3>\$${product.price}</h3>
              <p>${product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>`;
      productList.append(productElement);
    }
    mainApp.append(productList);
  },
};

productList.render();
