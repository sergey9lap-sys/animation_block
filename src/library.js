const blocks = [
  {
    number: "01",
    title: "Созвездие",
    description: "Атмосферная сцена про звезды, линии и смысл, который человек собирает из отдельных точек.",
    href: "./orion/",
  },
  {
    number: "02",
    title: "Чтение экрана",
    description: "Карточки о том, как взгляд читает интерфейс: фокус, контраст, маршрут, повтор и действие.",
    href: "./zapusk-product-map/",
  },
  {
    number: "03",
    title: "Ошибки",
    description: "Частые ошибки интерфейсов: отсутствие иерархии, перегруз и неясное действие.",
    href: "./best-problems/",
  },
  {
    number: "04",
    title: "Линия истории",
    description: "Три главы линейного повествования: контекст, развитие и завершение.",
    href: "./best-program/",
  },
  {
    number: "05",
    title: "Живой экран",
    description: "Блок о том, как ритм, внимание, движение и эмоции оживляют интерфейс.",
    href: "./expert-values/",
  },
  {
    number: "06",
    title: "Карта процесса",
    description: "Интеллект-карта процесса создания интерфейса от исследования до финальной версии.",
    href: "./game-training-map/",
  },
  {
    number: "07",
    title: "Путь клиента",
    description: "Путь пользователя: старт, изучение, взаимодействие и результат.",
    href: "./mk-route-steps/",
  },
  {
    number: "08",
    title: "Досье приёмов",
    description: "Досье дизайн-приёмов в виде раскладки карточек на рабочем столе.",
    href: "./mk-dossiers/",
  },
  {
    number: "09",
    title: "Маршрут внимания",
    description: "Карточки показывают, как внимание движется по экрану от акцента к действию.",
    href: "./expert-problems/",
  },
  {
    number: "10",
    title: "Раскрытие смысла",
    description: "Четыре шага последовательного раскрытия информации с плавной линией.",
    href: "./expert-webinar-plan/",
  },
  {
    number: "11",
    title: "Реакции",
    description: "Фиолетовый блок про микрореакции, статусы и концепт приложения в телефоне.",
    href: "./expert-contact/",
  },
  {
    number: "12",
    title: "Основы экрана",
    description: "Полароидные карточки четырех основ хорошего интерфейса.",
    href: "./best-audience/",
  },
  {
    number: "13",
    title: "История",
    description: "Кинематографичный темный блок о пяти актах истории в интерфейсе.",
    href: "./mk-why-market/",
  },
  {
    number: "14",
    title: "Контраст",
    description: "Сравнение «было / стало» как способ показать изменения через контраст.",
    href: "./mk-after/",
  },
  {
    number: "15",
    title: "Уведомления",
    description: "Темный блок с UI-уведомлениями, декоративными кнопками и телефоном.",
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
