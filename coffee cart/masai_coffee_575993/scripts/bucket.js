// On clicking remove button the item should be removed from DOM as well as localstorage.

let addArray=JSON.parse(localStorage.getItem("coffee"))||[]

appendD(addArray)
function appendD(data){
      let container=document.getElementById("bucket")
      container.innerHTML=null;
      data.forEach(function(el){
      let div=document.createElement("div")
      
      let title=document.createElement("p")
      title.innerText=el.title;
      let i=document.createElement("img")
      i.src=el.image;
      let price=document.createElement("p")
      price.innerText=`RS:-${el.price}`;
      let btn=document.createElement("button")
      btn.innerText="Remove";
      btn.id="remove_coffee"
      btn.addEventListener("click",function(event){
            event.target.parentNode.remove()
            
      })


      div.append(i,title,price,btn)
      container.append(div)
})
}
function remove_coffee(el,i){
      addArray.splice(el,i)
}
function totalprice(data){
      let total=data.reduce(function(acc,el){
            return acc+el.price
      })
      document.getElementById("total_amount").innerText=`Total:- ${total}`
}
totalprice(addArray)





