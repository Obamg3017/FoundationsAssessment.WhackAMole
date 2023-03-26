const gamescore = document.querySelector("#gamescore")
const goat = document.querySelector(".goat")
const holes = document.querySelector(".holes")

let gameCount = 0




display()

function display(){
   gamescore.innerHTML = gameCount;
}

function randomHole(){
    const hole = Math.floor(Math.random()* holes.length);
    return holes[hole];
}

goat.addEventListener("click", function(){
    alert("NAILED IT")
    gameCount++
    display()
    randomHole().appendChild(goat);
})

window.addEventListener("load", function(){
    randomHole().appendChild(goat);
})

