
// =========================
// HEADER SCROLL
// =========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

// =========================
// SMOOTH ACTIVE LINK
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {

            item.classList.remove("active-link");

        });

        link.classList.add("active-link");

    });

});

// =========================
// BOOKING FORM
// =========================

const bookingForm = document.querySelector(".booking-box");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = bookingForm.querySelectorAll("input, select");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "1px solid red";

            } else {

                input.style.border = "1px solid #ddd";

            }

        });

        if (valid) {

            alert("Réservation envoyée avec succès !");

            bookingForm.reset();

        } else {

            alert("Veuillez remplir tous les champs.");

        }

    });

}

// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const contactInputs = contactForm.querySelectorAll("input, textarea");

        let valid = true;

        contactInputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "1px solid red";

            } else {

                input.style.border = "none";

            }

        });

        if (valid) {

            alert("Message envoyé avec succès !");

            contactForm.reset();

        } else {

            alert("Veuillez remplir tous les champs.");

        }

    });

}

// =========================
// SCROLL ANIMATION
// =========================

const animatedElements = document.querySelectorAll(
    ".service-card, .room-card, .event-card, .gallery-grid img"
);

function revealElements() {

    animatedElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

// =========================
// AUTO SLIDER HERO BACKGROUND
// =========================

const hero = document.querySelector(".hero");

const heroImages = [

    "images/hotel-bg.jpg",
    "images/hotel-bg2.jpg",
    "images/hotel-bg3.jpg"

];

let currentImage = 0;

function changeHeroImage() {

    if (!hero) return;

    currentImage++;

    if (currentImage >= heroImages.length) {

        currentImage = 0;

    }

    hero.style.background =
        `url('${heroImages[currentImage]}') center/cover no-repeat`;

}

setInterval(changeHeroImage, 5000);

// =========================
// BUTTON HOVER EFFECT
// =========================

const buttons = document.querySelectorAll(".btn, .btn-light");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

// =========================
// GALLERY IMAGE POPUP
// =========================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.classList.add("popup");

        popup.innerHTML = `

            <div class="popup-content">

                <img src="${image.src}">

                <span class="close-popup">&times;</span>

            </div>

        `;

        document.body.appendChild(popup);

        document.body.style.overflow = "hidden";

        const closeBtn = popup.querySelector(".close-popup");

        closeBtn.addEventListener("click", () => {

            popup.remove();

            document.body.style.overflow = "auto";

        });

        popup.addEventListener("click", (e) => {

            if (e.target === popup) {

                popup.remove();

                document.body.style.overflow = "auto";

            }

        });

    });

});

// =========================
// TESTIMONIAL AUTO TEXT
// =========================

const testimonialText = document.querySelector(".testimonial p");

const testimonials = [

    "Excellent accueil, chambres très propres et cadre magnifique.",

    "Le meilleur hôtel moderne à Yamoussoukro.",

    "Service professionnel et ambiance très relaxante.",

    "Une expérience premium que je recommande fortement."

];

let testimonialIndex = 0;

function changeTestimonial() {

    if (!testimonialText) return;

    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {

        testimonialIndex = 0;

    }

    testimonialText.style.opacity = "0";

    setTimeout(() => {

        testimonialText.textContent = testimonials[testimonialIndex];

        testimonialText.style.opacity = "1";

    }, 500);

}

setInterval(changeTestimonial, 4000);

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// =========================
// PRELOADER
// =========================

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    if (preloader) {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 800);

    }

});

// =========================
// SCROLL TO TOP BUTTON
// =========================

const scrollTopBtn = document.createElement("button");

scrollTopBtn.innerHTML = "↑";

scrollTopBtn.classList.add("scroll-top");

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.classList.add("show-scroll");

    } else {

        scrollTopBtn.classList.remove("show-scroll");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =========================
// MOBILE MENU SIMPLE
// =========================

const navbar = document.querySelector(".navbar");

const mobileMenu = document.createElement("div");

mobileMenu.classList.add("mobile-menu");

mobileMenu.innerHTML = "☰";

if (navbar) {

    navbar.appendChild(mobileMenu);

}

mobileMenu.addEventListener("click", () => {

    document.querySelector(".nav-links").classList.toggle("mobile-active");

});

// =========================
// IMAGE HOVER ZOOM
// =========================

const allImages = document.querySelectorAll("img");

allImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transition = "0.4s";

        img.style.transform = "scale(1.03)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});