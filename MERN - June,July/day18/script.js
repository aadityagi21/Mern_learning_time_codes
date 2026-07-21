const body = document.querySelector("body");
const box = document.querySelector(".box");

body.addEventListener("mousemove",(event)=>{
    box.style.visibility = "visible";
    let x = event.clientX;
    let y = event.clientY;
    console.log(x,y);
    boxMover(x,y);
    bgChanger();
});

body.addEventListener("mouseout",()=>{
    box.style.visibility = "hidden";
});

function boxMover(x,y){
    box.style.left = (x-10) + "px";
    box.style.top = (y-10) + "px";
}

function bgChanger(){
    let random1 = Math.floor(Math.random()*255);
    let random2 = Math.floor(Math.random()*255);
    let random3 = Math.floor(Math.random()*255);
    body.style.background = `rgba(${random1},${random2},${random3},1)`;
}

document.addEventListener("keydown",()=>{
    bgChanger();
});


