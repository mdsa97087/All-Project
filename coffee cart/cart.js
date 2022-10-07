totalPrice();
append();
// let data=JSON.parse(localStorage.getItem("coffee"));
function totalPrice(){
      let total=0
      let items=JSON.parse(localStorage.getItem("coffee"));
      for(let i=0;i<items.length;i++){
            total+=Number(items[i].price);
      }
      let h2=document.getElementById("total_amount");
      h2.innerText="Total Amount :-  "+total;
}
function append(){
      let data=JSON.parse(localStorage.getItem("coffee"));
      let container=document.getElementById("bucket");
      container.innerHTML=null;
      data.forEach((el,index) => {
            let div=document.createElement("div");
            div.setAttribute("class","coffee");
            let img=document.createElement("img")
            img.src=el.image;
            let title=document.createElement("p")
            title.innerText=el.title;
            let price=document.createElement("p")
            price.innerText=el.price;
            let remove_btn=document.createElement("button")
            remove_btn.setAttribute("id","remove_coffee")
            remove_btn.innerText="Remove";
            remove_btn.onclick=()=>{
                 remove(index);
            }
            div.append(img,title,price,remove_btn)
            container.appendChild(div);

      });
}
function remove(id){
      let data=JSON.parse(localStorage.getItem("coffee"))||[]
      data=data.filter((el,index)=>{
            return index!==id;
      })
      localStorage.setItem("coffee",JSON.stringify(data))
      append();
      totalPrice();
}