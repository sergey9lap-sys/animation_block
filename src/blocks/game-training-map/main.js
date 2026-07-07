gsap.registerPlugin(ScrollTrigger);

const programTimeline = gsap.timeline({
  scrollTrigger: { trigger: ".program-board", start: "top 72%", once: true },
});

programTimeline
  .from(".program-board", { y: 40, opacity: 0, duration: 0.55, ease: "power2.out" })
  .from(".program-card-1", { y: 24, opacity: 0, scale: 0.96, rotate: -3, duration: 0.4, ease: "power2.out" }, "-=0.15");

for (let index = 1; index <= 6; index += 1) {
  programTimeline
    .fromTo(`.program-line-${index}`, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.38, ease: "power2.inOut" }, "-=0.08")
    .from(`.program-card-${index + 1}`, {
      y: 24,
      opacity: 0,
      scale: 0.96,
      rotate: index % 2 ? 2 : -2,
      duration: 0.38,
      ease: "power2.out",
    }, "-=0.08");
}

programTimeline.to(".program-card-7", {
  boxShadow: "0 28px 70px rgba(0, 191, 166, 0.22)",
  duration: 0.35,
  ease: "power2.out",
});

gsap.from(".program-card .mini-clip, .program-card .tape", {
  opacity: 0,
  y: -8,
  scale: 0.9,
  duration: 0.28,
  stagger: 0.035,
  ease: "power2.out",
  scrollTrigger: { trigger: ".program-board", start: "top 70%", once: true },
});
