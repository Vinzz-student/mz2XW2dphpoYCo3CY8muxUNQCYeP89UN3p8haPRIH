// Fungsi untuk memicu konfeti
function triggerConfetti(particleCount = 40, duration = 3000) {
    const end = Date.now() + duration;
    const colors = ['#8a4baf', '#c86dd7', '#36d1dc', '#5b86e5', '#ff9a9e', '#fecfef'];
    
    (function frame() {
        // Launch a few confetti from the left edge
        confetti({
            particleCount: particleCount / 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        
        // Launch a few confetti from the right edge
        confetti({
            particleCount: particleCount / 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });
        
        // Launch confetti from the center
        confetti({
            particleCount: particleCount / 2,
            angle: 90,
            spread: 100,
            origin: { x: 0.5, y: 0.8 },
            colors: colors,
            scalar: 1.2
        });
        
        // Keep going until time is up
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Fungsi konfeti berbentuk hati
function heartConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        shapes: ['circle', 'heart'],
        colors: ['#ff9a9e', '#fad0c4', '#fad0c4']
    });
}

// Fungsi konfeti ledakan
function burstConfetti() {
    confetti({
        particleCount: 150,
        spread: 360,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#8a4baf', '#c86dd7', '#36d1dc', '#5b86e5']
    });
}

// Ekspor fungsi untuk digunakan di file lain
window.triggerConfetti = triggerConfetti;
window.heartConfetti = heartConfetti;
window.burstConfetti = burstConfetti;