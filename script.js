/*
let getComputerChoice = Math.random()
console.log(getComputerChoice)
let computerChoice
if (getComputerChoice <= 0.33) {
    computerChoice = "Rock"
} else if (getComputerChoice > 0.666666) {
    computerChoice = "Paper"
} else computerChoice = "Scissors"
*/

const computerSelection = getComputerChoice();

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
    } 
  }
   
  const playerSelectionInput = "Rock";
  const playerSelection = playerSelectionInput.toLowerCase();
  console.log(playRound(playerSelection, computerSelection));
