document.querySelectorAll(".note").forEach((note, index) => {
  note.style.animationDelay = `${0.16 + index * 0.14}s`;
});
