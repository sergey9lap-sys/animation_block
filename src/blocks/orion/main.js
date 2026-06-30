const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isSmallScreen = window.matchMedia("(max-width: 700px)").matches;
const starAnchorX = isSmallScreen ? -12 : -14;
const starCards = gsap.utils.toArray(".star-card");
const constellationPaths = gsap.utils.toArray(".constellation__lines path");
const starNote = document.querySelector(".star-note");

function setActiveStar(card) {
  if (!card || !starNote) return;

  starCards.forEach((item) => item.classList.toggle("is-active", item === card));
  starNote.querySelector("strong").textContent = card.dataset.star;
  starNote.querySelector("p").textContent = card.dataset.description;
}

function showOrionWithoutAnimation() {
  gsap.set(".orion-scene .section__head h2, .orion-line--intro, .final-thought, .sky-particle, .field-star, .star-note", {
    opacity: 1,
    y: 0,
  });
  gsap.set(".star-card", {
    opacity: 1,
    x: starAnchorX,
    yPercent: -50,
    scale: 1,
    filter: "brightness(1)",
    transformOrigin: `${Math.abs(starAnchorX)}px 50%`,
  });
  gsap.set(".constellation__lines path", { opacity: 1, strokeDashoffset: 0 });
}

gsap.set(".orion-scene .section__head h2", { opacity: 0, y: 28 });
gsap.set(".orion-line--intro", { opacity: 0, y: 16 });
gsap.set(".final-thought", { opacity: 0, y: 18 });
gsap.set(".star-card", {
  opacity: 0,
  x: starAnchorX,
  yPercent: -50,
  scale: 0.78,
  filter: "brightness(1)",
  transformOrigin: `${Math.abs(starAnchorX)}px 50%`,
});
gsap.set(".sky-particle, .field-star", { opacity: 0, y: 8 });
gsap.set(".star-note", { opacity: 0, y: 14 });

constellationPaths.forEach((path) => {
  const length = path.getTotalLength();
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
    opacity: 0,
  });
});

starCards.forEach((card) => {
  card.addEventListener("pointerenter", () => setActiveStar(card));
  card.addEventListener("focus", () => setActiveStar(card));
  card.addEventListener("click", () => setActiveStar(card));
});

setActiveStar(document.querySelector(".star-card--betelgeuse"));

if (reduceMotion) {
  showOrionWithoutAnimation();
} else {
  gsap.timeline({ delay: 0.18 })
    .to(".orion-scene .section__head h2", { opacity: 1, y: 0, duration: 0.56 })
    .to(".orion-line--intro", { opacity: 1, y: 0, stagger: 0.16, duration: 0.5, ease: "power2.out" }, "-=0.16")
    .to(".field-star", { opacity: 1, y: 0, stagger: 0.04, duration: 0.38 }, "-=0.12")
    .to(".sky-particle", { opacity: 1, y: 0, stagger: 0.08, duration: 0.42 }, "-=0.22")
    .to(".star-card--betelgeuse", { opacity: 1, scale: 1, duration: 0.32, ease: "back.out(1.8)" }, "-=0.04")
    .to(".star-card--bellatrix", { opacity: 1, scale: 1, duration: 0.32, ease: "back.out(1.8)" }, "-=0.18")
    .to(".star-card--mintaka", { opacity: 1, scale: 1, duration: 0.28, ease: "back.out(1.8)" }, "-=0.1")
    .to(".star-card--alnilam", { opacity: 1, scale: 1, duration: 0.28, ease: "back.out(1.8)" }, "-=0.16")
    .to(".star-card--alnitak", { opacity: 1, scale: 1, duration: 0.28, ease: "back.out(1.8)" }, "-=0.16")
    .to(".star-card--saiph", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.8)" }, "-=0.08")
    .to(".star-card--rigel", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.8)" }, "-=0.16")
    .to(starCards, { filter: "brightness(1.35)", duration: 0.12, yoyo: true, repeat: 1, stagger: 0.025 }, "-=0.04")
    .to(constellationPaths[0], { strokeDashoffset: 0, opacity: 1, duration: 0.32, ease: "none" }, "-=0.02")
    .to(".final-thought--first", { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" }, "-=0.3")
    .to(constellationPaths[1], { strokeDashoffset: 0, opacity: 1, duration: 0.32, ease: "none" }, "-=0.14")
    .to(constellationPaths[2], { strokeDashoffset: 0, opacity: 1, duration: 0.26, ease: "none" }, "-=0.02")
    .to(constellationPaths[3], { strokeDashoffset: 0, opacity: 1, duration: 0.26, ease: "none" }, "-=0.08")
    .to(constellationPaths[4], { strokeDashoffset: 0, opacity: 1, duration: 0.34, ease: "none" }, "-=0.02")
    .to(constellationPaths[5], { strokeDashoffset: 0, opacity: 1, duration: 0.34, ease: "none" }, "-=0.12")
    .to(constellationPaths[6], { strokeDashoffset: 0, opacity: 1, duration: 0.36, ease: "none" }, "-=0.08")
    .to(constellationPaths[7], { strokeDashoffset: 0, opacity: 1, duration: 0.36, ease: "none" }, "-=0.18")
    .to(".final-thought--last", { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" }, "-=0.28")
    .to(".star-note", { opacity: 1, y: 0, duration: 0.24, ease: "power2.out" }, "-=0.2");
}
