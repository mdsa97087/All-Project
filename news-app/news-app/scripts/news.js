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

let newsss= JSON.parse(localStorage.getItem("newss"))

function appenddata(newsss){

        let img=document.createElement("img");
        img.src= newsss.urlToImage;

        let title=document.createElement("h3");
        title.innerText=newsss.title;

        let author=document.createElement("p");
        author.innerText=newsss.author;

        document.getElementById("show_news").append(img,title,author);
}
appenddata(newsss);