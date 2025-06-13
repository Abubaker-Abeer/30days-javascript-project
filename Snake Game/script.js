const playBoard   = document.querySelector(".play-board");
const scoreEl     = document.querySelector(".score");
const highScoreEl = document.querySelector(".high-score");
const arrows      = document.querySelectorAll(".controls .arrow");

let foodX, foodY;
let snakeX = 5, snakeY = 10;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let score = 0;
let highScore = 0;
let gameInterval;

// 1) وضع الطعام في موقع عشوائي
function changeFoodPosition() {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

// 2) إنهاء اللعبة وتنبيه المستخدم (عند اصطدام الجسم فقط)
function endGame() {
  clearInterval(gameInterval);
  alert(`Game Over! Your score: ${score}`);
  // إعادة تهيئة
  snakeX = 5; snakeY = 10;
  velocityX = 0; velocityY = 0;
  snakeBody = [];
  score = 0;
  scoreEl.textContent = `Score: ${score}`;
  changeFoodPosition();
  startGame();
}

// 3) التقاط ضغطات الأسهم (لوحة مفاتيح)
function changeDirectionKeyboard(e) {
  switch (e.key) {
    case "ArrowUp":
      if (velocityY !== 1) { velocityX = 0; velocityY = -1; }
      break;
    case "ArrowDown":
      if (velocityY !== -1) { velocityX = 0; velocityY = 1; }
      break;
    case "ArrowLeft":
      if (velocityX !== 1) { velocityX = -1; velocityY = 0; }
      break;
    case "ArrowRight":
      if (velocityX !== -1) { velocityX = 1; velocityY = 0; }
      break;
  }
}

// 4) التقاط نقرات الأزرار اللمسية
function changeDirectionTouch(e) {
  const dir = e.currentTarget.classList;
  if (dir.contains("up")    && velocityY !== 1)  { velocityX = 0; velocityY = -1; }
  if (dir.contains("down")  && velocityY !== -1) { velocityX = 0; velocityY = 1; }
  if (dir.contains("left")  && velocityX !== 1)  { velocityX = -1; velocityY = 0; }
  if (dir.contains("right") && velocityX !== -1) { velocityX = 1; velocityY = 0; }
}

// 5) بدء اللعبة (game loop)
function startGame() {
  changeFoodPosition();
  gameInterval = setInterval(initGame, 100);
}

// 6) دالة التحديث والرسم
function initGame() {
  // احتفظ بموقع الرأس القديم
  const prevHead = [snakeX, snakeY];

  // حدّث موقع الرأس
  snakeX += velocityX;
  snakeY += velocityY;

  // **لفّ عند الحدود** (لا game over هنا)
  if (snakeX < 1)      snakeX = 30;
  else if (snakeX > 30) snakeX = 1;
  if (snakeY < 1)      snakeY = 30;
  else if (snakeY > 30) snakeY = 1;

  // 7) إذا أكل الثعبان الطعام → زيادة الجسم والسكور
  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition();
    snakeBody.push(prevHead);
    score++;
    scoreEl.textContent = `Score: ${score}`;
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = `High Score: ${highScore}`;
    }
  }

  // 8) حرك جسم الثعبان
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = [...snakeBody[i - 1]];
  }
  if (snakeBody.length) {
    snakeBody[0] = prevHead;
  }

  // 9) Game Over إذا اصطدم بنفسه
  for (let part of snakeBody) {
    if (part[0] === snakeX && part[1] === snakeY) {
      return endGame();
    }
  }

  // 10) بناء الـ HTML للطعام والجسم والرأس
  let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  for (let part of snakeBody) {
    html += `<div class="body" style="grid-area: ${part[1]} / ${part[0]}"></div>`;
  }
  html += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`;

  playBoard.innerHTML = html;
}

// Event Listeners
document.addEventListener("keydown", changeDirectionKeyboard);
arrows.forEach(btn => btn.addEventListener("click", changeDirectionTouch));

// انطلاق اللعبة
startGame();
