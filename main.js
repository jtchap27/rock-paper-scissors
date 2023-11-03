function getComputerChoice() {
  let x = Math.floor(Math.random() * 100) + 1;
  if (x <= 33) {
    return "Rock";
  } else if (x >= 34 && x <= 66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let computerSelection = getComputerChoice();

function getPlayerChoice() {
  let playerInput = prompt("Please type in Rock, Paper, or Scissors");
  playerInput = playerInput.toLowerCase();
  if (playerInput === "rock") {
    return "Rock";
  } else if (playerInput === "paper") {
    return "Paper";
  } else if (playerInput === "scissors") {
    return "Scissors";
  } else {
    alert("Please try again")
    getPlayerChoice();
  }
}

let playerSelection = getPlayerChoice();

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Rock") {
    tieScore++;
    return "You tie! Rock equals rock.";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    return "You lose! Paper beats rock.";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    return "You win! Rock beats scissors.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    return "You win! Paper beats rock.";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    tieScore++;
    return "You tie! Paper equals paper.";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    return "You lose! Scissors beats paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    return "You lose! Rock beats scissors.";
  } else if (playerSelection=== "Scissors" && computerSelection === "Paper") {
    playerScore++;
    return "You win! Scissors beats paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    tieScore++;
    return "You tie! Scissors equals scissors.";
  }
}

// console.log(playRound(getPlayerChoice(), getComputerChoice()));
// console.log(playRound(getPlayerChoice(), getComputerChoice()));
// console.log(playRound(getPlayerChoice(), getComputerChoice()));
// console.log(playerScore, computerScore, tieScore);

// New function called game()
// Use playRound function and loop 5 times
// After each loop, store the output into something
// Keep score for player and computer
// Reports winner and loser at the end

// Problem is the game function isn't resetting each time through the loop
// I want the game() function to go through, then deposit that output into the console log and score, keep that info, then run the game() function again and output that info again, etc

function game() {
  for (let i = 1; i <=5; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playerScore, computerScore, tieScore);
  }
  if (playerScore > computerScore) {
    console.log("You are the winner of the game! Congratulations!")
  } else if (playerScore < computerScore) {
    console.log("You lose. Better luck next time!")
  } else if ((playerScore === computerScore) || (tieScore > playerScore && tieScore > computerScore)) {
    console.log("You tied! Better play again to find out who wins.")
  }
}

game();