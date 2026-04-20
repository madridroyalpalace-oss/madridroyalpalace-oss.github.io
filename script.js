const items = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  items.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
