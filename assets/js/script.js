// Scores initialization
let comScore = 0,
    playerScore = 0;

// Function that gather player and computer choices and call the 
// function roundWinner to choose the winner and increase score
function playerChoose() {
    // Player choice
    let playerChoice = arguments[0];
    // Computer choice
    let comChoice = computerChoose();

    const result = roundWinner(playerChoice, comChoice);

    // Console log
    console.log(playerChoice);
    console.log(comChoice);
}

// Function that returns the random computer choice
function computerChoose() {
    const comChoices = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
    const randomChoice = Math.floor(Math.random() * comChoices.length);
    const comChoice = comChoices[randomChoice];

    return comChoice;
}

function roundWinner(){

}

function adjustScore(){

}