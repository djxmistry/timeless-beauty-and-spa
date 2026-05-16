// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== GALLERY LIGHTBOX =====
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxModal = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

// Open lightbox on image click
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightboxImage.src = this.src;
        lightboxImage.alt = this.alt;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox
if (lightboxClose) {
    lightboxClose.addEventListener('click', function() {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close lightbox when clicking outside the image
if (lightboxModal) {
    lightboxModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Navigate lightbox with arrow keys
document.addEventListener('keydown', function(e) {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    
    const items = Array.from(galleryItems);
    const currentIndex = items.findIndex(item => item.src === lightboxImage.src);
    
    if (e.key === 'ArrowRight' && currentIndex < items.length - 1) {
        lightboxImage.src = items[currentIndex + 1].src;
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        lightboxImage.src = items[currentIndex - 1].src;
    }
});

// ===== HERO BUTTON ACTION =====
const heroBtn = document.querySelector('.hero-btn');
if (heroBtn) {
    heroBtn.addEventListener('click', function(e) {
        // Smooth scroll to contact is handled by the href="#contact"
        // This event listener is optional for additional functionality
    });
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (navbar && scrollTop > 100) {
        navbar.style.boxShadow = '0 6px 30px rgba(0,0,0,0.15)';
    } else if (navbar) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===== ACTIVE SECTION HIGHLIGHTING =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            link.style.color = '#be123c';
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and review cards for animation
document.querySelectorAll('.service-text, .review-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===== PAGE LOAD EVENT =====
window.addEventListener('load', function() {
    console.log('Timeless Beauty Spa website loaded successfully!');
    
    // Add animation to hero on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
});

// ===== MOBILE MENU TOGGLE (if needed in future) =====
// This placeholder is for future mobile menu functionality

// ===== CONTACT BUTTON CLICK =====
document.addEventListener('DOMContentLoaded', function() {
    // All contact links use href="#contact" which is handled by smooth scroll above
    // WhatsApp links are direct href to WhatsApp API
});

// ===== PERFORMANCE: LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ===== COUNTER ANIMATION (for stats if added) =====
function animateCounter(element, target, duration = 1000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===== FORM VALIDATION (if contact form is added) =====
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#e11d48';
            isValid = false;
        } else {
            input.style.borderColor = '#d1d5db';
        }
    });
    
    return isValid;
}

// ===== BUTTON RIPPLE EFFECT =====
document.querySelectorAll('.hero-btn, button, a[class*="btn"]').forEach(button => {
    button.addEventListener('click', function(e) {
        // Ripple effect code
    });
});

console.log('🌸 Timeless Beauty & Spa - JavaScript initialized');
const gallery = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".lightbox-close");

gallery.forEach(img=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex";
lightboxImg.src=img.src;
});
});

closeBtn.addEventListener("click",()=>{
lightbox.style.display="none";
});

lightbox.addEventListener("click",(e)=>{
if(e.target!==lightboxImg){
lightbox.style.display="none";
}
});