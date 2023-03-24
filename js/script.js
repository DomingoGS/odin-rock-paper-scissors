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
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);

    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerSelection} equals ${computerSelection}.`;
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return `You loose! ${computerSelection} covers ${playerSelection}.`
        } else if (computerSelection === "Scissors") {
            return `You win! ${playerSelection} crushes ${computerSelection}.`;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return `You win! ${playerSelection} covers ${computerSelection}.`;
        } else if (computerSelection === "Scissors") {
            return `You loose! ${computerSelection} cut ${playerSelection}.`;
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return `You loose! ${computerSelection} crushes ${playerSelection}.`;
        } else if (computerSelection === "Paper") {
            return `You win! ${playerSelection} cut ${computerSelection}.`;
        }
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    let playerSelection = prompt("Choose Rock, Paper or Scissors:");
    let computerSelection = getComputerChoice();

    for (let i = 1; i <= 5; i++) {
        let winner = playRound(playerSelection, computerSelection);
        if (winner = "Player") {
            playerWins++;
        } else if (winner = "Computer") {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log(`Congratulations. You are the Winner ${playerWins} to ${computerWins}!`);
    } else {
        console.log(`Sorry. You lost to the computer ${playerWins} to ${computerWins}.`);
    }
}