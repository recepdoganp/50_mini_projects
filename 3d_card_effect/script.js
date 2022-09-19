const card = document.querySelector(".card");
const container = document.querySelector(".container");
const welcomeBanner = document.querySelector(".description");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  welcomeBanner.style.opacity = 0;
  setTimeout(() => {
    welcomeBanner.style.display = "none";
  }, 1000);
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  title.style.transform = `translateZ(150px)`;
  sneaker.style.transform = `translateZ(150px) rotateZ(-30deg)`;
  description.style.transform = `translateZ(125px)`;
  sizes.style.transform = `translateZ(100px)`;
  purchase.style.transform = `translateZ(75px)`;
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = `translateZ(0)`;
  sneaker.style.transform = `translateZ(0) rotateZ(0deg)`;
  description.style.transform = `translateZ(0)`;
  sizes.style.transform = `translateZ(0)`;
  purchase.style.transform = `translateZ(0)`;
});
