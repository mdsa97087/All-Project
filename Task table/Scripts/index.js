// Write code related to Home page here
document.querySelector("form").addEventListener("submit", indexBox);
let dashbArr = JSON.parse(localStorage.getItem("task-list")) || [];

function indexBox(event) {
    event.preventDefault();
    let Name = document.querySelector("#name").value;
    let Desc = document.querySelector("#desc").value;
    let Start = document.querySelector("#start").value;
    let End = document.querySelector("#end").value;
    let Priority = document.querySelector("#priority").value;

    let Obj = {
        name: Name,
        desc: Desc,
        start: Start,
        end: End,
        priority: Priority,
    };
    // console.log(Obj)
    dashbArr.push(Obj);
    localStorage.setItem("task-list", JSON.stringify(dashbArr));
}
