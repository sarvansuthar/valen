// Get elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const celebration = document.getElementById('celebration');

// Yes button click handler
yesBtn.addEventListener('click', () => {
    celebration.classList.add('show');
    
    // Create confetti effect
    createConfetti();
    
    // Play celebration sound (optional - you can add audio if desired)
    // const audio = new Audio('celebration.mp3');
    // audio.play();
});

// No button click handler - make it move away!
noBtn.addEventListener('mouseenter', () => {
    const box = document.querySelector('.valentine-box');
    const boxRect = box.getBoundingClientRect();
    
    // Get random position within the box
    const maxX = boxRect.width - noBtn.offsetWidth - 40;
    const maxY = boxRect.height - noBtn.offsetHeight - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Move the button
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
});

// Confetti effect
function createConfetti() {
    const colors = ['#ff1493', '#ff69b4', '#ffb6c1', '#ffc0cb', '#fff'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            
            document.body.appendChild(confetti);
            
            const duration = Math.random() * 3 + 2;
            const rotation = Math.random() * 360;
            const xMovement = (Math.random() - 0.5) * 200;
            
            confetti.animate([
                { 
                    transform: 'translateY(0) translateX(0) rotate(0deg)',
                    opacity: 1
                },
                { 
                    transform: `translateY(${window.innerHeight + 10}px) translateX(${xMovement}px) rotate(${rotation}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }, i * 30);
    }
}

// Add click to close celebration
celebration.addEventListener('click', () => {
    celebration.classList.remove('show');
});
