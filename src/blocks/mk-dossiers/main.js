(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  if (window.SplitType) {
    document.querySelectorAll("[data-split]").forEach((target) => new SplitType(target, { types: "lines,words", lineClass: "split-line" }));
  }

  gsap.from(".archive-head .word", {
    yPercent: 110,
    opacity: 0,
    stagger: 0.02,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: { trigger: ".archive", start: "top 74%", once: true },
  });

  gsap.from("[data-dossier]", {
    x: (index) => [-56, 24, 54, -42, 18, 46][index % 6],
    y: (index) => [34, 42, 28, 22, 38, 18][index % 6],
    rotation: (index) => [-4, 3, 4, -3, 3, -3][index % 6],
    scale: 0.92,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: { trigger: "[data-archive]", start: "top 78%", once: true },
  });
})();
