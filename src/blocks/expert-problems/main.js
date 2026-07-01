document.querySelectorAll(".thought-field article").forEach((item, index) => {
  item.style.animationDelay = `${0.12 + index * 0.08}s`;
});
