document.querySelectorAll(".map article").forEach((item, index) => {
  item.style.animationDelay = `${0.22 + index * 0.18}s`;
});
