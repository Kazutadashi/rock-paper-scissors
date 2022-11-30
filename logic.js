// greet player
console.log("Hello! Welcome to the game of rock paper scissors. Can you beat the computer?");

// get computer choice
function getComputerChoice(){
    computerChoice = Math.floor(Math.random()*3);

    switch(computerChoice){
        case 0:
            console.log("Computer chose rock.");
            return 0;
            break;
        case 1:
            console.log("Computer chose paper.");
            return 1;
            break;
        case 2:
            console.log("Computer chose scissors.");
            return 2;
            break;
        }
}

// get player choice
function getPlayerChoice(){
    return prompt("What will you choose? Rock, paper, or scissors?").toLowerCase();
}

// compare computer choice to player choice and determine winner
// rock is 0, paper is 1, scissors is 2
// return 1 for win, 0 for draw, -1 for loss
// does not validate user input, expects correct input
function decideWinner(playerChoice, computerChoice){

    if (playerChoice === "rock") {
        switch(computerChoice) {
            case 0:
                 console.log("Computer chose Rock. Its a draw!");
                 return 0;
            case 1:
                 console.log("Computer chose Paper. You lose! :(");
                 return -1;
            case 2:
                 console.log("Computer chose scissors. You win! :)");
                 return 1;
        }
    }
    else if (playerChoice === "paper") {
        switch(computerChoice) {
            case 0:
                 console.log("Computer chose Rock. You win! :)");
                 return 1;
            case 1:
                 console.log("Computer chose Paper. Its a draw!");
                 return 0;
            case 2:
                 console.log("Computer chose scissors. You lose! :(");
                 return -1;
        }
    }
    else if (playerChoice === "scissors") {
        switch(computerChoice) {
            case 0:
                 console.log("Computer chose Rock. You lose! :(");
                 return -1;
            case 1:
                 console.log("Computer chose Paper. You win! :)");
                 return 1;
            case 2:
                 console.log("Computer chose scissors. Its a draw!");
                 return 0;
        }
    }
    else {
        return "You enterted in " + playerChoice + ". Please try again."; 
    }
}

// print results
// console.log(compareChoice(getPlayerChoice(), getComputerChoice()));

function playRound(playerChoice){
    
    console.log(`You chose ${playerChoice}.`)
    let result = decideWinner(playerChoice.toLowerCase(), getComputerChoice());

    if(result === 1){
        return "human";
    }
    else if(result === -1) {
        return "computer";
    }
}

function checkFinalScore(){

    if(humanScore > computerScore){
        console.log("Congratulations, you win! Human: " + humanScore + ", Computer: " + computerScore + ".");
        resultText.textContent = "Congratulations, you win! Human: " + humanScore + ", Computer: " + computerScore + ".";
    }
    else if(humanScore < computerScore){
        console.log("Sorry, you lose. Human: " + humanScore + ", Computer: " + computerScore + ".");
        resultText.textContent = "Sorry, you lose. Human: " + humanScore + ", Computer: " + computerScore + ".";
    }
    else if(humanScore === computerScore){
        console.log("It was a draw! Human: " + humanScore + ", Computer: " + computerScore + ".");
        resultText.textContent = "It was a draw! Human: " + humanScore + ", Computer: " + computerScore + ".";
    }
    else{
        console.log("Something unexpected occurred.");
    }
}

function updateScoreboard(winner){

    if (winner === "human"){
        humanScore += 1;
    }
    else if (winner === "computer"){
        computerScore += 1;
    }

    scoreText.textContent = `Current score: Human: ${humanScore} - Computer: ${computerScore}`;
}

const buttons = document.querySelectorAll('button');
const resultText = document.querySelector('.result');
const scoreText = document.querySelector('.score');

let humanScore = 0;
let computerScore = 0;



buttons.forEach(button => button.addEventListener('click', 

    function(e) {    
        
        let winner = playRound(e.target.textContent);
        updateScoreboard(winner);
}));
