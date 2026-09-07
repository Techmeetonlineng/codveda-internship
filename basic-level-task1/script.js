const header = document.querySelector(".header");

const navLinks = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section[id]");

const featureCards = document.querySelectorAll(".feature-card");

const heroContent = document.querySelector(".hero-content");

const ctaButtons = document.querySelectorAll(".hero-btn, .cta-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

const revealElements = document.querySelectorAll(
  ".feature-card, .about-content, .cta-content",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        revealObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.classList.add("reveal");

  revealObserver.observe(element);
});

featureCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  });
});

ctaButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    ripple.style.width = `${size}px`;

    ripple.style.height = `${size}px`;

    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;

    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});
