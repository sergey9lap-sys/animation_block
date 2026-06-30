const blocks = [
  {
    number: "01",
    title: "Orion",
    description: "Атмосферная сцена про звезды, линии и смысл, который человек собирает из отдельных точек.",
    href: "./orion/",
  },
];

const blockGrid = document.querySelector("[data-block-grid]");

if (blockGrid) {
  blockGrid.innerHTML = blocks
    .map((block) => (
      `<a class="block-card" href="${block.href}">
        <span class="block-card__tag">${block.number}</span>
        <strong>${block.title}</strong>
        <span>${block.description}</span>
      </a>`
    ))
    .join("");
}
