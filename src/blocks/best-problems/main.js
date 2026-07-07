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

  const problemBoard = document.querySelector(".problem-board");
  if (!problemBoard) return;

  const problemNotes = gsap.utils.toArray(".problem-board .problem-card");
  const problemLines = gsap.utils.toArray(".problem-board .board-line");
  const simpleBoardAnimation = window.matchMedia("(max-width: 640px)").matches;

  problemNotes.forEach((note, index) => {
    const finalRotate = simpleBoardAnimation ? 0 : parseFloat(getComputedStyle(note).getPropertyValue("--note-rotate")) || 0;
    note.dataset.finalRotate = finalRotate;
    gsap.set(note, {
      opacity: 0,
      y: simpleBoardAnimation ? 20 : 24,
      scale: simpleBoardAnimation ? 0.96 : 0.9,
      rotate: finalRotate + (index % 2 === 0 ? -3 : 3),
    });
  });

  if (simpleBoardAnimation) {
    gsap.set(problemLines, { opacity: 0 });
    gsap.set(problemBoard, { "--board-mobile-line-scale": 0 });
  } else {
    problemLines.forEach((line) => {
      const lineLength = line.getTotalLength();
      gsap.set(line, {
        strokeDasharray: lineLength,
        strokeDashoffset: lineLength,
        opacity: 0.72,
      });
    });
  }

  const problemTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: problemBoard,
      start: "top 78%",
      once: true,
    },
  });

  problemTimeline.fromTo(
    problemBoard,
    { opacity: 0, y: 40, scale: 0.96 },
    { opacity: 1, y: 0, scale: 1, duration: 0.72, ease: "power3.out" },
  );

  if (simpleBoardAnimation) {
    problemTimeline.to(problemBoard, {
      "--board-mobile-line-scale": 1,
      duration: 0.72,
      ease: "power2.inOut",
    }, "-=0.22");
  }

  problemNotes.forEach((note, index) => {
    problemTimeline.to(note, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: Number(note.dataset.finalRotate),
      duration: simpleBoardAnimation ? 0.46 : 0.58,
      ease: simpleBoardAnimation ? "power3.out" : "back.out(1.16)",
    }, index === 0 ? (simpleBoardAnimation ? "-=0.18" : "-=0.2") : "+=0.04");

    if (!simpleBoardAnimation && problemLines[index]) {
      problemTimeline.to(problemLines[index], {
        strokeDashoffset: 0,
        duration: 0.46,
        ease: "power2.out",
      }, "-=0.08");
    }
  });
})();
