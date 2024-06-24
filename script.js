const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const beepSound = document.getElementById("beep-sound");

let isLogging = false;

startBtn.addEventListener("click", () => {
  isLogging = true;
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  isLogging = false;
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  logDiv.textContent = " ";
  stateDiv.textContent = " ";
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

function handleDown(e) {
  if (isLogging) {
    logDiv.textContent = `Key ${e.key} pressed down`;
    stateDiv.textContent = `Key ${e.key} pressed down`;
    playSound();
  }
}

function handleUp(e) {
  if (isLogging) {
    logDiv.textContent = `Key ${e.key} pressed up`;
    stateDiv.textContent = `Key ${e.key} pressed up`;
  }
}

function playSound() {
  beepSound.play();
}