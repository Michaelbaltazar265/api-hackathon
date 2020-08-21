

// button class=main-btn / 
const button1 = document.querySelector(".main-btn"); 
// container for page  /Pick a Setup and see what happens / 
const container2 = document.querySelector(".container-2"); 
// class=container-3       /
const container3 = document.querySelector(".container-3");
// container for main page  /
const mainContainer = document.querySelector(".container"); 
//button class=back-to-main / 
const backToMain = document.querySelector(".back-to-main"); 
//button class=back-to-main-2 /
const backToMain3 = document.querySelector(".back-to-main-3");
//button class=btn-lg btn1 / 
const btnSetup1 = document.querySelector(".btn-1");
//  pick a number for images 
const imageNumb = Math.floor(Math.random() * 5)  
console.log(imageNumb) 
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
const img5 = document.querySelector(".img-5")
// alt= game-of-thrones-get-ready class= img-6 
const img6 = document.querySelector(".img-6")
// Event listener 
button1.addEventListener("click", generateJokePage); 
backToMain.addEventListener("click", generateBackMain);  
backToMain3.addEventListener("click", generateBackMain3);

// first API is dad jokese 
$.ajax({ 
    url: "https://official-joke-api.appspot.com/random_ten", 
    method: "GET", 
    success: function(data){ 
        // joke1 is pressed  
        const setUpJoke = document.querySelector(".setup-joke");  
        //punchline element
        const punchline = document.querySelector(".punchline"); 
        // pick a random number between 1-9 for the index of the data object
        const randomJk = data[Math.floor(Math.random() * 9)];
        //btnSetup1.addEventListener("click",generate1stJoke);
        btnSetup1.addEventListener("click",generate1stJoke);
        // text content with setTimeout 
        function generate1stJoke(event){  
            container2.classList.add("hidden-1");
            mainContainer.classList.add("hidden-1");
            container3.classList.remove("hidden-1"); 
            setTimeout(function(){ 
                setUpJoke.textContent = randomJk.setup
            setTimeout(function(){ 
            punchline.textContent = randomJk.punchline;    
            }, 2800)    
            }, 1000)
        } 
        
    }
})  

// second API is Ron Swanson Quotes 
$.ajax({ 
     url:"https://ron-swanson-quotes.herokuapp.com/v2/quotes",
    method: "GET", 
    success: function(data){  
        // Ron Swanson quote element 
        let quote = document.querySelector(".quote");
        quote.textContent = data;
    }
}) 
 

 function generateJokePage(event){ 
     container2.classList.remove("hidden-1");
     mainContainer.classList.add("hidden-1");  
     if (imageNumb === 0){ 
         img1.classList.remove("hidden-1");
     } 
     else if (imageNumb === 1){ 
         img2.classList.remove("hidden-1");
     } 
     else if (imageNumb === 2){ 
         img3.classList.remove("hidden-1");
     } 
     else if (imageNumb === 3){ 
         img4.classList.remove("hidden-1"); 
     } 
     else if (imageNumb === 4){ 
         img5.classList.remove("hidden-1"); 
     } 
     else if (imageNumb === 5){ 
         img6.classList.remove("hidden-1");
     }
 }

 function generateBackMain(event){ 
     container2.classList.add("hidden-1"); 
     mainContainer.classList.remove("hidden-1");
 } 

 function generateBackMain3 (event){ 
     container3.classList.add("hidden-1");
     mainContainer.classList.add("hidden-1");
     container2.classList.remove("hidden-1");
 } 