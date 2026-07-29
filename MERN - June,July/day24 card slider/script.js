let box = document.querySelector(".box");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let index = 0;
let dots = document.querySelectorAll("h1");
dots[0].style.color = "#fff";

prev.addEventListener("click", () => {
    if (index == 0) {
        index = 3;
    }
    index--;
    dotFunc();
    box.style.transform = `translate(-${index * 100}%)`;
});

next.addEventListener("click", () => {
    index++;
    if (index == 3) {
        index = 0;
    }
    dotFunc();
    box.style.transform = `translate(-${index * 100}%)`;
});

function dotFunc() {
    if (index == 0) {
        dots[0].style.color = "#fff";
        dots[1].style.color = "#000";
        dots[2].style.color = "#000";
    }
    else if (index == 1) {
        dots[0].style.color = "#000";
        dots[1].style.color = "#fff";
        dots[2].style.color = "#000";
    }
    else {
        dots[0].style.color = "#000";
        dots[1].style.color = "#000";
        dots[2].style.color = "#fff";
    }
}

setInterval(() => {
    index++;
    if (index == 3) {
        index = 0;
    }
    dotFunc();
    box.style.transform = `translate(-${index * 100}%)`;
}, 10000);

