// Initialize animations and interactions
document.addEventListener("DOMContentLoaded", function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
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

    // Navbar scroll effect and active link highlighting
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        // Add background to navbar on scroll
        if (scrollTop > 100) {
            navbar.style.background = 'var(--navbar-bg-color)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'var(--navbar-bg-color)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
        
        // Update active navigation link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollTop >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Hero section animations
    gsap.timeline()
        .from('.hero-badge', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' })
        .from('.hero-title', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.5')
        .from('.hero-subtitle', { duration: 1, y: 30, opacity: 0, ease: 'power3.out' }, '-=0.5')
        .from('.hero-description', { duration: 1, y: 30, opacity: 0, ease: 'power3.out' }, '-=0.3')
        .from('.hero-buttons .btn', { 
            duration: 0.8, 
            y: 30, 
            opacity: 0, 
            stagger: 0.2, 
            ease: 'power3.out' 
        }, '-=0.3')
        .from('.hero-stats .stat-item', { 
            duration: 0.8, 
            y: 30, 
            opacity: 0, 
            stagger: 0.1, 
            ease: 'power3.out' 
        }, '-=0.5')
        .from('.code-terminal', { 
            duration: 1.2, 
            scale: 0.8, 
            opacity: 0, 
            ease: 'back.out(1.7)' 
        }, '-=0.8');

    // Fade in animations for sections
    gsap.utils.toArray('.fade-in').forEach(element => {
        gsap.fromTo(element, 
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Portfolio cards animation
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.fromTo(card,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Skills cards animation
    gsap.utils.toArray('.skill-category').forEach((skill, index) => {
        gsap.fromTo(skill,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: skill,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // About stats animation
    gsap.utils.toArray('.stat').forEach((stat, index) => {
        gsap.fromTo(stat,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Freelance platforms animation
    gsap.utils.toArray('.platform-card').forEach((card, index) => {
        gsap.fromTo(card,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: index * 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Contact cards animation
    gsap.utils.toArray('.contact-card').forEach((card, index) => {
        gsap.fromTo(card,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Magnetic effect for interactive elements
    const magneticElements = document.querySelectorAll('.magnetic-item, .btn, .project-card, .platform-card, .social-link');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(element, {
                duration: 0.3,
                x: x * 0.1,
                y: y * 0.1,
                ease: 'power2.out'
            });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });

    // Floating animation for code terminal
    gsap.to('.code-terminal', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
    });

    // Terminal typing animation
    const outputLines = document.querySelectorAll('.output-line');
    outputLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        
        gsap.to(line, {
            duration: 0.02 * text.length,
            delay: index * 0.8 + 1,
            ease: 'none',
            onUpdate: function() {
                const progress = this.progress();
                const currentLength = Math.floor(progress * text.length);
                line.textContent = text.substring(0, currentLength);
            }
        });
    });

    // Counter animations for stats
    const animateCounter = (element, target) => {
        gsap.fromTo(element, 
            { textContent: 0 },
            {
                textContent: target,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                onUpdate: function() {
                    element.textContent = Math.floor(this.targets()[0].textContent) + '+';
                }
            }
        );
    };

    // Initialize counters
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const targetText = stat.textContent;
        const target = parseInt(targetText.replace(/\D/g, ''));
        if (target > 0) {
            animateCounter(stat, target);
        }
    });

    // Form submission handling
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            gsap.to('.contact-form-container', {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut',
                onComplete: () => {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                }
            });
        });
    }

    // Parallax effect for hero background
    gsap.to('.hero::before', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Social links hover animations
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                scale: 1.1,
                rotation: 5,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
    });

    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Additional scroll-based animations can go here
        }, 10);
    });

    console.log('🚀 Website loaded successfully!');
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Add mobile menu styles dynamically
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.98);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            backdrop-filter: blur(10px);
            padding: 2rem 0;
            gap: 1rem;
        }

        .nav-menu.active {
            left: 0;
        }

        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe individual cards and timeline items
document.querySelectorAll('.project-card, .timeline-item, .skill-category, .stat').forEach(item => {
    observer.observe(item);
});

// Active navigation highlight
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add active nav link styles
const navLinkStyle = document.createElement('style');
navLinkStyle.textContent = `
    .nav-link.active {
        color: #2563eb;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(navLinkStyle);

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const project = this.querySelector('input[type="text"]:nth-of-type(2)').value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 90px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 400px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        .notification-success {
            background: #10b981;
        }
        .notification-error {
            background: #ef4444;
        }
        .notification-info {
            background: #2563eb;
        }
        .notification.show {
            transform: translateX(0);
        }
    `;
    
    // Add styles if they don't exist
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = notificationStyles;
        document.head.appendChild(styleSheet);
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Typing animation for hero section
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 30);
        }, 500);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const codeSnippet = document.querySelector('.code-snippet');
    
    if (heroContent && window.innerWidth > 768) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (codeSnippet && window.innerWidth > 768) {
        codeSnippet.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (target >= 100 ? '+' : '');
    }, 16);
}

// Trigger counter animations when stats section is visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// Add loading animation to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(function() {
    updateActiveNavLink();
}));

console.log('Personal Website Loaded Successfully! 🚀');
