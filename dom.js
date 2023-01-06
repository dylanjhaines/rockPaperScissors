

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

//const buttons = document.querySelectorAll('#button');
let playerSelection;
let computerSelection;

reset.addEventListener('click', () => {
    win = 0
    lose = 0;
    tie = 0;
    winner.textContent = win;
    loser.textContent = lose;
    cousin.textContent = tie;
    results.textContent = "Good luck!";
    button.style.visibility = 'hidden';
});

rock.addEventListener('click', () => {
  playerSelection = 'rock';
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', () => {
  playerSelection = 'paper';
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', () => {
  playerSelection = 'scissors';
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});
const winner = document.querySelector('.win');
const loser = document.querySelector('.lose');
const cousin = document.querySelector('.tie');
let results = document.querySelector('.message')

let win = 0;
let lose = 0;
let tie = 0;

function playRound(playerSelection, computerSelection) {
    if (win < 5 && lose < 5){
    if (computerSelection === "rock" && playerSelection === "rock") {
       cousin.textContent = (tie += 1);
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        loser.textContent = (lose += 1);
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        winner.textContent = (win += 1);
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        winner.textContent = (win += 1);
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        cousin.textContent = (tie += 1);
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        loser.textContent = (lose += 1);
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        loser.textContent = (lose += 1);
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        winner.textContent = (win += 1);
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        cousin.textContent = (tie += 1);
    } else {
        console.log("Something went wrong, make sure you're spelling correctly!");
    }
}
    if((win < 5) && (lose < 5)) {
        results.textContent = "Keep playing!";
    }   else if (win == 5) {
        results.textContent = "You win!";
    }  else if (lose == 5) {
        results.textContent = "You lose!";
       
    } 
  }



