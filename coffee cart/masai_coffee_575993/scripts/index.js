// Add the coffee to local storage with key "coffee"

// var api=

let addArray=JSON.parse(localStorage.getItem("coffee"))||[]

coffeOrder()
async function coffeOrder(){
      try{
            let res=await fetch(`https://masai-api.herokuapp.com/coffee/menu`)
            let data=await res.json();
            let final=data.menu
            console.log('final:',final)
            
            appendD(final.data)
      }catch(err){
            console.log("err:",err)
      }
}
function appendD(data){
      let container=document.getElementById("menu")
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
      btn.setAttribute("id","add_to_bucket")
      btn.innerText="Add to bucket";
      btn.addEventListener("click",function(){
           
            addToCart(el)
      })


      div.append(i,title,price,btn)
      container.append(div)
})
}
document.querySelector("#coffee_count").innerText=addArray.length
function addToCart(el){
     addArray.push(el)
     document.querySelector("#coffee_count").innerText=addArray.length
     localStorage.setItem("coffee",JSON.stringify(addArray))

}

