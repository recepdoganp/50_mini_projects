const testimonialsContainer = document.querySelector(".testimonial-container");

let testimonial = document.createElement("p");
testimonial.classList.add("testimonial");
let user = document.createElement("div");
user.classList.add("user");

getTestimonials();

let testimonialsArray = [];

async function getTestimonials() {
  const data = await fetch("https://testimonialapi.toolcarton.com/api");
  const testimonials = await data.json();

  testimonials.forEach((testimonial) => {
    testimonialsArray.push(testimonial);
  });

  updateTestimonial();
}

let idx = 0;
function updateTestimonial() {
  const { name, designation, avatar, message } = testimonialsArray[idx];

  testimonial.innerHTML = message;
  user.innerHTML = ` 
  <img src="${avatar}" alt="user" class="user-image" />
  <div class="user-details">
    <h4 class="username">${name}</h4>
    <p class="role">${designation}</p>
  </div>
  `;

  testimonialsContainer.appendChild(testimonial);
  testimonialsContainer.appendChild(user);

  idx++;

  if (idx > testimonialsArray.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
