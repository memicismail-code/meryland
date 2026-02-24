const translations = {
    en: {
        heroSubtitle: "✨ Unique, vibrant, and handmade with love. Carry a piece of art wherever you go. 🎨",
        collectionTitle: "🛍️ Our Collection",
        addToCart: "Add to Cart 🛒",
        added: "Added! ✅",
        cartSummary: (count, total) => `Cart has ${count} items. Total: $${total.toFixed(2)} 💰`,
        footerLinks: ["🏠 Home", "✨ Collection", "🌿 About", "📞 Contact"],
        copyright: "© 2026 Meryland Handmade Art. All rights reserved. ✨"
    },
    bs: {
        heroSubtitle: "✨ Unikatno, vibrantno i ručno rađeno s ljubavlju. Nosite komadić umjetnosti gdje god krenuli. 🎨",
        collectionTitle: "🛍️ Naša Kolekcija",
        addToCart: "Dodaj u korpu 🛒",
        added: "Dodano! ✅",
        cartSummary: (count, total) => `Korpa ima ${count} artikala. Ukupno: $${total.toFixed(2)} 💰`,
        footerLinks: ["🏠 Početna", "✨ Kolekcija", "🌿 O nama", "📞 Kontakt"],
        copyright: "© 2026 Meryland Ručni Radovi. Sva prava zadržana. ✨"
    }
};

let currentLang = 'en';

const products = [
    // Personalized
    { id: 1, name: "Handmade Gem #1", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 29.99, image: "imgs/✨ Personalized/00bb8e18-7c90-4c32-ad2d-9b4a12354070.jpg" },
    { id: 2, name: "Handmade Gem #2", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 24.99, image: "imgs/✨ Personalized/489580442_1097015352440531_7089408804169926032_n.jpg" },
    { id: 3, name: "Handmade Gem #3", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 25.50, image: "imgs/✨ Personalized/489875642_1097845112357555_8689460603483479493_n.jpg" },
    { id: 4, name: "Handmade Gem #4", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 28.00, image: "imgs/✨ Personalized/490232185_1097845359024197_4163018510009001749_n.jpg" },
    { id: 5, name: "Handmade Gem #5", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 22.99, image: "imgs/✨ Personalized/500dc61e-d2fe-42ff-9d69-6a4be5f48c51.jpg" },
    { id: 6, name: "Handmade Gem #6", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 26.50, image: "imgs/✨ Personalized/5b088418-0138-4b35-b283-9a53407f6b43.jpg" },
    { id: 7, name: "Handmade Gem #7", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 23.99, image: "imgs/✨ Personalized/683c033f-4875-4ea9-9736-5d67298bda1a.jpg" },
    { id: 8, name: "Handmade Gem #8", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 27.00, image: "imgs/✨ Personalized/ba76de78-7afa-428b-bedd-a6e5d17468bc.jpg" },
    { id: 9, name: "Handmade Gem #9", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 21.99, image: "imgs/✨ Personalized/c7330e08-e335-436e-95db-de27b8062356.jpg" },
    { id: 10, name: "Handmade Gem #10", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 25.99, image: "imgs/✨ Personalized/c96bc4e2-55e5-4e83-974e-6c49d6c30a00.jpg" },
    { id: 11, name: "Handmade Gem #11", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 24.50, image: "imgs/✨ Personalized/dbb56f44-3d7f-4ce1-9eab-9148179ef23e.jpg" },
    { id: 12, name: "Handmade Gem #12", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 26.99, image: "imgs/✨ Personalized/f6bcd299-b4d7-47f5-bded-f595cf868bb3.jpg" },
    { id: 13, name: "Handmade Gem #13", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 23.50, image: "imgs/✨ Personalized/ff7d91fa-1fbc-4f1e-a4a3-d95026599b33.jpg" },

    // Bite-Sized
    { id: 14, name: "Mini Sweet #1", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 12.99, image: "imgs/🍓 Bite-Sized/0b1d79a0-8887-44d2-88e8-1b7bfe9244c3.jpg" },
    { id: 15, name: "Mini Sweet #2", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 14.50, image: "imgs/🍓 Bite-Sized/489828762_1097015185773881_2688868655114537375_n.jpg" },
    { id: 16, name: "Mini Sweet #3", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 11.99, image: "imgs/🍓 Bite-Sized/489830518_1097015399107193_1092334628566189270_n.jpg" },
    { id: 17, name: "Mini Sweet #4", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 13.00, image: "imgs/🍓 Bite-Sized/489952830_1097015515773848_2005432897612449203_n.jpg" },
    { id: 18, name: "Mini Sweet #5", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 12.50, image: "imgs/🍓 Bite-Sized/678b4563-06fc-47f2-94da-a3b6e56f371a.jpg" },
    { id: 19, name: "Mini Sweet #6", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 14.99, image: "imgs/🍓 Bite-Sized/b88d373c-a1da-4cf4-862c-76bfa7f6e920.jpg" },

    // Perfect Pairs
    { id: 20, name: "Perfect Pair #1", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 34.99, image: "imgs/💞 Perfect Pairs/490183496_1097845349024198_1732809459163790470_n.jpg" },
    { id: 21, name: "Perfect Pair #2", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 32.50, image: "imgs/💞 Perfect Pairs/4d86d9eb-e750-4594-8a80-4aa0b6d807a9.jpg" },
    { id: 22, name: "Perfect Pair #3", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 38.00, image: "imgs/💞 Perfect Pairs/843d7642-b3ce-4147-8e77-90a41b5aafb0.jpg" }
];

let cart = [];

function init() {
    renderProducts();
    setupCart();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const t = translations[currentLang];
    grid.innerHTML = products.map(product => `
        <div class="product-card animate-in">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category[currentLang]}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">${t.addToCart}</button>
            </div>
        </div>
    `).join('');
}

function updateUI() {
    const t = translations[currentLang];

    document.querySelector('.hero-subtitle').innerText = t.heroSubtitle;
    document.querySelector('.section-title').innerText = t.collectionTitle;
    document.querySelector('.copyright').innerText = t.copyright;

    const footerLinks = document.querySelectorAll('.footer-links li');
    footerLinks.forEach((li, index) => {
        li.innerText = t.footerLinks[index];
    });

    renderProducts();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bs' : 'en';
    const langBtn = document.getElementById('lang-btn');
    langBtn.innerText = currentLang === 'en' ? 'BS' : 'EN';
    updateUI();
}

function setupCart() {
    const cartBtn = document.getElementById('cart-btn');
    cartBtn.addEventListener('click', () => {
        const t = translations[currentLang];
        alert(t.cartSummary(cart.length, cart.reduce((sub, item) => sub + item.price, 0)));
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartCount();

    // Simple feedback
    const btn = event.target;
    const t = translations[currentLang];
    const originalText = btn.innerText;
    btn.innerText = t.added;
    btn.style.background = "#ffd700";
    btn.style.color = "black";

    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = "";
        btn.style.color = "";
    }, 1500);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    init();
    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
});
