const form = document.querySelector(".form");
let data = localStorage.getItem("user");
data = JSON.parse(data);

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    let arr = form.elements;
    let username = arr[0];
    let password = arr[1];

    console.log(username, arr);

    if((username.value === data.username) && (password.value === data.password)){
        document.querySelector("#submit").style.background = "green";
    }
    else{
        document.querySelector("#submit").style.background = "red";
    }
});