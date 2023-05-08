let gamecount = 0;
let playerScore = 0;
let computerScore = 0;

console.log('game of 5');

getComputerChoice = () => {
    const answers = [ "Rock", "Paper", "Scissors"];
    return answers[Math.floor(Math.random() * answers.length)];
}

playRound = (playerSelection, computerSelection) => {
    switch (true) {
        case playerSelection.toLowerCase() == computerSelection.toLowerCase():
            return 'It`s a tie! you both picked ' + playerSelection;
            break;
        case playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors":
            return "You win! Rock beats Scissors";
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock":
            return "You win! Paper beats Rock";
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "Paper":
            return "You win! Scissors beats Paper";
            break;
    
        default:
            return 'You lose! '+ computerSelection + ' beats ' + playerSelection;
            break;
    }
}

game = () => {
    gamecount++;
    let playerchoice = prompt('choose rock, paper or scissors')
    let computerchoice = getComputerChoice();
    console.log(gamecount.toString());
    console.log('player choice is ' + playerchoice);
    console.log('computer choice is ' + computerchoice);
    console.log(playRound(playerchoice, computerchoice));
    
    if (gamecount == 5) {
        if (playerScore < computerScore) {
            console.log('computer wins the game of 5');

        } else if (playerScore == computerScore) {
            console.log('the game of 5 is an tie');

        } else {
            console.log('You win the game of 5');
        }
    } else {
        game();
    }
}

game();