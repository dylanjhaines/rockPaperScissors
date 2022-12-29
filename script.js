

function getComputerChoice() {
    let choice = Math.random()
    if (choice <= 0.3333333) {
        return "Rock";
    } else if (choice > 0.666666) {
        return "Paper";
    } else {
        return "Scissors";
    }
}




function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Rock" && playerSelection === "rock") {
        return "Tie! Rock ties Rock.";
    } else if (computerSelection === "Paper" && playerSelection === "rock") {
        return "Loser! Paper beats Rock.";
    } else if (computerSelection === "Scissors" && playerSelection === "rock") {
        return "Winner! Rock beats Scissors.";
    } else if (computerSelection === "Rock" && playerSelection === "paper") {
        return "Winner! Paper beats Rock.";
    } else if (computerSelection === "Paper" && playerSelection === "paper") {
        return "Tie! Paper ties Paper.";
    } else if (computerSelection === "Scissors" && playerSelection === "paper") {
        return "Loser! Scissors beats paper.";
    } else if (computerSelection === "Rock" && playerSelection === "scissors") {
        return "Loser! Rock beats Scissors.";
    } else if (computerSelection === "Paper" && playerSelection === "scissors") {
        return "Winner! Scissors beats paper.";
    } else if (computerSelection === "Scissors" && playerSelection === "scissors") {
        return "Tie! Scissors ties Scissors.";
    } else {
        return "Something went wrong, make sure you're spelling correctly!"
    }
  }
  let playerSelection
  let computerSelection

  function game() {
    let win = 0;
    let lose = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelectionInput = prompt("Choose Rock, Paper, or Scissors");
        let playerSelection = playerSelectionInput.toLowerCase();
        playRound(playerSelection, computerSelection);
        if (computerSelection === "Rock" && playerSelection === "rock") {
            tie += 1;
        } else if (computerSelection === "Paper" && playerSelection === "rock") {
            lose += 1;
        } else if (computerSelection === "Scissors" && playerSelection === "rock") {
            win += 1;
        } else if (computerSelection === "Rock" && playerSelection === "paper") {
            win += 1;
        } else if (computerSelection === "Paper" && playerSelection === "paper") {
            tie += 1;
        } else if (computerSelection === "Scissors" && playerSelection === "paper") {
            lose += 1;
        } else if (computerSelection === "Rock" && playerSelection === "scissors") {
            lose += 1;
        } else if (computerSelection === "Paper" && playerSelection === "scissors") {
            win += 1;
        } else if (computerSelection === "Scissors" && playerSelection === "scissors") {
            tie += 1;
        } else {
            return "Something went wrong, make sure you're spelling correctly!"
        }
        console.log(playRound(playerSelection, computerSelection) + "  Your record is: " + win + "-" + lose + "-" + tie);
    }
  }

 console.log(game());
