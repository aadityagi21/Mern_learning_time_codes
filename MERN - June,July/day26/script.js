let box = document.querySelector(".box");
let secbox = document.querySelector(".secbox");
let firstPage = document.querySelector(".firstPage");
let secondPage = document.querySelector(".secondPage");

firstPage.addEventListener("mousemove",(e)=>{
    box.style.visibility = "visible";
    secbox.style.visibility = "hidden";
    box.style.left = e.clientX+30 + "px";
    box.style.top = e.clientY + "px";
});

secondPage.addEventListener("mousemove",(e)=>{
    secbox.style.visibility = "visible";
    box.style.visibility = "hidden";
    secbox.style.left = e.clientX + "px";
    secbox.style.top = e.clientY + "px";
});