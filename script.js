const btn = document.querySelector(".btn-sec");
const hidden = document.querySelector(".hidden-text");

btn.addEventListener("click", function () {
  hidden.classList.toggle("hidden");
});
