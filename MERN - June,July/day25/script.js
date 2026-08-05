let heading = document.querySelectorAll("h1");
let box = document.querySelector(".box");

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            console.log(entry.isIntersecting);
        }
        else{
            entry.target.classList.remove("show");
            console.log(entry.isIntersecting);
        }
    })
});

heading.forEach((head)=>{
    observer.observe(head);
})

observer.observe(box);


let newObserver = new IntersectionObserver((e)=>{
    e.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("paraEffect")
        }
        else{
            entry.target.classList.remove("paraEffect");
        }
    })
})

let para = document.querySelector(".para");
newObserver.observe(para);