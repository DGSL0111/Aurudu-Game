let winningPot = Math.floor(Math.random() * 3);

function breakPot(potNumber) {
  const resultText = document.getElementById("result");
  if (potNumber === winningPot) {
    resultText.textContent = "🎉 හුරේ! You broke the correct pot!";
  } else {
    resultText.textContent = "😢 Oops! Try again next time.";
  }

  // Disable all buttons
  const buttons = document.querySelectorAll(".pots button");
  buttons.forEach(btn => btn.disabled = true);
}

function resetGame() {
  winningPot = Math.floor(Math.random() * 3);
  document.getElementById("result").textContent = "";
  const buttons = document.querySelectorAll(".pots button");
  buttons.forEach(btn => btn.disabled = false);
}
