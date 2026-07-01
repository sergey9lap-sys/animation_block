const blocks = [
  {
    number: "01",
    title: "Orion",
    description: "Атмосферная сцена про звезды, линии и смысл, который человек собирает из отдельных точек.",
    href: "./orion/",
  },
  {
    number: "02",
    title: "Zapusk / product map",
    description: "Карточки типов экспертов и подходящих продуктов из проекта zapusk.",
    href: "./zapusk-product-map/",
  },
  {
    number: "03",
    title: "Best / situations",
    description: "Блок с карточками ситуаций и линиями из проекта besttrening.",
    href: "./best-problems/",
  },
  {
    number: "04",
    title: "Best / program",
    description: "Три главы эфира на темном фиолетовом фоне с горизонтальной линией.",
    href: "./best-program/",
  },
  {
    number: "05",
    title: "Expert 2026 / values",
    description: "Смена ценности: от заменяемых задач к мышлению, стратегии и методологии.",
    href: "./expert-values/",
  },
  {
    number: "06",
    title: "Game Design / training map",
    description: "Семь точек игровой воронки на карте с соединяющими линиями.",
    href: "./game-training-map/",
  },
  {
    number: "07",
    title: "MK Product / route steps",
    description: "Маршрут из трех этапов: эфир, внедрение и живые разборы.",
    href: "./mk-route-steps/",
  },
  {
    number: "08",
    title: "MK Product / dossiers",
    description: "Досье участников мастер-класса в виде раскладки карточек.",
    href: "./mk-dossiers/",
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
