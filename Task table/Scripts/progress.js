// Write code for the Progress page here 

// Write code related to dashboard page here


let dash = JSON.parse(localStorage.getItem("task-list")) || []
let proArr = JSON.parse(localStorage.getItem("done-list")) || []

displayTable(dash)

function displayTable(dash) {

    document.querySelector("tbody").innerHTML = ""
    dash.forEach(function (ele, i) {
        let tr = document.createElement("tr")
        let col1 = document.createElement("td");
        col1.innerText = ele.name
        let col2 = document.createElement("td");
        col2.innerText = ele.desc
        let col3 = document.createElement("td");
        col3.innerText = ele.start
        let col4 = document.createElement("td");
        col4.innerText = ele.end
        let col5 = document.createElement("td");
        col5.innerText = ele.priority
        let col6 = document.createElement("td");
        col6.innerText = "Add"
        col6.addEventListener("click", function () {
            done(ele, i)

        })



        tr.append(col1, col2, col3, col4, col5, col6)
        document.querySelector("tbody").append(tr)


    })

}
function done(ele, i) {
    proArr.push(dash)
    localStorage.setItem("done-list", JSON.stringify(proArr))
}