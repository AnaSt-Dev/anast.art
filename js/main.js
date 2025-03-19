// Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(event.target) && 
            !hamburger.contains(event.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Fix for image aspect ratio
    const portfolioImages = document.querySelectorAll('.portfolio-item img');
    portfolioImages.forEach(img => {
        img.style.height = 'auto';
        img.style.paddingBottom = '0';
    });
    
    // Preload images for smoother transitions
    const imageLinks = document.querySelectorAll('.portfolio-item a');
    imageLinks.forEach(link => {
        const img = new Image();
        img.src = link.querySelector('img').src;
    });
});
document.getElementById("portfolio-btn").addEventListener("click", function() {
    alert("Portfolio button clicked!");
});