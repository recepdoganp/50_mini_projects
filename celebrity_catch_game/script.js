const screens = document.querySelectorAll(".screen");
const choose_celebrity_btns = document.querySelectorAll(
  ".choose-celebrity-btn"
);
const start_btn = document.querySelector("#start-btn");
const game_container = document.querySelector(".game-container");
const timeEl = document.querySelector("#time");
const scoreEl = document.querySelector("#score");
const messageEl = document.querySelector("#message");

let seconds = 0;
let score = 0;
let selected_celebrity = {};

start_btn.addEventListener("click", () => {
  screens[0].classList.add("up");
});
// screen[0].classList.add("up");

choose_celebrity_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selected_celebrity = { src, alt };

    screens[1].classList.add("up");
    setTimeout(createCelebrity, 1000);
    startGame();
  });
});

window.addEventListener("load", () => {
  screens.forEach((screen) => screen.classList.remove("up"));
  screens[0].style.top = 0;
});

function createCelebrity() {
  const celebrity = document.createElement("div");
  celebrity.classList.add("celebrity");
  const { x, y } = getRandomLocation();
  celebrity.style.top = `${y}px`;
  celebrity.style.left = `${x}px`;
  celebrity.innerHTML = `<img src="${selected_celebrity.src}" alt="${
    selected_celebrity.src
  }" style="transform: rotate(${Math.random() * 360}deg)"/>`;
  celebrity.addEventListener("click", catchCelebrity);
  game_container.appendChild(celebrity);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200);
  const y = Math.random() * (height - 200);
  return { x, y };
}

function startGame() {
  setInterval(increaseTime, 1000);
}
function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `TIme: ${m}:${s}`;
  seconds++;
}

function catchCelebrity() {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addInsects();
}
function addInsects() {
  setTimeout(createCelebrity, 1000);
  setTimeout(createCelebrity, 1500);
}

function increaseScore() {
  score++;
  if (score > 19) {
    messageEl.classList.add("visible");
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
