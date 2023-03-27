let gameCount = 0
const gameScore = document.querySelector(".gamescore");
const goat = document.querySelector(".goat");
const holes = document.querySelectorAll(".holes");
const reset = document.querySelector(".reset");
const board = document.querySelector(".hboard")

// 1. Target holes 
// 2. Target Image(goat)
// 3. target score
// 4. target hole board 
// 5. add reset button at end 

function display(){
//  this will display the score in the browser
 gameScore.innerHTML = gameCount; 

}

function randomHole(){
    // function establishing random numbers for every hole on the board.
   const game = Math.floor(Math.random()* holes.length);
   return holes[game];

}
goat.addEventListener("click", function(){
    // every time goat is clicked on the score will increase,
    // it will display on browser, goat appears on different hole, and 
    // background color changes to teal
    alert("NAILED IT!!!") 
    gameCount++ 
    display()
    randomHole().appendChild(goat);
    board.style.backgroundColor = "Teal"
});

window.addEventListener("load", function(){
    randomHole().appendChild(goat);
});

function resetGame(){
    gameCount = 0;
    display();
    randomHole().appendChild(goat);
    goat.removeChild(goat);  
}

reset.addEventListener("click", function(){
    alert("The Game has been reset...Try Whacking the Mole...I'm mean GOAT Again!!!")
    board.style.backgroundColor = "whitesmoke"
});


reset.addEventListener("click", resetGame);

// reset button resets score, goat reappears within a random hole and 
// an alert will pop up