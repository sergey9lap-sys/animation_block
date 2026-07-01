const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const cards = document.querySelectorAll(".card-motion");

cards.forEach((card) => {
  card.addEventListener("animationend", () => {
    card.classList.add("is-entered");
  }, { once: true });
});

if (canHover) {
  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      if (!card.classList.contains("is-entered")) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-8px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}
