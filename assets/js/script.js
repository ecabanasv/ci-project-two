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

function roundWinner(playerChoice, comChoice) {
    let winnerResult;

    if (playerChoice === comChoice) {
        winnerResult = 'draw';
    } else {
        switch (playerChoice) {
            case 'rock':
                if (comChoice === 'scissors' || comChoice === 'lizard') {
                    winnerResult = 'player';
                } else {
                    winnerResult = 'computer';
                }
                break;
            case 'scissors':
                if (comChoice === 'paper' || comChoice === 'lizard') {
                    winnerResult = 'player';
                } else {
                    winnerResult = 'computer';
                }
                break;
            case 'paper':
                if (comChoice === 'rock' || comChoice === 'spock') {
                    winnerResult = 'player';
                } else {
                    winnerResult = 'computer';
                }
                break;
            case 'lizard':
                if (comChoice === 'spock' || comChoice === 'paper') {
                    winnerResult = 'player';
                } else {
                    winnerResult = 'computer';
                }
                break;
            case 'spock':
                if (comChoice === 'scissors' || comChoice === 'rock') {
                    winnerResult = 'player';
                } else {
                    winnerResult = 'computer';
                }
                break;
        }
    }

    console.log("winnerResult: " + winnerResult);
    adjustScore(winnerResult);

}

function adjustScore() {
    if (arguments[0] === 'player') {
        document.getElementById("player-score").innerText = ++playerScore;
        document.getElementById("text-result").innerText = "Player won this round";
    } else if (arguments[0] === 'computer') {
        document.getElementById("com-score").innerText = ++comScore;
        document.getElementById("text-result").innerText = "Computer won this round";
    } else {
        document.getElementById("text-result").innerText = "Draw round";
    }
}