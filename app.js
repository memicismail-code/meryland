const translations = {
    en: {
        heroSubtitle: "✨ Unique, vibrant, and handmade with love. Carry a piece of art wherever you go. 🎨",
        collectionTitle: "🛍️ Our Collection",
        addToCart: "Add to Cart 🛒",
        added: "Added! ✅",
        cartSummary: (count, total) => `Cart has ${count} items. Total: $${total.toFixed(2)} 💰`,
        footerLinks: ["🏠 Home", "✨ Collection", "🌿 About", "📞 Contact"],
        copyright: "© 2026 Meryland Handmade Art. All rights reserved. ✨",
        filters: {
            all: "🛍️ All Collections",
            biteSized: "🍔 Bite-Sized Series",
            perfectPairs: "💞 Perfect Pairs",
            artfulFinds: "✨ Artful Finds"
        },
        trust: {
            secure: "✔ Secure checkout",
            shipping: "✔ Shipping & return policy",
            contact: "✔ Clear contact details"
        }
    },
    bs: {
        heroSubtitle: "✨ Unikatno, vibrantno i ručno rađeno s ljubavlju. Nosite komadić umjetnosti gdje god krenuli. 🎨",
        collectionTitle: "🛍️ Naša Kolekcija",
        addToCart: "Dodaj u korpu 🛒",
        added: "Dodano! ✅",
        cartSummary: (count, total) => `Korpa ima ${count} artikala. Ukupno: $${total.toFixed(2)} 💰`,
        footerLinks: ["🏠 Početna", "✨ Kolekcija", "🌿 O nama", "📞 Kontakt"],
        copyright: "© 2026 Meryland Ručni Radovi. Sva prava zadržana. ✨",
        filters: {
            all: "🛍️ Sve kolekcije",
            biteSized: "🍔 Bite-Sized serija",
            perfectPairs: "💞 Savršeni parovi",
            artfulFinds: "✨ Artful Finds kolekcija"
        },
        trust: {
            secure: "✔ Sigurno plaćanje",
            shipping: "✔ Dostava i povrat",
            contact: "✔ Jasni kontakt podaci"
        }
    }
};

let currentLang = 'en';
let filterCategory = 'all';
let cart = [];

const products = [
    // ✨ Artful Finds
    { id: 1, name: "Handmade Gem #1", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 29.99, image: "imgs/✨ Artful Finds/00bb8e18-7c90-4c32-ad2d-9b4a12354070.jpg", rating: 5, feedback: { en: "Absolutely stunning quality!", bs: "Nevjerovatna kvaliteta!" } },
    { id: 2, name: "Handmade Gem #2", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 24.99, image: "imgs/✨ Artful Finds/3fe4068b-c0f9-4799-90db-84c8a31365f3.jpg", rating: 4, feedback: { en: "Love the vibrant colors.", bs: "Sviđaju mi se boje." } },
    { id: 3, name: "Handmade Gem #3", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 25.50, image: "imgs/✨ Artful Finds/489580442_1097015352440531_7089408804169926032_n.jpg", rating: 5, feedback: { en: "Best gift ever!", bs: "Najbolji poklon ikad!" } },
    { id: 4, name: "Handmade Gem #4", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 28.00, image: "imgs/✨ Artful Finds/489875642_1097845112357555_8689460603483479493_n.jpg", rating: 5, feedback: { en: "So unique and detailed.", bs: "Tako unikatno." } },
    { id: 5, name: "Handmade Gem #5", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 22.99, image: "imgs/✨ Artful Finds/490232185_1097845359024197_4163018510009001749_n.jpg", rating: 4, feedback: { en: "Fast shipping and pretty.", bs: "Brza dostava i lijepo." } },
    { id: 6, name: "Handmade Gem #6", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 26.50, image: "imgs/✨ Artful Finds/500dc61e-d2fe-42ff-9d69-6a4be5f48c51.jpg", rating: 5, feedback: { en: "A true masterpiece.", bs: "Pravo remek djelo." } },
    { id: 7, name: "Handmade Gem #7", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 23.99, image: "imgs/✨ Artful Finds/5b088418-0138-4b35-b283-9a53407f6b43.jpg", rating: 5, feedback: { en: "Every detail is perfect.", bs: "Svaki detalj je savršen." } },
    { id: 8, name: "Handmade Gem #8", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 27.00, image: "imgs/✨ Artful Finds/683c033f-4875-4ea9-9736-5d67298bda1a.jpg", rating: 4, feedback: { en: "Great addition to my bag!", bs: "Odlično za moju torbu!" } },
    { id: 9, name: "Handmade Gem #9", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 21.99, image: "imgs/✨ Artful Finds/ba76de78-7afa-428b-bedd-a6e5d17468bc.jpg", rating: 5, feedback: { en: "Simply beautiful.", bs: "Jednostavno prelijepo." } },
    { id: 10, name: "Handmade Gem #10", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 25.99, image: "imgs/✨ Artful Finds/c7330e08-e335-436e-95db-de27b8062356.jpg", rating: 5, feedback: { en: "High quality material.", bs: "Kvalitetan materijal." } },
    { id: 11, name: "Handmade Gem #11", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 24.50, image: "imgs/✨ Artful Finds/c96bc4e2-55e5-4e83-974e-6c49d6c30a00.jpg", rating: 4, feedback: { en: "Really elegant.", bs: "Veoma elegantno." } },
    { id: 12, name: "Handmade Gem #12", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 26.99, image: "imgs/✨ Artful Finds/dbb56f44-3d7f-4ce1-9eab-9148179ef23e.jpg", rating: 5, feedback: { en: "Surpassed expectations!", bs: "Nadmašilo očekivanja!" } },
    { id: 13, name: "Handmade Gem #13", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 23.50, image: "imgs/✨ Artful Finds/f6bcd299-b4d7-47f5-bded-f595cf868bb3.jpg", rating: 5, feedback: { en: "Love the artistic touch.", bs: "Volim ovaj umjetnički štih." } },
    { id: 14, name: "Handmade Gem #14", category: { en: "✨ Artful Finds", bs: "✨ Pronađena umjetnost" }, price: 29.00, image: "imgs/✨ Artful Finds/ff7d91fa-1fbc-4f1e-a4a3-d95026599b33.jpg", rating: 5, feedback: { en: "Perfect for art lovers.", bs: "Savršeno za ljubitelje." } },

    // 🍓 Bite-Sized
    { id: 15, name: "Mini Sweet #1", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 12.99, image: "imgs/🍓 Bite-Sized/0b1d79a0-8887-44d2-88e8-1b7bfe9244c3.jpg", rating: 5, feedback: { en: "The cutest thing ever!", bs: "Najslađa stvar ikad!" } },
    { id: 16, name: "Mini Sweet #2", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 14.50, image: "imgs/🍓 Bite-Sized/1462fe4f-6d3f-42de-9e31-ec5a4759529f.jpg", rating: 4, feedback: { en: "Tiny but detailed.", bs: "Malo ali detaljno." } },
    { id: 17, name: "Mini Sweet #3", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 11.99, image: "imgs/🍓 Bite-Sized/23f945e5-cbfc-4072-a7b3-68f67dcdb171.jpg", rating: 5, feedback: { en: "Perfect keychain!", bs: "Savršen privjesak!" } },
    { id: 18, name: "Mini Sweet #4", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 13.00, image: "imgs/🍓 Bite-Sized/489828762_1097015185773881_2688868655114537375_n.jpg", rating: 5, feedback: { en: "Bright and cheerful.", bs: "Svijetlo i veselo." } },
    { id: 19, name: "Mini Sweet #5", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 12.50, image: "imgs/🍓 Bite-Sized/489830518_1097015399107193_1092334628566189270_n.jpg", rating: 4, feedback: { en: "Adorable gift.", bs: "Simpatičan poklon." } },
    { id: 20, name: "Mini Sweet #6", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 14.99, image: "imgs/🍓 Bite-Sized/489952830_1097015515773848_2005432897612449203_n.jpg", rating: 5, feedback: { en: "Very well made.", bs: "Jako dobro napravljeno." } },
    { id: 21, name: "Mini Sweet #7", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 15.00, image: "imgs/🍓 Bite-Sized/678b4563-06fc-47f2-94da-a3b6e56f371a.jpg", rating: 5, feedback: { en: "Instant favorite.", bs: "Odmah mi je omiljeno." } },
    { id: 22, name: "Mini Sweet #8", category: { en: "🍓 Bite-Sized", bs: "🍓 Mini kolekcija" }, price: 13.50, image: "imgs/🍓 Bite-Sized/b88d373c-a1da-4cf4-862c-76bfa7f6e920.jpg", rating: 4, feedback: { en: "Super cute!", bs: "Super slatko!" } },

    // 💞 Perfect Pairs
    { id: 23, name: "Perfect Pair #1", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 34.99, image: "imgs/💞 Perfect Pairs/00bb8e18-7c90-4c32-ad2d-9b4a12354070.jpg", rating: 5, feedback: { en: "Matched with my partner!", bs: "Upareno sa partnerom!" } },
    { id: 24, name: "Perfect Pair #2", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 32.50, image: "imgs/💞 Perfect Pairs/3faff4e0-2810-4341-a6f0-cd295c9d95f5.jpg", rating: 5, feedback: { en: "Beautiful set.", bs: "Prelijep set." } },
    { id: 25, name: "Perfect Pair #3", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 38.00, image: "imgs/💞 Perfect Pairs/489580442_1097015352440531_7089408804169926032_n.jpg", rating: 4, feedback: { en: "Great value for two.", bs: "Odlična cijena za dvoje." } },
    { id: 26, name: "Perfect Pair #4", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 36.99, image: "imgs/💞 Perfect Pairs/490183496_1097845349024198_1732809459163790470_n.jpg", rating: 5, feedback: { en: "Gifted to a friend!", bs: "Poklonjeno prijateljici!" } },
    { id: 27, name: "Perfect Pair #5", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 33.50, image: "imgs/💞 Perfect Pairs/4d86d9eb-e750-4594-8a80-4aa0b6d807a9.jpg", rating: 5, feedback: { en: "Romantic and cute.", bs: "Romantično i slatko." } },
    { id: 28, name: "Perfect Pair #6", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 35.00, image: "imgs/💞 Perfect Pairs/5b088418-0138-4b35-b283-9a53407f6b43.jpg", rating: 4, feedback: { en: "Strong and stylish.", bs: "Čvrsto i stilski." } },
    { id: 29, name: "Perfect Pair #7", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 39.99, image: "imgs/💞 Perfect Pairs/698869d2-7534-41a8-ba47-eae0b8785d04.jpg", rating: 5, feedback: { en: "Highest quality.", bs: "Vrhunska kvaliteta." } },
    { id: 30, name: "Perfect Pair #8", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 31.50, image: "imgs/💞 Perfect Pairs/843d7642-b3ce-4147-8e77-90a41b5aafb0.jpg", rating: 5, feedback: { en: "Love the symmetry.", bs: "Volim simetriju." } },
    { id: 31, name: "Perfect Pair #9", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 37.00, image: "imgs/💞 Perfect Pairs/cba9b3f7-8b41-4350-aeb3-54160729fac4.jpg", rating: 4, feedback: { en: "Exactly as pictured.", bs: "Baš kao na slici." } },
    { id: 32, name: "Perfect Pair #10", category: { en: "💞 Perfect Pairs", bs: "💞 Savršeni parovi" }, price: 34.50, image: "imgs/💞 Perfect Pairs/ff7d91fa-1fbc-4f1e-a4a3-d95026599b33.jpg", rating: 5, feedback: { en: "A truly special item.", bs: "Vrlo poseban komad." } }
];

function init() {
    renderProducts();
    setupCart();
    setupFilters();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const t = translations[currentLang];

    const filteredProducts = filterCategory === 'all'
        ? products
        : products.filter(p => p.category.en.includes(filterCategory));

    grid.innerHTML = filteredProducts.map(product => {
        const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
        return `
        <div class="product-card animate-in">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy" decoding="async">
            <div class="product-info">
                <div class="product-category">${product.category[currentLang]}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">${stars}</div>
                <div class="product-feedback">"${product.feedback[currentLang]}"</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">${t.addToCart}</button>
            </div>
        </div>
    `}).join('');

    // Re-observe new elements
    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
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

    // Update filter options
    const filterSelect = document.getElementById('category-filter');
    filterSelect.options[0].text = t.filters.all;
    filterSelect.options[1].text = t.filters.biteSized;
    filterSelect.options[2].text = t.filters.perfectPairs;
    filterSelect.options[3].text = t.filters.artfulFinds;

    // Update trust elements
    document.getElementById('trust-secure').innerText = t.trust.secure;
    document.getElementById('trust-shipping').innerText = t.trust.shipping;
    document.getElementById('trust-contact').innerText = t.trust.contact;

    renderProducts();
}

function setupFilters() {
    const filterSelect = document.getElementById('category-filter');
    filterSelect.addEventListener('change', (e) => {
        filterCategory = e.target.value;
        renderProducts();
    });
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
        if (cart.length === 0) {
            alert(currentLang === 'en' ? 'Your cart is empty!' : 'Vaša korpa je prazna!');
            return;
        }

        let message = currentLang === 'en' ? 'Hello! I would like to order the following items:\n\n' : 'Zdravo! Želim naručiti sljedeće artikle:\n\n';
        let total = 0;

        // Group items by ID or simply list them
        const itemCounts = {};
        cart.forEach(item => {
            if (itemCounts[item.id]) {
                itemCounts[item.id].quantity += 1;
            } else {
                itemCounts[item.id] = { ...item, quantity: 1 };
            }
        });

        Object.values(itemCounts).forEach((item, index) => {
            message += `${index + 1}. ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}\n`;
            total += item.price * item.quantity;
        });

        const totalText = currentLang === 'en' ? 'Total' : 'Ukupno';
        message += `\n**${totalText}: $${total.toFixed(2)}**`;

        const whatsappNumber = '38762600382';
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
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
