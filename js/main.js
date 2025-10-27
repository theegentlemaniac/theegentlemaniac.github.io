// Loader reveal
window.addEventListener('load', function () {
    const loader = document.getElementById('site-loader');
    const pageWrapper = document.querySelector('.page-wrapper');
    const heroName = document.querySelector('.hero-name .masked-text');
    const greetingEl = document.querySelector('.typing-greeting');

    setTimeout(function () {
        document.body.classList.remove('loading');
        if (loader) loader.classList.add('hide');
        if (pageWrapper) pageWrapper.classList.add('is-visible');
        
        // Start typing greeting animation
        if (greetingEl) {
            greetingEl.classList.add('active');
            startGreetingAnimation(greetingEl, heroName);
        } else if (heroName) {
            // Fallback if greeting element doesn't exist
            heroName.style.animation = 'fadeInName 1.2s ease-out forwards';
        }
    }, 1800);
});

// Typing greeting animation
function startGreetingAnimation(greetingEl, heroName) {
    const text1 = "Hi...";
    const text2 = "I'm Ndumiso";
    let charIndex = 0;
    let phase = 1; // 1: type "Hi...", 2: backspace, 3: type "I'm Ndumiso", 4: backspace to "Ndumiso"
    
    function typeChar() {
        if (phase === 1) {
            // Type "Hi..."
            if (charIndex < text1.length) {
                greetingEl.textContent = text1.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeChar, 150);
            } else {
                // Pause, then start backspacing
                setTimeout(() => {
                    phase = 2;
                    charIndex = text1.length;
                    typeChar();
                }, 800);
            }
        } else if (phase === 2) {
            // Backspace "Hi..."
            if (charIndex > 0) {
                charIndex--;
                greetingEl.textContent = text1.substring(0, charIndex);
                setTimeout(typeChar, 80);
            } else {
                // Start typing "I'm Ndumiso"
                phase = 3;
                charIndex = 0;
                setTimeout(typeChar, 200);
            }
        } else if (phase === 3) {
            // Type "I'm Ndumiso"
            if (charIndex < text2.length) {
                greetingEl.textContent = text2.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeChar, 120);
            } else {
                // Pause, then fade out greeting and fade in hero name
                setTimeout(() => {
                    greetingEl.style.transition = 'opacity 0.6s ease';
                    greetingEl.style.opacity = '0';
                    
                    setTimeout(() => {
                        greetingEl.style.display = 'none';
                        if (heroName) {
                            heroName.style.animation = 'fadeInName 1.2s ease-out forwards';
                        }
                    }, 600);
                }, 1000);
            }
        }
    }
    
    setTimeout(typeChar, 300);
}

// Navbar scroll effect and active link highlight
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute('id');
        const offsetTop = rect.top + window.scrollY;

        if (window.scrollY >= offsetTop - 120 && window.scrollY < offsetTop + rect.height - 120) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        document.querySelector('.nav-links')?.classList.toggle('active');
    });
}

// Smooth scrolling
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        e.preventDefault();
        document.querySelector('.nav-links')?.classList.remove('active');

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Scroll reveal animations - only when scrolling down
const revealElements = document.querySelectorAll('.reveal');
const observeOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
        // Don't remove is-visible when scrolling up - elements stay revealed
    });
}, observeOptions);

revealElements.forEach(el => revealObserver.observe(el));

// Typing effect for dynamic words
const typedTextSpan = document.querySelector('.typed-text');
const textArray = ['Graphic Designer', 'Video Editor', 'Web Developer', 'Creative Technologist'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (!typedTextSpan) return;
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (!typedTextSpan) return;
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (typedTextSpan && textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
});
