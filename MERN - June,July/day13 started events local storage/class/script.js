let parent = document.createElement("div");
parent.setAttribute("id","container");
document.querySelector("body").appendChild(parent);

function createCard(imgUrl,headingText,paraText){
    let div = document.createElement("div");

    let img = document.createElement("img");
    let heading = document.createElement("h2");
    let p = document.createElement("p");

    img.setAttribute("src",imgUrl);
    heading.innerText = headingText;
    p.innerText = paraText;
    
    div.append(img,heading,p);
    parent.appendChild(div);
    
    img.setAttribute("style","height:400px; border-radius:20px 20px 0 0;");
    div.setAttribute("style","margin-top:70px; margin-left:10px; border:0.5px solid #7a7676; border-radius:20px; text-align:center");
};


let data = [
    {
        imgUrl : "https://b.zmtcdn.com/data/edition_assets/17836742758995427.jpg",
        headingText : "Dhamaal 4",
        paraText: "UA13+|Hindi"
    },
    {
        imgUrl : "https://cdn.district.in/movies-assets/images/cinema/Alpha-062ca980-6ef1-11f1-b0b5-2f04c00aa32d.jpg",
        headingText : "Alpha",
        paraText: "UA16+|Hindi"
    },
    {
        imgUrl : "https://cdn.district.in/movies-assets/images/cinema/17811549132914624-0667fb20-6dfc-11f1-9a9b-71d1ad62c0c2.jpg",
        headingText : "Welcome to Jungle",
        paraText: "UA16+|Hindi"
    },
    {
        imgUrl : "https://cdn.district.in/movies-assets/images/cinema/2_Poster%20(1)-2e3b7180-6551-11f1-bfcd-593dd3bd3d89.jpg",
        headingText : "Main Vaapas Aaunga",
        paraText: "UA16+|Hindi"
    },
];

data.forEach(movie =>{
    createCard(movie.imgUrl,movie.headingText,movie.paraText);
})