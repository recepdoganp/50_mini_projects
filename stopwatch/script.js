const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const display = document.getElementById("display");

let startTime;
let elapsedTime = 0;
let timerInterval;
let timeToPrint = "";

function printTime() {
  elapsedTime = Date.now() - startTime;

  let hh = Math.floor(elapsedTime / 3600000);

  let mm = Math.floor(elapsedTime / 60000);

  let ss = Math.floor(elapsedTime / 1000) % 60;

  let ms = Math.floor(elapsedTime / 10) % 100;

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  if (hh !== 0) {
    timeToPrint = `${hh}:${formattedMM}:${formattedSS}:${formattedMS}`;
  } else {
    timeToPrint = `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  display.innerHTML = timeToPrint;
}

function startCounter() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(printTime, 10);
  showButton("pause");
}

function pauseCounter() {
  clearInterval(timerInterval);
  showButton("play");
}

function resetCounter() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  startTime = 0;
  showButton("play");
  display.innerHTML = "00:00:00";
}

function showButton(btnKey) {
  const btnToShow = btnKey === "play" ? playBtn : pauseBtn;
  const btnToHide = btnKey === "play" ? pauseBtn : playBtn;
  btnToShow.style.display = "block";
  btnToHide.style.display = "none";
}

playBtn.addEventListener("click", startCounter);
pauseBtn.addEventListener("click", pauseCounter);
resetBtn.addEventListener("click", resetCounter);
