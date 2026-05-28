document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const roleCycler = document.getElementById("roleCycler");
  const yearElement = document.getElementById("year");

  // Mobile menu
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // Navbar scroll effect
  const onScroll = () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll();

  // Hero role cycler
  const roles = [
    "Machine Learning Researcher",
    "Deep Learning Engineer",
    "Assistant Professor of Maths",
    "Algorithms Educator",
    "India Traveler & Storyteller"
  ];

  let roleIndex = 0;
  if (roleCycler) {
    setInterval(() => {
      roleCycler.style.opacity = "0";
      setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleCycler.textContent = roles[roleIndex];
        roleCycler.style.opacity = "1";
      }, 250);
    }, 2500);
  }

  // Reveal animation
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 80) el.classList.add("visible");
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  revealOnScroll();

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav__link");

  const setActiveLink = () => {
    let current = "";

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 160) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  // Footer year
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});