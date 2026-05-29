console.log("Hello World!")


function getComputerChoice () {
    // Initialize a variable that
    x = 
        // Calculates a random number from 1 - 99
    Math.floor(Math.random() * 99) + 1;
    
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
            return ("scissors")
        }        
}