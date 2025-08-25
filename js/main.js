// Team B - Professional & Trust JavaScript
// プロフェッショナルで信頼感のあるインタラクション

document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP if available
    if (typeof gsap !== 'undefined') {
        initializeAdvancedHoverEffects();
    }
    
    // Mobile Navigation - Hamburger Menu
    initMobileNavigation();
    
    // Form validation and enhancement
    const form = document.getElementById('contact-form');
    const submitButton = document.querySelector('.btn-submit');
    
    if (form) {
        // Add form validation
        form.addEventListener('submit', function(e) {
            if (!validateForm()) {
                e.preventDefault();
                return false;
            }
            
            // Add loading state to submit button
            submitButton.classList.add('loading');
            submitButton.textContent = '送信中...';
            submitButton.disabled = true;
        });
        
        // Real-time validation
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for sticky header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const animatedElements = document.querySelectorAll('.issue-card, .category-card, .process-step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Professional header behavior
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--bg-white)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Form accessibility enhancements
    enhanceFormAccessibility();
    
    // Initialize professional interactions
    initProfessionalInteractions();
});

function validateForm() {
    const form = document.getElementById('contact-form');
    let isValid = true;
    
    // Validate required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Validate email format
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && !validateEmail(emailField.value)) {
        showFieldError(emailField, '正しいメールアドレスを入力してください');
        isValid = false;
    }
    
    // Validate phone number format
    const phoneField = form.querySelector('input[name="phone"]');
    if (phoneField && phoneField.value && !validatePhone(phoneField.value)) {
        showFieldError(phoneField, '正しい電話番号を入力してください（例：03-1234-5678）');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'この項目は必須です');
        return false;
    }
    
    if (field.type === 'email' && value && !validateEmail(value)) {
        showFieldError(field, '正しいメールアドレスを入力してください');
        return false;
    }
    
    clearFieldError(field);
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Japanese phone number format validation
    const phoneRegex = /^[\d\-\+\(\)\s]+$/;
    return phoneRegex.test(phone) && phone.replace(/[\-\+\(\)\s]/g, '').length >= 10;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#e74c3c';
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorElement);
    
    // Add aria-describedby for accessibility
    const errorId = 'error-' + field.name;
    errorElement.id = errorId;
    field.setAttribute('aria-describedby', errorId);
    field.setAttribute('aria-invalid', 'true');
}

function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    field.style.borderColor = '#e8f1ed';
    field.removeAttribute('aria-describedby');
    field.setAttribute('aria-invalid', 'false');
}

function enhanceFormAccessibility() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    // Add ARIA labels and descriptions
    const formFields = form.querySelectorAll('.form-control');
    formFields.forEach(field => {
        const label = form.querySelector(`label[for="${field.id}"]`) || 
                      field.parentNode.querySelector('label');
        
        if (label && !field.hasAttribute('aria-label')) {
            field.setAttribute('aria-label', label.textContent);
        }
        
        // Add required indication for screen readers
        if (field.hasAttribute('required')) {
            const labelText = label ? label.textContent : field.getAttribute('aria-label');
            if (labelText && !labelText.includes('必須')) {
                field.setAttribute('aria-label', labelText + ' (必須)');
            }
        }
    });
    
    // Enhance checkbox group accessibility
    const checkboxGroups = form.querySelectorAll('.checkbox-group');
    checkboxGroups.forEach((group, index) => {
        const groupId = `checkbox-group-${index}`;
        group.setAttribute('role', 'group');
        group.setAttribute('aria-labelledby', groupId);
        
        const legend = group.previousElementSibling;
        if (legend && legend.tagName === 'LABEL') {
            legend.id = groupId;
        }
    });
}

function initProfessionalInteractions() {
    // Add subtle hover effects for cards
    const cards = document.querySelectorAll('.issue-card, .category-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Professional table interactions
    const tableRows = document.querySelectorAll('.comparison-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(44, 95, 65, 0.05)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Enhance button interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        // Add focus ring for accessibility
        button.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        button.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Professional scroll indicator
    createScrollIndicator();
    
    // Add keyboard navigation support
    enhanceKeyboardNavigation();
}

function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--primary-color);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', function() {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        indicator.style.width = scrolled + '%';
    });
}

function enhanceKeyboardNavigation() {
    // Add skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const mainContent = document.querySelector('main') || document.querySelector('#main-content');
            if (mainContent) {
                mainContent.setAttribute('tabindex', '-1');
                mainContent.focus();
            }
        });
    }
    
    // Enhance focus management for modal-like interactions
    document.addEventListener('keydown', function(e) {
        // Escape key functionality
        if (e.key === 'Escape') {
            const activeElement = document.activeElement;
            if (activeElement && activeElement.blur) {
                activeElement.blur();
            }
        }
    });
}

// Professional loading states
function showLoading(element, text = '処理中...') {
    element.disabled = true;
    element.classList.add('loading');
    const originalText = element.textContent;
    element.textContent = text;
    
    return function hideLoading() {
        element.disabled = false;
        element.classList.remove('loading');
        element.textContent = originalText;
    };
}

// Error handling for professional UX
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    // You could add professional error reporting here
});

// Performance monitoring
function measurePageLoad() {
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
        
        // Send performance data if analytics is setup
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                name: 'load',
                value: Math.round(loadTime)
            });
        }
    });
}

measurePageLoad();

// Mobile Navigation Functions
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');
    
    if (!hamburger || !nav) return;
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        const isOpen = nav.classList.contains('mobile-open');
        
        if (isOpen) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });
    
    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileNav();
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
            closeMobileNav();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileNav();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileNav();
        }
    });
}

function openMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    hamburger.classList.add('active');
    nav.classList.add('mobile-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'メニューを閉じる');
    
    // Prevent body scrolling when menu is open
    document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    hamburger.classList.remove('active');
    nav.classList.remove('mobile-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'メニューを開く');
    
    // Restore body scrolling
    document.body.style.overflow = '';
}

// Advanced 3D Hover Effects with GSAP
function initializeAdvancedHoverEffects() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        // Initial state
        gsap.set(card, {
            transformPerspective: 1000,
            transformStyle: "preserve-3d"
        });
        
        // Mouse enter animation
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.5,
                ease: 'power2.out',
                scale: 1.02
            });
        });
        
        // Mouse leave animation
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.5,
                ease: 'power2.out',
                rotationX: 0,
                rotationY: 0,
                scale: 1
            });
        });
        
        // Mouse tracking for 3D effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation based on mouse position
            const rotateX = ((y - centerY) / centerY) * -5; // Reduced rotation for subtlety
            const rotateY = ((x - centerX) / centerX) * 5;
            
            gsap.to(card, {
                duration: 0.3,
                ease: 'power2.out',
                rotationX: rotateX,
                rotationY: rotateY
            });
        });
    });
}