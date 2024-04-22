let playerChoice = '';
// playerChoice = playerChoice.toLowerCase();
let computerChoice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let randCompChoice;

const getComputerChoice = () => {
      randCompChoice = Math.floor(Math.random() * 2.9);

      if(randCompChoice === 0){
            return computerChoice[randCompChoice];
      }else if (randCompChoice === 1){
            return computerChoice[randCompChoice];
      }else if (randCompChoice === 2){
            return computerChoice[randCompChoice];
      }
}

const startRound = (playerSelection, computerSelection) => {
      if(playerSelection === computerSelection){
            return drawScore++;
      }else if(
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
      ){
            return playerScore++;
      }else {
            return computerScore++;
      }
}

// const playGame = () => {
//       // for(let i = 1; i <= 5; i++){
//       //       startRound(playerChoice, getComputerChoice());
//       // }
//       if(playerScore > computerScore){
//             return playerScore++;
//       }else if(computerScore > playerScore){
//             return computerScore++;
//       }else{
//             return console.log("Draw");
//       }
// }

const rpsContainer = document.querySelector('.main-rps-cont');
const result = document.querySelector(".results");
const description = document.querySelector(".description");

rpsContainer.addEventListener('click', (event) => {
      let target = event.target;
      console.log(event.target);

      switch(target.id) {
            case 'rock': 
                  playerChoice = 'rock';
                  break;
            case 'paper': 
                  playerChoice = 'paper';
                  break;
            case 'scissors': 
                  playerChoice = 'scissors';
                  break;
      }
      
      startRound(playerChoice, getComputerChoice());
      console.log(randCompChoice);

      description.textContent = `Player picked: ${playerChoice}, 
                                 Computer picked: ${computerChoice[randCompChoice]}`
      result.textContent = `Player: ${playerScore}
                            Computer: ${computerScore}
                            Draw: ${drawScore}`;

      setTimeout(function(){
            if(playerScore >= 5){
                  alert("Player Wins!!!");
                  reset();
            }else if(computerScore >= 5){
                  alert("Computer Wins!!!");
                  reset();
            }
      }, 300);
});

function reset() {
      playerScore = 0;
      computerScore = 0;
      drawScore = 0;
      result.textContent = '';
      description.textContent = '';
}     








