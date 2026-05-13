/* =========================
   MENU MOBILE STABLE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav ul li a");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

/* IMPORTANT : fermer le menu après clic sur un lien */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


/* =========================
   BOUTON RETOUR EN HAUT
========================= */

const scrollTopBtn = document.getElementById("scrollTop");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* =========================
   ANIMATION PRODUITS (SAFE)
========================= */

const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});


/* =========================
   RECHERCHE PRODUITS
========================= */

const searchInput = document.querySelector(".search-box input");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach((product) => {
      const title = product.querySelector("h3").textContent.toLowerCase();

      product.style.display = title.includes(value) ? "block" : "none";
    });
  });
}


/* =========================
   PANIER
========================= */

const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Produit ajouté au panier");
  });
});


/* =========================
   COPYRIGHT AUTO YEAR
========================= */

const year = new Date().getFullYear();
const copyright = document.querySelector(".copyright p");

if (copyright) {
  copyright.innerHTML = `© ${year} Fashion Store - Tous droits réservés`;
}