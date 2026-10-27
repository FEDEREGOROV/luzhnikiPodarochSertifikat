const PAYMENT_BASE = "https://aqua.luzhniki.ru/tarify/";

const certificates = [
  {
    id: "aqua-day",
    category: "aqua",
    tag: "Аквапарк + Термы",
    title: "Весь день",
    description: "Максимум свободы: аквапарк и термы с 10:00 до 22:00.",
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
    featured: "Популярный",
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
    description: "Компактное знакомство с аквапарком и термами — легко вписать в день.",
    prices: [["Взрослый 14+", "3 190 ₽"], ["Детский 7–13", "1 590 ₽"]],
    accent: "#94a8eb",
    hash: "#!auth&view=order&tariffsid=9254,9252,14895,14893,14894&bundlesid=2222,14895,14893,14894&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "club-family",
    category: "club",
    tag: "Клубная карта",
    title: "Большая семья",
    description: "Подарок для семей, которые хотят сделать отдых у воды хорошей привычкой.",
    price: "65 000 ₽",
    accent: "#ffb693",
    hash: "#!auth&view=order&tariffsid=13523&bundlesid=222222&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "club-12",
    category: "club",
    tag: "Клубная карта",
    title: "Аквалужники 12",
    description: "Серия посещений для регулярного отдыха и восстановления.",
    price: "35 000 ₽",
    accent: "#84cbe8",
    hash: "#!auth&view=order&tariffsid=13522&bundlesid=111111&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "club-6",
    category: "club",
    tag: "Клубная карта",
    title: "Аквалужники 6",
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
    tag: "Бассейн",
    title: "Одно посещение",
    description: "Подарочный сертификат для взрослого на посещение бассейна.",
    price: "1 390 ₽",
    accent: "#7ad1e9",
    hash: "#!auth&view=order&tariffsid=13521&bundlesid=111111&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "pool-8",
    category: "pool",
    tag: "Бассейн",
    title: "8 посещений",
    description: "Абонемент, который помогает превратить плавание в привычку.",
    price: "6 000 ₽",
    accent: "#70d8c2",
    hash: "#!auth&view=order&tariffsid=13525&bundlesid=111111&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  },
  {
    id: "pool-12",
    category: "pool",
    tag: "Бассейн",
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
    tag: "Бассейн",
    title: "365 дней",
    description: "Годовой сертификат для серьезных целей и стабильной заботы о себе.",
    price: "57 900 ₽",
    accent: "#5f77d2",
    hash: "#!auth&view=order&tariffsid=13527&bundlesid=111111&nocalendar=true&cartmaxitems=14&showdisclaimer=true&requiredloyalty=false"
  }
];

const grid = document.querySelector("#certificate-grid");
const experienceCards = [...document.querySelectorAll(".experience-card")];
const experienceChoices = document.querySelector(".experience-choices");
const optionsShell = document.querySelector("#options-shell");
const optionsTitle = document.querySelector("#options-title");
const optionsDescription = document.querySelector("#options-description");
const finderProgress = document.querySelector(".finder-progress");
const changeCategory = document.querySelector(".change-category");
const recommendationButton = document.querySelector("[data-recommend]");
const sticky = document.querySelector(".sticky-purchase");
const stickyTitle = document.querySelector(".sticky-title");
const stickyPrice = document.querySelector(".sticky-price");
const stickyButton = document.querySelector(".sticky-button");
const modal = document.querySelector(".payment-modal");
const modalClose = document.querySelector(".modal-close");
const paymentFrame = document.querySelector(".payment-frame");
const fallbackLink = document.querySelector(".fallback-link");
let selectedCertificate = null;
let activeCategory = null;

const categoryContent = {
  aqua: {
    title: "Сколько времени подарить?",
    description: "Во всех вариантах доступны взрослый и детский сертификаты. Дата посещения при покупке не требуется."
  },
  pool: {
    title: "Как часто хочется плавать?",
    description: "От одного визита до годового абонемента. Все варианты действуют для взрослого посетителя."
  },
  club: {
    title: "Выберите клубную карту",
    description: "Четыре формата большого подарка — на 6 или 12 посещений, для семьи или в премиальном формате."
  }
};

function renderCards(category) {
  const visible = certificates.filter(item => item.category === category);
  grid.innerHTML = visible.map(cardTemplate).join("") +
    `<p class="catalog-note">Стоимость актуальна на 27 октября 2026 года. Перед оплатой итоговая цена подтверждается в официальном виджете.</p>`;
  grid.querySelectorAll(".card-select").forEach(button => {
    button.addEventListener("click", () => selectCertificate(button.dataset.id));
  });
}

function cardTemplate(item) {
  const hours = item.category === "pool" || item.id === "club-premium" ? "07:00 — 22:00" : "10:00 — 22:00";
  const prices = item.prices
    ? `<div class="card-prices">${item.prices.map(([label, price]) => `<div class="price-row"><span>${label}</span><strong>${price}</strong></div>`).join("")}</div>`
    : `<div class="card-prices"><div class="price-row single-price"><span>Стоимость</span><strong>${item.price}</strong></div></div>`;

  return `
    <article class="certificate-card ${selectedCertificate?.id === item.id ? "selected" : ""}" style="--card-accent:${item.accent}" data-id="${item.id}">
      <span class="ticket-pattern" aria-hidden="true"></span>
      <div class="ticket-main">
        <div class="card-top">
          <span class="card-tag">${item.tag}</span>
          ${item.featured ? `<span class="card-badge">${item.featured}</span>` : ""}
        </div>
        <h3>${item.title}</h3>
        <p class="card-hours">Все дни · ${hours}</p>
        <p class="card-description">${item.description}</p>
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

function showCategory(category, shouldScroll = true) {
  activeCategory = category;
  const content = categoryContent[category];
  experienceCards.forEach(card => {
    const active = card.dataset.category === category;
    card.classList.toggle("active", active);
    card.setAttribute("aria-pressed", String(active));
  });
  optionsTitle.textContent = content.title;
  optionsDescription.textContent = content.description;
  experienceChoices.hidden = true;
  optionsShell.hidden = false;
  finderProgress.classList.add("step-two");
  renderCards(category);
  if (shouldScroll) finderProgress.scrollIntoView({ behavior: "smooth", block: "start" });
}

function selectCertificate(id) {
  selectedCertificate = certificates.find(item => item.id === id);
  renderCards(activeCategory);
  stickyTitle.textContent = `${selectedCertificate.tag} — ${selectedCertificate.title}`;
  stickyPrice.textContent = selectedCertificate.price || `от ${selectedCertificate.prices.at(-1)[1]}`;
  sticky.classList.add("visible");
  sticky.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-selection");
}

function resetFinder() {
  activeCategory = null;
  selectedCertificate = null;
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

function openPayment() {
  if (!selectedCertificate) return;
  const url = PAYMENT_BASE + selectedCertificate.hash;
  paymentFrame.src = url;
  fallbackLink.href = url;
  modal.hidden = false;
  finderProgress.classList.add("step-three");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closePayment() {
  modal.hidden = true;
  paymentFrame.src = "about:blank";
  finderProgress.classList.remove("step-three");
  document.body.classList.remove("modal-open");
  stickyButton.focus();
}

experienceCards.forEach(card => card.addEventListener("click", () => showCategory(card.dataset.category)));
changeCategory.addEventListener("click", resetFinder);
recommendationButton.addEventListener("click", () => {
  showCategory("aqua", false);
  selectCertificate(recommendationButton.dataset.recommend);
  finderProgress.scrollIntoView({ behavior: "smooth", block: "start" });
});

stickyButton.addEventListener("click", openPayment);
modalClose.addEventListener("click", closePayment);
modal.addEventListener("click", event => { if (event.target === modal) closePayment(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !modal.hidden) closePayment(); });

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

