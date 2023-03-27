let gameCount = 0
const gameScore = document.querySelector(".gamescore");
const goat = document.querySelector(".goat");
const holes = document.querySelectorAll(".holes");
const reset = document.querySelector(".reset");
const board = document.querySelector(".hboard")


function display(){
 gameScore.innerHTML = gameCount;

}

function randomHole(){
   const game = Math.floor(Math.random()* holes.length);
   return holes[game];

}
goat.addEventListener("click", function(){
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