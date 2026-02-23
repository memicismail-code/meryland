const translations = {
    en: {
        heroSubtitle: "Unique, vibrant, and handmade with love. Carry a piece of art wherever you go.",
        collectionTitle: "Our Collection",
        addToCart: "Add to Cart",
        added: "Added!",
        cartSummary: (count, total) => `Cart has ${count} items. Total: $${total.toFixed(2)}`,
        footerLinks: ["Home", "Collection", "About", "Contact"],
        copyright: "© 2026 Meryland Handmade Art. All rights reserved."
    },
    bs: {
        heroSubtitle: "Unikatno, vibrantno i ručno rađeno s ljubavlju. Nosite komadić umjetnosti gdje god krenuli.",
        collectionTitle: "Naša Kolekcija",
        addToCart: "Dodaj u korpu",
        added: "Dodano!",
        cartSummary: (count, total) => `Korpa ima ${count} artikala. Ukupno: $${total.toFixed(2)}`,
        footerLinks: ["Početna", "Kolekcija", "O nama", "Kontakt"],
        copyright: "© 2026 Meryland Ručni Radovi. Sva prava zadržana."
    }
};

let currentLang = 'en';

const products = [
    {
        id: 1,
        name: "Cozy Lover Red",
        category: { en: "Handmade Keychain", bs: "Ručno rađen privjesak" },
        price: 15.99,
        image: "imgs/keychain1.jpg"
    },
    {
        id: 2,
        name: "Golden Sofa Chill",
        category: { en: "Handmade Keychain", bs: "Ručno rađen privjesak" },
        price: 18.50,
        image: "imgs/keychain2.jpg"
    },
    {
        id: 3,
        name: "Green Sofa Dream",
        category: { en: "Handmade Keychain", bs: "Ručno rađen privjesak" },
        price: 18.50,
        image: "imgs/keychain3.jpg"
    },
    {
        id: 4,
        name: "Puzzle Hearts Duo",
        category: { en: "Handmade Art", bs: "Ručna umjetnost" },
        price: 24.99,
        image: "imgs/puzzle.jpg"
    }
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
