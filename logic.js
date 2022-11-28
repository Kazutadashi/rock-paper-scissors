// greet player
console.log("Hello! Welcome to the game of rock paper scissors. Can you beat the computer?");

// get computer choice
function getComputerChoice(){
    computerChoice = Math.floor(Math.random()*3);

    switch(computerChoice){
        case 0:
            console.log("Rock");
            return 0;
            break;
        case 1:
            console.log("Paper");
            return 1;
            break;
        case 2:
            console.log("Scissors");
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
function compareChoice(playerChoice, computerChoice){

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

function game(games, playerChoice){
    console.log(playerChoice);
    console.log(games);
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < games; i++) {
        let result = compareChoice(playerChoice.toLowerCase(), getComputerChoice());
        if(result === 1){
            humanScore++;
        }
        else if(result === -1) {
            computerScore++;
        }
        else {
            continue;
        }
    }

    if(humanScore > computerScore){
        console.log("Congratulations, you win! Human: " + humanScore + ", Computer: " + computerScore + ".");
    }
    else if(humanScore < computerScore){
        console.log("Sorry, you lose. Human: " + humanScore + ", Computer: " + computerScore + ".");
    }
    else {
        console.log("Something either broke, or it was a draw! Human: " + humanScore + ", Computer: " + computerScore + ".");
    }   
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', function(e) {
    game(1, e.target.textContent);
}));
