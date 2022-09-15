const choice = ["rock", "paper", "scissor"];

// declared as global variables
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.querySelector('.player > .score');
const computerScoreElement = document.querySelector('.computer > .score');
const resultElement = document.querySelector('.result');
console.log(resultElement);

function getRandomIdx(){
    return Math.floor(Math.random() * (3));
}

function getComputerChoice(){
    let randomIdx = getRandomIdx();
    return choice[randomIdx];
}

function renderPlayerScore(){
    playerScoreElement.textContent = `Score: ${playerScore}`;
}

function renderComputerScore(){
    computerScoreElement.textContent = `Score: ${computerScore}`;
}

function displayResult(didPlayerWin, didComputerWin){
    if(didPlayerWin == 1){
        resultElement.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(didComputerWin == 1){
        resultElement.textContent = `You loose! ${computerSelection} beats ${playerSelection}`;
    }
    else{
        resultElement.textContent = `Tied! player and computer selected ${playerSelection}`;
    }
}

function checkForWinner(playerScore, computerScore){
    if(playerScore == 5){
        alert('player wins');
    }
    else if(computerScore == 5){
        alert('computer wins');
    }
}

function playSingleRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        console.log(`Tied! player and computer selected ${playerSelection}`);
        displayResult(0, 0);
    } 
    
    else if((playerSelection === "sicssor" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissor")){
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        displayResult(1,0);
    }   
    
    else{
        computerScore++;
        console.log(`You loose! ${computerSelection} beats ${playerSelection}`);
        displayResult(0, 1);
    }

    renderPlayerScore();
    renderComputerScore();
    checkForWinner(playerScore, computerScore);
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        
        if(playerSelection == ''){
            alert('you have to select from the player\'s box');
        }
        // if the player's selection is valid only then the computer makes its selection and then call playRound
        else{
            computerSelection = getComputerChoice();
            console.log(`player: ${playerSelection} computer: ${computerSelection}`);
            playSingleRound(playerSelection, computerSelection);
        }
    });
});
