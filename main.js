

// button class=main-btn / 
const mainPage = document.querySelector(".main-btn");
// container for page  /Pick a Setup and see what happens 
const picPage = document.querySelector(".con-2 ");
// class=container-3       /
const container3 = document.querySelector(".con-3");
const container4 = document.querySelector(".con-4");
// container for main page  /
const mainContainer = document.querySelector(".container");
//button class=back-to-main / 
const backToMain = document.querySelector(".back-to-main");
//button class=back-to-main-2 /
const backToMain3 = document.querySelector(".back-to-main-3");
//button class=btn-lg btn1 / 
const btnSetup1 = document.querySelector(".btn-1");
const deliver = document.querySelector(".deliver");
// putting the images as variables 
// get-ready-meme" class= img-1 
const img1 = document.querySelector(".img-1");
// alt= trump-get-ready class= img-2 
const img2 = document.querySelector(".img-2");
//alt= baby-get-ready class= img-3
const img3 = document.querySelector(".img-3");
//alt= are-sure-you're-ready class= img-4 
const img4 = document.querySelector(".img-4");
// alt= mr.bean-get-ready class= img-5
const img5 = document.querySelector(".img-5");
// alt= game-of-thrones-get-ready class= img-6 
const img6 = document.querySelector(".img-6");
// joke1 is pressed  
const setUpJoke = document.querySelector(".setup-joke");
//punchline element
const modalSetupJk = document.querySelector(".setup-joke-modal");
const punchline = document.querySelector(".punchline");
// Ron Swanson quote 
const quote = document.querySelector(".quote");
const closeModal = document.querySelector(".close-modal"); 
const modal = document.querySelector(".modal");
//  pick a number for images 
let imageNumb = Math.floor(Math.random() * 5);
// Event listener 
mainPage.addEventListener("click", generateJokePage);
backToMain.addEventListener("click", generateBackMain);
backToMain3.addEventListener("click", generateBackSetup);
closeModal.addEventListener("click", generateRonSwanson);




function callDadJoke() {
   $.ajax({
      url: "https://official-joke-api.appspot.com/random_ten",
      method: "GET",
      success: function (data) {
         // pick a random number between 1-9 for the index of the data object
         const randomJk = data[Math.floor(Math.random() * 9)];
         btnSetup1.addEventListener("click", generate1stJoke);
         deliver.addEventListener("click", generateDeliver);
        
         function generateDeliver(event) {
            deliver.removeEventListener("click",generateDeliver)
            modal.style.display = "block";
            modalSetupJk.textContent = randomJk.setup
            let number = 3;
            const timer = setInterval(myTimer, 1000)
            const colors = ['rgb(0,0,0)', 'rgb(96,96,96)', 'rgb(136,136,136)', '#C4C4C4'];
            function myTimer() {
               document.querySelector('.punchline').style.background = colors[0];
               if (number === 3) {
                  document.querySelector('.punchline').style.background = colors[2]
                  punchline.textContent = number;
                  number--;
               } else if (number === 2) {
                  document.querySelector('.punchline').style.background = colors[1]
                  punchline.textContent = number;
                  number--;
               }
               else if (number === 1) {
                  document.querySelector('.punchline').style.background = colors[0]
                  punchline.textContent = number;
                  number--;
               } else if (number === 0) {
                  document.querySelector('.punchline').style.background = colors[3]
                  punchline.textContent = randomJk.punchline;
                  clearInterval(timer);
               }
            }
         }
         function generate1stJoke(event) {
            btnSetup1.removeEventListener("click", generate1stJoke)
            picPage.classList.add("hidden-1");                 
            mainContainer.classList.add("hidden-1");
            container4.classList.remove("hidden-1");
            setUpJoke.textContent = randomJk.setup
         }
      }
   })
}
callDadJoke()
// second API is Ron Swanson Quotes 
function callRonSwanson() {
   $.ajax({
      url: "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
      method: "GET",
      success: function (data) {
         // Ron Swanson quote element 
         quote.textContent = data;
      }
   })
}
function clearJoke() {
   const remove1 = modal.style.display = "none"
   modalSetupJk.textContent = " ";
   quote.textContent = " ";
   punchline.textContent = "Here comes the punchline..."
   img6.classList.add("hidden-1");
   img5.classList.add("hidden-1");
   img4.classList.add("hidden-1");
   img3.classList.add("hidden-1");
   img2.classList.add("hidden-1");
   img1.classList.add("hidden-1");

   callDadJoke();
   callRonSwanson();
}
callRonSwanson();

function generateJokePage(event) {
   picPage.classList.remove("hidden-1");    ///
   mainContainer.classList.add("hidden-1");
   getRandomImage();
}

function generateBackMain(event) {
   picPage.classList.add("hidden-1");       ///
   mainContainer.classList.remove("hidden-1");
}

function generateBackSetup(event) {
   container3.classList.add("hidden-1");
   mainContainer.classList.add("hidden-1");
   picPage.classList.remove("hidden-1");   ///
   imageNumb = Math.floor(Math.random() * 5);
   clearJoke();
   getRandomImage();
}

function getRandomImage() {
   if (imageNumb === 0) {
      img1.classList.remove("hidden-1");
   }
   else if (imageNumb === 1) {
      img2.classList.remove("hidden-1");
   }
   else if (imageNumb === 2) {
      img3.classList.remove("hidden-1");
   }
   else if (imageNumb === 3) {
      img4.classList.remove("hidden-1");
   }
   else if (imageNumb === 4) {
      img5.classList.remove("hidden-1");
   }
   else if (imageNumb === 5) {
      img6.classList.remove("hidden-1");
   }

};


function generateRonSwanson(event){ 
   container4.classList.add("hidden-1");
   container3.classList.remove("hidden-1");
}