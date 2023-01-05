

function getComputerChoice() {
    let choice = Math.random()
    if (choice <= 0.3333333) {
        return "rock";
    } else if (choice > 0.666666) {
        return "paper";
    } else {
        return "scissors";
    }
}

const buttons = document.querySelectorAll('button');
let playerSelection;
let computerSelection;
//});
//buttons.forEach((button) => {

    // and for each one we add a 'click' listener
   // const rock = document.querySelector('rock');
    rock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
    //game();
    });

    paper.addEventListener('click', () => {
        playerSelection = 'paper';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playerSelection);
        console.log(computerSelection);
    });

    scissors.addEventListener('click', () => {
        playerSelection = 'scissors';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playerSelection);
        console.log(computerSelection);
    });

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "rock") {
        console.log("Tie! Rock ties Rock.");
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "Loser! Paper beats Rock.";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "Winner! Rock beats Scissors.";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "Winner! Paper beats Rock.";
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        return "Tie! Paper ties Paper.";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "Loser! Scissors beats paper.";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "Loser! Rock beats Scissors.";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "Winner! Scissors beats paper.";
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "Tie! Scissors ties Scissors.";
    } else {
        return "Something went wrong, make sure you're spelling correctly!"
    }
  }

/*
  function game() {
    let win = 0;
    let lose = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
  
        //let playerSelectionInput = prompt("Choose Rock, Paper, or Scissors");
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
        console.log(playRound(playerSelection, computerSelection) + 
                "  Your record is: " + win + "-" + lose + "-" + tie);
    }
  }

 console.log(game());
*/