const url = "https://kea-alt-del.dk/t7/api/products";
fetch(url)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log("product");
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".navnVare").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`; // Brug product.id her
  copy.querySelector(".typeVare").textContent = product.articletype;
  copy.querySelector(".brandVare").textContent = product.brandname;
  copy.querySelector(".pris").textContent = product.price;

  copy.querySelector("a").href = `produkt.html?id=${product.id}`;
  const parentElement = document.querySelector("main");
  parentElement.appendChild(copy);

  // Tilsæt denne linje her, så den er inde i showProduct-funktionen
  //document.querySelector(".grid_1_1").appendChild(copy);
}
