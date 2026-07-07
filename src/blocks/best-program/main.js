(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const programSection = document.querySelector(".program");
  if (!programSection) return;

  const programHead = programSection.querySelector(".program-head");
  const programTrack = programSection.querySelector(".program-track");
  const programSegments = gsap.utils.toArray(".program-line__segment");
  const programNodes = gsap.utils.toArray(".program-node");
  const programChapters = gsap.utils.toArray(".program .learn-card");
  const programLine = programSection.querySelector(".program-line");
  const simpleProgramAnimation = window.matchMedia("(max-width: 640px)").matches;
  const programLineTarget = simpleProgramAnimation ? programTrack : programLine;

  gsap.set(programTrack, { opacity: 1, y: 0 });
  gsap.set(programHead, { opacity: 0, y: 34 });
  gsap.set(programChapters, {
    opacity: 0,
    y: 30,
    scale: 0.98,
    rotateX: simpleProgramAnimation ? 0 : 8,
    transformPerspective: 900,
    "--program-node-opacity": simpleProgramAnimation ? 0 : 1,
    "--program-node-scale": simpleProgramAnimation ? 0.55 : 1,
  });
  gsap.set(programNodes, {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "50% 50%",
  });

  if (simpleProgramAnimation) {
    gsap.set(programLineTarget, { "--program-mobile-line-scale": 0 });
  } else {
    programSegments.forEach((segment) => {
      const segmentLength = segment.getTotalLength();
      gsap.set(segment, {
        strokeDasharray: segmentLength,
        strokeDashoffset: segmentLength,
      });
    });
  }

  const programTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: programSection,
      start: "top 72%",
      once: true,
    },
  });

  programTimeline.to(programHead, {
    opacity: 1,
    y: 0,
    duration: 0.72,
    ease: "power3.out",
  });

  if (simpleProgramAnimation) {
    programTimeline
      .to(programLineTarget, { "--program-mobile-line-scale": 0.34, duration: 0.48, ease: "power2.inOut" }, "-=0.08")
      .to(programChapters[0], { opacity: 1, y: 0, scale: 1, "--program-node-opacity": 1, "--program-node-scale": 1, duration: 0.56, ease: "power3.out" }, "-=0.08")
      .to(programLineTarget, { "--program-mobile-line-scale": 0.68, duration: 0.52, ease: "power2.inOut" }, "-=0.06")
      .to(programChapters[1], { opacity: 1, y: 0, scale: 1, "--program-node-opacity": 1, "--program-node-scale": 1, duration: 0.56, ease: "power3.out" }, "-=0.08")
      .to(programLineTarget, { "--program-mobile-line-scale": 1, duration: 0.52, ease: "power2.inOut" }, "-=0.06")
      .to(programChapters[2], { opacity: 1, y: 0, scale: 1, "--program-node-opacity": 1, "--program-node-scale": 1, duration: 0.56, ease: "power3.out" }, "-=0.08");
  } else {
    programTimeline
      .to(programNodes[0], { opacity: 1, scale: 1, duration: 0.36, ease: "power3.out" }, "-=0.1")
      .to(programChapters[0], { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 0.68, ease: "power3.out" }, "-=0.12")
      .to(programSegments[0], { strokeDashoffset: 0, duration: 0.62, ease: "power2.inOut" }, "-=0.1")
      .to(programNodes[1], { opacity: 1, scale: 1, duration: 0.34, ease: "power3.out" }, "-=0.08")
      .to(programChapters[1], { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 0.68, ease: "power3.out" }, "-=0.18")
      .to(programSegments[1], { strokeDashoffset: 0, duration: 0.62, ease: "power2.inOut" }, "-=0.1")
      .to(programNodes[2], { opacity: 1, scale: 1, duration: 0.34, ease: "power3.out" }, "-=0.08")
      .to(programChapters[2], { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 0.68, ease: "power3.out" }, "-=0.18");
  }
})();
