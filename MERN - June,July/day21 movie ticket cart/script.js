const body = document.querySelector("body");

const upperSec = document.createElement("div");
upperSec.setAttribute("class", "upperSec");

const homeBut = document.createElement("a");
homeBut.setAttribute("class", "homeBut");
homeBut.innerText = "Home";
homeBut.href = "index.html";

const cartBut = document.createElement("a");
cartBut.setAttribute("class", "carBut");
cartBut.innerText = "CART";
cartBut.href = "cart.html";

upperSec.append(homeBut, cartBut);
body.append(upperSec);

const div = document.createElement('div');
div.setAttribute("class", "div");
body.append(div);

let cartArr = JSON.parse(localStorage.getItem("cartArr"))||[];

let obj = [
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NzEuM0srIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@pt-v1.png,t-false,lfo-top_right,lx-N5,ly-0,w-160,l-end/et00478378-etdvrxwvxz-portrait.jpg",
        name: "Jan Neta",
        genre: "Action/Drama/Potical",
        price: 100
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-ODQ2SysgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00447840-xckkhurxjp-portrait.jpg",
        name: "Spider-Man Brand New Day",
        genre: "Action/Adventure/Sci-Fi",
        price: 100
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA3My43SysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00452034-qrgdyxqlhb-portrait.jpg",
        name: "The Odyssey",
        genre: "Action/Adventure/Drama/Fantasy",
        price: 100
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICAzLjlLKyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00487488-cvgenscfdv-portrait.jpg",
        name: "Varavu",
        genre: "Action/Mystery/Thriller",
        price: 100
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAyNy40SysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00496605-fvycsspxld-portrait.jpg",
        name: "Evil Dead Burn",
        genre: "Horror/Supernatural/Thriller",
        price: 100
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NzEuM0srIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@pt-v1.png,t-false,lfo-top_right,lx-N5,ly-0,w-160,l-end/et00478378-etdvrxwvxz-portrait.jpg",
        name: "Jan Neta",
        genre: "Action/Drama/Potical",
        price: 100
    },
    {
        image: "https://cdn.district.in/movies-assets/images/cinema/_Gallery-bd202060-8452-11f1-a030-59d1336c1fd2.jpg?im=Resize,width=320",
        name: "Avengers Dooms Day",
        genre: "Action/Adventure/Sci-Fi",
        price: 100
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA3My43SysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00452034-qrgdyxqlhb-portrait.jpg",
        name: "The Odyssey",
        genre: "Action/Adventure/Drama/Fantasy",
        price: 100
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICAzLjlLKyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00487488-cvgenscfdv-portrait.jpg",
        name: "Varavu",
        genre: "Action/Mystery/Thriller",
        price: 100
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAyNy40SysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00496605-fvycsspxld-portrait.jpg",
        name: "Evil Dead Burn",
        genre: "Horror/Supernatural/Thriller",
        price: 100
    },
];

function displayData(image, name, genre, price,movie) {

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let img = document.createElement("img");
    img.setAttribute("src", image);

    let nameh1 = document.createElement("h1");
    nameh1.innerText = name;

    let genreh1 = document.createElement("h1");
    genreh1.innerText = genre;

    let priceh1 = document.createElement("h1");
    priceh1.innerText = `Price : ${price}`;

    let viewMore = document.createElement("button");
    viewMore.setAttribute("class", "viewMore");
    viewMore.innerText = "View More";

    let addCart = document.createElement("button");
    addCart.setAttribute("class", "addCart");
    addCart.innerText = "Add to Cart";

    viewMore.addEventListener("click",()=>{
        localStorage.setItem("movie",JSON.stringify(movie));
        window.location.href = "viewMore.html";
    })

    addCart.addEventListener("click",()=>{
        cartArr.push(movie);
        localStorage.setItem("cartArr",JSON.stringify(cartArr));
        console.log(cartArr);
        // window.location.href = "cart.html";
    })

    card.append(img, nameh1, genreh1, priceh1, viewMore, addCart);

    div.append(card);

}

obj.forEach((movie) => {
    displayData(movie.image, movie.name, movie.genre, movie.price,movie);
});