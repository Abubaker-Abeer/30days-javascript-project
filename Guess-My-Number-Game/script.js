const checkBtn = document.querySelector(".check");
let secretNumber = Math.trunc(Math.random() * 20);
let number = document.querySelector(".number");
let message = document.querySelector(".message");
let score = 20;
let highScore = 0;
let body = document.querySelector("body");
const againBtn = document.querySelector(".again");
// for testing
console.log(secretNumber);

function checkScore() {
  if (score > 1) {
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    message.textContent = "You Lose The Game :(";
  }
}

checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   when there is no input
  if (!guess) {
    message.textContent = "No Number!!";
  }
  //   when guess is high
  else if (guess > secretNumber) {
    message.textContent = "📈 Too High !!";
    checkScore();
  } // when guess is low
  else if (guess < secretNumber) {
    message.textContent = "📉 Too LoW !!";
    checkScore();
  } // when guess === secret number
  else if (guess === secretNumber) {
    message.textContent = "🎉🎉 Correct Number, Congratulations! 🎉🎉";
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    // handle high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

againBtn.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  message.textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  number.textContent = "?";
  body.style.backgroundColor = "#333";
  number.style.width = "15rem";
});