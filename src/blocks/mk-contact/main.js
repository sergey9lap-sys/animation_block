(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  const support = gsap.timeline({
    scrollTrigger: { trigger: "[data-support]", start: "top 76%", once: true },
  });

  support
    .from(".support-copy .kicker", { y: 18, autoAlpha: 0, duration: 0.45, ease: "power3.out" })
    .from(".support-copy h2", { y: 26, autoAlpha: 0, duration: 0.55, ease: "power3.out" }, "-=0.22")
    .from(".support-copy p", { y: 18, autoAlpha: 0, duration: 0.45, ease: "power3.out" }, "-=0.24")
    .from(".support-actions a", { y: 18, autoAlpha: 0, stagger: 0.06, duration: 0.42, ease: "power3.out" }, "-=0.16")
    .from(".support-phone-wrap img", { y: 38, scale: 0.94, autoAlpha: 0, duration: 0.76, ease: "power3.out" }, "-=0.26")
    .from("[data-question]", { y: 20, autoAlpha: 0, stagger: 0.12, duration: 0.44, ease: "back.out(1.4)" }, "-=0.42");
})();
