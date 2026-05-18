import facultyData from './faculty.js';
import instructorsData from './instructor.js'

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
        } else {
            console.warn('Contact modal not found (id="contactModal")');
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


// Program Details Modal - UPDATED TO MATCH YOUR HTML
function initProgramModal() {
    console.log('Initializing program modal...');

    // ✅ MATCHES YOUR HTML IDs
    const modal = document.getElementById('programModal');
    const closeBtn = document.getElementById('closeProgramModal');
    const primaryBtn = document.getElementById('programModalPrimaryCta');
    const titleEl = document.getElementById('programModalTitle');
    const contentEl = document.getElementById('programModalContent');
    const mediaEl = document.getElementById('programModalImage');

    // Debug: see what is null
    console.log('Program modal elements:', {
        modal,
        closeBtn,
        primaryBtn,
        titleEl,
        contentEl,
        mediaEl
    });

    if (!modal || !closeBtn || !primaryBtn || !titleEl || !contentEl || !mediaEl) {
        console.warn('Program modal elements missing. Skipping program modal init.');
        return;
    }

    const programData = {
        neurocomp: {
            title: 'ACNEI Computational Neuroscience Introductory School.',
            image: "./images/call-for-application.jpg",
            text: "",
            extraHtml: `
                <div>
                <h3 class="modal-subtitle">CALL FOR APPLICATIONS</h3>
                <strong>African Computational Neuroscience Educational Initiative (ACNEI) <br> 10-Day Introductory Online Training</strong>
                <p><strong>Theme:</strong> Foundations of Computational Neuroscience for Young African Scholars</p>
                </div>
                
                <p>The African Computational Neuroscience Educational Initiative (ACNEI) is pleased to announce a <strong>10-day introductory online training program</strong> designed to inspire and equip post-high school and undergraduate students across Africa with foundational skills in neuroscience, computation, and data-driven thinking. Computational neuroscience sits at the intersection of brain science, artificial intelligence, data science, and medicine. Yet, access to training in this field remains limited across much of Africa. This program is designed to democratize access, build early confidence, and prepare students for deeper engagement in neuroscience and AIrelated careers.</p>

		<h4 class="modal-subtitle">Program Overview.</h4>
                <ul>
	                <li><strong>Dates:</strong> 11th - 22nd May, 2026; Training at specific regional hubs (optional): 25-28th May, 2026</li>
			<li><strong>Format:</strong> Fully Online</li>
			<li><strong>Duration:</strong> Two-week (2 hours per day)</li>
			<li><strong>Target Group:</strong> Post-high school students & early undergraduates across Africa</li>
			<li><strong>Cost:</strong> Free (selection-based)</li>
                </ul>
                
                <h4 class="modal-subtitle">What You Will Learn.</h4>
                <strong>Participant will</strong>
                <ul>
	                <li>Understand how the brain works and why computation matters</li>
			<li>Learn beginner-friendly Python programming for neuroscience</li>
			<li>Explore neurons and neural networks as computational systems</li>
			<li>Build hands-on mini-projects (no prior coding required)</li>
			<li>Engage with African-centered neuroscience and AI examples</li>
			<li>Receive mentorship and career guidance from global experts</li>
                </ul>
                
                <h4 class="modal-subtitle">Who Should Apply?</h4>
                <strong>We strongly encourage applications from:</strong>
                <ul>
	                <li>African post-high school students, gap-year students, and undergraduates</li>
			<li>African students with interests in biology, medicine, engineering, computer science, psychology, AI, neuroscience or data science</li>
			<li>Applicants with little or no prior coding experience</li>
			<li>Students from underrepresented regions and backgrounds</li>
                </ul>
                
                <h4 class="modal-subtitle">Benefits.</h4>
                <ul>
	                <li>Certificate of completion</li>
			<li>Access to ACNEI mentorship and alumni network</li>
			<li>Priority consideration for advanced ACNEI programs & regional hubs</li>
			<li>Exposure to global open-science and neuroscience communities</li>
                </ul>
                
                <h4 class="modal-subtitle">Application Details.</h4>
                <ul>
	                <li>Application Deadline: March 29th, 2026</li>
			<li>Pogram Start: 11th May 2026</li>
			<li><a href="https://forms.gle/91suvgbUq1QrJXCm8" target="_blank">Apply here</a></li>
                </ul>
                <p class="modal-note">For inquiries: Email <strong>contact@acnei.org</strong>.</p>
            `
        },
        network: {
            title: 'Pan-African Research Network',
            image: "./images/neuroscience-network-1.jpg",
            text: "We connect researchers, institutions, and resources across Africa to support collaboration, shared learning, and joint research in computational neuroscience.",
            extraHtml: `
                <ul>
                    <li>Collaboration and mentorship connections</li>
                    <li>Shared learning and resource discovery</li>
                    <li>Support for joint projects and publications</li>
                </ul>
                <p class="modal-note"><strong>Publication:</strong> Strength and perception of computational neuroscience among Nigerian students and early career researchers <a href="https://www.sciencedirect.com/science/article/pii/S2667242125001642?via=ihub" target="_blank">(DOI: 10.1016/j.ibneur.2025.10.015)</a></p>
            `
        },
        tools: {
            title: 'Open-Source Neuroscience Tools',
            image: "./images/neuroscience-research.jpg",
            text: "We’re building free, open-source tools and learning resources to support neuroscience learning and research across Africa—especially for beginners and low-resource settings.",
            extraHtml: `
                <h4 class="modal-subtitle">What we’re building</h4>
                <ul>
                    <li>Brain data analysis (spikes, LFP, EEG)</li>
                    <li>Neural simulations and modeling</li>
                    <li>Machine learning for neuroscience</li>
                    <li>Hands-on coding practice</li>
                </ul>
                <p class="modal-note">Work in progress — new tools and learning modules are added regularly. To contribute or collaborate, email <strong>contact@acnei.org</strong>.</p>
            `
        },
        workshops: {
            title: 'Workshop Series',
            image: "./images/workshop.png",
            text: "Our virtual workshops bring together students, educators, and early-career researchers to learn practical skills in neuroscience, programming, and data science—designed to be beginner-friendly and applicable to real research problems.",
            extraHtml: `
                <ul>
                    <li>Short, practical sessions</li>
                    <li>Beginner-friendly learning and guided practice</li>
                    <li>Skills you can apply to real research</li>
                </ul>
                <p class="modal-note">Join the waitlist (link will be added soon). For questions, email <strong>contact@acnei.org</strong>.</p>
            `
        }
    };

    let lastFocused = null;

    function openProgramModal(key) {
        console.log('Opening program modal with key:', key);

        const data = programData[key];
        if (!data) {
            console.warn('No program data found for key:', key);
            return;
        }

        lastFocused = document.activeElement;

        // Fill title
        titleEl.textContent = data.title;

        // Fill image (your HTML uses programModalImage)
        mediaEl.style.backgroundImage = `url('${data.image}')`;

        // Fill content (your HTML uses programModalContent)
        // Put text + extraHtml into one container
        contentEl.innerHTML = `
            <p>${data.text}</p>
            ${data.extraHtml || ""}
        `;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Focus for accessibility
        closeBtn.focus();
    }

    function closeProgramModal() {
        console.log('Closing program modal');

        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        if (lastFocused && typeof lastFocused.focus === 'function') {
            lastFocused.focus();
        }
    }

    // Bind triggers (Read more buttons)
    const triggers = document.querySelectorAll('.program-readmore');
    console.log('Found program readmore buttons:', triggers.length);

    triggers.forEach(btn => {
        btn.addEventListener('click', () => {
            openProgramModal(btn.dataset.program);
        });
    });

    // Close actions
    closeBtn.addEventListener('click', closeProgramModal);
    primaryBtn.addEventListener('click', closeProgramModal);

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeProgramModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProgramModal();
        }
    });
}


// ✅ AUTO-RUN INIT AFTER DOM LOADS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded — initializing modals...');
    initModal();
    initProgramModal();
});



// Contact Form 
function initContactForm() {
    console.log('Initializing contact form...');
    const form = document.getElementById('contactForm');
    if (!form) {
        console.error('Contact form not found!');
        return;
    }

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
    
    const text = "African Computational Neuroscience Educational Initiative";
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

document.querySelector('.hide-text-btn').addEventListener('click', () => {
    document.querySelector('.hidden-teams').style.display = 'contents';
    document.querySelector('.hide-text-btn').style.display = 'none';
})

// Save form data to localStorage
function saveFormData() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        organization: document.getElementById('organization').value
    };
    localStorage.setItem('contactFormDraft', JSON.stringify(formData));
}

// Load saved data
function loadFormData() {
    const saved = localStorage.getItem('contactFormDraft');
    if (saved) {
        const data = JSON.parse(saved);
        Object.keys(data).forEach(key => {
            const field = document.getElementById(key);
            if (field) field.value = data[key] || '';
        });
    }
}

function normalizeImageUrl(imagePath) {
    if (!imagePath) return '/images/default-avatar.jpg';

    let normalized = imagePath.trim();

    if (normalized.startsWith('../')) {
        normalized = normalized.replace(/^\.\.\//, '/');
    } else if (normalized.startsWith('./')) {
        normalized = normalized.replace(/^\.\//, '/');
    }

    if (!normalized.startsWith('/') && !normalized.startsWith('http')) {
        normalized = '/' + normalized;
    }

    return normalized;
}

function initFacultySection() {
    const facultyGrid = document.getElementById('facultyGrid');
    const viewAllBtn = document.getElementById('viewAllFacultyBtn');
    if (!facultyGrid) return;

    // Render all cards initially, but hide extras
    facultyGrid.innerHTML = '';
    facultyData.forEach((member, index) => {
        const card = createFacultyCard(member, index);
        facultyGrid.appendChild(card);
    });

    // Initially only show first 3 cards
    const allCards = document.querySelectorAll('.faculty-card');
    allCards.forEach((card, idx) => {
        if (idx >= 3) {
            card.style.display = 'none';
        }
    });

    // Toggle view all
    let showingAll = false;
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            showingAll = !showingAll;
            allCards.forEach((card, idx) => {
                if (showingAll) {
                    card.style.display = 'flex'; // or block
                } else {
                    if (idx >= 3) card.style.display = 'none';
                    else card.style.display = 'flex';
                }
            });
            viewAllBtn.innerHTML = showingAll ? 
                '<i class="fas fa-compress"></i> Show Less' : 
                '<i class="fas fa-users"></i> View All Faculty Members';
        });
    }
}

function createFacultyCard(member, index) {
    const card = document.createElement('div');
    card.className = 'faculty-card';
    card.setAttribute('data-id', member.id);

    // Image placeholder (use actual image or a default)
    const imageUrl = normalizeImageUrl(member.image);

    // Expertise tags
    const expertiseHtml = member.expertise.map(tag => 
        `<span class="expertise-tag">${tag}</span>`
    ).join('');

    card.innerHTML = `
        <div class="faculty-img-wrapper">
            <div class="faculty-img" style="background-image: url('${imageUrl}');"></div>
            <div class="faculty-social">
                <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="${member.social.website}" target="_blank"><i class="fas fa-globe"></i></a>
            </div>
        </div>
        <div class="faculty-info">
            <div class="faculty-header">
                <h4>${member.name}</h4>
                <!--<span class="faculty-badge">Faculty</span> -->
            </div>
            <div class="faculty-institution">${member.institution}</div>
            <div class="faculty-bio">${member.bio.substring(0, 120)}${member.bio.length > 120 ? '...' : ''}</div>
            <button class="faculty-bio-toggle" data-id="${member.id}">Read more <i class="fas fa-arrow-right"></i></button>
        </div>
    `;

    // Attach event listener for read more
    const readMoreBtn = card.querySelector('.faculty-bio-toggle');
    readMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openFacultyModal(member);
    });

    return card;
}

// Modal handling
let currentFacultyModal = null;

function openFacultyModal(member) {
    const modalOverlay = document.getElementById('facultyModal');
    const modalTitle = document.getElementById('facultyModalTitle');
    const modalContent = document.getElementById('facultyModalContent');
    const closeBtn = document.getElementById('closeFacultyModal');

    if (!modalOverlay || !modalTitle || !modalContent) return;

    // Build modal content
    const expertiseHtml = member.expertise.map(tag => `<span class="expertise-tag">${tag}</span>`).join('');
    const publicationsHtml = member.publications.map(pub => `<li>${pub}</li>`).join('');
    const achievementsHtml = member.achievements.map(ach => `<li>${ach}</li>`).join('');

    const facultyImage = normalizeImageUrl(member.image);
    console.log('Faculty modal image URL:', facultyImage);

    modalContent.innerHTML = `
        <div class="faculty-modal-layout">
            <div class="faculty-modal-image">
                <img src="${facultyImage}" alt="${member.name}" class="faculty-modal-img" />
            </div>
            <div class="faculty-modal-details">
                <h4>${member.name}</h4>
                <div class="faculty-modal-institution">${member.institution}</div>
                <div class="faculty-modal-bio">${member.bio}</div>
                
                ${member.publications.length ? `
                <div class="faculty-modal-publications">
                    <h5>Selected Publications</h5>
                    <ul>${publicationsHtml}</ul>
                </div>
                ` : ''}
                
                ${member.achievements.length ? `
                <div class="faculty-modal-publications">
                    <h5>Achievements & Awards</h5>
                    <ul>${achievementsHtml}</ul>
                </div>
                ` : ''}
                
                <div class="faculty-modal-social">
                    <a href="${member.social.linkedin}" class="faculty-modal-social-link" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    <a href="${member.social.twitter}" class="faculty-modal-social-link" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
                    <a href="${member.social.website}" class="faculty-modal-social-link" target="_blank"><i class="fas fa-globe"></i> Website</a>
                </div>
            </div>
        </div>
    `;

    modalTitle.textContent = member.name;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Store reference for closing
    currentFacultyModal = modalOverlay;

    // Close handlers
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        currentFacultyModal = null;
    };

    closeBtn.onclick = closeModal;
    modalOverlay.onclick = (e) => {
        if (e.target === modalOverlay) closeModal();
    };
}

// Call initFacultySection after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // ... existing initializations
    initFacultySection();  // <-- Add this line
});

// Announcement Banner Close Functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const closeBtn = document.getElementById('closeAnnouncement');
//     const announcementBanner = document.querySelector('.announcement-banner');
    
//     if (closeBtn && announcementBanner) {
//         // Check if the banner was closed before (optional persistence)
//         const isClosed = localStorage.getItem('announcementClosed');
        
//         if (isClosed === 'true') {
//             announcementBanner.style.display = 'none';
//         }
        
//         closeBtn.addEventListener('click', function() {
//             announcementBanner.style.display = 'none';
//             // Optional: Store in localStorage to keep it closed for the session
//             localStorage.setItem('announcementClosed', 'true');
//         });
//     }
// });

// Function to render instructor cards
function renderInstructors(showAll = false) {
    const grid = document.getElementById('instructorsGrid');
    if (!grid) return;
    
    // Clear grid but preserve load more button position
    grid.innerHTML = '';
    
    const itemsToShow = showAll ? instructorsData.length : 3;
    
    instructorsData.forEach((instructor, index) => {
        const card = document.createElement('div');
        card.className = 'instructor-card';
        if (!showAll && index >= 3) {
            card.classList.add('hidden-instructor');
        }
        card.setAttribute('data-instructor-index', index);
        card.innerHTML = `
            <div class="instructor-image">
                <img src="${instructor.image}" alt="${instructor.name}">
            </div>
            <div class="instructor-info">
                <h3>${instructor.name}</h3>
                <p class="instructor-title">${instructor.title}</p>
                <p class="instructor-affiliation">${instructor.affiliation}</p>
                <div class="instructor-bio-short">
                    ${instructor.bio.substring(0, 100)}...
                </div>
            </div>
        `;
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(index);
        });
        grid.appendChild(card);
    });
    
    // Update load more button visibility
    const loadMoreContainer = document.getElementById('instructorsLoadMore');
    if (loadMoreContainer) {
        if (showAll || instructorsData.length <= 3) {
            loadMoreContainer.style.display = 'none';
        } else {
            loadMoreContainer.style.display = 'block';
        }
    }
}

// Modal logic
const modal = document.getElementById("instructorModal");
const closeModal = document.querySelector(".instructor-modal-close");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalTitle = document.getElementById("modalTitle");
const modalAffiliation = document.getElementById("modalAffiliation");
const modalBio = document.getElementById("modalBio");
const modalTwitter = document.getElementById("modalTwitter");
const modalLinkedin = document.getElementById("modalLinkedin");
const modalEmail = document.getElementById("modalEmail");

function openModal(index) {
    const instructor = instructorsData[index];
    if (!instructor) return;
    modalImg.src = instructor.image;
    modalName.textContent = instructor.name;
    modalTitle.textContent = instructor.title;
    modalAffiliation.textContent = instructor.affiliation;
    modalBio.textContent = instructor.bio;
    modalTwitter.href = instructor.twitter;
    modalLinkedin.href = instructor.linkedin;
    modalEmail.href = `mailto:${instructor.email}`;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

closeModal.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// Load more button logic
let showingAll = false;
const loadMoreBtn = document.getElementById('loadMoreBtn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        showingAll = true;
        renderInstructors(true);
    });
}

// Initial render (show only first 3)
renderInstructors(false);

const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const feedbackDiv = document.getElementById('successMessage');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

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

    // Clear previous feedback
    feedbackDiv.style.display = 'none';
    feedbackDiv.innerHTML = '';

    const formData = new FormData(form);
    // access_key is already in the form as a hidden field, but we can also add it again (harmless)

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            // Show success message
            feedbackDiv.textContent = "✅ Success! Your message has been delivered, and our team will reach out to you soon. Thank you!";
            feedbackDiv.className = "feedback success";
            feedbackDiv.style.display = "block";
            form.reset();  // clear the form fields
        } else {
            // Show error from Web3Forms
            feedbackDiv.textContent = `❌ Error: ${data.message || "Something went wrong."}`;
            feedbackDiv.className = "feedback error";
            feedbackDiv.style.display = "block";
        }
    } catch (error) {
        // Network or other unexpected error
        feedbackDiv.textContent = "❌ Something went wrong. Please check your internet connection and try again.";
        feedbackDiv.className = "feedback error";
        feedbackDiv.style.display = "block";
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// ========== COOKIE CONSENT MANAGER ==========
(function() {
    // DOM elements
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookiesBtn');
    const declineBtn = document.getElementById('declineCookiesBtn');
    const customizeBtn = document.getElementById('customizeCookiesBtn');
    const modalOverlay = document.getElementById('cookieModalOverlay');
    const closeModalBtn = document.getElementById('closeCookieModalBtn');
    const savePrefsBtn = document.getElementById('saveCookiePreferences');
    const declineAllModalBtn = document.getElementById('declineAllModalBtn');
    const openSettingsLink = document.getElementById('openCookieSettingsLink');
    
    // Checkboxes
    const necessaryCheck = document.getElementById('necessaryCookies');
    const functionalCheck = document.getElementById('functionalCookies');
    const analyticsCheck = document.getElementById('analyticsCookies');
    const marketingCheck = document.getElementById('marketingCookies');
    
    // Cookie name for storing preferences
    const COOKIE_PREF_KEY = 'acnei_cookie_consent';
    
    // Helper: Read cookie value
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    
    // Helper: Set cookie with expiry (1 year)
    function setCookie(name, value, days = 365) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
    }
    
    // Get current preferences from localStorage (fallback to cookie)
    function getPreferences() {
        const stored = localStorage.getItem(COOKIE_PREF_KEY);
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch(e) { return null; }
        }
        // Legacy cookie support
        const cookiePref = getCookie(COOKIE_PREF_KEY);
        if (cookiePref) {
            try {
                return JSON.parse(decodeURIComponent(cookiePref));
            } catch(e) { return null; }
        }
        return null;
    }
    
    // Save preferences to localStorage and cookie, then apply actions (e.g., load analytics)
    function savePreferences(prefs, hideBanner = true) {
        localStorage.setItem(COOKIE_PREF_KEY, JSON.stringify(prefs));
        setCookie(COOKIE_PREF_KEY, encodeURIComponent(JSON.stringify(prefs)), 365);
        
        // Here you would actually enable/disable external scripts (GA, FB Pixel, etc.)
        // Example: if (prefs.analytics) { loadGoogleAnalytics(); }
        console.log('Cookie preferences saved:', prefs);
        
        // Hide banner and close modal
        if (hideBanner && banner) banner.classList.remove('show');
        if (modalOverlay) modalOverlay.classList.remove('active');
        
        // Dispatch event so other scripts can react
        window.dispatchEvent(new CustomEvent('cookiePreferencesUpdated', { detail: prefs }));
    }
    
    // Load preferences into the modal UI
    function loadPreferencesIntoUI() {
        const prefs = getPreferences();
        if (prefs) {
            if (functionalCheck) functionalCheck.checked = prefs.functional === true;
            if (analyticsCheck) analyticsCheck.checked = prefs.analytics === true;
            if (marketingCheck) marketingCheck.checked = prefs.marketing === true;
        } else {
            // Default: only necessary cookies (all optional off)
            if (functionalCheck) functionalCheck.checked = false;
            if (analyticsCheck) analyticsCheck.checked = false;
            if (marketingCheck) marketingCheck.checked = false;
        }
    }
    
    // Accept all cookies (enable all optional categories)
    function acceptAll() {
        const prefs = {
            necessary: true,
            functional: true,
            analytics: true,
            marketing: true
        };
        savePreferences(prefs);
    }
    
    // Decline all non-essential
    function declineAll() {
        const prefs = {
            necessary: true,
            functional: false,
            analytics: false,
            marketing: false
        };
        savePreferences(prefs);
    }
    
    // Save from modal UI
    function saveFromModal() {
        const prefs = {
            necessary: true, // always required
            functional: functionalCheck ? functionalCheck.checked : false,
            analytics: analyticsCheck ? analyticsCheck.checked : false,
            marketing: marketingCheck ? marketingCheck.checked : false
        };
        savePreferences(prefs);
    }
    
    // Show banner only if no consent given yet
    function initCookieBanner() {
        const existingPrefs = getPreferences();
        if (existingPrefs !== null) {
            // Already decided, no need to show banner
            if (banner) banner.classList.remove('show');
            return;
        }
        // Show banner
        if (banner) banner.classList.add('show');
    }
    
    // Modal controls
    function openModal() {
        loadPreferencesIntoUI();
        if (modalOverlay) modalOverlay.classList.add('active');
    }
    function closeModal() {
        if (modalOverlay) modalOverlay.classList.remove('active');
    }
    
    // Event listeners
    if (acceptBtn) acceptBtn.addEventListener('click', acceptAll);
    if (declineBtn) declineBtn.addEventListener('click', declineAll);
    if (customizeBtn) customizeBtn.addEventListener('click', openModal);
    if (openSettingsLink) openSettingsLink.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (savePrefsBtn) savePrefsBtn.addEventListener('click', saveFromModal);
    if (declineAllModalBtn) declineAllModalBtn.addEventListener('click', () => { declineAll(); closeModal(); });
    
    // Close modal when clicking outside overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }
    
    // Initialize
    initCookieBanner();
})();