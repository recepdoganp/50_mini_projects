const boxes = document.getElementById("boxes");
const btn = document.getElementById("btn");

function createBoxes() {
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      box.classList.add("box");
      boxes.appendChild(box);
    }
  }
}

btn.addEventListener("click", () => {
  boxes.classList.toggle("big");
});

createBoxes();
