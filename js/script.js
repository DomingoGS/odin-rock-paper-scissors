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
    let pendingOverallWinner = true;

    let playerSelection;
    let computerSelection;

    const buttonList = document.querySelectorAll('button');
    buttonList.forEach(button => {
        button.addEventListener('click', () => {
            
            if(pendingOverallWinner) {
                playerSelection = button.textContent;
                computerSelection = getComputerChoice();
                let winner = playRound(playerSelection, computerSelection);
                
                const div = document.querySelector('div');

                if (winner === "Player") {
                    playerWins++;                
                    div.textContent = `Player: ${playerWins} - Computer: ${computerWins}. You win! ${playerSelection} beats ${computerSelection}.`;
                } else if (winner === "Computer") {
                    computerWins++;
                    div.textContent = `Player: ${playerWins} - Computer: ${computerWins}. You loose! ${computerSelection} beats ${playerSelection}.`;
                } else {
                    div.textContent = `Player: ${playerWins} - Computer: ${computerWins}. It's a tie! ${computerSelection} vs ${playerSelection}.`;
                }

                if (playerWins === 5 || computerWins === 5) {
                    pendingOverallWinner = false;
                    div.textContent = `Player: ${playerWins} - Computer: ${computerWins}. ${winner} is the overall winner!!!`;
                }
            }
        });
    });
}

game();