const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000);

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function run() {
  idx++;
  changeImage();
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInteval();
});
leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInteval();
});

function resetInteval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
