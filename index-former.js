// script.js - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing components');
    initializeComponents();
});

function initializeComponents() {
    console.log('Initializing all components...');
    initMobileMenu();
    initSmoothScrolling();
    initModal();
    initProgramModal();
    initContactForm();
    initCarousel();
    initCounters();
    initNewsletter();
    initBackToTop();
    initTypingAnimation();
    initGallery();
}

// Mobile Menu - FIXED
function initMobileMenu() {
    console.log('Initializing mobile menu...');
    const menuToggle = document.getElementById('menuToggle');
    const navContainer = document.getElementById('navContainer');
    
    if (!menuToggle) {
        console.error('menuToggle not found!');
        return;
    }
    
    if (!navContainer) {
        console.error('navContainer not found!');
        return;
    }
    
    menuToggle.addEventListener('click', function() {
        console.log('Menu toggle clicked');
        navContainer.classList.toggle('active');
        const icon = this.querySelector('i');
        
        if (navContainer.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking links
    document.querySelectorAll('.nav-links a, .nav-cta, .hero-cta, .program-btn, .grants-btn, .footer-btn').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Link clicked, closing menu');
            navContainer.classList.remove('active');
            if (menuToggle.querySelector('i')) {
                menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
            document.body.style.overflow = '';
        });
    });
    
    // Close menu on outside click
    document.addEventListener('click', function(e) {
        if (navContainer && menuToggle && 
            !navContainer.contains(e.target) && 
            !menuToggle.contains(e.target) &&
            navContainer.classList.contains('active')) {
            console.log('Outside click, closing menu');
            navContainer.classList.remove('active');
            if (menuToggle.querySelector('i')) {
                menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
            document.body.style.overflow = '';
        }
    });
}

// Smooth Scrolling - FIXED
function initSmoothScrolling() {
    console.log('Initializing smooth scrolling...');
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            console.log('Smooth scrolling to:', targetId);
            if (targetId === '#' || !targetId.startsWith('#')) return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Modal System - FIXED
function initModal() {
    console.log('Initializing modal...');
    const modal = document.getElementById('contactModal');
    const openButtons = [
        document.getElementById('openContactModal'),
        document.getElementById('openContactModal2'),
        document.getElementById('openContactModal3')
    ].filter(btn => btn !== null); // Filter out null buttons
    
    const closeButton = document.getElementById('closeModal');
    
    console.log('Modal found:', !!modal);
    console.log('Open buttons found:', openButtons.length);
    console.log('Close button found:', !!closeButton);
    
    function openModal() {
        console.log('Opening modal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeModal() {
        console.log('Closing modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Open modal - FIXED: Check each button
    openButtons.forEach(button => {
        console.log('Adding click listener to button:', button.id);
        button.addEventListener('click', openModal);
    });
    
    // Close modal
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    // Close on overlay click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Contact Form - FIXED
function initContactForm() {
    console.log('Initializing contact form...');
    const form = document.getElementById('contactForm');
    if (!form) {
        console.error('Contact form not found!');
        return;
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        
        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || name.length < 2) {
            alert('Please enter your full name (minimum 2 characters)');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (!message || message.length < 10) {
            alert('Please enter a message (minimum 10 characters)');
            return;
        }
        
        // Try to open Gmail app via deep-link on mobile, then Gmail web, then mailto fallback
        const recipient = 'contact@acnei.org';
        const subjectField = document.getElementById('subject');
        const orgField = document.getElementById('organization');
        const phoneField = document.getElementById('phone');
        const subject = (subjectField && subjectField.value.trim()) ? `Website Inquiry: ${subjectField.value.trim()}` : 'Website Inquiry';
        const bodyLines = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Organization: ${orgField ? orgField.value.trim() : ''}`,
            `Phone: ${phoneField ? phoneField.value.trim() : ''}`,
            '',
            'Message:',
            message
        ];
        const body = bodyLines.join('\n');

        const gmailWeb = 'https://mail.google.com/mail/?view=cm&fs=1' +
            `&to=${encodeURIComponent(recipient)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        const mailto = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        const ua = navigator.userAgent || navigator.vendor || window.opera;
        const isAndroid = /android/i.test(ua);
        const isIos = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;

        // Gmail app deep-link (works on many Android/iOS setups where Gmail app is installed)
        const gmailAppLink = `googlegmail://co?to=${encodeURIComponent(recipient)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        try {
            if (isAndroid || isIos) {
                // Attempt to open Gmail app first. If it fails (no app), fallback after timeout to Gmail web then mailto.
                window.location.href = gmailAppLink;

                setTimeout(() => {
                    // Open Gmail web in a new tab; if blocked, redirect to mailto
                    const newWin = window.open(gmailWeb, '_blank');
                    if (!newWin) {
                        window.location.href = mailto;
                    }
                }, 800);
            } else {
                // Desktop: open Gmail web compose in a new tab; if popup blocked, use mailto
                const newWin = window.open(gmailWeb, '_blank');
                if (!newWin) window.location.href = mailto;
            }
        } catch (err) {
            // Fallback to mailto if anything goes wrong
            window.location.href = mailto;
        }

        // Close modal and reset form for a clean state
        const modal = document.getElementById('contactModal');
        if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        form.reset();
        console.log('Triggered compose flow and reset form');
    });
}

// Counter Animations - FIXED
function initCounters() {
    console.log('Initializing counters...');
    const counters = document.querySelectorAll('[data-count]');
    console.log('Counters found:', counters.length);
    
    if (!counters.length) return;
    
    // Observer to trigger when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Counter section in view, starting animation');
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe counter sections
    const impactSection = document.querySelector('.impact-section');
    const metricsSection = document.querySelector('.metrics-section');
    
    if (impactSection) observer.observe(impactSection);
    if (metricsSection) observer.observe(metricsSection);
}

function animateCounters() {
    console.log('Animating counters...');
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        console.log('Animating counter:', counter.textContent, 'Target:', target);
        
        // Reset to 0 first
        counter.textContent = '0';
        
        const isCurrency = counter.textContent.includes('$');
        const isPercent = counter.textContent.includes('%');
        
        let current = 0;
        const increment = target / 50; // 50 steps
        const stepTime = 40; // 50ms per step = 2 seconds total
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                current = target;
                clearInterval(timer);
                console.log('Counter finished:', target);
            }
            
            if (isCurrency) {
                counter.textContent = '$' + Math.floor(current).toLocaleString();
            } else if (isPercent) {
                counter.textContent = Math.floor(current) + '%';
            } else {
                counter.textContent = Math.floor(current);
            }
        }, stepTime);
    });
}

// Carousel - FIXED
function initCarousel() {
    console.log('Initializing carousel...');
    const slides = document.querySelectorAll('.story-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    console.log('Slides found:', slides.length);
    console.log('Dots found:', dots.length);
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    let interval;
    
    function showSlide(index) {
        console.log('Showing slide:', index);
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
    }
    
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) prev = slides.length - 1;
        showSlide(prev);
    }
    
    function startAutoSlide() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000);
        console.log('Auto slide started');
    }
    
    // Initialize
    showSlide(0);
    startAutoSlide();
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoSlide();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoSlide();
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startAutoSlide();
        });
    });
    
    // Pause on hover
    const carousel = document.querySelector('.stories-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            console.log('Carousel hover - pausing');
            clearInterval(interval);
        });
        carousel.addEventListener('mouseleave', startAutoSlide);
    }
}

// Newsletter - FIXED
function initNewsletter() {
    console.log('Initializing newsletter...');
    const form = document.getElementById('newsletterForm');
    if (!form) {
        console.error('Newsletter form not found!');
        return;
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('.newsletter-input');
        const email = emailInput.value.trim();
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return;
        }
        
        // Simulate subscription
        emailInput.value = '';
        alert('Thank you for subscribing to our newsletter!');
        
        console.log('Newsletter subscription:', email);
    });
}

// Back to Top - FIXED
function initBackToTop() {
    console.log('Initializing back to top...');
    const button = document.getElementById('backToTop');
    if (!button) {
        console.error('Back to top button not found!');
        return;
    }
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Typing Animation - FIXED
function initTypingAnimation() {
    console.log('Initializing typing animation...');
    const element = document.getElementById('typing-text');
    if (!element) {
        console.error('Typing text element not found!');
        return;
    }
    
    // Clear any existing text
    element.textContent = '';
    
    const text = "Africa Computational Neuroscience Education Initiative";
    const speed = 50;
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Add cursor blink
            element.classList.add('typing-complete');
            console.log('Typing animation complete');
        }
    }
    
    // Start immediately (don't wait for scroll)
    console.log('Starting typing animation...');
    typeWriter();
}

// Gallery Hover Effects
function initGallery() {
    console.log('Initializing gallery...');
    const galleryCards = document.querySelectorAll('.gallery-card');
    
    galleryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.zIndex = '1';
        });
    });
}


// Program Modal (Read more)
function initProgramModal() {
    console.log('Initializing program modal...');
    const modal = document.getElementById('programModal');
    const closeButton = document.getElementById('closeProgramModal');
    const titleEl = document.getElementById('programModalTitle');
    const imageEl = document.getElementById('programModalImage');
    const contentEl = document.getElementById('programModalContent');
    const primaryCta = document.getElementById('programModalPrimaryCta');

    if (!modal || !titleEl || !imageEl || !contentEl) {
        console.warn('Program modal elements not found. Skipping.');
        return;
    }

    const programs = {
        neurocomp: {
            title: 'NeuroComp Africa',
            image: "./images/neuroscience-academy.jpg",
            contentHtml: `
                <p>NeuroComp Africa is designed to make learning inclusive, accessible, and practical across Africa. Through regional hubs, we provide hands-on training and early exposure—helping students build confidence and direction before graduation.</p>
                <h4>Streams</h4>
                <ul>
                    <li><strong>Stream I: High School Outreach (Under 18)</strong> — School visits and interactive sessions that introduce neuroscience careers and build foundational computational skills. No prior coding or neuroscience background is required.</li>
                    <li><strong>Stream II: Undergraduate &amp; Post-High School Bootcamp (18+)</strong> — A blended program combining online learning, workshops, mentorship, and guided projects. Participants gain practical skills and exposure to real computational neuroscience research.</li>
                </ul>
                <p><strong>Want to partner or apply?</strong> Use the buttons on the program card (links can be added later).</p>
            `
        },
        network: {
            title: 'Pan-African Research Network',
            image: "./images/neuroscience-network-1.jpg",
            contentHtml: `
                <p>We connect researchers, institutions, and resources across Africa to support collaboration in computational neuroscience.</p>
                <ul>
                    <li>Collaborative projects and shared learning</li>
                    <li>Connections for mentorship and co-supervision</li>
                    <li>Opportunities for joint publications and resource sharing</li>
                </ul>
                <p><strong>Publication:</strong> <em>Strength and perception of computational neuroscience among Nigerian students and early career researchers</em> (DOI: 10.1016/j.ibneur.2025.10.015)</p>
            `
        },
        tools: {
            title: 'Open-Source Neuroscience Tools',
            image: "./images/neuroscience-research.jpg",
            contentHtml: `
                <p>We are building a growing collection of free, open-source tools and educational resources to support neuroscience learning and research across Africa.</p>
                <p>These include simple data-analysis scripts, interactive notebooks, beginner-friendly tutorials, and low-cost hardware ideas that anyone can access and use.</p>
                <h4>What we’re building tools for</h4>
                <ul>
                    <li>Brain data analysis (spikes, LFP, EEG)</li>
                    <li>Neural simulations and modeling</li>
                    <li>Machine learning for neuroscience</li>
                    <li>Hands-on coding practice</li>
                </ul>
                <p><strong>Status:</strong> Work in progress — new tools and learning modules are added regularly.</p>
                <p>If you'd like to contribute or collaborate, email <strong>contact@acnei.org</strong>.</p>
            `
        },
        workshops: {
            title: 'Workshop Series',
            image: "./images/neuroscience-workshop.jpg",
            contentHtml: `
                <p>Our virtual workshop series brings together students, educators, and early-career researchers to learn practical skills in neuroscience, programming, and data science.</p>
                <ul>
                    <li>Beginner-friendly and hands-on</li>
                    <li>Focused on real research problems</li>
                    <li>Designed for skill-building and confidence</li>
                </ul>
                <p>Join the waitlist to be the first to know when the workshop series opens.</p>
            `
        }
    };

    function openModal(key) {
        const data = programs[key];
        if (!data) return;

        titleEl.textContent = data.title;
        imageEl.style.backgroundImage = `url('${data.image}')`;
        contentEl.innerHTML = data.contentHtml;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.program-readmore').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.dataset.program));
    });

    // Secondary CTA can also open modal for now (since links will be added later)
    document.querySelectorAll('.program-cta').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.dataset.program));
    });

    if (closeButton) closeButton.addEventListener('click', closeModal);
    if (primaryCta) primaryCta.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
}

// Utility Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Window load event
window.addEventListener('load', function() {
    console.log('Window fully loaded');
    // Add loaded class for transitions
    document.body.classList.add('loaded');
    
    // Print shortcut
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            if (confirm('Print this page for grant applications?')) {
                setTimeout(() => window.print(), 100);
            }
        }
    });
    
    // Debug: Check all buttons
    console.log('Debug - All contact buttons:');
    ['openContactModal', 'openContactModal2', 'openContactModal3'].forEach(id => {
        const btn = document.getElementById(id);
        console.log(`${id}:`, btn ? 'FOUND' : 'NOT FOUND');
    });
});