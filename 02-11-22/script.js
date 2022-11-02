import products from "./products.js";

const createCard = (title, imgUrl, description, category, price, color, parent) => {
  const cardEl = document.createElement("div");

  cardEl.className = "card";
  if (price <= 980) {
    cardEl.classList.add("sale-card");
  };

  cardEl.className = "card";
  if (price >= 1150) {
    cardEl.classList.add("most-card");
  };

  // Product's image
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", category);

  // Product's title
  const titleEl = document.createElement("h1");
  titleEl.textContent = title;

  // Product's description
  const parEl = document.createElement("h2");
  parEl.textContent = description;

  // Product's color
  const colorEl = document.createElement("h2");
  colorEl.textContent = color;

  // Product's price
  const priceEl = document.createElement("p");
  priceEl.textContent = price;

  cardEl.append(imgEl, titleEl, parEl, colorEl, priceEl);
  parent.appendChild(cardEl);
};

const onSaleEl = document.querySelector(".on-sale");
const mostWantedEl = document.querySelector(".most-wanted");

products
  .filter((product) => product.price >= 500)
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      product.color,
      product.price,
      onSaleEl
    );
  });

  products
  .filter((product) => product.price >= 1150)
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      product.color,
      product.price,
      mostWantedEl
    );
  });