//Array
let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Variables for Wins/Losses/Guesses
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessChoice = [];
let computerGuess = [];

//Starts computer's guess
window.onload = .function() {
    let compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
}


//Game Section
document.onkeyup = .function() {
    let playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    console.log(playerGuess[0]);
}

if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
    wins++;
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
}

else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
    guessesLeft = guessesLeft - 1;
}

else {
    losses++;
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
}

var html = "<p>Guess what letter I'm thinking of!</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses left: " + guessesLeft + "</p>" + "<p>Your guesses so far: " + lettersGuessed + "</p>";

document.querySelector("#game").innerHTML = html;

}