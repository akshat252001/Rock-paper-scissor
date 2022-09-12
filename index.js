const choice = ["rock", "paper", "scissor"];

function getRandomIdx(){
    return Math.floor(Math.random() * (3));
}

function getComputerChoice(){
    let randomIdx = getRandomIdx();
    return choice[randomIdx];
}

function playSingleRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        console.log(`Tied! player and computer selected ${playerSelection}`);
    } 
    
    else if((playerSelection === "sicssor" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissor")){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }   
    
    else{
        console.log(`You loose! ${computerSelection} beats ${playerSelection}`);
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
      console.log(`${button.id}`);
    });

});
