// Funktion: Hover-Effekt für jedes einzelne Wort
function onHoverIn(event) {
  const letters = event.currentTarget.querySelectorAll('.letter'); // Nur die Buchstaben des gehovten Wortes

  letters.forEach((letter, index) => {
    if (letter.dataset.alt === "true") {
      letter.classList.add('hovered');
      gsap.fromTo(
        letter,
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.1, ease: "bounce.out", delay: index * 0 }
      );
    }
  });
}

function onHoverOut(event) {
  const letters = event.currentTarget.querySelectorAll('.letter'); // Nur die Buchstaben des gehovten Wortes

  letters.forEach((letter) => {
    letter.classList.remove('hovered');
    gsap.to(letter, {
      y: 0, opacity: 1, duration: 0.6, ease: "power1.inOut"
    });
  });
}

// Alle .word-container-Elemente abfragen
const wordContainers = document.querySelectorAll('.word-container');

wordContainers.forEach(wordContainer => {
  wordContainer.addEventListener("mouseenter", onHoverIn);
  wordContainer.addEventListener("mouseleave", onHoverOut);
});


const menuToggle = document.getElementById('menu-toggle');
const navContainer = document.querySelector('.nav-container');

function toggleMenu() {
  navContainer.classList.toggle('open');
}

menuToggle.addEventListener('click', toggleMenu);

document.addEventListener("DOMContentLoaded", () => {
  const floatingCirclesContainer = document.querySelector('.floating-circles');

  // Create multiple circles
  for (let i = 0; i < 15; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    // Random size, position, and animation duration
    const size = Math.random() * 60 + 30; // Between 20px and 80px
    const posX = Math.random() * 100; // Between 0% and 100%
    const posY = Math.random() * 100; // Between 0% and 100%
    const duration = Math.random() * 10 + 5; // Between 5s and 15s

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${posY}%`;
    circle.style.left = `${posX}%`;
    circle.style.animationDuration = `${duration}s`;

    floatingCirclesContainer.appendChild(circle);
  }
});


// Erstelle den benutzerdefinierten Cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Bewege den Cursor entsprechend der Mausposition
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});
