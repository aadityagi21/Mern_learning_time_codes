const body = document.querySelector("body");
let count = 0;

const div = document.createElement("div")
div.setAttribute("class","div");
body.append(div);

const display = document.createElement("h1");
display.setAttribute("class","display");
display.innerText = count;
div.append(display);


const buttonBox = document.createElement("div");
buttonBox.setAttribute("class","buttonBox");
div.append(buttonBox);

const buttton1 = document.createElement("button");
buttton1.setAttribute("class","button pos");
buttton1.innerText = "ADD +1";
buttonBox.append(buttton1);


const buttton4 = document.createElement("button");
buttton4.setAttribute("class","button neg");
buttton4.innerText = "ADD -1";
buttonBox.append(buttton4);

const buttton2 = document.createElement("button");
buttton2.setAttribute("class","button pos");
buttton2.innerText = "ADD +5";
buttonBox.append(buttton2);

const buttton5 = document.createElement("button");
buttton5.setAttribute("class","button neg");
buttton5.innerText = "ADD -5";
buttonBox.append(buttton5);

const buttton3 = document.createElement("button");
buttton3.setAttribute("class","button pos");
buttton3.innerText = "ADD +10";
buttonBox.append(buttton3);


const buttton6 = document.createElement("button");
buttton6.setAttribute("class","button neg");
buttton6.innerText = "ADD -10";
buttonBox.append(buttton6);




function adder(add){
    count = count + add;
    display.innerText = `${count}`;
}


function sub(sub){
    count = count - sub;
    display.innerText = `${count}`;
}

buttton1.addEventListener("click",()=>{
    adder(1);
});

buttton2.addEventListener("click",()=>{
    adder(5);
});

buttton3.addEventListener("click",()=>{
    adder(10);
});

buttton4.addEventListener("click",()=>{
    sub(1);
});

buttton5.addEventListener("click",()=>{
    sub(5);
});

buttton6.addEventListener("click",()=>{
    sub(10);
});