// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.innerWidth <= 768) navLinks.style.display = 'none';
        }
    });
});

// Contact form (demo – replace with backend)
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.innerHTML = 'Sending...';
    status.style.color = '#2563eb';

    // Simulate sending – replace with real API call
    try {
        // If you have a Spring Boot backend, replace URL with your endpoint
        // const res = await fetch('https://your-api.com/contact', { method: 'POST', ... });
        // For now, just show success
        await new Promise(resolve => setTimeout(resolve, 1000));
        status.innerHTML = '✅ Message sent! I\'ll get back soon.';
        status.style.color = '#10b981';
        document.getElementById('contactForm').reset();
    } catch (error) {
        status.innerHTML = '❌ Failed. Please email me directly.';
        status.style.color = '#ef4444';
    }
});

// Scroll animations (optional)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.skill-category, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});