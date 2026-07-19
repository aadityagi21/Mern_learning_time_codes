const box = document.querySelectorAll(".box");


box.forEach((b) => {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    b.style.background = `rgb(${red},${green},${blue})`;
    // document.querySelector("body").style.background = `rgb(${red},${green},${blue})`;

    // setTimeout(()=>{
    //     b.style.scale = Math.random()*10;
    // },20000);
})

// const track = new Audio("l_theme.mp3");
// track.play();