const start = document.getElementById("start");
const stop = document.getElementById("stop");
const kinetic = document.querySelector(".kinetic");

let isActive = kinetic.classList.contains("active");

start.addEventListener("click", () => {
  !isActive && kinetic.classList.add("active");
  isActive = kinetic.classList.contains("active");
});

stop.addEventListener("click", () => {
  isActive && kinetic.classList.remove("active");
  isActive = kinetic.classList.contains("active");
});
