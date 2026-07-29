const form = document.querySelector("form");
let productsArray = JSON.parse(localStorage.getItem("productsArrayLS")) || [];
displayProductHandler();


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formElements = form.elements;
    let obj = {
        image: formElements[0].value,
        productName: formElements[1].value,
        brandName: formElements[2].value,
        description: formElements[3].value,
        price: formElements[4].value,
    }
    productsArray.push(obj);
    localStorage.setItem("productsArrayLS", JSON.stringify(productsArray));
    displayProductHandler();
    for (let i = 0; i < 4; i++) {
        formElements[i].value = "";
    }
});

function displayProductHandler() {
    document.querySelector(".products").innerHTML = "";
    productsArray.forEach((product) => {
        displayProduct(product);
    });
}

function displayProduct(product) {
    console.log("meow");
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const img = document.createElement("img");
    img.setAttribute("src", `${product.image}`);

    const productNameh1 = document.createElement("h1");
    productNameh1.innerText = `${product.productName}`;

    const brandNameh2 = document.createElement("h2");
    brandNameh2.innerText = `${product.brandName}`;

    const descriptionh2 = document.createElement("h2");
    descriptionh2.innerText = `${product.description}`;

    const priceh2 = document.createElement("h2");
    priceh2.innerText = `₹${product.price}`;

    const buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");

    const viewMoreButton = document.createElement("button");
    viewMoreButton.innerText = `ViewMore`;

    viewMoreButton.addEventListener("click", () => {
        localStorage.setItem("viewMoreProduct", JSON.stringify(product));
        window.location.href = "viewmore/viewmore.html";
    })

    const addCartButton = document.createElement("button");
    addCartButton.innerText = `Add to Cart`;

    addCartButton.addEventListener("click", () => {
        let cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
        cartArray.push(product);
        localStorage.setItem("cartArray", JSON.stringify(cartArray));
        console.log(cartArray);
    })

    buttons.append(viewMoreButton, addCartButton);
    card.append(img, productNameh1, brandNameh2, descriptionh2, priceh2, buttons);
    document.querySelector(".products").append(card);
}


