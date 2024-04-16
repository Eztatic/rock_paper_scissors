let player = 'ROcK';
player = player.toLowerCase();
let computer = undefined;
let pScore = 0;
let cScore = 0;

const getComputerChoice = () => {
      computer = Math.floor(Math.random()*3)+1;
      if(computer === 1){
            return "rock";
      }else if (computer === 2){
            return "paper";
      }else if (computer === 3){
            return "scissors";
      }else{
            console.log("Error: Number that is generated is more than 3")
      }
}

const playRound = (playerSelection, computerSelection) => {
      if(playerSelection === computerSelection){
            return;
      }else if(
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
      ){
            return pScore++;
      }else {
            return cScore++;
      }
}

const playGame = () => {
      for(let i = 1; i <= 5; i++){
            playRound(player, getComputerChoice());
      }
      if(pScore > cScore){
            return console.log("Player Wins");
      }else if(cScore > pScore){
            return console.log("Computer Wins");
      }else{
            return console.log("Draw");
      }
}

playGame();
console.log(pScore, cScore)

