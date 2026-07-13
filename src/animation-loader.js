(function () {
  const currentScript = document.currentScript;
  const animationSrc = currentScript && currentScript.dataset.animationSrc;

  if (!animationSrc) return;

  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  const loadGsap = async () => {
    if (!window.gsap) {
      try {
        await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js");
      } catch (_error) {
        await loadScript("https://unpkg.com/gsap@3.12.5/dist/gsap.min.js");
      }
    }

    if (!window.ScrollTrigger) {
      try {
        await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js");
      } catch (_error) {
        await loadScript("https://unpkg.com/gsap@3.12.5/dist/ScrollTrigger.min.js");
      }
    }
  };

  loadGsap()
    .then(() => loadScript(animationSrc))
    .catch((error) => {
      document.documentElement.classList.add("animations-unavailable");
      console.warn("Animation libraries could not be loaded; static content is shown.", error);
    });
})();
