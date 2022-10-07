// Write all the Javascript here
document.querySelector("form").addEventListener("submit",dataIne)
let arr=[]

function dataIne(event){
    event.preventDefault();
    let Name=document.querySelector("#name").value
    let Category=document.querySelector("#category").value
    let Brand=document.querySelector("#brand").value
    let Price=document.querySelector("#price").value
    let Delivered=document.querySelector("#deliveredBy").value
    let total=document.querySelector("#total-price").value

    let obj={
        emp:Name,
        cat:Category,
        bara:Brand,
        pri:Price,
        del:Delivered,
        tol:total
    };
    arr.push(obj)
    display(arr)
   
}
function display(arr){
    document.querySelector("tbody").innerHTML=""
    arr.forEach(function(elem,i){
        let row=document.createElement("tr")
        let col1=document.createElement("td")
        col1.innerText=elem.emp
        let col2=document.createElement("td")
        col2.innerText=elem.cat
        let col3=document.createElement("td")
        col3.innerText=elem.bara
        let col4=document.createElement("td")
        col4.innerText=elem.pri
        let col5=document.createElement("td")
        col5.innerText=elem.del
        let col6=document.createElement("td")
        col6.innerText=elem.tol
        let col7=document.createElement("td")
        col7.innerText="Delete"
        col7.addEventListener("click",function(event){
            event.target.parentNode.remove();
        })
        // if(elem.emp==""||elem.cat==""||elem.bara==""||elem.pri==""||elem.del==""||elem.tol==""){
        //             alert("Fill all input fields")
        //         }else{
        //             col1.innerText=elem.emp
        //             col2.innerText=elem.cat
        //             col3.innerText=elem.bara
        //             col4.innerText=elem.pri
        //             col5.innerText=elem.del
        //             col6.innerText=elem.tol
        //  }
       
        if(elem.pri>1000){
            col6.innerText="Expensive"
        }else {                                       
            col6.innerText="Not-Expensive"
        }

     

        row.append(col1,col2,col3,col4,col5,col6,col7)
        document.querySelector("tbody").append(row)
        
    });
  
}
