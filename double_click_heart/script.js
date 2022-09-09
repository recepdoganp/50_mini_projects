const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);

      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {
  const x = e.clientX;
  const y = e.clientY;

  const offsetLeft = e.target.offsetLeft;
  const offsetTop = e.target.offsetTop;

  const xInside = x - offsetLeft;
  const yInside = y - offsetTop;

  let numberOfHeart = Math.ceil(Math.random() * 15);

  for (let i = 0; i < numberOfHeart; i++) {
    const heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");
    if (i === 0) {
      placeHeart(i, heart, xInside, yInside);
    } else {
      placeHeart(i, heart);
    }
  }

  function placeHeart(order, heart, xInside, yInside) {
    if (order === 0) {
      heart.style.top = `${yInside}px`;
      heart.style.left = `${xInside}px`;
      loveMe.appendChild(heart);
    } else {
      xRandom = Math.floor(Math.random() * loveMe.offsetWidth);
      yRandom = Math.floor(Math.random() * loveMe.offsetHeight);
      heart.style.top = `${yRandom}px`;
      heart.style.left = `${xRandom}px`;
      loveMe.appendChild(heart);
    }

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }

  times.innerHTML = ++timesClicked;
}
