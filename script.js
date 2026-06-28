const translations = {
    en: {
        "nav-about": "About", "nav-menu": "Menu", "nav-book": "Book a Table",
        "hero-tagline": "Tradition Meets Modernity",
        "hero-title": "The Art of Japanese <br>Culinary Perfection",
        "hero-subtitle": "Experience authentic flavors, meticulous preparation, and seasonal ingredients crafted into breathtaking edible art.",
        "btn-menu": "Explore Menu", "btn-reserve": "Reservation",
        "about-title": "Our Philosophy",
        "about-p1": "At FRION, we follow the philosophy of 'Shun' — using ingredients at the absolute peak of their flavor and freshness. Every plate is balanced to honor nature.",
        "about-p2": "Our masters spend years perfecting the balance of texture, temperature, and visual harmony, bringing Kyoto's premium dining culture straight to your table.",
        "menu-title": "Chef's Signature Menu",
        "dish-click-notice": "Click to view ingredients & details",
        "dish-1-title": "Premium Omakase Set", "dish-2-title": "Tonkotsu Ramen", "dish-3-title": "Traditional Yaki Udon",
        "dish-4-title": "A5 Wagyu Steak", "dish-5-title": "Pan-Seared Gyoza", "dish-6-title": "Kyoto Matcha Dessert",
        "book-title": "Reserve Your Table",
        "book-subtitle": "To prevent spam, we require a refundable deposit of ₴200 per person, which will be deducted from your final restaurant bill.",
        "total-amount-label": "Amount:", "label-name": "Full Name", "label-phone": "Phone Number",
        "label-guests": "Guests", "label-date": "Date & Time", "btn-pay-submit": "Proceed to Secure Payment",
        "modal-pay-text": "Please enter dummy card details to complete anti-spam secure verification deposit.",
        "amount-label": "Amount:", "btn-pay-now": "Pay & Confirm Booking", "btn-cancel": "Cancel",
        "kiosk-title": "Your Menu Selection", "kiosk-total-lbl": "Total Estimate:", "kiosk-book-btn": "Book Table with this Menu",

        "food-order-title": "Order Food & Pre-Book Table",
        "food-order-subtitle": "You have pre-selected premium dishes! Anti-spam security deposit is waived. You only pay for your food selection now."
    },
    ua: {
        "nav-about": "Про нас", "nav-menu": "Меню", "nav-book": "Замовити столик",
        "hero-tagline": "Традиції зустрічають сучасність",
        "hero-title": "Мистецтво японської <br>кулінарної досконалості",
        "hero-subtitle": "Відкрийте для себе автентичні смаки, ретельну підготовку та сезонні інгредієнти, перетворені на захоплююче їстівне мистецтво.",
        "btn-menu": "Дослідити меню", "btn-reserve": "Бронювання",
        "about-title": "Наша філософія",
        "about-p1": "У FRION ми дотримуємося філософії 'Шун' — використання інгредієнтів на абсолютному піку їхнього смаку та свіжості. Кожна тарілка збалансована, щоб шанувати природу.",
        "about-p2": "Наші майстри роками вдосконалюють баланс текстури, температури та візуальної гармонії, переносячи преміальну культуру харчування Кіото прямо до вашого столу.",
        "menu-title": "Фірмове меню шефа",
        "dish-click-notice": "Натисніть для перегляду складу та деталей",
        "dish-1-title": "Преміум Омакасе Сет", "dish-2-title": "Тонкоцу Рамен", "dish-3-title": "Традиційний Які Удон",
        "dish-4-title": "Стейк Вагю А5", "dish-5-title": "Смажені Гьодза", "dish-6-title": "Десерт Кіото Матча",
        "book-title": "Зарезервувати столик",
        "book-subtitle": "Для захисту від спаму ми впровадили обов'язковий гарантійний депозит ₴200 з особи, який повністю вираховується з вашого фінального чека в ресторані.",
        "total-amount-label": "Сума:", "label-name": "Повне ім'я", "label-phone": "Номер телефону",
        "label-guests": "Кількість гостей", "label-date": "Дата та час", "btn-pay-submit": "Перейти до безпечної оплати",
        "modal-pay-text": "Будь ласка, введіть будь-які тестові дані картки для підтвердження анти-спам верифікації броні.",
        "amount-label": "До оплати:", "btn-pay-now": "Оплатити та підтвердити", "btn-cancel": "Скасувати",
        "kiosk-title": "Ваш вибір страв", "kiosk-total-lbl": "Попередній чек:", "kiosk-book-btn": "Бронювати з цим меню",

        "food-order-title": "Замовлення їжі та бронювання",
        "food-order-subtitle": "Ви обрали фірмові страви ресторану! Гарантійну заставу за стіл повністю скасовано. Ви оплачуєте лише суму вашого замовлення."
    }
};

const dishDetails = {
    1: { en: "Hand-pressed by our Head Master...", ua: "Формується вручну нашим шеф-майстром...", p: "42g", f: "18g", c: "55g", cal: "540" },
    2: { en: "A rich, creamy 24-hour pork bone broth...", ua: "Наваристий кремовий бульйон на свинячих кістках...", p: "28g", f: "24g", c: "65g", cal: "720" },
    3: { en: "Wok-tossed thick sanuki wheat noodles...", ua: "Обсмажена у воці товста пшенична локшина...", p: "14g", f: "8g", c: "78g", cal: "460" },
    4: { en: "The ultimate luxury. Authentic A5 grade Wagyu...", ua: "Абсолютна розкіш. Мармурова яловичина Вагю...", p: "36g", f: "48g", c: "2g", cal: "610" },
    5: { en: "Traditional Japanese dumplings...", ua: "Традиційні японські пельмені...", p: "16g", f: "12g", c: "34g", cal: "310" },
    6: { en: "A modern Kyoto confectionery masterpiece...", ua: "Сучасний кулінарний шедевр Кіото...", p: "6g", f: "14g", c: "42g", cal: "330" }
};

let currentLang = 'en';
let cart = [];
const depositPricePerPerson = 200;

function switchLang(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.target) window.event.target.classList.add('active');
    updateDeposit();
    renderCart();
}

/* ДИНАМІЧНИЙ ОБРАХУНОК ЦІНИ ТА ЛАКОНІЧНІ ТЕКСТИ БЛОКУ СУМИ */
function updateDeposit() {
    const guestsCount = document.getElementById('guests').value;
    const titleEl = document.getElementById('bookingDynamicTitle');
    const subtitleEl = document.getElementById('bookingDynamicSubtitle');
    const labelEl = document.getElementById('priceLabelType');
    const amountEl = document.getElementById('deposit-amount');
    const buttonEl = document.getElementById('submitFormButton');

    let foodTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Спільний ключ для простої лаконічної назви "Сума / Amount"
    labelEl.innerHTML = translations[currentLang]["total-amount-label"];

    if (foodTotal > 0) {
        titleEl.innerHTML = translations[currentLang]["food-order-title"];
        subtitleEl.innerHTML = translations[currentLang]["food-order-subtitle"];
        amountEl.innerText = `${foodTotal} ₴`;
        buttonEl.innerHTML = currentLang === 'ua' ? 'Оплатити замовлення їжі' : 'Pay Food Order Total';
    } else {
        const totalDeposit = guestsCount * depositPricePerPerson;
        titleEl.innerHTML = translations[currentLang]["book-title"];
        subtitleEl.innerHTML = translations[currentLang]["book-subtitle"];
        amountEl.innerText = `${totalDeposit} ₴`;
        buttonEl.innerHTML = translations[currentLang]["btn-pay-submit"];
    }
}

/* ІНТЕРАКТИВНЕ МЕНЮ */
function addToCart(event, id, defaultName, price) {
    event.stopPropagation();
    const titleKey = `dish-${id}-title`;
    const localizedName = translations[currentLang][titleKey] || defaultName;

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: id, name: localizedName, price: price, quantity: 1 });
    }

    renderCart();
    updateDeposit();
    document.getElementById('kioskPanel').style.display = 'flex';
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
    updateDeposit();
    if (cart.length === 0) document.getElementById('kioskPanel').style.display = 'none';
}

function renderCart() {
    const wrapper = document.getElementById('cartItemsWrapper');
    const totalSumEl = document.getElementById('cartTotalSum');
    wrapper.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const titleKey = `dish-${item.id}-title`;
        const currentName = translations[currentLang][titleKey] || item.name;
        total += item.price * item.quantity;

        const row = document.createElement('div');
        row.className = 'kiosk-item-row';
        row.innerHTML = `
            <div>${currentName} x${item.quantity}</div>
            <div>
                <span>${item.price * item.quantity} ₴</span>
                <span class="remove-kiosk-item" onclick="removeFromCart(${item.id})">✕</span>
            </div>
        `;
        wrapper.appendChild(row);
    });
    totalSumEl.innerText = `${total} ₴`;
}

function toggleKiosk() { document.getElementById('kioskPanel').style.display = 'none'; }
function scrollToBooking() { document.getElementById('booking').scrollIntoView({ behavior: 'smooth' }); }
function openDishModal(id) { document.getElementById('dishModal').style.display = 'flex'; }
function closeDishModal() { document.getElementById('dishModal').style.display = 'none'; }

/* ФОРМА ОПЛАТИ */
document.getElementById('restaurantBookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let foodTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let finalAmount = foodTotal > 0 ? foodTotal : document.getElementById('guests').value * depositPricePerPerson;

    document.getElementById('modal-amount').innerText = `${finalAmount} ₴`;
    document.getElementById('paymentModal').style.display = 'flex';
});

function closePayment() { document.getElementById('paymentModal').style.display = 'none'; }

function processPayment() {
    alert(currentLang === 'ua' ? 'Оплату проведено! Стіл успішно заброньовано.' : 'Payment approved! Your table is successfully reserved.');

    document.getElementById('restaurantBookingForm').reset();
    cart = [];
    document.getElementById('kioskPanel').style.display = 'none';
    updateDeposit();
    closePayment();
}