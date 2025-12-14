// galaxy.js – ganz einfache, ruhige Galaxie

const canvas = document.getElementById('galaxy');
const ctx = canvas.getContext('2d');

// Canvas immer auf volle Fenstergröße bringen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Mitte des Bildschirms
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Alle Sterne speichern
let stars = [];

// 250 weiße Sterne machen
for (let i = 0; i < 150; i++) {
    stars.push({
        radius: Math.random() * 300 + 50,    // wie weit vom Zentrum
        angle: Math.random() * 360,          // Startposition im Kreis
        speed: 0.002 + Math.random() * 0.004,   // wie schnell sie sich drehen
        size: Math.random() * 1.5 + 0.5      // Größe des Punktes
    });
}

// Die Animation – wird 60x pro Sekunde aufgerufen
function animate() {
    // Leichter schwarzer Schleier → schöne Schweife
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Jeden Stern neu zeichnen
    for (let star of stars) {
        // Stern dreht sich langsam weiter
        star.angle += star.speed;

        // Wo ist der Stern gerade? (Kreisformel)
        let x = centerX + Math.cos(star.angle) * star.radius;
        let y = centerY + Math.sin(star.angle) * star.radius;

        // Stern malen (weißer Punkt)
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
    }

    // Nächstes Bild malen
    requestAnimationFrame(animate);
}

// Los geht die Galaxie!
animate();