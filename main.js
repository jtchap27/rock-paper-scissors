function getComputerChoice() {
  let x = Math.floor(Math.random() * 100) + 1;
  if (x <= 33) {
    console.log("Rock");
  } else if (x >= 34 && x <= 66) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

let computerSelection = getComputerChoice();

function getPlayerChoice() {
  let playerSelection = prompt("Please type in Rock, Paper, or Scissors");
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock") {
    console.log("Rock");
  } else if (playerSelection === "paper") {
    console.log("Paper");
  } else if (playerSelection === "scissors") {
    console.log("Scissors");
  } else {
    console.log("Please try again")
  }
}

// I now have functions to get a computer choice and player choice
// 