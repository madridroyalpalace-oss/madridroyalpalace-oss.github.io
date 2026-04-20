const elements = document.querySelectorAll(".fade");

// animación scroll pro
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));

// menú dinámico (aparece/desaparece)
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.style.background = "rgba(0,0,0,0.4)";
  } else {
    nav.style.background = "transparent";
  }
});
