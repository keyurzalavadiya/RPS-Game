let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw.Play again.";
  msg.style.backgroundColor = "rgb(31, 39, 54)";
};
const showWinner = (userwin, userChoice, CompChoice) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose ${CompChoice} beats your ${CompChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //generate computer choice =>modular
  const CompChoice = genCompChoice();
  if (userChoice === CompChoice) {
    //draw game
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      //scissors papper
      userwin = CompChoice === "papper" ? false : true;
    } else if (userChoice === "papper") {
      //rock seissors
      userwin = CompChoice === "scissors" ? false : true;
    } else {
      //rock papper
      userwin = CompChoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, CompChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
