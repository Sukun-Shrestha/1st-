// background floating hearts
const bgHearts = document.getElementById('bgHearts');
const heartEmojis = ['🤍', '💗', '💕', '💖', '🌸'];
for (let i = 0; i < 18; i++) {
    const h = document.createElement('div');
    h.className = 'bg-heart';
    h.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animationDuration = (8 + Math.random() * 10) + 's';
    h.style.animationDelay = (Math.random() * 10) + 's';
    h.style.fontSize = (16 + Math.random() * 18) + 'px';
    bgHearts.appendChild(h);
}

// LOGIN VALIDATION
const VALID_NAME = "Jadugar Jiu";
const VALID_PASS = "0904";

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const pass = document.getElementById('passInput').value;
    const errorMsg = document.getElementById('errorMsg');

    if (name === VALID_NAME && pass === VALID_PASS) {
        document.getElementById('login-page').style.transition = 'opacity .8s ease';
        document.getElementById('login-page').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('main-page').style.display = 'block';
            launchBalloons();
            window.scrollTo(0, 0);
        }, 800);
    } else {
        errorMsg.textContent = "That's not quite right, my love 💔 try again...";
    }
});

// BALLOONS
function launchBalloons() {
    const hero = document.getElementById('heroSection');
    const balloonEmojis = ['🎈', '🎈', '🎈', '🎈'];
    for (let i = 0; i < 16; i++) {
        const b = document.createElement('div');
        b.className = 'balloon';
        b.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
        b.style.left = (Math.random() * 90) + '%';
        b.style.animationDuration = (7 + Math.random() * 6) + 's';
        b.style.animationDelay = (Math.random() * 6) + 's';
        b.style.fontSize = (36 + Math.random() * 30) + 'px';
        hero.appendChild(b);
    }
}

// FALLING HEARTS on final section
function launchFallingHearts() {
    const finalSection = document.getElementById('finalSection');
    if (finalSection.dataset.done) return;
    finalSection.dataset.done = "true";

    finalSection.innerHTML = `
      <div class="final-title">Happy 1 Year Anniversary 💗</div>
      <div class="final-names">Shreeya Prajapati • 5footeyy • Nani • Sani • Pandu • Gandu • Puntu</div>
      <div class="final-sub">One year down, forever to go. I love you today, tomorrow, and always, my Jadugar. 🤍</div>
      <div class="final-hearts"><span>🤍</span><span>💖</span><span>🤗</span><span>💕</span><span>🤍</span></div>
    `;
    for (let i = 0; i < 20; i++) {
        const h = document.createElement('div');
        h.className = 'falling-heart';
        h.textContent = ['🤍', '💖', '💕'][Math.floor(Math.random() * 3)];
        h.style.left = Math.random() * 100 + '%';
        h.style.animationDuration = (5 + Math.random() * 6) + 's';
        h.style.animationDelay = (Math.random() * 5) + 's';
        finalSection.appendChild(h);
    }
}

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.id === 'finalSection' || entry.target === document.getElementById('finalSection')) {
                launchFallingHearts();
            }
        }
    });
}, { threshold: 0.25 });

observer.observe(document.getElementById('letterBox'));
observer.observe(document.getElementById('memoriesSection'));

const finalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) launchFallingHearts(); });
}, { threshold: 0.2 });
finalObserver.observe(document.getElementById('finalSection'));