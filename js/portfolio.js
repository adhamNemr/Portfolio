/**
 * Adham Nemr Portfolio 2026 - Kinetic Engine
 * Focused on Magnetic Effects and smooth Preloading.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Preloader Logic
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 600);
            }
        }, 1500); 
    });

    // 2. Magnetic Effect for Navigation & Contacts
    const magneticElements = document.querySelectorAll('nav a, .contact-link-item');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            if (el.classList.contains('contact-link-item')) {
                el.style.transform += ` scale(1.05)`;
            }
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0px, 0px) scale(1)`;
        });
    });

    // 3. Scroll Animations & Navbar State
    const navbar = document.getElementById('navbar');
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => revealObserver.observe(el));

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Navbar state
        if (navbar) {
            if (scrolled > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.9)';
                navbar.style.top = '1.5rem';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.7)';
                navbar.style.top = '2rem';
            }
        }

        // Hero Parallax & Fade
        const hero = document.getElementById('hero');
        if (hero && scrolled < 600) {
            const opacity = 1 - (scrolled / 500);
            const yPos = scrolled * 0.4;
            hero.style.opacity = opacity > 0 ? opacity : 0;
            hero.style.transform = `translateY(${yPos}px)`;
        }
    });

    // Init Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
