const body = document.querySelector("body");


const div = document.createElement('div');
div.setAttribute("class","div");
body.append(div);

let obj = [
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NzEuM0srIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@pt-v1.png,t-false,lfo-top_right,lx-N5,ly-0,w-160,l-end/et00478378-etdvrxwvxz-portrait.jpg",
        name: "Jan Neta",
        genre : "Action/Drama/Potical"
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-ODQ2SysgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00447840-xckkhurxjp-portrait.jpg",
        name: "Spider-Man Brand New Day",
        genre : "Action/Adventure/Sci-Fi"
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA3My43SysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00452034-qrgdyxqlhb-portrait.jpg",
        name: "The Odyssey",
        genre : "Action/Adventure/Drama/Fantasy"
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICAzLjlLKyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00487488-cvgenscfdv-portrait.jpg",
        name: "Varavu",
        genre : "Action/Mystery/Thriller"
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAyNy40SysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00496605-fvycsspxld-portrait.jpg",
        name: "Evil Dead Burn",
        genre : "Horror/Supernatural/Thriller"
    },
];

function displayData(image,name,genre){
    let card = document.createElement("div");
    card.setAttribute("class","card");

    let img = document.createElement("img");
    img.setAttribute("src",image);

    let nameh1 = document.createElement("h1");
    nameh1.innerText = name;

    let genreh1 = document.createElement("h1");
    genreh1.innerText = genre;

    card.append(img,nameh1,genreh1);

    div.append(card);
}

obj.forEach((movie)=>{
    displayData(movie.image,movie.name,movie.genre);
});