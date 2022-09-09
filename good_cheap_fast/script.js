const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(clickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clickedOne) {
      fast.checked = false;
    } else if (cheap === clickedOne) {
      good.checked = false;
    } else if (fast === clickedOne) {
      cheap.checked = false;
    }
  }
}
