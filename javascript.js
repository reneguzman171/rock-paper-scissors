function getComputerChoice () {
    // Initialize a variable that calculates a random number from 1 - 99
    x = Math.floor(Math.random() * 99) + 1;

    // If the value is less than 34
    if (x < 34) {
    // Return "Rock"
        return ("rock")
    // Else if the value is less than 67
    } else if (x < 67) {
    // Return "Paper"
        return ("paper")
    // Else return "Scissors"
    } else {
        return ("scissors")
    }
}

// When a user inputs a choice
function getHumanChoice () {
    let choice = prompt('Rock, Paper, or Scissors?', '');
    // Return the choice
    return (choice);
}

function playGame() {
    humanScore = 0;

    computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const normalizedHumanChoice = humanChoice.toLowerCase(0);

        let winner = 0;
        
        // Checks who won
        if (normalizedHumanChoice === 'rock') {
            if (computerChoice === 'rock') {
                winner = 'tie';
            } else if (computerChoice === 'paper') {
                winner = 'computer';
            } else {
                winner = 'human';
            }
        } else if (normalizedHumanChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner = 'human';
            } else if (computerChoice === 'paper') {
                winner = 'tie';
            } else {
                winner = 'computer';
            }
        } else if (normalizedHumanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner = 'computer';
            } else if (computerChoice === 'paper') {
                winner = 'human';
            } else {
                winner = 'tie';
            }
        }

        // announces the winner and increments the score
        if (winner === 'human') {
            console.log(`You win! ${normalizedHumanChoice} beats ${computerChoice}!`);
            humanScore++;        
        } else if (winner === 'computer') {
            console.log(`You lose! ${computerChoice} beats ${normalizedHumanChoice}!`);
            computerScore++;
        } else if (winner === 'tie') {
            console.log(`It's a tie!`);
        }
    }

    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    
    console.log(`Final score is: Human - ${humanScore} Computer - ${computerScore}`)
}
// const humanSelection = getHumanChoice;
// const computerSelection = getComputerChoice;