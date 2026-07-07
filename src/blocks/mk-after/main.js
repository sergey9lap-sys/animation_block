(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  if (window.SplitType) {
    document.querySelectorAll("[data-split]").forEach((target) => new SplitType(target, { types: "lines,words", lineClass: "split-line" }));
  }

  gsap.from(".transformation-head", { y: 34, opacity: 0, duration: 0.75, ease: "power3.out" });

  const buildReveal = (card, isMobile = false) => {
    const index = card.querySelector("[data-transformation-index]");
    const before = card.querySelector("[data-transformation-before]");
    const arrow = card.querySelector("[data-transformation-arrow]");
    const after = card.querySelector("[data-transformation-after]");

    gsap.set(card, { autoAlpha: 0, y: 24, scale: 0.98 });
    gsap.set([index, before, arrow, after], { autoAlpha: 0, y: 24, scale: 0.98 });
    gsap.set(arrow, { rotation: isMobile ? 90 : 0 });

    return gsap.timeline({ paused: true })
      .to(card, { autoAlpha: 1, y: 0, scale: 1, duration: 0.58, ease: "power3.out" })
      .to(index, { autoAlpha: 1, y: 0, scale: 1, duration: 0.48, ease: "power3.out" }, "-=0.42")
      .to(before, { autoAlpha: 1, y: 0, scale: 1, duration: 0.52, ease: "power3.out" }, "+=0.12")
      .to(arrow, { autoAlpha: 1, y: 0, scale: 1, duration: 0.46, ease: "power3.out" }, "+=0.12")
      .to(arrow, { x: isMobile ? 0 : 8, y: isMobile ? 7 : 2, duration: 0.18, ease: "power2.out" }, "+=0.02")
      .to(arrow, { x: 0, y: 0, rotation: isMobile ? 90 : 0, duration: 0.32, ease: "power3.out" })
      .to(after, { autoAlpha: 1, y: 0, scale: 1, duration: 0.56, ease: "power3.out" }, "-=0.16");
  };

  const isMobile = window.matchMedia("(max-width: 680px)").matches;
  const cards = gsap.utils.toArray("[data-transformation-card]");
  const timelines = cards.map((card) => buildReveal(card, isMobile));

  ScrollTrigger.batch("[data-transformation-card]", {
    start: "top 84%",
    once: true,
    onEnter: (batch) => {
      batch.forEach((card, index) => {
        const timeline = timelines[cards.indexOf(card)];
        gsap.delayedCall(index * 0.24, () => timeline && timeline.play());
      });
    },
  });
})();
