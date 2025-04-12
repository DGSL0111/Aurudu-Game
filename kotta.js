let marker = document.getElementById("marker");
let position = 140;
let direction = 1;
let gameOver = false;
let startTime = Date.now();

document.addEventListener("keydown", (e) => {
  if (gameOver) return;

  if (e.key === "ArrowLeft") {
    position -= 10;
  } else if (e.key === "ArrowRight") {
    position += 10;
  }
  updateMarker();
});

function updateMarker() {
  marker.style.left = position + "px";

  if (position < 0 || position > 280) {
    endGame("😢 You lost balance! Try again.");
  }
}

function endGame(message) {
  gameOver = true;
  document.getElementById("status").textContent = message;
}

function gameLoop() {
  if (gameOver) return;

  position += direction * 1;
  updateMarker();

  // Change direction at edges
  if (position <= 120 || position >= 160) {
    direction *= -1;
  }

  if (Date.now() - startTime >= 10000) {
    endGame("🎉 You stayed balanced! Well done!");
  } else {
    requestAnimationFrame(gameLoop);
  }
}

gameLoop();
