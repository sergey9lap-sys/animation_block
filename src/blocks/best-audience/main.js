(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".section-head.reveal", {
    opacity: 1,
    y: 0,
    duration: 0.72,
    ease: "power3.out",
  });

  const audienceSection = document.querySelector(".audience");
  if (!audienceSection) return;

  const audienceCards = gsap.utils.toArray(".audience .audience-card");
  const simpleAudienceAnimation = window.matchMedia("(max-width: 640px)").matches;

  audienceCards.forEach((card, index) => {
    const finalRotate = simpleAudienceAnimation ? 0 : parseFloat(getComputedStyle(card).getPropertyValue("--polaroid-rotate")) || 0;
    const startRotates = simpleAudienceAnimation ? [-2, 2, -2, 2] : [-12, 10, -8, 12];
    card.dataset.finalRotate = finalRotate;
    gsap.set(card, {
      opacity: 0,
      y: simpleAudienceAnimation ? -42 : -90,
      scale: 0.85,
      rotate: startRotates[index] ?? finalRotate,
    });
  });

  gsap.to(audienceCards, {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: (index, card) => Number(card.dataset.finalRotate),
    duration: simpleAudienceAnimation ? 0.68 : 0.86,
    ease: "back.out(1.08)",
    stagger: simpleAudienceAnimation ? 0.16 : 0.3,
    scrollTrigger: {
      trigger: audienceSection,
      start: "top 72%",
      once: true,
    },
  });
})();
