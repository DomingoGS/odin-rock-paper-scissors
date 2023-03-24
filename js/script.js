function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    
    if(choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else if (choice === 3) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    return checkWinner(playerSelection, computerSelection);
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "Computer";
        } else if (computerSelection === "Scissors") {
            return "Player";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "Player";
        } else if (computerSelection === "Scissors") {
            return "Computer";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "Computer";
        } else if (computerSelection === "Paper") {
            return "Player";
        }
    }    
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    let playerSelection;
    let computerSelection;

    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt("Choose Rock, Paper or Scissors:");
        computerSelection = getComputerChoice();

        let winner = playRound(playerSelection, computerSelection);
        
        if (winner === "Player") {
            playerWins++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        } else if (winner === "Computer") {
            computerWins++;
            console.log(`You loose! ${computerSelection} beats ${playerSelection}`);
        } else {
            i--;
            console.log(`It's a tie! ${computerSelection} vs ${playerSelection}`);
        }
    }

    if (playerWins > computerWins) {
        console.log(`Congratulations. You are the Winner ${playerWins} to ${computerWins}!`);
    } else {
        console.log(`Sorry. You lost to the computer ${playerWins} to ${computerWins}.`);
    }
}

game();