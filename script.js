// VANTA.NET Background
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: false,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffffff,
  backgroundColor: 0x111111,
  maxDistance: 18.00,
  spacing: 20.00
});

// Flip card
const flipCards = document.querySelectorAll('.flip-card-inner');
const flipInterval = 4000; 
flipCards.forEach(card => {
  setInterval(() => {
    card.classList.toggle('flipped');
  }, flipInterval);
});

// Read more
const buttons = document.querySelectorAll('.read-more-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const p = btn.previousElementSibling;
    p.classList.toggle('truncated');
    btn.textContent = p.classList.contains('truncated') ? 'Guarda e Leggi di più' : 'Mostra meno';
  });
});



// Skills Carousel
const track = document.querySelector('.skill-track');
let position = 0;
const speed = 0.3;
let isPaused = false;

// Duplica il contenuto per loop continuo
track.innerHTML += track.innerHTML;

const trackWidth = track.scrollWidth / 2;

// Animazione carosello
function animate() {
  if (!isPaused) {
    position += speed;
    if (position >= trackWidth) position = 0;
    track.style.transform = `translateX(-${position}px)`;
  }
  requestAnimationFrame(animate);
}
animate();

// Pausa on hover
track.parentElement.addEventListener('mouseenter', () => {
  isPaused = true;
});
track.parentElement.addEventListener('mouseleave', () => {
  isPaused = false;
});


// Inserisce l'anno corrente nel footer
document.getElementById("year").textContent = new Date().getFullYear();


// Reveal
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll('.reveal, .reveal-right, .reveal-left');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // se vuoi che l’animazione rimanga, lascia così
        // se vuoi che si ripeta quando esce/rientra, rimuovi l’else
      } else {
        entry.target.classList.remove("active"); 
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
});


// Script per reveal con IntersectionObserver
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal, .reveal-header");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1 
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active"); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);
    revealElements.forEach(el => revealObserver.observe(el));
});


