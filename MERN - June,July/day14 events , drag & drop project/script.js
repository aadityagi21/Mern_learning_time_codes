const clickButton = document.querySelector(".clickButton");
const doubleClickButton = document.querySelector(".doubleClickButton");
const box = document.querySelector(".box");
const input = document.querySelector("input");

clickButton.addEventListener("click",()=>{
    box.style.background = "#f00";
});

doubleClickButton.addEventListener("dblclick",()=>{
    box.style.background = "#0f0";
});

box.addEventListener("mouseenter",()=>{
    box.style.background = "#00f";
});

box.addEventListener("mouseout",()=>{
    box.style.background = "greenyellow";
});

input.addEventListener("keyup",(event)=>{ // keydown , keyup
    if(event.key == 'Enter'){
        console.log("searching....");
    }
});

input.addEventListener("input",(event)=>{ //input
    console.log(event)
});

document.querySelector(".select").addEventListener("change",event=>{
    console.log(event.target.value);
});


window.addEventListener("resize",event=>{
    console.log("resizing screen");
});

window.addEventListener("scroll",event=>{
    console.log("scrolling");
});

window.addEventListener("visibilitychange",()=>{
    console.log("no bad habit");
})

