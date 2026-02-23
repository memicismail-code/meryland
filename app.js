const products = [
    {
        id: 1,
        name: "Cozy Lover Red",
        category: "Handmade Keychain",
        price: 15.99,
        image: "imgs/keychain1.jpg"
    },
    {
        id: 2,
        name: "Golden Sofa Chill",
        category: "Handmade Keychain",
        price: 18.50,
        image: "imgs/keychain2.jpg"
    },
    {
        id: 3,
        name: "Green Sofa Dream",
        category: "Handmade Keychain",
        price: 18.50,
        image: "imgs/keychain3.jpg"
    },
    {
        id: 4,
        name: "Puzzle Hearts Duo",
        category: "Handmade Art",
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
    grid.innerHTML = products.map(product => `
        <div class="product-card animate-in">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function setupCart() {
    const cartBtn = document.getElementById('cart-btn');
    cartBtn.addEventListener('click', () => {
        alert(`Cart has ${cart.length} items. Total: $${cart.reduce((sub, item) => sub + item.price, 0).toFixed(2)}`);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartCount();

    // Simple feedback
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "Added!";
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
