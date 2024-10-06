let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScoreP = document.querySelector("#user-score");
let compScoreP = document.querySelector("#comp-score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("You win");
    userScore++;
    userScoreP.innerText = userScore;
    msg.innerText = `"You Won!" ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    // console.log("You lose bro!");
    // msg.innerText = "You lose to Computer bro!";
    compScore++;
    compScoreP.innerText = compScore;
    msg.innerText = `"You lose bro!" ${userChoice} loses to ${compChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

const playGame = (userChoice) => {
  console.log(userChoice);
  const compChoice = genCompChoice();
  console.log(compChoice);
  if (userChoice === compChoice) {
    // console.log("Game toh DRAW hogya!");
    msg.innerText = "Game toh DRAW hogya!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
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
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
