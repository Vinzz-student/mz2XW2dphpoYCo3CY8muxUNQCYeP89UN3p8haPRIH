document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi elemen
    const confettiBtn = document.getElementById('confetti-btn');
    const wishBtn = document.getElementById('wish-btn');
    const balloonBtn = document.getElementById('balloon-btn');
    const sendMessageBtn = document.getElementById('send-message');
    const customMessageInput = document.getElementById('custom-message');
    const messagesList = document.getElementById('messages-list');
    const wishText = document.getElementById('wish-text');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Daftar ucapan kejutan
    const wishes = [
        "Semoga kesehatan dan kebahagiaan selalu menyertaimu! 💖",
        "Semoga sukses selalu menghampiri dalam segala usahamu! 🏆",
        "Semoga tahun ini penuh dengan petualangan dan pengalaman baru! ✨",
        "Semoga kamu selalu dikelilingi oleh orang-orang yang mencintaimu! 👨‍👩‍👧‍👦",
        "Semoga setiap langkahmu membawa keberuntungan dan kebahagiaan! 🍀",
        "Semoga tawa dan sukacita selalu mengisi hari-harimu! 😄",
        "Semoga tahun ini menjadi tahun terbaik dalam hidupmu! 🎯"
    ];
    
    // Fungsi untuk konfeti
    confettiBtn.addEventListener('click', function() {
        // Gunakan fungsi dari konfeti.js
        triggerConfetti();
        
        // Tambahkan efek visual tambahan
        this.innerHTML = '<i class="fas fa-birthday-cake"></i> Konfeti Telah Dilepaskan!';
        this.style.background = 'linear-gradient(to right, #FF416C, #FF4B2B)';
    
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-birthday-cake"></i> Tunjukkan Konfeti Lagi!';
            this.style.background = 'linear-gradient(to right,rgb(221, 48, 48),rgb(255, 107, 8))';
        }, 2000);
    });
    
    // Fungsi untuk ucapan kejutan
    wishBtn.addEventListener('click', function() {
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        wishText.textContent = randomWish;
        
        // Efek animasi pada teks
        wishText.style.opacity = '0';
        wishText.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            wishText.style.transition = 'all 0.5s ease';
            wishText.style.opacity = '1';
            wishText.style.transform = 'translateY(0)';
        }, 10);
        
        // Tambahkan sedikit konfeti
        setTimeout(() => {
            triggerConfetti(50, 1000);
        }, 300);

        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-star"></i>Dapatkan Ucapan Kejutan Lagi';
            this.style.background = 'linear-gradient(to right,rgb(220, 54, 54),rgb(255, 60, 0))';
        }, 2000);
    });
    
    // Fungsi untuk tiup balon
    balloonBtn.addEventListener('click', function() {
        // Buat elemen balon baru
        const balloon = document.createElement('div');
        balloon.className = 'floating balloon-new';
        balloon.innerHTML = '🎈';
        balloon.style.position = 'absolute';
        balloon.style.fontSize = '3rem';
        balloon.style.left = Math.random() * 80 + 10 + '%';
        balloon.style.top = '100%';
        balloon.style.animation = 'balloonRise 4s linear forwards';
        
        document.querySelector('.floating-elements').appendChild(balloon);
        
        // Tambahkan CSS untuk animasi balon naik
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes balloonRise {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(20deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Hapus balon setelah animasi selesai
        setTimeout(() => {
            balloon.remove();
            style.remove();
        }, 4000);
        
        // Efek tombol
        this.innerHTML = '<i class="fas fa-air-freshener"></i> Balon Ditiup!';
        this.style.background = 'linear-gradient(to right, #FF5E62, #FF9966)';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-air-freshener"></i> Tiup Balon Lagi!';
            this.style.background = 'linear-gradient(to right,rgb(220, 54, 54),rgb(255, 60, 0))';
        }, 2000);
    });
    
    // Fungsi untuk mengirim pesan
    sendMessageBtn.addEventListener('click', function() {
        const message = customMessageInput.value.trim();
        
        if (message) {
            // Buat elemen pesan baru
            const messageItem = document.createElement('div');
            messageItem.className = 'message-item';
            messageItem.innerHTML = `
                <p class="message-content">${message}</p>
                <p class="message-author">- Kamu</p>
            `;
            
            // Tambahkan ke daftar pesan
            messagesList.prepend(messageItem);
            
            // Reset input
            customMessageInput.value = '';
            
            // Efek visual
            messageItem.style.opacity = '0';
            messageItem.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                messageItem.style.transition = 'all 0.5s ease';
                messageItem.style.opacity = '1';
                messageItem.style.transform = 'translateY(0)';
            }, 10);
            
            // Tampilkan konfeti kecil
            setTimeout(() => {
                triggerConfetti(30, 800);
            }, 300);
        } else {
            alert('Silakan tulis ucapan terlebih dahulu!');
        }
    });
    
    // Fungsi hitung mundur ke ulang tahun berikutnya (set ke 1 Januari tahun depan)
    function updateCountdown() {
        const now = new Date();
        const currentYear = now.getFullYear();
        let nextBirthday = new Date(currentYear + 1, 0, 1); // 1 Januari tahun depan
        
        // Hitung selisih waktu
        const diff = nextBirthday - now;
        
        // Hitung hari, jam, menit, detik
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Update elemen
        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    }
    
    // Update countdown setiap detik
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Panggil sekali saat halaman dimuat
    
    // Tambahkan efek hover pada kartu
    const cards = document.querySelectorAll('.message-card, .countdown-card, .surprise-card, .marquee-card, .personal-message-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.06)';
        });
    });
    
    // Animasi lilin secara bergantian
    const flames = document.querySelectorAll('.flame');
    flames.forEach((flame, index) => {
        flame.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Tampilkan konfeti kecil saat halaman dimuat
    setTimeout(() => {
        triggerConfetti(20, 1500);
    }, 1000);
});