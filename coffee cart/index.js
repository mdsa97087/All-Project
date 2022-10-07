let items=[];
showItems();
function showItems(){
      fetch("https://masai-api.herokuapp.com/coffee/menu")
      .then((res)=>{
            return res.json();
      })
      .then((res)=>{
            console.log(res)
            items=res.menu.data;
            append(res.menu.data);
      })
}
function append(data){
      let container=document.getElementById("menu");
      data.forEach((el,index) => {
            let div=document.createElement("div");
            div.setAttribute("class","coffee");
            let img=document.createElement("img")
            img.src=el.image;
            let title=document.createElement("p")
            title.innerText=el.title;
            let price=document.createElement("p")
            price.innerText=el.price;
            let add_btn=document.createElement("button")
            add_btn.setAttribute("id","add_to_bucket")
            add_btn.textContent="Add to Bucket";
            add_btn.onclick=()=>{
                  addToCart(index);
                  // addToCart(el,index)
            }
            div.append(img,title,price,add_btn)
            container.append(div);
      });
}
   function addToCart(id){
      let count=JSON.parse(localStorage.getItem("coffee"))||[];
      let c=document.getElementById("coffee_count");
      c.innerText=count.length+1;
      // let data=JSON.parse(localStorage.getItem("coffee"));
      count.push(items[id]);
      localStorage.setItem("coffee",JSON.stringify(count));
}


