const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.contains("active")
      ? btn.parentElement.classList.remove("active")
      : btn.parentElement.classList.add("active");
  });
});
