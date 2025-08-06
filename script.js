// Particle Background
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numParticles = 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3 + 1;
    this.dx = (Math.random() - 0.5) * 0.5;
    this.dy = (Math.random() - 0.5) * 0.5;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#00bcd4";
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

initParticles();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// Typing Animation
const text = "I'm a Full Stack Web Developer";
const typingText = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Reveal Elements on Scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
// Toggle project card options on click
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", e => {
    e.stopPropagation();
    card.classList.toggle("expanded");

    // Optional: Collapse all other cards
    document.querySelectorAll(".project-card").forEach(other => {
      if (other !== card) {
        other.classList.remove("expanded");
      }
    });
  });
});

// Prevent links inside the card from closing the card
document.querySelectorAll(".project-options a").forEach(link => {
  link.addEventListener("click", e => e.stopPropagation());
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
