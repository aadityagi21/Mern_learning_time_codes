const buttons = document.querySelectorAll("button");
const box = document.querySelector(".box");

buttons[0].addEventListener("click",()=>{
    box.style.background = "red";
})

buttons[1].addEventListener("click",()=>{
    box.style.background = "yellow";
})

buttons[2].addEventListener("click",()=>{
    box.style.background = "pink";
})

buttons[3].addEventListener("click",()=>{
    box.style.background = "teal";
})

buttons[4].addEventListener("click",()=>{
    box.style.background = "green";
})
