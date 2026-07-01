document.querySelectorAll(".route-map article").forEach((item, index) => {
  item.style.animationDelay = `${0.16 + index * 0.12}s`;
});
