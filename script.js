const reveal = document.querySelector(".reveal");

window.addEventListener("load", () => {
  reveal.style.opacity = "0";
  reveal.style.transform = "translateY(40px)";

  setTimeout(() => {
    reveal.style.transition = "1s ease";
    reveal.style.opacity = "1";
    reveal.style.transform = "translateY(0)";
  }, 300);
});
