let clicks = 0;
let timeLeft = 10;
let gameTimer;
let scrapeButton = document.getElementById("scrape-button");
let counter = document.getElementById("counter");
let timerDisplay = document.getElementById("timer");
let result = document.getElementById("result");

function scrape() {
  if (timeLeft > 0) {
    clicks++;
    counter.textContent = `Clicks: ${clicks}`;
  }
}

function startTimer() {
  gameTimer = setInterval(function() {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;
    
    if (timeLeft <= 0) {
      clearInterval(gameTimer);
      endGame();
    }
  }, 1000);
}

function endGame() {
  if (clicks >= 30) {
    result.textContent = "🎉 Congratulations! You scraped enough coconuts!";
  } else {
    result.textContent = "😢 Oops! You didn't scrape enough coconuts.";
  }

  scrapeButton.disabled = true; // Disable button after game ends
}

startTimer();
