function getComputerChoice () {
    // Initialize a variable that calculates a random number from 1 - 99
    x = Math.floor(Math.random() * 99) + 1;

    // If the value is less than 34
    if (x < 34) {
    // Return "Rock"
        return ("Rock")
    // Else if the value is less than 67
    } else if (x < 67) {
    // Return "Paper"
        return ("Paper")
    // Else return "Scissors"
    } else {
        return ("Scissors")
    }
}

const results = document.querySelector("#Results");

let humanScore = 0;
const humanScoreDisplay = document.querySelector(".human-display");
humanScoreDisplay.textContent = `${humanScore}`;

let computerScore = 0;
const computerScoreDisplay = document.querySelector(".computer-display");
computerScoreDisplay.textContent = `${computerScore}`;


function playRound(humanChoice, computerChoice) {
    let winner = 0;
    
    // Checks who won
    if (humanChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            winner = 'tie';
        } else if (computerChoice === 'Paper') {
            winner = 'computer';
        } else {
            winner = 'human';
        }
    } else if (humanChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            winner = 'human';
        } else if (computerChoice === 'Paper') {
            winner = 'tie';
        } else {
            winner = 'computer';
        }
    } else if (humanChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            winner = 'computer';
        } else if (computerChoice === 'Paper') {
            winner = 'human';
        } else {
            winner = 'tie';
        }
    }
    // Define variable that creates a new paragraph
    const newP = document.createElement("p");
    // announces the winner and increments the score
    if (winner === 'human') {
        // Removes last announcement if there was one
        while (results.firstChild) {
            results.removeChild(results.firstChild);
        }
        //
        results.appendChild(newP);
        newP.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
        humanScoreDisplay.textContent = `${humanScore}`;
    } else if (winner === 'computer') {
        while (results.firstChild) {
            results.removeChild(results.firstChild);
        }
        results.appendChild(newP);
        newP.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
        computerScoreDisplay.textContent = `${computerScore}`;
    } else if (winner === 'tie') {
        while (results.firstChild) {
            results.removeChild(results.firstChild);
        }
        while (results.firstChild) {
            results.removeChild(results.firstChild);
        }
        results.appendChild(newP);
        newP.textContent = `It's a tie!`;
    }

    // Check to see if the player or computer has reached 5 scores and
    // Announce the winner of the match
    if (humanScore == 5 || computerScore == 5) {
        const matchResult = document.createElement("p");
        results.appendChild(matchResult);
        
        if (humanScore == 5) {
            matchResult.textContent =
                `Congrats! You've beaten the computer ${humanScore} - ${computerScore}! Want to play again?`;
        } else {
            matchResult.textContent =
                `Better luck next time. You've lost to the computer ${humanScore} - ${computerScore}! Think you can do better?`;
        }

        // Reset scores
        humanScore = 0;
        computerScore = 0;
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
