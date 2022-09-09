const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";

let idx = 1;
let speed = 300 / speedEl.value;

let int = setInterval(writeText, speed);

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
}

speedEl.addEventListener("input", (e) => {
  clearInterval(int);
  speed = 300 / e.target.value;
  int = setInterval(writeText, speed);
});
