document.querySelectorAll(".old span, .new span").forEach((item, index) => {
  item.style.animationDelay = `${0.08 + index * 0.08}s`;
});
