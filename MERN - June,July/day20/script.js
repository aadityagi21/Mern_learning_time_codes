const body = document.querySelector("body");
const hero = document.createElement("div");
const form = document.createElement("form");
const name = document.createElement("input");
const college = document.createElement("input");
const age = document.createElement("input");
const button = document.createElement("button");
const table = document.createElement("table");

name.setAttribute("type", "text");
name.setAttribute("placeholder", "Enter your Name");
college.setAttribute("type", "text");
college.setAttribute("placeholder", "Enter your College Name");
age.setAttribute("type", "number");
age.setAttribute("placeholder", "Enter your Age");
button.setAttribute("type", "submit");
button.innerText = "Submit";
hero.setAttribute("class","hero");


form.append(name,college,age,button);
hero.append(form,table);
body.append(hero);


let arr = JSON.parse(localStorage.getItem('arr')) || [];
Tablemaker(arr);

form.addEventListener("submit", (e) => {
    table.innerHTML = "";
    e.preventDefault();

    let obj = {
        name : name.value,
        college : college.value,
        age : age.value,
    }
    arr.push(obj);
    localStorage.setItem('arr',JSON.stringify(arr));
    Tablemaker(arr);
    name.value = "";
    college.value = "";
    age.value = "";
});


function Tablemaker(arr) {
    table.innerHTML = "";
    let tr = document.createElement("tr");
    let th1 = document.createElement("td");
    th1.innerText = "Name";
    let th2 = document.createElement("td");
    th2.innerText = "College Name";
    let th3 = document.createElement("td");
    th3.innerText = "Age";
    let th4 = document.createElement("td");
    th4.innerText = "Action";
    tr.append(th1,th2,th3,th4);
    table.append(tr);

    arr.forEach((obj,index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = obj.name;
        let td2 = document.createElement("td");
        td2.innerText = obj.college;
        let td3 = document.createElement("td");
        td3.innerText = obj.age;
        let td4 = document.createElement("button");
        td4.innerText = "Remove";
        tr.append(td1,td2,td3,td4);
        table.append(tr);

        td4.addEventListener("click",()=>{
            arr.splice(index,1);
            localStorage.setItem("arr",JSON.stringify(arr));
            Tablemaker(arr);

        })
    });
}