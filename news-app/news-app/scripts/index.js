/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/


let collectdata=()=>{

    let userdata={
        name:document.getElementById("name").value, 
        image:document.getElementById("image").value, 
        email:document.getElementById("email").value, 
        country:document.getElementById("country").value, 
    }

    console.log(userdata);
    localStorage.setItem("user",JSON.stringify(userdata));
}
