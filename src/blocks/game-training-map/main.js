document.querySelectorAll(".field article").forEach((item, index) => {
  item.style.animationDelay = `${0.12 + index * 0.1}s`;
});
