let headings = document.querySelectorAll("h1");
let images = document.querySelectorAll("img");

let observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("headingBoxObserver");
        }
        else {
            e.target.classList.remove("headingBoxObserver");
        }
    })
})

let imgObserver = new IntersectionObserver((e) => {
    e.forEach((ev) => {
        if (ev.isIntersecting) {
            ev.target.classList.add("imgObserver");
        }
        else{
            ev.target.classList.remove("imgObserver");
        }
    })
})

headings.forEach((h1) => {
    observer.observe(h1);
});


images.forEach((img)=>{
    imgObserver.observe(img);
})