

// first API is dad jokese 
$.ajax({ 
    url: "https://official-joke-api.appspot.com/random_ten", 
    method: "GET", 
    success: function(data){ 
        console.log(data)
        console.log(data[0])
        // joke1 is pressed  
        let setUpJoke = document.querySelector(".setup-joke");  
        //punchline element
        let punchline = document.querySelector(".punchline") 
        // pick a random number between 1-9 for the index of the data object
        let randomJk = data[Math.floor(Math.random() * 9)];
        // text content with setTimeout
        setTimeout(function(){ 
            setUpJoke.textContent = randomJk.setup
        setTimeout(function(){ 
        punchline.textContent = randomJk.punchline;
        
            
        }, 2800)    
        }, 1000)
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
 


// button class="main-btn-2" element 
let mainBtn2 = document.querySelector(".main-btn-2") 
console.log(mainBtn2)
mainBtn2.addEventListener("click", generateJokePage); 
function generateJokePage(event){ 
    let landingPage = document.querySelector(".hidden-1") 
}

