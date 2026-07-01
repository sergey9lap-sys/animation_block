const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const rail = document.querySelector("[data-card-deck]");
const cards = Array.from(document.querySelectorAll(".card-motion"));
const stackRotations = ["-7deg", "-2deg", "3deg", "-4deg", "6deg"];
const midARotations = ["-5deg", "-1.4deg", "2.2deg", "-2.8deg", "4.2deg"];
const midBRotations = ["-1.4deg", "-0.4deg", "0.7deg", "-0.8deg", "1.2deg"];

const prepareDeck = () => {
  if (!rail || !cards.length) return;

  const railRect = rail.getBoundingClientRect();
  const deckX = railRect.left + railRect.width / 2;
  const deckY = railRect.top + railRect.height / 2 - 8;

  rail.classList.add("is-stacked");
  rail.classList.remove("is-spread");

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const fromX = deckX - (rect.left + rect.width / 2);
    const fromY = deckY - (rect.top + rect.height / 2);

    card.classList.remove("is-entered");
    card.style.setProperty("--from-x", `${fromX}px`);
    card.style.setProperty("--from-y", `${fromY}px`);
    card.style.setProperty("--mid-a-x", `${fromX * 0.68}px`);
    card.style.setProperty("--mid-a-y", `${fromY * 0.68 - 4}px`);
    card.style.setProperty("--mid-b-x", `${fromX * 0.18}px`);
    card.style.setProperty("--mid-b-y", `${fromY * 0.18 - 6}px`);
    card.style.setProperty("--stack-rotate", stackRotations[index] || "0deg");
    card.style.setProperty("--mid-a-rotate", midARotations[index] || "0deg");
    card.style.setProperty("--mid-b-rotate", midBRotations[index] || "0deg");
    card.style.setProperty("--stack-order", String(cards.length - index));
    card.style.setProperty("--deal-delay", `${0.05 + index * 0.045}s`);
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      rail.classList.add("is-spread");
    });
  });
};

prepareDeck();

cards.forEach((card, index) => {
  card.addEventListener("animationend", () => {
    card.classList.add("is-entered");

    if (index === cards.length - 1 && rail) {
      rail.classList.remove("is-stacked", "is-spread");
    }
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
