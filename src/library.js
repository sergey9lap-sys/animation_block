const blocks = [
  {
    number: "01",
    title: "Orion",
    description: "Атмосферная сцена про звезды, линии и смысл, который человек собирает из отдельных точек.",
    href: "./orion/",
  },
  {
    number: "02",
    title: "Interface reading / card deck",
    description: "Карточки о том, как взгляд читает интерфейс: фокус, контраст, маршрут, повтор и действие.",
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
  {
    number: "09",
    title: "Expert 2026 / problems",
    description: "Блок «Узнали себя?» с карточками тревог, соединенными линиями.",
    href: "./expert-problems/",
  },
  {
    number: "10",
    title: "Expert 2026 / webinar plan",
    description: "Маршрут вебинара из четырех шагов с плавной линией.",
    href: "./expert-webinar-plan/",
  },
  {
    number: "11",
    title: "Expert 2026 / contact",
    description: "Фиолетовый блок службы заботы с телефоном и мессенджерами.",
    href: "./expert-contact/",
  },
  {
    number: "12",
    title: "Best / audience",
    description: "Полароидные карточки аудиторий вебинара.",
    href: "./best-audience/",
  },
  {
    number: "13",
    title: "MK Product / why market",
    description: "Кинематографичный темный блок про рынок премиальных продуктов.",
    href: "./mk-why-market/",
  },
  {
    number: "14",
    title: "MK Product / after",
    description: "Сравнение «было / стало» после мастер-класса.",
    href: "./mk-after/",
  },
  {
    number: "15",
    title: "MK Product / contact",
    description: "Темный контактный блок с фоновыми вопросами и телефоном.",
    href: "./mk-contact/",
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
