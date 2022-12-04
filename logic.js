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
function decideRoundWinner(playerChoice, computerChoice){

    if (playerChoice === "rock") {
        switch(computerChoice) {
            case 0:
                 roundText.textContent = "Computer chose Rock. Its a draw!";
                 return 0;
            case 1:
                 roundText.textContent = "Computer chose Paper. You lose! :(";
                 return -1;
            case 2:
                 roundText.textContent = "Computer chose scissors. You win! :)";
                 return 1;
        }
    }
    else if (playerChoice === "paper") {
        switch(computerChoice) {
            case 0:
                 roundText.textContent = "Computer chose Rock. You win! :)";
                 return 1;
            case 1:
                 roundText.textContent = "Computer chose Paper. Its a draw!";
                 return 0;
            case 2:
                 roundText.textContent = "Computer chose scissors. You lose! :(";
                 return -1;
        }
    }
    else if (playerChoice === "scissors") {
        switch(computerChoice) {
            case 0:
                 roundText.textContent = "Computer chose Rock. You lose! :(";
                 return -1;
            case 1:
                 roundText.textContent = "Computer chose Paper. You win! :)";
                 return 1;
            case 2:
                 roundText.textContent = "Computer chose scissors. Its a draw!";
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
    
    let computerChoice = getComputerChoice();
    let result = decideRoundWinner(playerChoice.toLowerCase(), computerChoice);
    humanChoiceText.textContent = `You chose ${playerChoice}`;

    switch(computerChoice){
        case 0:
            computerChoiceText.textContent = "Computer chose Rock";
            break;
        case 1:
            computerChoiceText.textContent = "Computer chose Paper";
            break;
        case 2:
            computerChoiceText.textContent = "Computer chose Scissors";
            break;
        }

    console.log(`You chose ${playerChoice}.`)
    
    
    rounds += 1;
    

    if(result === 1){
        return "human";
    }
    else if(result === -1) {
        return "computer";
    }


}

function decideFinalWinner(rounds, gameLength){

    //roundText.textContent = `${rounds}, ${gameLength}, ${rounds === gameLength}`;

    if (rounds === gameLength) {
        const finalMessage = document.createElement('p');
        //roundText.textContent = "A winner has been determined.";
        document.querySelector('.result').append(finalMessage);
        // determine winner after gameLength amount of rounds have been reached
        if(humanScore > computerScore){
            finalMessage.textContent = "Congratulations, you win this match!";
        }
        else if(humanScore < computerScore){
            finalMessage.textContent = "Sorry, you lose this match.";
        }
        else if(humanScore === computerScore){
            finalMessage.textContent = "It was a draw!"   
        }
        else{
            console.log("Something unexpected occurred.");
        }
    }
}

function updateScoreboard(winner){

    if (winner === "human"){
        humanScore += 1;
    }
    else if (winner === "computer"){
        computerScore += 1;
    }
    else {
        computerScore += 1;
        humanScore += 1;
    }

    scoreText.textContent = `First to ${gameLength}. Current score: Human: ${humanScore} - Computer: ${computerScore}`;
}


const buttons = document.querySelectorAll('button');
const roundText = document.querySelector('.round');
const scoreText = document.querySelector('.score');
const humanChoiceText = document.querySelector('.player-choice');
const computerChoiceText = document.querySelector('.computer-choice');
const resultsBox = document.querySelector('.results');
const gameLength = 5;

console.log(document.querySelector('.result'));

let humanScore = 0;
let computerScore = 0;
let rounds = 0;


buttons.forEach(button => button.addEventListener('click', 

    function(e) {    
        
        let winner = playRound(e.target.textContent);
        updateScoreboard(winner);
        decideFinalWinner(rounds, gameLength);
}));
