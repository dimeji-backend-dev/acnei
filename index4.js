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
				    title: 'ACNEI Mathematical Foundations for Brain Data Workshop',
				    image: "./images/maths.jpeg",
				    text: "",
				    extraHtml: `
				        <div>
				            <h3 class="modal-subtitle">ACNEI Workshop on Mathematical Foundations for Brain Data</h3>
				            <strong>Math for Brain Data: Mathematical Foundation to Neuro-systems</strong>
				            <p><strong>Theme:</strong> Mathematical Foundation to Neuro-systems</p>
				        </div>
				
				        <p>The African Computational Neuroscience Educational Initiative (ACNEI) is pleased to announce a four day virtual workshop titled "Math for Brain Data: Mathematical Foundation to Neuro-systems", scheduled to hold from 23 to 26 September.</p>
				
				        <p>This workshop is designed for students, early career researchers, and anyone interested in computational neuroscience, mathematics, artificial intelligence, data science, and brain research. Participants will build the mathematical foundation needed to understand and analyze brain data while gaining insight into the principles that support modern computational neuroscience.</p>
				
				        <p>Throughout the workshop, participants will explore essential mathematical concepts that form the backbone of neuro-systems analysis. The sessions will combine theory with practical applications, making the content accessible to beginners while providing valuable insights for learners with quantitative backgrounds.</p>
				
				        <h4 class="modal-subtitle">What You Will Learn</h4>
				        <ul>
				            <li>Mathematical thinking for neuroscience</li>
				            <li>Foundations of brain data analysis</li>
				            <li>Quantitative approaches to neuro-systems</li>
				            <li>Computational methods used in modern neuroscience</li>
				            <li>Practical applications of mathematics in brain research</li>
				        </ul>
				
				        <p>At ACNEI, our mission is to expand computational neuroscience education and create opportunities for young African scholars to participate in world class research and innovation. This workshop continues our commitment to making high quality computational neuroscience education accessible across Africa.</p>
				
				        <h4 class="modal-subtitle">Event Details</h4>
				        <ul>
				            <li><strong>Date:</strong> 23 to 26 September</li>
				            <li><strong>Theme:</strong> Math for Brain Data: Mathematical Foundation to Neuro-systems</li>
				            <li><strong>Format:</strong> Virtual</li>
				            <li><strong>Organizer:</strong> African Computational Neuroscience Educational Initiative (ACNEI)</li>
				        </ul>
				
				        <h4 class="modal-subtitle">Call to Action</h4>
				        <p>Registration details and additional information will be announced soon. We encourage students, researchers, educators, and professionals across Africa and beyond to stay connected with ACNEI and prepare to join this exciting learning experience.</p>
				        <p>For updates and future announcements, visit ACNEI's official website.</p>
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

// Lightweight cookie consent
(function() {
    const CONSENT_KEY = 'acnei_cookie_prefs';
    const banner = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('cookieAcceptAll');
    const declineBtn = document.getElementById('cookieDecline');
    const settingsToggle = document.getElementById('cookieSettingsToggle');
    const settingsPanel = document.getElementById('cookieSettingsPanel');
    const savePrefsBtn = document.getElementById('cookieSavePrefs');
    const optFunctional = document.getElementById('optFunctional');
    const optAnalytics = document.getElementById('optAnalytics');

    function getPreferences() {
        const saved = localStorage.getItem(CONSENT_KEY);
        if (saved) try { return JSON.parse(saved); } catch(e) {}
        return null;
    }

    function savePreferences(prefs) {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
        banner.style.display = 'none';
        // Example: load analytics if prefs.analytics === true
        if (prefs.analytics) console.log('Enable analytics scripts');
        if (prefs.functional) console.log('Enable functional scripts');
        // Dispatch event for other parts of site
        window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: prefs }));
    }

    function acceptAll() {
        savePreferences({ necessary: true, functional: true, analytics: true });
    }
    function declineAll() {
        savePreferences({ necessary: true, functional: false, analytics: false });
    }
    function saveSelected() {
        savePreferences({
            necessary: true,
            functional: optFunctional.checked,
            analytics: optAnalytics.checked,
        });
    }

    // Show banner only if no preference stored
    if (!getPreferences()) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }

    // Event listeners
    acceptBtn?.addEventListener('click', acceptAll);
    declineBtn?.addEventListener('click', declineAll);
    savePrefsBtn?.addEventListener('click', saveSelected);
    settingsToggle?.addEventListener('click', () => {
        const isVisible = settingsPanel.style.display === 'block';
        settingsPanel.style.display = isVisible ? 'none' : 'block';
        // Load current preferences into toggles (if any)
        const prefs = getPreferences();
        if (prefs) {
            if (optFunctional) optFunctional.checked = prefs.functional === true;
            if (optAnalytics) optAnalytics.checked = prefs.analytics === true;
        }
    });
})();
