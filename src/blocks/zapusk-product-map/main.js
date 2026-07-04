const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const rail = document.querySelector("[data-card-deck]");
const cards = Array.from(document.querySelectorAll(".card-motion"));
const stackRotations = ["-7deg", "-2deg", "3deg", "-4deg", "6deg"];
const midARotations = ["-5deg", "-1.4deg", "2.2deg", "-2.8deg", "4.2deg"];
const midBRotations = ["-1.4deg", "-0.4deg", "0.7deg", "-0.8deg", "1.2deg"];

const prepareDeck = () => {
  if (!rail || !cards.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cards.forEach((card) => card.classList.add("is-entered"));
    return;
  }

  const railRect = rail.getBoundingClientRect();
  const deckX = railRect.left + railRect.width / 2;
  const deckY = railRect.top + railRect.height / 2 - 8;

  rail.classList.add("is-dealing");

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const fromX = deckX - (rect.left + rect.width / 2);
    const fromY = deckY - (rect.top + rect.height / 2);
    const stackRotate = stackRotations[index] || "0deg";
    const midARotate = midARotations[index] || "0deg";
    const midBRotate = midBRotations[index] || "0deg";

    card.classList.remove("is-entered");
    card.style.zIndex = String(cards.length - index);
    card.style.transform = `translate3d(${fromX}px, ${fromY}px, 0) rotate(${stackRotate}) scale(0.94)`;
    card.style.opacity = "0.82";
    card.style.filter = "blur(1.4px)";

    const animation = card.animate(
      [
        {
          opacity: 0.82,
          transform: `translate3d(${fromX}px, ${fromY}px, 0) rotate(${stackRotate}) scale(0.94)`,
          filter: "blur(1.4px)",
          offset: 0,
        },
        {
          opacity: 0.9,
          transform: `translate3d(${fromX * 0.68}px, ${fromY * 0.68 - 4}px, 0) rotate(${midARotate}) scale(0.965)`,
          filter: "blur(0.8px)",
          offset: 0.26,
        },
        {
          opacity: 0.98,
          transform: `translate3d(${fromX * 0.18}px, ${fromY * 0.18 - 6}px, 0) rotate(${midBRotate}) scale(0.995)`,
          filter: "blur(0.2px)",
          offset: 0.62,
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
          filter: "blur(0)",
          offset: 1,
        },
      ],
      {
        duration: 1700,
        easing: "cubic-bezier(0.24, 0.72, 0.18, 1)",
        fill: "forwards",
      },
    );

    animation.finished.then(() => {
      card.classList.add("is-entered");
      card.style.zIndex = "";
      card.style.opacity = "";
      card.style.filter = "";
      card.style.transform = "";

      if (index === cards.length - 1) {
        rail.classList.remove("is-dealing");
      }
    });
  });
};

prepareDeck();

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
