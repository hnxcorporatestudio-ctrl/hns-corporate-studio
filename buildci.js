/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav ul li a");

if(menuToggle && nav){

  menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

  });

}

/* FERMER MENU APRÈS CLIC */

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});


/* =========================
   SCROLL HEADER
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.style.background = "#16294d";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";

  }else{

    header.style.background = "#1F3565";
    header.style.boxShadow = "none";

  }

});


/* =========================
   SCROLL TOP BUTTON
========================= */

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    scrollTopBtn.style.display = "block";

  }else{

    scrollTopBtn.style.display = "none";

  }

});

/* RETOUR EN HAUT */

scrollTopBtn.addEventListener("click", () => {

  window.scrollTo({

    top:0,
    behavior:"smooth"

  });

});


/* =========================
   ANIMATION SERVICES
========================= */

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0)";

  });

});


/* =========================
   ANIMATION PROJETS
========================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0)";

  });

});


/* =========================
   APPARITION AU SCROLL
========================= */

const hiddenElements = document.querySelectorAll(
  ".service-card, .project-card, .stat-card, .about-container"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

}, {
  threshold:0.2
});

hiddenElements.forEach(el => {

  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s ease";

  observer.observe(el);

});


/* =========================
   FORMULAIRE CONTACT
========================= */

const contactForm = document.querySelector(".contact-form");

if(contactForm){

  contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message envoyé avec succès !");

    contactForm.reset();

  });

}


/* =========================
   COMPTEURS ANIMÉS
========================= */

const counters = document.querySelectorAll(".stat-card h3");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.innerText.replace("+", "");
    let current = 0;

    const increment = target / 100;

    const interval = setInterval(() => {

      current += increment;

      if(current >= target){

        counter.innerText = target + "+";
        clearInterval(interval);

      }else{

        counter.innerText = Math.floor(current) + "+";

      }

    }, 20);

  };

  updateCounter();

});