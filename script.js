let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg")

let userScorePara = document.querySelector("#user-score")

let compScorePara = document.querySelector("#comp-score")

const genComputerChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
  msg.innerText = "GAME WAS DRAW!,PLAY AGAIN"
  msg.style.backgroundColor = "#000000"
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `YOU WIN!Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `YOU LOSE! ${compChoice} beats yours ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
  const compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
