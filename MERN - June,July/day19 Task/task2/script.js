const body = document.querySelector("body");

let div = document.createElement("div");
div.setAttribute("class","mainBox");
body.append(div);

let upperdiv = document.createElement("div");
upperdiv.setAttribute("class","upperdiv");
div.append(upperdiv);

let profileImg = document.createElement("div");
profileImg.setAttribute("class","profileImg");
upperdiv.append(profileImg);

let Img = document.createElement("img");
Img.setAttribute("class","Img");
Img.setAttribute("src","frieren.png");
profileImg.append(Img);


let headingBox = document.createElement("div");
headingBox.setAttribute("class","headingBox");
div.append(headingBox);

let heading1 = document.createElement("h1");
heading1.setAttribute("class","heading1");
heading1.innerText = "CodingLab"
headingBox.append(heading1);

let heading2 = document.createElement("h1");
heading2.setAttribute("class","heading2");
heading2.innerText = "Youtuber & Blogger"
headingBox.append(heading2);

let logosDiv = document.createElement("div");
logosDiv.setAttribute("class","logosDiv");
div.append(logosDiv); 

let logo1 = document.createElement("img");
logo1.setAttribute("class","logo");
logo1.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhvotX_xItOBEul8onKyaqAy4DzFBF_zocWDHwZFBDA&s");
logosDiv.append(logo1);

let logo2 = document.createElement("img");
logo2.setAttribute("class","logo twitterlogo");
logo2.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAFbioacj_VWEqwVyKZp7RihEzbqnT5yGKyo2XVdIxiQyeoM_aJbe4r8QL&s=10");
logosDiv.append(logo2);

let logo3 = document.createElement("img");
logo3.setAttribute("class","logo");
logo3.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiEiFnF0x8vFao1cAf3_TeurjSX1xJ-Nvz8jo89NVfA&s  ");
logosDiv.append(logo3);

let logo4 = document.createElement("img");
logo4.setAttribute("class","logo");
logo4.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2CY-iM6xDoQhoAWcKWO1DUkr6b88Ji8U8inMKJvmqQ&s");
logosDiv.append(logo4);

let buttons = document.createElement("div")
buttons.setAttribute("class","buttons");
div.append(buttons);

let button1 = document.createElement("button");
button1.setAttribute("class","button");
button1.innerText = "Subscribe";
buttons.append(button1);

let button2 = document.createElement("button");
button2.setAttribute("class","button");
button2.innerText = "Message";
buttons.append(button2);


let heading3 = document.createElement("h1");
heading3.setAttribute("class","heading3");
heading3.innerText = "HTML,CSS,JavaScript";
div.append(heading3);
