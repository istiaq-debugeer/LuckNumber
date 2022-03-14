const filterInput = document.querySelector("#filter");
const productListul = document.querySelector(".collection");
const msg = document.querySelector(".content");
const nameInput = document.querySelector(".product-name");
const priceInput = document.querySelector(".product-price");
const addbtn = document.querySelector(".add-product");
const deletebtn = document.querySelector(".delete-btn");

let productData = [];
function getData(productList) {
  let li;
  if (productData.length > 0) {
    showMessage("");
    productList.forEach((product) => {
      const { id, name, price } = product;
      li = document.createElement("li");
      li.className = "list-group-item collection-item";
      li.id = `product-${id}`;
      li.innerHTML = `<strong> ${name}</strong>
       <span class="Price">${price}$</span>
       <i class="fa-solid fa-trash-can float-right delete-btn"></i>`;
      productListul.appendChild(li);
    });
  } else {
    showMessage("Please Add item to your Item list");
  }
}
//getData(productData);

addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let id;
  const name = nameInput.value;
  const price = priceInput.value;
  if (productData.length === 0) {
    id = 0;
  } else {
    id = productData[productData.length - 1].id + 1;
  }
  if (
    name === "" ||
    price === "" ||
    !(!isNaN(parseFloat(price)) && isFinite(price))
  ) {
    alert("Please fillup information");
  } else {
    productData.push({
      id,
      name,
      price,
    });
    productListul.innerHTML = "";
    getData(productData);
    nameInput.value = "";
    priceInput.value = "";
  }
});
//Dele Item
productListul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const target = e.target.parentElement;
    e.target.parentElement.parentElement.removeChild(target);
    const id = parseInt(target.id.split("-")[1]);

    const result = productData.filter((product) => {
      return product.id !== id;
    });

    productData = result;
  }
});
//searching Item
filterInput.addEventListener("keyup", (e) => {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection .collection-item").forEach((item) => {
    const productName = item.firstElementChild.textContent.toLowerCase();

    if (productName.indexOf(text) == -1) {
      showMessage("no item meet your criteria");
      item.style.display = "none";
    } else {
      msg.innerHTML = " ";
      item.style.display = "block";
    }
  });
});
function showMessage(message) {
  msg.innerHTML = message;
}

localStorage.setItem("firstName", "Arup");
