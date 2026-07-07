(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  if (window.SplitType) {
    document.querySelectorAll("[data-split]").forEach((target) => new SplitType(target, { types: "lines,words", lineClass: "split-line" }));
  }

  gsap.from(".route-head .word", { yPercent: 110, opacity: 0, stagger: 0.02, duration: 0.8, ease: "power3.out" });

  gsap.utils.toArray("[data-route-path]").forEach((pathEl) => {
    const length = pathEl.getTotalLength();
    gsap.set(pathEl, { strokeDasharray: length, strokeDashoffset: length, opacity: 1 });
    gsap.to(pathEl, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: { trigger: "[data-route-map]", start: "top 70%", end: "bottom 70%", scrub: 0.7 },
    });
  });

  gsap.from("[data-route-start]", { y: -18, autoAlpha: 0, duration: 0.55, ease: "power3.out" });

  gsap.utils.toArray("[data-route-card]").forEach((card) => {
    const dot = card.querySelector("[data-route-dot]");
    const content = card.querySelector("[data-route-content]");
    const copy = Array.from(content.children);
    const routeCard = gsap.timeline({
      scrollTrigger: { trigger: card, start: "top 82%", once: true },
    });

    routeCard
      .from(card, { y: 38, autoAlpha: 0, scale: 0.96, duration: 0.64, ease: "power3.out" })
      .to(dot, { opacity: 1, scale: 1, duration: 0.28, ease: "back.out(1.8)" }, "-=0.34")
      .from(copy, { y: 14, autoAlpha: 0, stagger: 0.06, duration: 0.42, ease: "power3.out" }, "-=0.18");
  });

  gsap.from("[data-route-next]", {
    y: 28,
    autoAlpha: 0,
    duration: 0.62,
    ease: "power3.out",
    scrollTrigger: { trigger: "[data-route-next]", start: "top 88%", once: true },
  });
})();
