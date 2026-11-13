const MOIPASS_SCRIPT_SRC = "https://sale.moipass.ru/external.script.js";
const MOIPASS_BASE_PARAMS = {
  id: "854",
  forcetab: "service",
  onlytab: "service",
  servicecalendar: "block",
  busycalendar: true,
  type: "modal",
  hidenext: true
};
const MOIPASS_PRODUCT_GROUPS = {
  "aqua-2h": {
    name: "Аквапарк 2 часа",
    tariffsid: [9252, 9254, 9359, 9357, 14905, 14906, 14907],
    bundlesid: [111],
    nocalendar: true
  },
  "aqua-3h": {
    name: "Аквапарк 3 часа",
    tariffsid: [9251, 9253, 9358, 9356, 14908, 14909, 14910],
    bundlesid: [111],
    nocalendar: true
  },
  "aqua-4h": {
    name: "Аквапарк 4 часа",
    tariffsid: [958, 1439, 8161, 9352, 9354, 14911, 14912, 14913],
    bundlesid: [111],
    nocalendar: true
  },
  "aqua-day": {
    name: "Аквапарк весь день",
    tariffsid: [3694, 1440, 8162, 9353, 9355, 14914, 14915, 14916],
    bundlesid: [111],
    nocalendar: true
  },
  "spa-thailand": {
    name: "Традиции Таиланда",
    tariffsid: [111111],
    bundlesid: [2503],
    nocalendar: true
  },
  "spa-delight": {
    name: "Тайское наслаждение",
    tariffsid: [111111],
    bundlesid: [2504],
    nocalendar: true
  },
  "spa-dreams": {
    name: "Райские грёзы",
    tariffsid: [111111],
    bundlesid: [2505],
    nocalendar: true
  },
  "spa-sport-60": {
    name: "Спортивный массаж 60 минут",
    tariffsid: [111111],
    bundlesid: [2506],
    nocalendar: true
  },
  "spa-sport-90": {
    name: "Спортивный массаж 90 минут",
    tariffsid: [111111],
    bundlesid: [2507],
    nocalendar: true
  },
  "spa-date": {
    name: "Идеальное свидание",
    tariffsid: [111111],
    bundlesid: [2508],
    nocalendar: true
  },
  "pool-one": {
    name: "Бассейн, взрослый",
    tariffsid: [13814],
    bundlesid: [111111],
    nocalendar: true
  },
  "pool-8": {
    name: "Абонемент на 8 посещений",
    tariffsid: [13818],
    bundlesid: [111111],
    nocalendar: true
  },
  "pool-12": {
    name: "Абонемент на 12 посещений",
    tariffsid: [13819],
    bundlesid: [111111],
    nocalendar: true
  },
  "pool-365": {
    name: "Абонемент на 365 дней",
    tariffsid: [13820],
    bundlesid: [111111],
    nocalendar: true
  },
  "club-12": {
    name: "Аквалужники 12",
    tariffsid: [13815],
    bundlesid: [111111],
    nocalendar: true
  },
  "club-family": {
    name: "Аквалужники. Семья",
    tariffsid: [13816],
    bundlesid: [111111],
    nocalendar: true
  },
  "club-premium": {
    name: "Аквалужники Премиум",
    tariffsid: [13817],
    bundlesid: [111111],
    nocalendar: true
  },
  "club-6": {
    name: "Аквалужники 6",
    tariffsid: [14962],
    bundlesid: [111111],
    nocalendar: true
  }
};
let moiPassLoadPromise = null;

window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, details = {}) {
  window.dataLayer.push({ event: eventName, ...details });
}

const certificates = [
  {
    id: "aqua-day",
    category: "aqua",
    tag: "Аквапарк + Термы",
    title: "Весь день",
    description: "Максимум свободы: Аквапарк и Термы с 10:00 до 22:00.",
    prices: [["Взрослый 14+", "4 890 ₽"], ["Детский 7–13", "2 590 ₽"]],
    featured: "Самый полный",
    accent: "#67d8da",
    hash: "#!auth&view=order&tariffsid=3694,8162,14902,14903,14904&bundlesid=2222&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "aqua-4h",
    category: "aqua",
    tag: "Аквапарк + Термы",
    title: "4 часа",
    description: "Достаточно времени для горок, бассейнов и спокойного отдыха в термах.",
    prices: [["Взрослый 14+", "4 290 ₽"], ["Детский 7–13", "2 190 ₽"]],
    featured: "Для первого знакомства",
    accent: "#d9ed60",
    hash: "#!auth&view=order&tariffsid=958,8161,14899,14900,14901&bundlesid=2222&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "aqua-3h",
    category: "aqua",
    tag: "Аквапарк + Термы",
    title: "3 часа",
    description: "Сбалансированный формат для яркого отдыха без планов на весь день.",
    prices: [["Взрослый 14+", "3 690 ₽"], ["Детский 7–13", "1 990 ₽"]],
    accent: "#8ad8bd",
    hash: "#!auth&view=order&tariffsid=9253,9251,14897,14898,14896&bundlesid=2222&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "aqua-2h",
    category: "aqua",
    tag: "Аквапарк + Термы",
    title: "2 часа",
    description: "Компактное знакомство с Аквапарком и термами – легко вписать в день.",
    prices: [["Взрослый 14+", "3 190 ₽"], ["Детский 7–13", "1 590 ₽"]],
    accent: "#94a8eb",
    hash: "#!auth&view=order&tariffsid=9254,9252,14895,14893,14894&bundlesid=2222,14895,14893,14894&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "club-family",
    category: "club",
    tag: "Клубная карта",
    title: "Аквалужники. Семья",
    description: "Подарок для семей, которые хотят сделать отдых у воды хорошей привычкой.",
    price: "65 000 ₽",
    accent: "#ffb693",
    hash: "#!auth&view=order&tariffsid=13523&bundlesid=222222&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "club-12",
    category: "club",
    tag: "Клубная карта",
    title: "Аквалужники 12",
    description: "Серия посещений для регулярного отдыха и восстановления.",
    price: "35 000 ₽",
    accent: "#84cbe8",
    hash: "#!auth&view=order&tariffsid=13522&bundlesid=111111&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "club-6",
    category: "club",
    tag: "Клубная карта",
    title: "Аквалужники 6",
    description: "Шесть поводов переключиться, перезагрузиться и побыть в своей стихии.",
    price: "20 000 ₽",
    featured: "Универсальный",
    accent: "#d9ed60",
    hash: "#!auth&view=order&tariffsid=14961&bundlesid=14961&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "club-premium",
    category: "club",
    tag: "Клубная карта",
    title: "Аквалужники Премиум",
    description: "Премиальный сценарий для тех, кто выбирает максимум возможностей.",
    price: "70 000 ₽",
    accent: "#6574c7",
    hash: "#!auth&view=order&tariffsid=13524&bundlesid=11111&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "pool-one",
    category: "pool",
    tag: "Спортивный бассейн",
    title: "Одно посещение",
    description: "Подарочный сертификат для взрослого на посещение бассейна.",
    price: "1 390 ₽",
    accent: "#7ad1e9",
    hash: "#!auth&view=order&tariffsid=13521&bundlesid=111111&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "pool-8",
    category: "pool",
    tag: "Спортивный бассейн",
    title: "8 посещений",
    description: "Абонемент, который помогает превратить плавание в привычку.",
    price: "6 000 ₽",
    accent: "#70d8c2",
    hash: "#!auth&view=order&tariffsid=13525&bundlesid=111111&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "pool-12",
    category: "pool",
    tag: "Спортивный бассейн",
    title: "12 посещений",
    description: "Больше тренировок, больше времени на себя и заметный ритм занятий.",
    price: "8 600 ₽",
    featured: "Для спорта",
    accent: "#d9ed60",
    hash: "#!auth&view=order&tariffsid=13526&bundlesid=11111&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "pool-365",
    category: "pool",
    tag: "Спортивный бассейн",
    title: "365 дней",
    description: "Годовой сертификат для серьёзных целей и стабильной заботы о себе.",
    price: "57 900 ₽",
    accent: "#5f77d2",
    hash: "#!auth&view=order&tariffsid=13527&bundlesid=111111&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "spa-thailand",
    category: "spa",
    tag: "Массаж + Бани",
    title: "Традиции Таиланда",
    duration: "60 + 60 минут",
    description: "Арома-ойл-массаж снимает напряжение, а час в банях помогает полностью переключиться.",
    price: "4 900 ₽",
    featured: "Мягкий старт",
    accent: "#4764ad",
    hash: "#!auth&view=order&tariffsid=111111&bundlesid=2497&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "spa-delight",
    category: "spa",
    tag: "Массаж + Бани",
    title: "Тайское наслаждение",
    duration: "90 + 60 минут",
    description: "Длительный арома-ойл-массаж с тёплым маслом и час спокойного отдыха в банях.",
    price: "6 300 ₽",
    accent: "#4764ad",
    hash: "#!auth&view=order&tariffsid=111111&bundlesid=2498&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "spa-dreams",
    category: "spa",
    tag: "SPA + Бани",
    title: "Райские грёзы",
    duration: "120 + 60 минут",
    description: "SPA-программа на выбор, уход за телом и целый час в банном комплексе.",
    price: "8 900 ₽",
    featured: "SPA-ритуал",
    accent: "#4764ad",
    hash: "#!auth&view=order&tariffsid=111111&bundlesid=2499&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "spa-sport-60",
    category: "spa",
    tag: "Спортивный массаж",
    title: "Спортивный · 60 минут",
    duration: "60 + 60 минут",
    description: "Глубокая проработка мышц с тёплым маслом и восстановление в банях.",
    price: "5 200 ₽",
    accent: "#4764ad",
    hash: "#!auth&view=order&tariffsid=111111&bundlesid=2500&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "spa-sport-90",
    category: "spa",
    tag: "Спортивный массаж",
    title: "Спортивный · 90 минут",
    duration: "90 + 60 минут",
    description: "Более глубокая работа с мышцами и полноценный банный ритуал после массажа.",
    price: "6 600 ₽",
    accent: "#4764ad",
    hash: "#!auth&view=order&tariffsid=111111&bundlesid=2501&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "spa-date",
    category: "spa",
    tag: "SPA для двоих",
    title: "Идеальное свидание",
    duration: "90 + 60 минут",
    description: "Романтический SPA-ритуал на двоих: массаж, спокойная атмосфера и отдых в банях.",
    price: "15 600 ₽",
    featured: "Для двоих",
    accent: "#4764ad",
    hash: "#!auth&view=order&tariffsid=111111&bundlesid=2502&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  }
];

const grid = document.querySelector("#certificate-grid");
const experienceCards = [...document.querySelectorAll(".experience-card")];
const experienceChoices = document.querySelector(".experience-choices");
const optionsShell = document.querySelector("#options-shell");
const optionsTitle = document.querySelector("#options-title");
const optionsDescription = document.querySelector("#options-description");
const categoryTabs = [...document.querySelectorAll("[data-category-switch]")];
const finderProgress = document.querySelector(".finder-progress");
const changeCategory = document.querySelector(".change-category");
const recommendationButton = document.querySelector("[data-recommend]");
const sticky = document.querySelector(".sticky-purchase");
const stickyTitle = document.querySelector(".sticky-title");
const stickyPrice = document.querySelector(".sticky-price");
const stickyButton = document.querySelector(".sticky-button");
let selectedCertificate = null;
let activeCategory = null;
let expandedCertificateId = null;

const categoryContent = {
  aqua: {
    title: "Сколько времени подарить?",
    description: "Во всех вариантах доступны взрослый и детский сертификаты. Дата посещения при покупке не требуется."
  },
  pool: {
    title: "Как часто хочется плавать?",
    description: "От одного визита до годового абонемента. Возрастные условия зависят от тарифа."
  },
  club: {
    title: "Выберите клубную карту",
    description: "Четыре формата большого подарка – на 6 или 12 посещений, для семьи или в премиальном формате."
  },
  spa: {
    title: "Какой ритуал подарить?",
    description: "Шесть программ для взрослых 18+. Сертификат действует 90 дней, перед посещением нужна предварительная запись."
  }
};

const certificateConditions = {
  "spa-date": [
    "Для двух взрослых посетителей 18+",
    "90 + 60 минут – SPA-ритуал и отдых в банях",
    "Сертификат действует 90 дней с момента покупки",
    "Перед посещением нужна запись: +7 (915) 074-94-14"
  ],
  "pool-one": [
    "Для одного посетителя 18+",
    "Одно посещение спортивного бассейна",
    "Электронный билет можно показать с телефона",
    "Сертификат можно активировать в течение 180 дней со дня покупки"
  ],
  "pool-8": [
    "Для одного посетителя 16+",
    "8 посещений спортивного бассейна: за один день доступно одно посещение",
    "Активируйте сертификат в Центре продаж в течение 180 дней со дня покупки",
    "После активации абонемент действует 30 календарных дней"
  ],
  "pool-12": [
    "Для одного посетителя 16+",
    "12 посещений спортивного бассейна: за один день доступно одно посещение",
    "Активируйте сертификат в Центре продаж в течение 180 дней со дня покупки",
    "После активации абонемент действует 30 календарных дней"
  ],
  "pool-365": [
    "Для одного посетителя 16+",
    "Абонемент на 365 дней: за один день доступно одно посещение",
    "Активируйте сертификат в Центре продаж в течение 180 дней со дня покупки",
    "После активации абонемент действует 365 календарных дней"
  ],
  "club-6": [
    "Карта закрепляется за одним посетителем 16+",
    "6 посещений Аквапарка + Терм на весь день",
    "Включены раздевалка, шкафчик и полотенце",
    "Активация в течение 180 дней в Центре продаж, карта действует 365 дней"
  ],
  "club-12": [
    "Карта закрепляется за одним посетителем 16+",
    "12 посещений Аквапарка + Терм на весь день",
    "Включены раздевалка, шкафчик и полотенце",
    "Активация в течение 180 дней в Центре продаж, карта действует 365 дней"
  ],
  "club-family": [
    "Карта закрепляется за двумя взрослыми 18+ и двумя детьми до 14 лет",
    "12 посещений Аквапарка + Терм на весь день",
    "Включены раздевалка, шкафчик и полотенце",
    "Активация в течение 180 дней в Центре продаж, карта действует 365 дней"
  ],
  "club-premium": [
    "Карта закрепляется за одним взрослым 18+ и одним ребёнком до 14 лет",
    "Аквапарк + Термы на весь день, доступ в бассейны 25 и 50 м на 60 минут",
    "Включены раздевалка, шкафчик и полотенце",
    "Сертификат можно активировать в течение 180 дней со дня покупки в Центре продаж"
  ]
};

function conditionsFor(item) {
  if (certificateConditions[item.id]) return certificateConditions[item.id];
  if (item.category === "aqua") {
    return [
      "Для взрослого 14+ или ребёнка 7–13 лет",
      `Аквапарк + Термы – ${item.title.toLowerCase()}`,
      "Дата посещения при покупке не требуется",
      "Сертификат можно активировать в течение 180 дней со дня покупки"
    ];
  }
  if (item.category === "spa") {
    return [
      "Для взрослого посетителя 18+",
      `${item.duration} – массаж или SPA-программа и отдых в банях`,
      "Сертификат действует 90 дней с момента покупки",
      "Перед посещением нужна запись: +7 (915) 074-94-14"
    ];
  }
  return ["Точные условия использования будут показаны при официальном оформлении"];
}

function renderCards(category) {
  const visible = certificates.filter(item => item.category === category);
  grid.dataset.category = category;
  grid.innerHTML = visible.map(cardTemplate).join("");
  grid.querySelectorAll(".mobile-card-summary").forEach(button => {
    button.addEventListener("click", () => toggleCertificateDetails(button.dataset.expand));
  });
  grid.querySelectorAll(".card-select").forEach(button => {
    button.addEventListener("click", () => selectCertificate(button.dataset.id));
  });
}

function cardTemplate(item) {
  const hours = item.category === "pool" ? "07:00–22:00" : "10:00–22:00";
  const schedule = item.duration ? `Все дни ${hours} · ${item.duration}` : `Все дни ${hours}`;
  const summaryPrice = item.price || `${item.prices[0][1]}<br>${item.prices[1][1]}`;
  const summaryPriceLabel = item.prices ? "взрослый / детский" : "стоимость";
  const expanded = expandedCertificateId === item.id || selectedCertificate?.id === item.id;
  const conditions = conditionsFor(item);
  const poolNote = item.category === "pool"
    ? `<p class="card-terms-note">Крытые бассейны 25 и 50 м, термальный комплекс, раздевалка, душ, шкафчик и полотенце. Сеанс в бассейне – 120 минут.</p>`
    : "";
  const prices = item.prices
    ? `<div class="card-prices">${item.prices.map(([label, price]) => `<div class="price-row"><span>${label}</span><strong>${price}</strong></div>`).join("")}</div>`
    : `<div class="card-prices"><div class="price-row single-price"><span>Стоимость</span><strong>${item.price}</strong></div></div>`;

  return `
    <article class="certificate-card ${selectedCertificate?.id === item.id ? "selected" : ""} ${expanded ? "expanded" : ""}" style="--card-accent:${item.accent}" data-id="${item.id}">
      <span class="ticket-pattern" aria-hidden="true"></span>
      <button class="mobile-card-summary" type="button" data-expand="${item.id}" aria-expanded="${expanded}" aria-controls="details-${item.id}">
        <span class="mobile-summary-copy">
          <small>${item.tag}</small>
          <strong>${item.title}</strong>
          <i>${item.duration || hours}</i>
        </span>
        <span class="mobile-summary-price">
          <small>${summaryPriceLabel}</small>
          <strong>${summaryPrice}</strong>
          <i aria-hidden="true"></i>
        </span>
      </button>
      <div class="ticket-main" id="details-${item.id}">
        <div class="card-top">
          <span class="card-tag">${item.tag}</span>
          ${item.featured ? `<span class="card-badge">${item.featured}</span>` : ""}
        </div>
        <h3>${item.title}</h3>
        <p class="card-hours">${schedule}</p>
        <p class="card-description">${item.description}</p>
        <details class="card-terms">
          <summary>Что входит и как использовать <span aria-hidden="true">+</span></summary>
          <div class="card-terms-list">${conditions.map(condition => `<p>${condition}</p>`).join("")}</div>
          ${poolNote}
        </details>
        ${prices}
      </div>
      <div class="ticket-stub">
        <span class="ticket-perforation" aria-hidden="true"></span>
        <button class="button ${selectedCertificate?.id === item.id ? "button-dark" : ""} card-select" type="button" data-id="${item.id}" aria-pressed="${selectedCertificate?.id === item.id}">
          ${selectedCertificate?.id === item.id ? "Выбрано" : "Выбрать"}<span>${selectedCertificate?.id === item.id ? "✓" : "→"}</span>
        </button>
      </div>
    </article>`;
}

function toggleCertificateDetails(id) {
  expandedCertificateId = expandedCertificateId === id ? null : id;
  renderCards(activeCategory);
}

function showCategory(category, shouldScroll = true) {
  if (activeCategory && activeCategory !== category && selectedCertificate?.category !== category) {
    selectedCertificate = null;
    sticky.classList.remove("visible");
    sticky.setAttribute("aria-hidden", "true");
    document.body.classList.remove("has-selection");
  }
  activeCategory = category;
  expandedCertificateId = selectedCertificate?.category === category ? selectedCertificate.id : null;
  const content = categoryContent[category];
  experienceCards.forEach(card => {
    const active = card.dataset.category === category;
    card.classList.toggle("active", active);
    card.setAttribute("aria-pressed", String(active));
  });
  categoryTabs.forEach(tab => {
    const active = tab.dataset.categorySwitch === category;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  optionsTitle.textContent = content.title;
  optionsDescription.textContent = content.description;
  experienceChoices.hidden = true;
  optionsShell.hidden = false;
  finderProgress.classList.add("step-two");
  renderCards(category);
  trackEvent("certificate_category_view", { certificate_category: category });
  if (shouldScroll) finderProgress.scrollIntoView({ behavior: "smooth", block: "start" });
}

function selectCertificate(id) {
  selectedCertificate = certificates.find(item => item.id === id);
  expandedCertificateId = id;
  renderCards(activeCategory);
  stickyTitle.textContent = `${selectedCertificate.tag} – ${selectedCertificate.title}`;
  stickyPrice.textContent = selectedCertificate.price || selectedCertificate.prices.map(([label, price]) => `${label}: ${price}`).join(" · ");
  sticky.classList.add("visible");
  sticky.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-selection");
  trackEvent("certificate_select", {
    certificate_id: selectedCertificate.id,
    certificate_category: selectedCertificate.category,
    certificate_name: selectedCertificate.title,
    certificate_price: selectedCertificate.price || selectedCertificate.prices.map(([, price]) => price).join(" / ")
  });
}

function resetFinder() {
  activeCategory = null;
  selectedCertificate = null;
  expandedCertificateId = null;
  optionsShell.hidden = true;
  experienceChoices.hidden = false;
  finderProgress.classList.remove("step-two", "step-three");
  experienceCards.forEach(card => {
    card.classList.remove("active");
    card.setAttribute("aria-pressed", "false");
  });
  sticky.classList.remove("visible");
  sticky.setAttribute("aria-hidden", "true");
  document.body.classList.remove("has-selection");
  experienceChoices.scrollIntoView({ behavior: "smooth", block: "center" });
}

function handleMoiPassChange(data) {
  if (!data || typeof data !== "object") return data;

  trackEvent("moipass_widget_status", {
    widget_status: data.status || "unknown",
    order_id: data.data?.order_id || null,
    certificate_id: selectedCertificate?.id || null
  });

  if (["cancel", "cancel_and_close", "wp-close-widget"].includes(data.status)) {
    finderProgress.classList.remove("step-three");
  }

  return data;
}

function loadMoiPassWidget() {
  if (typeof window.WPInit === "function" && typeof window.WPOpenModal === "function") {
    window.WPChange = handleMoiPassChange;
    return Promise.resolve();
  }

  if (moiPassLoadPromise) return moiPassLoadPromise;

  moiPassLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const timeout = window.setTimeout(() => {
      script.remove();
      moiPassLoadPromise = null;
      reject(new Error("MoiPass widget load timeout"));
    }, 8000);

    script.src = MOIPASS_SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      window.clearTimeout(timeout);
      window.WPChange = handleMoiPassChange;
      resolve();
    };
    script.onerror = () => {
      window.clearTimeout(timeout);
      script.remove();
      moiPassLoadPromise = null;
      reject(new Error("MoiPass widget load error"));
    };
    document.head.appendChild(script);
  });

  return moiPassLoadPromise;
}

function getMoiPassProductGroup(certificate) {
  return MOIPASS_PRODUCT_GROUPS[certificate.id] || null;
}

function showCheckoutNotice(message) {
  stickyButton.disabled = true;
  stickyButton.textContent = message;
  window.setTimeout(() => {
    stickyButton.disabled = false;
    stickyButton.innerHTML = "Продолжить оформление <span>→</span>";
  }, 3500);
}

async function openPayment() {
  if (!selectedCertificate) return;
  const certificate = selectedCertificate;
  const productGroup = getMoiPassProductGroup(certificate);

  if (!productGroup) {
    trackEvent("certificate_checkout_unavailable", {
      certificate_id: certificate.id,
      certificate_category: certificate.category
    });
    showCheckoutNotice("Для этого варианта виджет пока не подключён");
    return;
  }

  const initialButtonContent = stickyButton.innerHTML;
  stickyButton.disabled = true;
  stickyButton.textContent = "Загружаем виджет…";

  try {
    await loadMoiPassWidget();
    window.WPInit({
      ...MOIPASS_BASE_PARAMS,
      tariffsid: [...productGroup.tariffsid],
      bundlesid: [...productGroup.bundlesid],
      nocalendar: productGroup.nocalendar
    });
    window.WPOpenModal();
    finderProgress.classList.add("step-three");
    trackEvent("certificate_checkout_open", {
      certificate_id: certificate.id,
      certificate_category: certificate.category,
      certificate_name: certificate.title,
      widget_product_group: productGroup.name,
      checkout_provider: "moipass"
    });
  } catch (error) {
    trackEvent("moipass_widget_error", {
      certificate_id: certificate.id,
      error_message: error.message
    });
    showCheckoutNotice("Виджет временно недоступен");
    return;
  }

  if (stickyButton.disabled) {
    stickyButton.disabled = false;
    stickyButton.innerHTML = initialButtonContent;
  }
}

experienceCards.forEach(card => card.addEventListener("click", () => showCategory(card.dataset.category)));
categoryTabs.forEach(tab => tab.addEventListener("click", () => showCategory(tab.dataset.categorySwitch, false)));
changeCategory.addEventListener("click", resetFinder);
recommendationButton.addEventListener("click", () => {
  showCategory("aqua", false);
  selectCertificate(recommendationButton.dataset.recommend);
  finderProgress.scrollIntoView({ behavior: "smooth", block: "start" });
});

stickyButton.addEventListener("click", openPayment);

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.setAttribute("aria-label", open ? "Открыть меню" : "Закрыть меню");
  mobileNav.hidden = open;
});
mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Открыть меню");
  mobileNav.hidden = true;
}));

