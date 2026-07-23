const ball = document.querySelector(".ball");
const h1 = document.querySelector("h1");
let x = 0;
let y = 0;
let d = 0;

document.addEventListener("keydown",(e)=>{
    if(e.key == "ArrowLeft"){
        mover("right");
        console.log(e.key);
    }
    else if(e.key == "ArrowRight"){
        mover("left");
        console.log(e.key);
    }
    else if(e.key == "ArrowUp"){
        mover("bottom");
        console.log(e.key);
    }
    else if(e.key == "ArrowDown"){
        mover("top");
        console.log(e.key);
    }
})

function mover(dirn){
    if(dirn == "left"){
        x += 100;
    }
    else if(dirn == "right"){
        x -= 100;
    }
    else if(dirn == "top"){
        y += 100;
    }
    else{
        y -= 100;
    }

    ball.style.left = x + "px";
    ball.style.top = y + "px"; 

    d += 100;
    
    h1.innerText = `Dist : ${d}`;
}