//Randomly Return Rock Paper Scissors
function computerPlay(){
  const rps = ["rock", "paper", "scissors"]
  const randomChoice = Math.floor(Math.random()*rps.length);

  return rps[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection){
    return "Draw";
  }else if (playerSelection == "rock" && computerSelection == "paper"){
    return "You Lose! Paper covers rock";
  }else if(playerSelection == "rock" && computerSelection == "scissors"){
    return "You Win! Rock crushes scissors"
  }else if(playerSelection == "paper" && computerSelection == "scissors"){
    return "You Lose! Scissors cuts paper"
  }else if(playerSelection == "paper" && computerSelection == "rock"){
    return "You Win! Paper covers rock"
  }else if(playerSelection == "scissors" && computerSelection == "rock"){
    return "You Lose! Rock crushes scissors"
  }else if(playerSelection == "scissors" && computerSelection == "paper"){
    return "You Win! Scissors cuts paper"
  }
}
/*
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".button");

btns.forEach(function(button) {
  button.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;

    if (styles.contains('rock')){
      count --;
    }
    else if(styles.contains('increase')){
      count++;
    }
    else{
      count = 0;
    }
    
  value.textContent = count;
  console.log(count);
  });
});

*/


function game(){
let playerScore = 0;
let computerScore =0;

  for(let i=1; i<=5; i++){
    
    let playerSelection =   //window.prompt("Game "+ i + ": Enter rock, paper, or scissors!").toLowerCase();
    
    //Check input
    do { 
      if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        playerSelection = window.prompt("Input not valid - Enter rock, paper, or scissors!").toLowerCase();
      }
    }while(playerSelection != "rock" && playerSelection != "paper" &&
         playerSelection != "scissors");
    
    //Start Game 1
    console.log("Game "+ i);
    let result = playRound(playerSelection, computerPlay());
    console.log(result);
    if (result.includes("Win")){
      playerScore ++;
    }else if(result.includes("Lose")){
      computerScore ++;
    }

  }
  return 'Game done. Final score is Player: '+playerScore + 
      ' - Computer: '+ computerScore;
}

function playAgain(){
  let answer = prompt("Would you like to play again? Enter 'yes or 'no:").toLowerCase();

  if (answer == "yes"){
    location.reload();
  }else{
    return
  }

}


console.log("Welcome to Rock Paper Scissors!");

const computerSelection = computerPlay();
console.log(game());
playAgain();



