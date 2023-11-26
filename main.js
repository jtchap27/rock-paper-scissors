const container = document.querySelector("#container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const body = document.querySelector("body");
const scoresContainer = document.querySelector("#scoresContainer");

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



rock.addEventListener("click", () => {
  let playerSelection = "Rock";
  let oneRoundResultText = document.createElement("div");
  oneRoundResultText.textContent = playRound(playerSelection, getComputerChoice());
  let playerScoreCounter = document.querySelector("#playerScoreCounter");
  let computerScoreCounter = document.querySelector("#computerScoreCounter");
  playerScoreCounter.textContent = playerScore;
  computerScoreCounter.textContent = computerScore;
  body.appendChild(oneRoundResultText);
  if (playerScore === 5) {
    let playerWins = document.createElement("h1")
    playerWins.textContent = "Congratulations! You won!";
    scoresContainer.appendChild(playerWins);
    let newGameBtn = document.createElement("button");
    newGameBtn.textContent = "New Game";
    newGameBtn.addEventListener("click", () => {
      window.location.reload();
    });
    container.appendChild(newGameBtn);
  } else if (computerScore === 5) {
    let computerWins = document.createElement("h1")
    computerWins.textContent = "You lose. Better luck next time.";
    scoresContainer.appendChild(computerWins);
    let newGameBtn = document.createElement("button");
    newGameBtn.textContent = "New Game";
    newGameBtn.addEventListener("click", () => {
      window.location.reload();
    });
    container.appendChild(newGameBtn);
  }
});

paper.addEventListener("click", () => {
  let playerSelection = "Paper";
  let oneRoundResultText = document.createElement("div");
  oneRoundResultText.textContent = playRound(playerSelection, getComputerChoice());
  let playerScoreCounter = document.querySelector("#playerScoreCounter");
  let computerScoreCounter = document.querySelector("#computerScoreCounter");
  playerScoreCounter.textContent = playerScore;
  computerScoreCounter.textContent = computerScore;
  body.appendChild(oneRoundResultText);
  if (playerScore === 5) {
    let playerWins = document.createElement("h1")
    playerWins.textContent = "Congratulations! You won!";
    scoresContainer.appendChild(playerWins);
    let newGameBtn = document.createElement("button");
    newGameBtn.textContent = "New Game";
    newGameBtn.addEventListener("click", () => {
      window.location.reload();
    });
    container.appendChild(newGameBtn);
  } else if (computerScore === 5) {
    let computerWins = document.createElement("h1")
    computerWins.textContent = "You lose. Better luck next time.";
    scoresContainer.appendChild(computerWins);
    let newGameBtn = document.createElement("button");
    newGameBtn.textContent = "New Game";
    newGameBtn.addEventListener("click", () => {
      window.location.reload();
    });
    container.appendChild(newGameBtn);
  }
});

scissors.addEventListener("click", () => {
  let playerSelection = "Scissors";
  let oneRoundResultText = document.createElement("div");
  oneRoundResultText.textContent = playRound(playerSelection, getComputerChoice());
  let playerScoreCounter = document.querySelector("#playerScoreCounter");
  let computerScoreCounter = document.querySelector("#computerScoreCounter");
  playerScoreCounter.textContent = playerScore;
  computerScoreCounter.textContent = computerScore;
  body.appendChild(oneRoundResultText);
  if (playerScore === 5) {
    let playerWins = document.createElement("h1")
    playerWins.textContent = "Congratulations! You won!";
    scoresContainer.appendChild(playerWins);
    let newGameBtn = document.createElement("button");
    newGameBtn.textContent = "New Game";
    newGameBtn.addEventListener("click", () => {
      window.location.reload();
    });
    container.appendChild(newGameBtn);
  } else if (computerScore === 5) {
    let computerWins = document.createElement("h1")
    computerWins.textContent = "You lose. Better luck next time.";
    scoresContainer.appendChild(computerWins);
    let newGameBtn = document.createElement("button");
    newGameBtn.textContent = "New Game";
    newGameBtn.addEventListener("click", () => {
      window.location.reload();
    });
    container.appendChild(newGameBtn);
  }
});