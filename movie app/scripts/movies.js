// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// let api=(`https://www.omdbapi.com/?apikey=babf55&s=${search}`)
/*
function GetMoney(){
      let mon=document.getElementById("amount").value;
      let Amount=localStorage.getItem("wallet")||0;
      let total=Number(Amount)+Number(mon);

      localStorage.setItem("wallet",total)
      window.location.reload();

}
let Amount=localStorage.getItem("wallet")||0;
document.getElementById("wallet").innerText=Amount;
*/

// -----------------AMOUNT COMING FROM LOCALSTORAGE & SHOW EVER PAGE--------

let Amount=localStorage.getItem("amount");
document.getElementById("wallet").innerText=+Amount;



async function GetData() {
      try {
            let search = document.getElementById("search").value

            let res = await fetch(`https://www.omdbapi.com/?apikey=babf55&s=${search}`)
            let data = await res.json();
            console.log("data:", data)

            let result = data.Search
            // if (result !== undefined) {
                  appendMoves(result)


            // }

      } catch (err) {
            console.log(err)
      }

}

function appendMoves(data) {
      let movies = document.getElementById("movies")
      movies.innerHTML = null;
      data.forEach(function (el, i) {
            let div = document.createElement("div")
            div.setAttribute("class", "movie_tab")
            let p = document.createElement("p");
            p.innerText = el.Title;
            let img = document.createElement("img")
            img.src = el.Poster;
            let btn = document.createElement("button");
            btn.class = "book_now"
            btn.innerText = "Book now";
            btn.addEventListener("click", function () {
                  // GoToCart(el,i)
                  localStorage.setItem("movie", JSON.stringify(el))
                  window.location.href = "./checkout.html"
            })

            div.append(img, p, btn)
            movies.append(div)
            // console.log(movies)
            // document.querySelector("#movies").append(div)



      })
}

// let movieStotre=JSON.parse(localStorage.getItem("movie"))||[]
// function GoToCart(el,i){
//            movieStotre.push(el)
//            localStorage.setItem("movie",JSON.stringify(movieStotre))
// }

let id;

function debounce(func, delay) {
      if (id) {
            clearTimeout(id)
      }
      id = setTimeout(function () {
            func()
      }, delay)
}


