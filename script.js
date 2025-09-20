// Typewriter effect
const typewriterEl = document.querySelector('.typewriter-js');
const words = ["Designer", "Creative Coder", "Motion Enthusiast"];
let wordIndex = 0, charIndex = 0, deleting = false;

function typeEffect() {
  const word = words[wordIndex];
  if (!deleting) {
    typewriterEl.textContent = word.substring(0, charIndex++);
    if (charIndex > word.length) { deleting = true; setTimeout(typeEffect, 1000); return; }
  } else {
    typewriterEl.textContent = word.substring(0, charIndex--);
    if (charIndex < 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; }
  }
  setTimeout(typeEffect, deleting ? 50 : 120);
}
typeEffect();

// Copy email
document.getElementById('copyEmail').onclick = () => {
  navigator.clipboard.writeText('midlajmk012@gmail.com');
  alert("Email copied!");
};

// Theme toggle
document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('dark');
};

// Particle cursor
const canvas = document.getElementById('cursorCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

document.addEventListener('mousemove', e => {
  particles.push({x:e.clientX,y:e.clientY,alpha:1});
});

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p,i) => {
    ctx.fillStyle = `rgba(59,130,246,${p.alpha})`;
    ctx.beginPath(); ctx.arc(p.x,p.y,4,0,Math.PI*2); ctx.fill();
    p.alpha -= 0.02; if (p.alpha<=0) particles.splice(i,1);
  });
  requestAnimationFrame(animate);
}
animate();
