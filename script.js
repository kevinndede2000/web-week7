// --- Utility Functions ---
// Function with parameter + return value
function calculateSquare(num) {
  return num * num;
}

// Display result using a reusable function
function displayResult(num) {
  const result = calculateSquare(num);
  document.getElementById("functionOutput").textContent = `${num}² = ${result}`;
}

// Change color of any element
function changeColor(id, color) {
  document.getElementById(id).style.color = color;
}

// --- Theme Toggle ---
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// --- Bounce Animation ---
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("jsBox");
  box.classList.add("bounce");
  setTimeout(() => box.classList.remove("bounce"), 1000);
});

// --- Modal ---
const modal = document.getElementById("modal");
document.getElementById("toggleModalBtn").addEventListener("click", () => {
  modal.classList.add("show");
});
document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("show");
});

// --- Scroll Reveal ---
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });
reveals.forEach(r => observer.observe(r));

// --- Custom Cursor ---
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// --- Mini Game: Catch the Box ---
let score = 0;
let timeLeft = 20;
let gameInterval, timerInterval;

const gameBox = document.getElementById("gameBox");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("scoreDisplay");
const timerDisplay = document.getElementById("timerDisplay");
const startGameBtn = document.getElementById("startGameBtn");

// Function to move box to a random position
function moveBox() {
  const areaWidth = gameArea.clientWidth - 40; // box size
  const areaHeight = gameArea.clientHeight - 40;
  const randomX = Math.floor(Math.random() * areaWidth);
  const randomY = Math.floor(Math.random() * areaHeight);
  gameBox.style.left = randomX + "px";
  gameBox.style.top = randomY + "px";
}

// Function to start the game
function startGame() {
  score = 0;
  timeLeft = 20;
  scoreDisplay.textContent = "Score: 0";
  timerDisplay.textContent = "Time: 20s";
  gameBox.style.display = "block";

  // Move the box every 800ms
  gameInterval = setInterval(moveBox, 800);

  // Countdown timer
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// Function to end the game
function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  gameBox.style.display = "none";
  alert(`⏳ Time's up! Your final score is ${score}`);
}

// Function when player clicks the box
gameBox.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  moveBox(); // move immediately after click
});

startGameBtn.addEventListener("click", startGame);
