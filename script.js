var gamecount = 0;
var playerScore = 0;
var computerScore = 0;

console.log('game of 5');

function getComputerChoice() {
    var answers = [ "Rock", "Paper", "Scissors"];
    return answers[Math.floor(Math.random() * answers.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return 'It`s a tie! you both picked ' + playerSelection;

    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        playerScore++;
        return "You win! Rock beats Scissors";

    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        playerScore++;
        return "You win! Paper beats Rock";

    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        playerScore++;
        return "You win! Scissors beats Paper";

    } else {
        computerScore++;
        return 'You lose! '+ computerSelection + ' beats ' + playerSelection;
    }
}

game();

function game() {
    gamecount++;
    var playerchoice = prompt('choose rock, paper or scissors')
    var computerchoice = getComputerChoice();
    console.log(gamecount);
    console.log('player choice is ' + playerchoice);
    console.log('computer choice is ' + computerchoice);
    console.log(playRound(playerchoice, computerchoice));
    
    if (gamecount == 5) {
        if (playerScore < computerScore) {
            console.log('computer wins the game of 5');

        } else if (playerScore == computerScore) {
            console.log('it`s an tie');

        } else {
            console.log('You win the game of 5');
        }
    } else {
        game();
    }
}