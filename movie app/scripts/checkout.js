// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


      // ---------------- DATA COMING FROM LOCALSTORAGE -------------------

let data=JSON.parse(localStorage.getItem("movie"))
appendMoves(data)

function appendMoves(el){
                   
            let p=document.createElement("p");
            p.innerText=el.Title;
            let img=document.createElement("img")
            img.src=el.Poster;
            document.querySelector("#movie").append(img,p)
                  
}


// document.querySelector("#confirm").addEventListener("click",book)


// -----------------AMOUNT COMING FROM LOCALSTORAGE & SHOW EVER PAGE--------


let Amount=localStorage.getItem("amount");
document.getElementById("wallet").innerText=+Amount;



function book(){
      let setNo=document.querySelector("#number_of_seats").value
      let cost=100;
      if(Amount<cost*setNo){
            alert("Insufficient Balance !")
      }else{
            alert("Booking Successful!")
            Amount=Amount-cost*setNo;
           
            window.location.reload();
            localStorage.setItem("amount",Amount)
      }
}
