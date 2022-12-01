const choices = ["rock", "paper", "scissors"];

function computerPlay () {
    return choices [Math.floor(Math.random() * choices.length)];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection =="rock") 
    ){
        return `You're the winner! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerChoice();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playerChoice () {
    let validatedInput = false;
    while (validatedInput == false) {
        const input = prompt("Choose rock, paper or scissors:");
        if (input == null) {
        continue;
        }
        const inputLowerCase = input.toLowerCase();
        if (choices.includes(inputLowerCase)) {
        validatedInput = true;
        return inputLowerCase;
        }
    }
}  

game()
