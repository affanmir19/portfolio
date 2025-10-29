 var typed = new Typed(".element", {
        strings: [
          "Web Developer 💻",
          "Frontend Developer 🎨",
          "Tech Enthusiast 🚀"
        ],
        typeSpeed: 90,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
});


  AOS.init({
        duration: 1200,
        once: true,
      });


  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Optional: close menu when a link is clicked (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

