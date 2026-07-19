const buttons = document.querySelectorAll(".button");
const displayInput = document.querySelector("input");
let total = "";
let number1 = ""

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.innerText == "="){
            total = eval(total).toString();
            displayInput.value = total;
        }
        else if(button.innerText == "CE"){
            total = total.slice(0,total.length-1);
            displayInput.value = total;
        }
        else if(button.innerText == "AC"){
            total = "";
            displayInput.value = total;
        }
        else{
            total = total + button.innerText;
            displayInput.value = total;
        }
    });
});

