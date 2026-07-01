document.querySelectorAll(".track article").forEach((item, index) => {
  item.style.animationDelay = `${0.18 + index * 0.18}s`;
});
