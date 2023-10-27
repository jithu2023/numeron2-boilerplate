// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

let num1 = 1 + Math.floor(Math.random() * 100)
let num2 = 1 + Math.floor(Math.random() * 100)

const numb1 = document.getElementById("number1")
const numb2 = document.getElementById("number2")

numb1.innerText = num1
numb2.innerText = num2


var rest;
var score = parseInt(sessionStorage.getItem("scr")) || 0;

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

var result = document.getElementById("number3")

const btn = document.getElementById("buttons")

function rand() {
    let operator = Math.ceil(Math.random() * 5)
    if (operator == 1) {
        rest = num1 + num2
    }
    else if (operator === 2) {
        rest = num1 - num2
    }
    else if (operator === 3) {
        rest = num1 * num2
    }
    else if (operator === 4) {
        rest = Math.floor(num1 / num2)
    }
    else if (operator === 5) {
        rest = (num1 % num2)
    }
    else {
        // rand();
    }
}
rand()
result.innerText=rest


btn.addEventListener("click", function (event) {
    if (num1 + num2 == rest && event.target.id == "plus") {
        console.log("correct")
        score += 5;
        sessionStorage.setItem("scr", score)
        window.location.href = "game.html"
    }
    else if (num1 - num2 == rest && event.target.id == "minus") {
        console.log("correct")
        score += 5;
        sessionStorage.setItem("scr", score)
        window.location.href = "game.html"
    }
    else if (num1 * num2 == rest && event.target.id == "mul") {
        console.log("correct")
        score += 5;
        sessionStorage.setItem("scr", score)
        window.location.href = "game.html"
    }
    else if (num1 / num2 == rest && event.target.id == "divide") {
        console.log("correct")
        score += 5;
        sessionStorage.setItem("scr", score)
        window.location.href = "game.html"
    }
    else if (num1 % num2 == rest && event.target.id == "modulus") {
        console.log("correct")
        score += 5;
        sessionStorage.setItem("scr", score)
        window.location.href = "game.html"
    }
    else{
        window.location.href="gameover.html"
    }
})


// Iteration 6: Making the Operators (button) functional



// Iteration 7: Making Timer functional

const timer = document.getElementById('timer');
let countdown = 20;

const timeinterval = setInterval(() => {
    timer.innerText = countdown;
    countdown -= 1;
    if (countdown == 0) {
        window.location.href = 'gameover.html'
    }
}, 1000);



