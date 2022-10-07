
let data;
append()
function append(){
      deta=JSON.parse(localStorage.getItem("products"))||[];
      let allProducts=document.getElementById("all_products")
      allProducts.innerHTML=null;

      deta.forEach(function(el,i){
      let div=document.createElement("div");
      let img=document.createElement("img");
      img.src=el.image;
      let type=document.createElement("p");
      type.innerText=el.type;
      let desc=document.createElement("p");
      desc.innerText=el.desc;
      let price=document.createElement("p");
      price.innerText=el.price;
      
      let btn=document.createElement("button");
      btn.innerText="Remove"

            btn.addEventListener("click",function(event){
                  deleteAll(el,i)
                  

            })
            div.append(img,btn,type,desc,price)
            allProducts.append(div)
            console.log(allProducts)
      });
}
      function deleteAll(el,i){
            deta.splice(i,1)
            localStorage.setItem("products",JSON.stringify(data))
            append(data)
      }

    
      // let deta=JSON.parse(localStorage.getItem("products"))||[];

