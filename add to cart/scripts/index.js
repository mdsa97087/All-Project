//store the products array in localstorage as "products"
      let deta=JSON.parse(localStorage.getItem("products"))||[]


function detaAll(t,d,p,i){
      this.type=t;
      this.desc=d;
      this.price=p;
      this.image=i;
}


function detaArray(e){
      e.preventDefault();
      let form=document.getElementById("products");
      let type=form.type.value;
      let desc=form.desc.value;
      let price=form.price.value;
      let image=form.image.value;


      let detap=new detaAll(type,desc,price,image)
      console.log(detap)
      deta.push(detap)
      console.log(deta)
      localStorage.setItem("products",JSON.stringify(deta))
}