/*jshint esversion: 6 */

// Variables for Player and Computer
let playerScore = 0,
    imgPlayer = document.getElementById("img-player"),
    playerScoreText = document.getElementById("player-score"),
    playerLabel = document.getElementById("player-label"),
    playerPlays = document.getElementById("player-choice"),
    comScore = 0,
    imgComputer = document.getElementById("img-computer"),
    comScoreText = document.getElementById("com-score"),
    computerLabel = document.getElementById("computer-label"),
    computerPlays = document.getElementById("computer-choice"),
    textResult = document.getElementById("text-result"),
    btnRestart = document.getElementById("btn-restart");

// Function that gather player and computer choices and call the 
// function roundWinner to choose the winner and increase score
function playerChoose() {
    // Player choice
    let playerChoice = arguments[0];
    // Computer choice
    let comChoice = computerChoose();

    if (playerScore > 1 || comScore > 1) {
        btnRestart.style.visibility = 'visible'
    }

    // Console log
    console.log("Player: " + playerChoice);
    console.log("Computer: " + comChoice);
    console.log("---");
    roundWinner(playerChoice, comChoice);
    console.log("---");
}

// Function that returns the random computer choice
function computerChoose() {
    const comChoices = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
    const randomChoice = Math.floor(Math.random() * comChoices.length);
    const comChoice = comChoices[randomChoice];

    return comChoice;
}

// Function check the player choice agaisnt computer for choose the winner and increase its score
function roundWinner(playerChoice, comChoice) {
    let winnerResult;
    playerPlays.innerText = playerChoice;
    computerPlays.innerText = comChoice;
    if (playerChoice === comChoice) {
        imgPlayer.src = 'assets/images/' + playerChoice + '-x.png';
        imgComputer.src = 'assets/images/' + comChoice + '-x.png';

        winnerResult = 'draw';
    } else {
        switch (playerChoice) {
            case 'rock':

                imgPlayer.src = 'assets/images/rock-x.png';
                imgComputer.src = 'assets/images/' + comChoice + '-x.png';
                if (comChoice === 'scissors' || comChoice === 'lizard') {
                    winnerResult = 'player';
                } else {
                    winnerResult = 'computer';
                }
                break;
            case 'scissors':
                imgPlayer.src = 'assets/images/scissors-x.png';
                imgComputer.src = 'assets/images/' + comChoice + '-x.png';
                if (comChoice === 'paper' || comChoice === 'lizard') {
                    winnerResult = 'player';
                } else {
                    winnerResult = 'computer';
                }
                break;
            case 'paper':
                imgPlayer.src = 'assets/images/paper-x.png';
                imgComputer.src = 'assets/images/' + comChoice + '-x.png';
                if (comChoice === 'rock' || comChoice === 'spock') {
                    winnerResult = 'player';
                } else {
                    winnerResult = 'computer';
                }
                break;
            case 'lizard':
                imgPlayer.src = 'assets/images/lizard-x.png';
                imgComputer.src = 'assets/images/' + comChoice + '-x.png';
                if (comChoice === 'spock' || comChoice === 'paper') {
                    winnerResult = 'player';
                } else {
                    winnerResult = 'computer';
                }
                break;
            case 'spock':
                imgPlayer.src = 'assets/images/spock-x.png';
                imgComputer.src = 'assets/images/' + comChoice + '-x.png';
                if (comChoice === 'scissors' || comChoice === 'rock') {
                    winnerResult = 'player';
                } else {
                    winnerResult = 'computer';
                }
                break;
        }
    }

    console.log("Result: " + winnerResult);
    adjustScore(winnerResult);

}

// Functions that increases the score of the player/computer 
function adjustScore() {
    if (arguments[0] === 'player') {
        playerScoreText.innerText = ++playerScore;
        textResult.innerText = "Player won this round";
    } else if (arguments[0] === 'computer') {
        document.getElementById("com-score").innerText = ++comScore;
        textResult.innerText = "Computer won this round";
    } else {
        textResult.innerText = "Draw round";
    }

    if (playerScore > comScore) {
        playerLabel.style.color = "green";
        computerLabel.style.color = "red";
    } else if (playerScore < comScore) {
        playerLabel.style.color = "red";
        computerLabel.style.color = "green";
    } else {
        playerLabel.style.color = "black";
        computerLabel.style.color = "black";
    }
}

// Function that reset the game 
function restartGame() {
    imgPlayer.src = 'assets/images/player.png';
    imgComputer.src = 'assets/images/computer.png';
    playerScoreText.innerText = 0;
    comScoreText.innerText = 0;
    textResult.innerText = "New game, choose wisely...";
    playerScore = 0;
    comScore = 0;
    playerPlays.innerText = "";
    computerPlays.innerText = "";
    playerLabel.style.color = "black";
    computerLabel.style.color = "black";
    btnRestart.style.visibility = 'hidden';
}