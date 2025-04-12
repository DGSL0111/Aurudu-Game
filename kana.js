let winningPot = Math.floor(Math.random() * 3);

function breakPot(potNumber) {
  const result = document.getElementById("result");
  if (potNumber === winningPot) {
    result.textContent = "🎉 හුරේ! You broke the correct pot!";
  } else {
    result.textContent = "😢 Oops! That pot was empty!";
  }

  const buttons = document.querySelectorAll(".pots button");
  buttons.forEach(btn => btn.disabled = true);
}

function resetGame() {
  winningPot = Math.floor(Math.random() * 3);
  document.getElementById("result").textContent = "";
  const buttons = document.querySelectorAll(".pots button");
  buttons.forEach(btn => btn.disabled = false);
}
