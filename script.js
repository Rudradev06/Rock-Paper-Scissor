let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userWin) => {
  if (userWin) {
    console.log("You win");
  } else {
    console.log("You lose bro!");
  }
};

const playGame = (userChoice) => {
  console.log(userChoice);
  const compChoice = genCompChoice();
  console.log(compChoice);
  if (userChoice === compChoice) {
    console.log("Game toh DRAW hogya!");
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      if (compChoice === "paper") {
        userWin = false;
      }
      //   userWin = compChoice === "paper" ? false
    } else if (userChoice === "paper") {
      //   if (compChoice === "scissor") {
      //     userWin = true;
      //   }else{
      //     userWin = false;
      //   }
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
