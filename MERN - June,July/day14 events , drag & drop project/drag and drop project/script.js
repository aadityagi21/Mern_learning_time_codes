const items = document.querySelectorAll(".item");
const container = document.querySelector(".container");
const secContainer = document.querySelector(".secContainer");
const body = document.querySelector("body");

let dragItem = null
items.forEach(item=>{
    item.addEventListener("dragstart",()=>{
        dragItem = item;
    });

    item.addEventListener("dragend",()=>{
        dragItem = null;
    });
});


container.addEventListener("dragover",(event)=>{
    event.preventDefault(); 
});

container.addEventListener("drop",()=>{
    container.append(dragItem);
});

secContainer.addEventListener("dragover",(event)=>{
    event.preventDefault(); 
});

secContainer.addEventListener("drop",()=>{
    secContainer.append(dragItem);
});

