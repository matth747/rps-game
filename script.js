var wins = 0;
var ties = 0;
var losses = 0

function startGame() {
var playersChoice = prompt("choose R P or S to play against comp.");

console.log("you made your choice", playersChoice);



var options = ["R", "P", "S"];

var randIndex = Math.floor(Math.random() * options.length);

var compsChoice = options[randIndex]

alert("comp chose " + compsChoice)

console.log("comp chose " + compsChoice)

if (playersChoice === compsChoice){
   alert("Tie Game!!")
   ties++;
} 
else if ((playersChoice==="R" && compsChoice==="S") || (playersChoice==="P" && compsChoice==="R") || (playersChoice==="S" && compsChoice==="P")) {
   alert("you win")
   wins++;
}
else {
   alert("you lost the game")
   losses++;
} 
alert("Total: " + "Wins: " + wins + "Losses: " + losses + "Ties: " + ties)

var playAgain = confirm("play again?")
   if (playAgain) {
startGame()
   }
   else {
      alert("y u stop")
   }
}
startGame()
