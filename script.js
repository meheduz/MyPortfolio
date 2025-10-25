// Smart Portfolio Features
class SmartPortfolio {
    constructor() {
        this.initTheme();
        this.initProgressBar();
        this.initMobileNav();
        this.initSmoothScroll();
        this.initScrollEffects();
        this.initCounters();
        this.initSkillBars();
        this.initModals();
        this.initBackToTop();
    }

    // Theme Toggle
    initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const savedTheme = localStorage.getItem('theme') || 'light';
        
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.updateThemeIcon(newTheme);
        });
    }

    updateThemeIcon(theme) {
        const icon = document.querySelector('#themeToggle i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Progress Bar
    initProgressBar() {
        const progressBar = document.getElementById('progressBar');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    // Mobile Navigation
    initMobileNav() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth Scrolling
    initSmoothScroll() {
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
    }

    // Scroll Effects
    initScrollEffects() {
        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            
            if (window.scrollY > 50) {
                if (isDark) {
                    navbar.style.background = 'rgba(31, 41, 55, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                }
            } else {
                if (isDark) {
                    navbar.style.background = 'rgba(31, 41, 55, 0.95)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                }
                navbar.style.boxShadow = 'none';
            }
        });

        // Active navigation highlighting
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-menu a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= (sectionTop - 200)) {
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
    }

    // Animated Counters
    initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const observerOptions = { threshold: 0.7 };
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    this.animateCounter(counter, target);
                    counterObserver.unobserve(counter);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => counterObserver.observe(counter));
    }

    animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 40);
    }

    // Skill Bar Animations
    initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const observerOptions = { threshold: 0.5 };
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 200);
                    skillObserver.unobserve(bar);
                }
            });
        }, observerOptions);
        
        skillBars.forEach(bar => skillObserver.observe(bar));
    }

    // Project Modals
    initModals() {
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');
        const closeBtn = document.querySelector('.modal-close');
        const infoButtons = document.querySelectorAll('.project-info');
        
        const projectData = {
            pong: {
                title: '🏓 Pong Game - Technical Details',
                content: `
                    <h3>Implementation Highlights:</h3>
                    <ul>
                        <li><strong>Canvas Rendering:</strong> Smooth 60fps gameplay using HTML5 Canvas API</li>
                        <li><strong>Physics Engine:</strong> Custom ball collision detection and velocity calculations</li>
                        <li><strong>Game Loop:</strong> RequestAnimationFrame for optimal performance</li>
                        <li><strong>Responsive Design:</strong> Adaptive canvas sizing for different screen sizes</li>
                    </ul>
                    <h3>Key Features:</h3>
                    <ul>
                        <li>Real-time paddle movement with smooth interpolation</li>
                        <li>Dynamic ball speed increase system</li>
                        <li>Score persistence using localStorage</li>
                        <li>Sound effects integration</li>
                    </ul>
                `
            },
            snake: {
                title: '🐍 Snake Game - Technical Details',
                content: `
                    <h3>C Programming Excellence:</h3>
                    <ul>
                        <li><strong>Memory Management:</strong> Dynamic linked list for snake body segments</li>
                        <li><strong>Raylib Integration:</strong> Cross-platform graphics and input handling</li>
                        <li><strong>JSON Parsing:</strong> Custom JSON parser for high score persistence</li>
                        <li><strong>State Machine:</strong> Clean game state management (Menu, Playing, GameOver)</li>
                    </ul>
                    <h3>Advanced Features:</h3>
                    <ul>
                        <li>Collision detection algorithms</li>
                        <li>Progressive difficulty scaling</li>
                        <li>Audio system integration</li>
                        <li>Cross-platform compilation</li>
                    </ul>
                `
            }
        };
        
        infoButtons.forEach(button => {
            button.addEventListener('click', () => {
                const project = button.getAttribute('data-project');
                const data = projectData[project];
                modalBody.innerHTML = `<h2>${data.title}</h2>${data.content}`;
                modal.style.display = 'block';
            });
        });
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Back to Top Button
    initBackToTop() {
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Typing Animation
    typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        const type = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        type();
    }

    // Initialize scroll animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        const animateElements = document.querySelectorAll('.experience-card, .project-card, .cert-card, .timeline-item, .skill-category');
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Initialize Smart Portfolio
document.addEventListener('DOMContentLoaded', () => {
    const portfolio = new SmartPortfolio();
    
    // Initialize typing animation
    window.addEventListener('load', () => {
        const heroTitle = document.querySelector('.hero-title');
        const originalText = heroTitle.textContent;
        portfolio.typeWriter(heroTitle, originalText, 80);
    });
    
    // Initialize scroll animations
    portfolio.initScrollAnimations();
});

// Add hover effects to cards
document.querySelectorAll('.experience-card, .cert-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.code-animation');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
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

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--primary-blue) !important;
        position: relative;
    }
    
    .nav-menu a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--primary-blue);
        border-radius: 1px;
    }
`;
document.head.appendChild(style);