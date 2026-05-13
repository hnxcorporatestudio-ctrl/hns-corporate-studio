
 // =============================
// VARIABLES
// =============================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const whatsappButton = document.querySelector(".whatsapp");

// FORM
const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form input, .form textarea");

// =============================
// MENU MOBILE
// =============================
if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }

    });

}

// =============================
// FERMER MENU
// =============================
document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuToggle.innerHTML = "☰";

    });

});

// =============================
// SCROLL FLUIDE
// =============================
document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });

        }

    });

});

// =============================
// ANIMATION SCROLL
// =============================
const elements = document.querySelectorAll(
    ".section, .card, .hero-content, .contact, .grid, .info, .form"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =============================
// SAUVEGARDE DES INFOS (RESTE APRES REFRESH)
// =============================
inputs.forEach(input => {

    // charger données
    const saved = localStorage.getItem(input.id);
    if (saved) input.value = saved;

    // sauvegarde en temps réel
    input.addEventListener("input", () => {
        localStorage.setItem(input.id, input.value);
    });

});

// =============================
// ENVOI EMAIL GMAIL
// =============================
if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.querySelector("#name")?.value || "";
        const phone = document.querySelector("#phone")?.value || "";
        const email = document.querySelector("#email")?.value || "";
        const message = document.querySelector("#message")?.value || "";

        const mailto = `mailto:hnscorporatestudio@gmail.com
?subject=Demande%20de%20devis%20HNS
&body=
Nom:%20${name}%0A
Téléphone:%20${phone}%0A
Email:%20${email}%0A
Message:%20${message}`;

        window.location.href = mailto;

    });

}

// =============================
// WHATSAPP DIRECT
// =============================
if (whatsappButton) {

    whatsappButton.addEventListener("click", () => {

        const phone = "2250151030957";

        const message = "Bonjour HNS Corporate Studio, je veux un site web";

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

}

// =============================
// HEADER STICKY
// =============================
window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});