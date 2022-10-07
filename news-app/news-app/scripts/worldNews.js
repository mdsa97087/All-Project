let user=JSON.parse(localStorage.getItem("user"));
console.log(user);


function display(user){
    
    let image=document.createElement("img");
    image.src=user.image;

    let name=document.createElement("h2");
    name.innerText=user.name;

    let email=document.createElement("p");
    email.innerText=user.email;

    let country=document.createElement("h3");
    country.innerText=user.country;

    let i=document.getElementById("image").append(image);
    let j=document.getElementById("name").append(name);
    let k=document.getElementById("email").append(email);
    let l=document.getElementById("country").append(country);

}
display(user)

// res=  https://masai-mock-api-2.herokuapp.com/news/top-headlines?country={country code}

async function getnewsdata(){

    let cc= user.country;
    // console.log(cc); 

    let res= await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${cc}`)

    let data= await res.json();
    data= data.articles
    console.log(data);
    appenddata(data)
}
getnewsdata();

let query;
document.getElementById("search").addEventListener("keypress",async(e)=>{
    if(e.key=="Enter"){
     query=document.getElementById("search").value; 
    }
    console.log(query);

    let res= await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${query} `)

    let data= await res.json();
    data= data.articles
    console.log(data);
    appenddata(data)

})




function appenddata(data){

    document.getElementById("news_container").innerText="";
    data.forEach((ele)=>{
        
        let div=document.createElement("div");
        div.setAttribute("class","news");
        div.addEventListener("click",function(){
            localStorage.setItem("newss",JSON.stringify(ele));
            console.log("done");
            window.location.href="news.html";
        })

        let img=document.createElement("img");
        img.src= ele.urlToImage;

        let title=document.createElement("h3");
        title.innerText=ele.title;

        let author=document.createElement("p");
        author.innerText=ele.author;



        div.append(img,title,author);
        document.getElementById("news_container").append(div);


    })
}