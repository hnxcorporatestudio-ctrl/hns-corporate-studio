document.addEventListener("DOMContentLoaded", () => {


// =========================
// ELEMENTS
// =========================
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const projectInput = document.querySelector("#project");
const messageInput = document.querySelector("#message");


// =========================
// MENU MOBILE
// =========================
if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("active");

        menu.innerHTML = nav.classList.contains("active")
            ? "✕"
            : "☰";

    });

}


// =========================
// FERMER MENU MOBILE AU CLICK
// =========================
document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) nav.classList.remove("active");

        if (menu) menu.innerHTML = "☰";

    });

});


// =========================
// SCROLL FLUIDE
// =========================
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

        }

    });

});


// =========================
// ANIMATION SCROLL
// =========================
const elements = document.querySelectorAll(
    ".section, .card, .hero-content, .contact, .grid, .info, .form, .project-card"
);

function showOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < triggerBottom) {
            el.classList.add("show");
        }

    });

}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);


// =========================
// ENVOI FORMULAIRE -> WHATSAPP
// =========================
if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();
        const project = projectInput.value.trim();
        const message = messageInput.value.trim();

        const text =
`Bonjour HNS Studio 👋

Nom: ${name}
Téléphone: ${phone}
Email: ${email}
Projet: ${project}

Message:
${message}`;

        const url = "https://wa.me/2250151030957?text=" + encodeURIComponent(text);

        window.open(url, "_blank");

        form.reset();

    });

}


// =========================
// SCROLL TOP BUTTON
// =========================
const scrollBtn = document.createElement("div");

scrollBtn.innerHTML = "↑";
scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

Object.assign(scrollBtn.style, {

    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "#ffd700",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "22px",
    fontWeight: "bold",
    zIndex: "999",
    opacity: "0",
    transition: "0.3s"

});

window.addEventListener("scroll", () => {

    scrollBtn.style.opacity = window.scrollY > 500 ? "1" : "0";

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


});