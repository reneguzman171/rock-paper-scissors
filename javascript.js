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

// Create node list containing the three player choices
const humanChoices = document.querySelectorAll("button")
// Iterate through each button
humanChoices.forEach((button) => {
// Add a 'click' listener for each button then
    button.addEventListener("click", () => {
// Run 'playRound' function when a button is clicked
// Pass the human and computer choices into the 'playRound' function
        playRound(button.id, getComputerChoice());
        console.log(`humanChoice = ${button.id}`);
    });
})
