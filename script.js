document.addEventListener('DOMContentLoaded', function() {
    // Add smooth entrance animation
    const musicPlayer = document.querySelector('.music-player');
    const vinyl = document.querySelector('.vinyl');
    const bars = document.querySelectorAll('.bar');
    
    // Entrance animation
    setTimeout(() => {
        musicPlayer.style.transform = 'translateY(0)';
        musicPlayer.style.opacity = '1';
    }, 100);
    
    // Pause vinyl animation when video is playing (if we could detect it)
    // This is a placeholder for potential future functionality
    
    // Add click interaction to vinyl
    vinyl.addEventListener('click', () => {
        vinyl.style.animationPlayState = 
            vinyl.style.animationPlayState === 'paused' ? 'running' : 'paused';
    });
    
    // Randomize waveform animation
    function randomizeWaveform() {
        bars.forEach((bar, index) => {
            const randomHeight = Math.random() * 80 + 20;
            const randomDelay = Math.random() * 0.5;
            bar.style.height = randomHeight + '%';
            bar.style.animationDelay = randomDelay + 's';
        });
    }
    
    // Update waveform every 2 seconds
    setInterval(randomizeWaveform, 2000);
    
    // Add initial entrance animation styles
    musicPlayer.style.transform = 'translateY(20px)';
    musicPlayer.style.opacity = '0';
    musicPlayer.style.transition = 'all 0.6s ease-out';
});

