// ============================================
// PORTFOLIO DATA - JSON CONFIGURATION
// ============================================

let portfolioData = {};

// ============================================
// LOAD JSON DATA
// ============================================

async function loadPortfolioData() {
    try {
        const response = await fetch('portfolioData.json');
        portfolioData = await response.json();
        console.log("JSON Loaded:", portfolioData);
        initializePortfolio();
    } catch (error) {
        console.error('Error loading portfolio data:', error);
        // Fallback data if JSON fails to load
        // portfolioData = {
        //     hero: {
        //         name: "Alex Rivera",
        //         role: "Graphic Designer",
        //         tagline: "Transforming ideas into stunning visual experiences"
        //     },
        //     about: {
        //         bio: "I'm a passionate graphic designer with a keen eye for detail and a love for creating beautiful, functional designs. With years of experience in branding, visual identity, and digital design, I bring creativity and innovation to every project.",
        //         location: "Mumbai, India",
        //         experience: "5+ Years"
        //     },
        //     contact: {
        //         phone: "+91 9876543210",
        //         email: "hello@alexdesign.com"
        //     },
        //     social: [
        //         { name: "Instagram", link: "https://instagram.com", icon: "fab fa-instagram" },
        //         { name: "Behance", link: "https://behance.net", icon: "fab fa-behance" },
        //         { name: "Dribbble", link: "https://dribbble.com", icon: "fab fa-dribbble" },
        //         { name: "LinkedIn", link: "https://linkedin.com", icon: "fab fa-linkedin" }
        //     ],
        //     tools: [
        //         { name: "Corel Draw", icon: "fas fa-paint-brush", proficiency: 95 },
        //         { name: "Figma", icon: "fab fa-figma", proficiency: 90 },
        //         { name: "Photoshop", icon: "fas fa-image", proficiency: 92 },
        //         { name: "Illustrator", icon: "fas fa-vector-square", proficiency: 88 },
        //         { name: "InDesign", icon: "fas fa-file-alt", proficiency: 85 },
        //         { name: "After Effects", icon: "fas fa-video", proficiency: 80 }
        //     ],
        //     projects: [
        //         { title: "Modern Brand Identity", category: "Logo", image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=600&h=400&fit=crop" },
        //         { title: "Social Media Campaign", category: "Poster", image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop" },
        //         { title: "Corporate Brochure", category: "Brochure", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop" },
        //         { title: "Tech Startup Logo", category: "Logo", image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400&fit=crop" },
        //         { title: "Event Promotional Poster", category: "Poster", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" },
        //         { title: "Web Banner Design", category: "Banner", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop" },
        //         { title: "Restaurant Brand", category: "Logo", image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop" },
        //         { title: "Product Catalog", category: "Brochure", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop" },
        //         { title: "Music Festival Poster", category: "Poster", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop" }
        //     ]
        // };
        initializePortfolio();
    }
}

// ============================================
// INITIALIZE PORTFOLIO
// ============================================

function initializePortfolio() {
    populateHeroSection();
    populateAboutSection();
    populateToolsSection();
    populateProjectsSection();
    populateContactSection();
    populateFooter();
    // initAnimations();
}

// ============================================
// POPULATE SECTIONS FROM JSON
// ============================================

function populateHeroSection() {
    const { hero } = portfolioData;

    // Set logo in navbar
    document.querySelector('.logo-text').textContent = hero.name.split(' ')[0];

    // Hero content
    document.querySelector('.hero-name').textContent = hero.name;
    document.querySelector('.hero-role').textContent = hero.role;
    document.querySelector('.hero-tagline').textContent = hero.tagline;

    // Typing effect for role
    typeWriter(document.querySelector('.hero-role'), hero.role, 100);
}

function populateAboutSection() {
    const { about, contact, social } = portfolioData;

    // About content
    document.querySelector('.about-bio').textContent = about.bio;
    document.querySelector('.info-experience').textContent = about.experience;
    document.querySelector('.info-location').textContent = about.location;

    // Personal info
    document.querySelector('.phone-value').textContent = contact.phone;
    document.querySelector('.email-value').textContent = contact.email;

    // Social links
    const socialLinksContainer = document.getElementById('socialLinks');
    socialLinksContainer.innerHTML = social.map(item => `
        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="social-link" title="${item.name}">
            <i class="${item.icon}"></i>
        </a>
    `).join('');
}

function populateToolsSection() {
    const { tools } = portfolioData;
    const toolsGrid = document.getElementById('toolsGrid');

    toolsGrid.innerHTML = tools.map(tool => `
        <div class="tool-card">
            <div class="tool-icon">
                <i class="${tool.icon}"></i>
            </div>
            <h3 class="tool-name">${tool.name}</h3>
            <div class="tool-progress">
                <div class="tool-progress-bar" data-progress="${tool.proficiency}"></div>
            </div>
            <span class="tool-percentage">${tool.proficiency}%</span>
        </div>
    `).join('');
}

function populateProjectsSection() {
    const { projects } = portfolioData;
    const projectsGrid = document.getElementById('projectsGrid');

    // Get unique categories
    // const categories = [...new Set(projects.map(p => p.category))];
    const categories = ['All', ...new Set(projects.map(p => p.category))];


    // Create filter buttons
    const filterContainer = document.querySelector('.project-filters');
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.filter = category.toLowerCase();
        btn.textContent = category;
        filterContainer.appendChild(btn);
    });

    // Create project cards
    projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card" data-category="${project.category.toLowerCase()}" data-index="${index}">
            <img src="${project.image}" alt="${project.title}" class="project-image lazy-load">
            <div class="project-overlay">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <button class="project-view-btn">
                    <span>View Project</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `).join('');

    // Lazy load images
    lazyLoadImages();

    // Initialize project filters
    initProjectFilters();
}

function populateContactSection() {
    const { contact } = portfolioData;

    document.querySelector('.contact-email-display').textContent = contact.email;
    document.querySelector('.contact-phone-display').textContent = contact.phone;
}

function populateFooter() {
    const { hero, social } = portfolioData;

    // Footer brand
    document.querySelector('.footer-logo').textContent = hero.name.split(' ')[0];
    document.querySelector('.footer-name').textContent = hero.name;

    // Footer social
    const footerSocial = document.getElementById('footerSocial');
    footerSocial.innerHTML = social.map(item => `
        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="social-link" title="${item.name}">
            <i class="${item.icon}"></i>
        </a>
    `).join('');

    // Current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// ============================================
// TYPING EFFECT
// ============================================

function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    setTimeout(type, 1000);
}

// ============================================
// THEME SYSTEM
// ============================================

// Preset themes
const themes = {
    neon: { primary: '#00e5ff', secondary: '#7c7cff' },
    purple: { primary: '#a855f7', secondary: '#ec4899' },
    gold: { primary: '#fbbf24', secondary: '#f59e0b' },
    cyber: { primary: '#10b981', secondary: '#06b6d4' },
    sunset: { primary: '#f97316', secondary: '#ef4444' },
    ocean: { primary: '#3b82f6', secondary: '#0ea5e9' }
};

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme-mode');
    const savedPrimaryColor = localStorage.getItem('primary-color');
    const savedSecondaryColor = localStorage.getItem('secondary-color');

    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('#themeToggle i').classList.replace('fa-moon', 'fa-sun');
    }

    if (savedPrimaryColor && savedSecondaryColor) {
        applyThemeColors(savedPrimaryColor, savedSecondaryColor);
    }
}

// Apply theme colors
function applyThemeColors(primary, secondary) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);

    // Update gradient
    const gradient = `linear-gradient(135deg, ${primary}, ${secondary})`;
    document.documentElement.style.setProperty('--gradient-primary', gradient);

    // Update glow
    const glow = `0 0 20px ${primary}, 0 0 40px ${primary}`;
    document.documentElement.style.setProperty('--glow-primary', glow);

    localStorage.setItem('primary-color', primary);
    localStorage.setItem('secondary-color', secondary);
}

// Theme toggle (dark/light)
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = document.querySelector('#themeToggle i');

    if (document.body.classList.contains('light-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme-mode', 'light');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme-mode', 'dark');
    }
});

// Theme picker modal
const themePicker = document.getElementById('themePicker');
const themePickerBtn = document.getElementById('themePickerBtn');
const closePicker = document.getElementById('closePicker');

themePickerBtn.addEventListener('click', () => {
    themePicker.classList.add('active');
});

closePicker.addEventListener('click', () => {
    themePicker.classList.remove('active');
});

// Close on outside click
themePicker.addEventListener('click', (e) => {
    if (e.target === themePicker) {
        themePicker.classList.remove('active');
    }
});

// Preset theme buttons
document.querySelectorAll('.preset-theme').forEach(btn => {
    btn.addEventListener('click', () => {
        const themeName = btn.dataset.theme;
        const theme = themes[themeName];
        applyThemeColors(theme.primary, theme.secondary);
        showToast('Theme applied successfully!', 'success');
    });
});

// Custom color picker
document.getElementById('primaryColorPicker').addEventListener('change', (e) => {
    const primaryColor = e.target.value;
    // Auto-generate complementary secondary color
    const secondaryColor = adjustColor(primaryColor, 30);
    applyThemeColors(primaryColor, secondaryColor);
    showToast('Custom color applied!', 'success');
});

// Helper function to adjust color
function adjustColor(color, amount) {
    const num = parseInt(color.replace('#', ''), 16);
    const r = (num >> 16) + amount;
    const g = ((num >> 8) & 0x00FF) + amount;
    const b = (num & 0x0000FF) + amount;
    return '#' + (0x1000000 + (r < 255 ? r < 1 ? 0 : r : 255) * 0x10000 +
        (g < 255 ? g < 1 ? 0 : g : 255) * 0x100 +
        (b < 255 ? b < 1 ? 0 : b : 255))
        .toString(16).slice(1);
}

// ============================================
// CUSTOM CURSOR
// ============================================

const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth cursor following
    cursorX += (mouseX - cursorX) * 0.9;
    cursorY += (mouseY - cursorY) * 0.9;

    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    cursorDot.style.left = cursorX + 'px';
    cursorDot.style.top = cursorY + 'px';

    cursorOutline.style.left = outlineX + 'px';
    cursorOutline.style.top = outlineY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();

// ============================================
// NAVIGATION
// ============================================

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

let lastScroll = 0;

// Navbar hide/show on scroll
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }



    lastScroll = currentScroll;

    // Update scroll progress
    updateScrollProgress();

    // Show/hide back to top button
    toggleBackToTop();
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section, .hero-section');

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
        }
    });
});

// Smooth scroll
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        const offsetTop = targetSection.offsetTop - 80;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        // Close mobile menu
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ============================================
// SCROLL PROGRESS BAR
// ============================================

function updateScrollProgress() {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

const backToTop = document.getElementById('backToTop');

function toggleBackToTop() {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// PROJECT FILTERS
// ============================================

// function initProjectFilters() {
//     const filterBtns = document.querySelectorAll('.filter-btn');
//     const projectCards = document.querySelectorAll('.project-card');

//     filterBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             // Remove active class from all buttons
//             filterBtns.forEach(b => b.classList.remove('active'));
//             btn.classList.add('active');

//             const filter = btn.dataset.filter;

//             projectCards.forEach(card => {
//                 if (filter === 'all' || card.dataset.category === filter) {
//                     card.classList.remove('hidden');
//                     gsap.fromTo(card,
//                         { opacity: 0, scale: 0.8 },
//                         { opacity: 1, scale: 1, duration: 0.5 }
//                     );
//                 } else {
//                     card.classList.add('hidden');
//                 }
//             });
//         });
//     });
// }

function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}


// ============================================
// COPY TO CLIPBOARD
// ============================================

document.querySelectorAll('.personal-card').forEach(card => {
    card.addEventListener('click', () => {
        const type = card.dataset.copy;
        let textToCopy = '';

        if (type === 'phone') {
            textToCopy = document.querySelector('.phone-value').textContent;
        } else if (type === 'email') {
            textToCopy = document.querySelector('.email-value').textContent;
        }

        navigator.clipboard.writeText(textToCopy).then(() => {
            showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} copied to clipboard!`, 'success');
        });
    });
});

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate form
    let isValid = true;
    const formGroups = contactForm.querySelectorAll('.form-group');

    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const error = group.querySelector('.form-error');

        if (!input.value.trim()) {
            isValid = false;
            group.classList.add('error');
            error.textContent = 'This field is required';
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            isValid = false;
            group.classList.add('error');
            error.textContent = 'Please enter a valid email';
        } else {
            group.classList.remove('error');
            error.textContent = '';
        }
    });

    if (isValid) {
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
            submitBtn.disabled = false;
            contactForm.reset();
            showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        }, 2000);
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastIcon = toast.querySelector('.toast-icon');
    const toastMessage = toast.querySelector('.toast-message');

    toast.className = `toast ${type}`;
    toastIcon.className = `toast-icon ${type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'}`;
    toastMessage.textContent = message;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

function lazyLoadImages() {
    const images = document.querySelectorAll('.lazy-load');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// PAGE LOADER
// ============================================

window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');

    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);
});

// ============================================
// GSAP ANIMATIONS
// ============================================

// function initAnimations() {
//     // Register ScrollTrigger plugin
//     gsap.registerPlugin(ScrollTrigger);

//     // Hero section animations
//     gsap.from('.hero-greeting', {
//         opacity: 0,
//         y: -30,
//         duration: 1,
//         delay: 1.8
//     });

//     gsap.from('.hero-name', {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         delay: 2
//     });

//     gsap.from('.hero-role-wrapper', {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         delay: 2.2
//     });

//     gsap.from('.hero-tagline', {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         delay: 2.4
//     });

//     gsap.from('.hero-cta .btn', {
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         delay: 2.6,
//         stagger: 0.2
//     });

//     gsap.from('.scroll-indicator', {
//         opacity: 0,
//         y: 20,
//         duration: 1,
//         delay: 2.8
//     });

//     // Floating shapes animation
//     gsap.to('.floating-shape', {
//         y: '+=30',
//         rotation: '+=10',
//         duration: 3,
//         ease: 'sine.inOut',
//         stagger: 0.5,
//         repeat: -1,
//         yoyo: true
//     });

//     // Section animations on scroll
//     gsap.utils.toArray('.section').forEach(section => {
//         gsap.from(section.querySelector('.section-header'), {
//             opacity: 0,
//             y: 50,
//             duration: 1,
//             scrollTrigger: {
//                 trigger: section,
//                 start: 'top 80%',
//                 end: 'top 50%',
//                 toggleActions: 'play none none reverse'
//             }
//         });
//     });

//     // About section
//     gsap.from('.about-image-wrapper', {
//         opacity: 0,
//         x: -100,
//         duration: 1,
//         scrollTrigger: {
//             trigger: '.about-section',
//             start: 'top 70%'
//         }
//     });

//     gsap.from('.about-content', {
//         opacity: 0,
//         x: 100,
//         duration: 1,
//         scrollTrigger: {
//             trigger: '.about-section',
//             start: 'top 70%'
//         }
//     });

//     gsap.from('.info-card', {
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         stagger: 0.2,
//         scrollTrigger: {
//             trigger: '.about-info-grid',
//             start: 'top 80%'
//         }
//     });

//     // Tools section - Cards
//     gsap.from('.tool-card', {
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         stagger: 0.15,
//         scrollTrigger: {
//             trigger: '.tools-grid',
//             start: 'top 75%'
//         }
//     });

//     // Animate skill progress bars
//     gsap.utils.toArray('.tool-progress-bar').forEach(bar => {
//         const progress = bar.dataset.progress;

//         gsap.to(bar, {
//             width: progress + '%',
//             duration: 1.5,
//             ease: 'power2.out',
//             scrollTrigger: {
//                 trigger: bar,
//                 start: 'top 85%'
//             }
//         });
//     });

//     // Projects section
//     gsap.from('.filter-btn', {
//         opacity: 0,
//         y: 20,
//         duration: 0.6,
//         stagger: 0.1,
//         scrollTrigger: {
//             trigger: '.project-filters',
//             start: 'top 80%'
//         }
//     });

//     gsap.from('.project-card', {
//         opacity: 0,
//         scale: 0.8,
//         duration: 0.8,
//         stagger: 0.1,
//         scrollTrigger: {
//             trigger: '.projects-grid',
//             start: 'top 70%'
//         }
//     });

//     // Contact section
//     gsap.from('.contact-info', {
//         opacity: 0,
//         x: -80,
//         duration: 1,
//         scrollTrigger: {
//             trigger: '.contact-section',
//             start: 'top 70%'
//         }
//     });

//     gsap.from('.contact-form-wrapper', {
//         opacity: 0,
//         x: 80,
//         duration: 1,
//         scrollTrigger: {
//             trigger: '.contact-section',
//             start: 'top 70%'
//         }
//     });

//     // Footer animation
//     gsap.from('.footer-content', {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         scrollTrigger: {
//             trigger: '.footer',
//             start: 'top 85%'
//         }
//     });
// }

// ============================================
// INITIALIZE ON LOAD
// ============================================

// document.addEventListener('DOMContentLoaded', () => {
//     loadTheme();
//     loadPortfolioData();
// });

window.onload = () => {
    loadTheme();
    loadPortfolioData();
};
