function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];
    randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

const roundResult = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");


document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissors').onclick = playRound;
document.getElementById('reset').onclick = resetScore;

let pWinCount = 0;
let cWinCount = 0;

function playRound() {
    let playerSelection = this.id;
    let computerSelection = getComputerChoice();
    
    let playerWinIndicator = 0;
    let computerWinIndicator = 0;
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        message = `YOU WIN!! \n You: ${playerSelection} \n Computer:  ${computerSelection}`;
        playerWinIndicator = 1;
    } else if (playerSelection == computerSelection) {
        message = `It's a draw, you both chose ${playerSelection}!`;
    } else {
        message = `COMPUTER WINS!! You: ${playerSelection}, Computer: ${computerSelection}`;
        computerWinIndicator = 1;
    }

    pWinCount += playerWinIndicator;
    cWinCount += computerWinIndicator;

    roundResult.textContent = message;
    playerScore.textContent = pWinCount;
    compScore.textContent= cWinCount;
}

function resetScore() {
    pWinCount = 0;
    cWinCount = 0;
    playerScore.textContent = pWinCount;
    compScore.textContent= cWinCount;
}


//const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
    // button.addEventListener("click", alert(button.value));
// });



// buttons.forEach((button) => {
   // button.focus();
// });













function playGame() {
       
    let playerWinCount = 0;
    let computerWinCount = 0;

    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    let result = playRound(playerSelection, computerSelection);
    playerWinCount += result[1];
    computerWinCount += result[2];
    console.log(result[0]);
    }


// function getPlayerChoice() {
    // playerInput = prompt("Please choose either 'rock', 'paper' or 'scissors':");
    // return playerInput.toLowerCase();
// }


  //  if(playerWinCount>computerWinCount) {
    //    console.log(`Player wins with ${playerWinCount} victories`);
    //} 
    // else if(playerWinCount == computerWinCount) {
       // console.log(`It's a tie`);
    // }
    // else {
       // console.log(`Computer wins with ${computerWinCount} victories`)
    // }