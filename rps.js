function returnGuess(int) {
    let val;
    if (int === 0) {
        val = "Rock";
    } else if (int === 1) {
        val = "Paper";
    } else {
        val = "Scissors";
    }
    console.log(`Computer has chosen ${val}`);
    return val;
}

const randomNum = Math.floor(Math.random() * 3);
const computerGuess = returnGuess(randomNum);
const userGuess = prompt("Select Rock, Paper, or Scissors");

if (computerGuess === userGuess) {
    console.log("Tie");
} else if ((userGuess === "Rock" && computerGuess === "Scissors") || 
    (userGuess === "Scissors" && computerGuess === "Paper") ||
    (userGuess === "Paper" && computerGuess === "Rock")) {
        console.log("User Wins");
} else {
    console.log("Computer Wins");
}


