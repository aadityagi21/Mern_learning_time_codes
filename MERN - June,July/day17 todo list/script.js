const form = document.querySelector("form");
const container = document.querySelector(".container")
let tasks = JSON.parse(localStorage.getItem('todo')) || [];
displayData(tasks);


form.addEventListener("submit", (event) => {

    event.preventDefault();

    let arr = form.elements;

    let obj = {
        task : arr[0].value,
        completed : false
    }

    tasks.push(obj);
    localStorage.setItem('todo',JSON.stringify(tasks));

    

    displayData(tasks);
    arr[0].value = "";

});


function displayData(tasks){
        container.innerHTML = "";
        tasks.forEach((task,index) => { 
        let div = document.createElement("div");
        let checkbox = document.createElement("input");
        let h2 = document.createElement("h2");
        let button = document.createElement("button");

        h2.innerText = task.task;
        h2.classList.add("taskWritten");
        button.innerText = "❌";
        checkbox.setAttribute("type","checkbox");
        checkbox.checked = task.completed;

        button.addEventListener("click",()=>{
            tasks.splice(index,1);
            localStorage.setItem('todo',JSON.stringify(tasks))
            displayData(tasks);
        });

        checkbox.addEventListener("click",()=>{
            task.completed = !task.completed;
            localStorage.setItem('todo',JSON.stringify(tasks));
            console.log(task);
        })

        div.append(checkbox,h2,button);
        container.append(div);
    });

}