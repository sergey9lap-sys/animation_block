(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  if (window.SplitType) {
    document.querySelectorAll("[data-split]").forEach((target) => new SplitType(target, { types: "lines,words", lineClass: "split-line" }));
  }

  gsap.from(".cinematic-intro .word, .cinematic-intro .kicker", {
    yPercent: 100,
    opacity: 0,
    stagger: 0.018,
    duration: 0.8,
    ease: "power3.out",
  });

  const acts = gsap.utils.toArray("[data-act]");
  const isMobile = window.matchMedia("(max-width: 760px)").matches;

  if (acts.length && !isMobile) {
    gsap.set(acts, { autoAlpha: 0, y: 72, scale: 0.94, rotate: 0 });
    gsap.set(acts[0], { autoAlpha: 1, y: 0, scale: 1, rotate: -0.4 });

    const story = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      scrollTrigger: {
        trigger: "[data-cinematic]",
        start: "top top",
        end: `+=${acts.length * 900}`,
        pin: true,
        scrub: 0.9,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    story.to(acts[0], { duration: 0.9, y: 0, scale: 1, autoAlpha: 1 });

    acts.slice(1).forEach((act, index) => {
      const previous = acts[index];
      story
        .to(previous, { autoAlpha: 0.26, y: -36, scale: 0.92, duration: 0.75 }, "+=0.18")
        .to(act, { autoAlpha: 1, y: 0, scale: 1, rotate: index % 2 ? -0.35 : 0.35, duration: 0.95 }, "<0.18")
        .to(act, { duration: 0.65 });
    });
  } else {
    gsap.set(acts, { autoAlpha: 1, y: 0, scale: 1 });
  }

  gsap.to("[data-scroll-hint]", {
    opacity: 1,
    duration: 0.4,
    scrollTrigger: { trigger: "[data-cinematic]", start: "top top", end: "bottom top", toggleActions: "play reverse play reverse" },
  });
})();
