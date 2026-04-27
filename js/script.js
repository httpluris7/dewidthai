// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Validación básica
        if (nombre && email && mensaje) {
            // Aquí se podría enviar a un servidor
            console.log('Formulario enviado:', {
                nombre,
                email,
                telefono,
                mensaje
            });
            
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            contactForm.reset();
        } else {
            alert('Por favor completa todos los campos obligatorios.');
        }
    });
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.clase-card, .benefit-item, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Efecto hover en cards
const cards = document.querySelectorAll('.clase-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cards.forEach(c => c.style.opacity = '0.7');
        card.style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
        cards.forEach(c => c.style.opacity = '1');
    });
});

console.log('🇹🇭 Muay Thai Club Lorquí - Sitio Web Cargado');
