const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Hello World",
  "Hello Turkey",
  "Hello Italy",
  "Hello Netherlands",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(getRandomType());
  notif.innerText = getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
