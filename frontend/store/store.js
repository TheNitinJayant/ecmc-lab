const backend = "http://localhost:3000/products";

var cartTotal = 0;

var paymentAmount1 = document.getElementById("payment-amount1");
paymentAmount1.textContent = cartTotal;

const paymentButton = document.getElementById("payment-button");

paymentButton.addEventListener("click", makePayment);

function renderProduct(name, price, imageURL) {
    // fetch(
    //     "https://currencyapi.net/api/v1/rates?key=NzSdPlUvCIMGgYttWe03ndcuOhRhZ376NlIj"
    // )
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log("converting to rupee");
    //         let INR = data.rates.INR;
    //         rupeePrice = price * parseInt(INR);

    //         let container = document.createElement("DIV");
    //         let img = document.createElement("IMG");
    //         img.setAttribute("src", imageURL);
    //         let productName = document.createElement("P");
    //         productName.innerHTML = name;
    //         let productPrice = document.createElement("P");
    //         productPrice.innerHTML = `$ ${price}, ₹ ${rupeePrice}`;
    //         let button = document.createElement("BUTTON");
    //         button.innerHTML = "ADD TO CART";

    //         container.setAttribute("class", "product");
    //         img.setAttribute("class", "product-image");
    //         productName.setAttribute("class", "product-name");
    //         productPrice.setAttribute("class", "product-price");
    //         button.setAttribute("class", "add-to-cart-button");
    //         button.setAttribute("data-name", name);
    //         button.setAttribute("data-priceD", price);
    //         button.setAttribute("data-priceR", rupeePrice);
    //         button.setAttribute("data-imageURL", imageURL);

    //         container.appendChild(img);
    //         container.appendChild(productName);
    //         container.appendChild(productPrice);
    //         container.appendChild(button);

    //         button.addEventListener("click", addToCart);
    //         let parent = document.getElementById("products");
    //         parent.appendChild(container);
    //     })
    //     .catch((err) => {
    //         console.log("error in fetching currency data", err);
    //     });

    let rupeePrice = 74;

    console.log("converting to rupee");
    rupeePrice = price * parseInt(rupeePrice);

    let container = document.createElement("DIV");
    let img = document.createElement("IMG");
    img.setAttribute("src", imageURL);
    let productName = document.createElement("P");
    productName.innerHTML = name;
    let productPrice = document.createElement("P");
    productPrice.innerHTML = `$ ${price}, ₹ ${rupeePrice}`;
    let button = document.createElement("BUTTON");
    button.innerHTML = "ADD TO CART";

    container.setAttribute("class", "product");
    img.setAttribute("class", "product-image");
    productName.setAttribute("class", "product-name");
    productPrice.setAttribute("class", "product-price");
    button.setAttribute("class", "add-to-cart-button");
    button.setAttribute("data-name", name);
    button.setAttribute("data-priceD", price);
    button.setAttribute("data-priceR", rupeePrice);
    button.setAttribute("data-imageURL", imageURL);

    container.appendChild(img);
    container.appendChild(productName);
    container.appendChild(productPrice);
    container.appendChild(button);

    button.addEventListener("click", addToCart);
    let parent = document.getElementById("products");
    parent.appendChild(container);
}

function renderCartProduct(name, priceD, priceR, imageURL) {
    let container = document.createElement("DIV");
    let img = document.createElement("IMG");
    img.setAttribute("src", imageURL);
    let productName = document.createElement("P");
    productName.innerHTML = name;
    let productPrice = document.createElement("P");
    productPrice.innerHTML = `$ ${priceD}, ₹ ${priceR}`;

    container.setAttribute("class", "product");
    img.setAttribute("class", "product-image");
    productName.setAttribute("class", "product-name");
    productPrice.setAttribute("class", "product-price");

    container.appendChild(img);
    container.appendChild(productName);
    container.appendChild(productPrice);
    let parent = document.getElementById("cart");
    parent.appendChild(container);
}

function addToCart(event) {
    let target = event.target;

    let name = target.getAttribute("data-name");
    let priceD = target.getAttribute("data-priceD");
    let priceR = target.getAttribute("data-priceR");
    let imageURL = target.getAttribute("data-imageURL");

    cartTotal = cartTotal + parseInt(priceR);
    paymentAmount1.textContent = cartTotal;
    renderCartProduct(name, priceD, priceR, imageURL);
}

function renderProducts() {
    fetch(backend)
        .then((response) => response.json())
        .then((data) => {
            console.log("rendering products");
            console.log("product list:");
            console.log(data);
            data.forEach((element) => {
                renderProduct(element.name, element.price, element.image);
            });
        })
        .catch((err) => {
            console.log("error", err);
        });
}

function makePayment() {
    const cardNumber = document.getElementById("card-details").value;
    const paymentInformation = document.getElementById("payment-information");
    if (isCardValid(cardNumber)) {
        paymentInformation.textContent = "Payment was successfull";
    } else {
        paymentInformation.textContent =
            "Payment Failed. Please enter details correctly";
    }
}

function isCardValid(cardNumber) {
    return cardNumber.length === 16;
}

renderProducts();
