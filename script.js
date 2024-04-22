let playerChoice = '';
// playerChoice = playerChoice.toLowerCase();
let computerChoice = undefined;
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const getComputerChoice = () => {
      computerChoice = Math.floor(Math.random() * 3) + 1;
      if(computerChoice === 1){
            return "rock";
      }else if (computerChoice === 2){
            return "paper";
      }else if (computerChoice === 3){
            return "scissors";
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
//       startRound(playerChoice, getComputerChoice());
//       if(playerScore > computerScore){
//             return playerScore++;
//       }else if(computerScore > playerScore){
//             return computerScore++;
//       }else{
//             return console.log("Draw");
//       }
// }

const rpsContainer = document.querySelector('.main-rps-cont');
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

      const result = document.querySelector(".results");
      result.textContent = `Player: ${playerScore}
                            Computer: ${computerScore}
                            Draw: ${drawScore}`;
});





