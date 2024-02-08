const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((date) => showProduct(date));

function showProduct(product) {
  console.log(product);
  document.querySelector(".variant").textContent = product.variantname;
  document.querySelector(".grid_2_1 h2").textContent =
    product.productdisplayname;
  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector(".grid_2_1 p").textContent = product.brandname;
  document.querySelector(".price span").textContent = product.price;
  document.querySelector("h3 span").textContent = product.id;
  document.querySelector(".produktinfo .id").textContent = product.id;
  document.querySelector(".produktinfo .gender").textContent = product.gender;
  document.querySelector(".produktinfo .color").textContent =
    product.basecolour;
  document.querySelector(".produktinfo .brand").textContent = product.brandname;

  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
