// script.js
document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('customcontent');

    setTimeout(function() {
        loadingScreen.style.display = 'none';
        loadingScreen.classList.remove('h-100');
        loadingScreen.style.height = '0';
        loadingScreen.style.overflow = 'hidden';
        content.style.display = 'block';
        initializeParticles()
        startAnimation();
    }, 500); 
});
