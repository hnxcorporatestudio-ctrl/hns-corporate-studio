
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ELEMENTS DOM
    // =========================
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const cartCount = document.getElementById("cart-count");

    // =========================
    // MENU MOBILE
    // =========================
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // =========================
    // PANIER (LOCALSTORAGE)
    // =========================
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // =========================
    // SAUVEGARDE
    // =========================
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }

    // =========================
    // COMPTEUR PANIER
    // =========================
    function updateCartCount() {
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        if (cartCount) {
            cartCount.textContent = totalItems;
        }
    }

    // =========================
    // AJOUT AU PANIER
    // =========================
    window.addToCart = function (name, price, image) {

        let item = cart.find(p => p.name === name);

        if (item) {
            item.quantity += 1;
        } else {
            cart.push({
                name: name,
                price: price,
                image: image,
                quantity: 1
            });
        }

        saveCart();
        alert("Produit ajouté au panier 🛒");
    };

    // =========================
    // SUPPRIMER PRODUIT
    // =========================
    window.removeItem = function (name) {

        cart = cart.filter(item => item.name !== name);
        saveCart();
    };

    // =========================
    // QUANTITÉ + / -
    // =========================
    window.changeQty = function (name, type) {

        let item = cart.find(p => p.name === name);

        if (!item) return;

        if (type === "plus") {
            item.quantity++;
        }

        if (type === "minus") {
            item.quantity--;

            if (item.quantity <= 0) {
                cart = cart.filter(p => p.name !== name);
            }
        }

        saveCart();
    };

    // =========================
    // TOTAL
    // =========================
    function getTotal() {
        return cart.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
    }

    // =========================
    // AFFICHAGE PANIER
    // =========================
    function renderCart() {

        const container = document.getElementById("cart-items");
        const totalBox = document.getElementById("cart-total");

        if (!container) return;

        container.innerHTML = "";

        cart.forEach(item => {

            const div = document.createElement("div");
            div.classList.add("cart-item");

            div.innerHTML = `
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.price} FCFA</p>
                </div>

                <div>
                    <button onclick="changeQty('${item.name}', 'minus')">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty('${item.name}', 'plus')">+</button>
                </div>

                <button onclick="removeItem('${item.name}')">❌</button>
            `;

            container.appendChild(div);
        });

        if (totalBox) {
            totalBox.textContent = getTotal() + " FCFA";
        }
    }

    // =========================
    // INIT
    // =========================
    updateCartCount();
    renderCart();

});