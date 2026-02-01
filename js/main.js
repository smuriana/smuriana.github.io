// Infrastructure as Art - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');

            // Toggle icon
            const icon = mobileMenuButton.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuButton.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#') {
                return;
            }

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const nav = document.querySelector('nav');
                const navHeight = nav ? nav.offsetHeight : 0;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation();

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
        fadeInObserver.observe(el);
    });

    // Handle external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });


    // Add subtle glow effect to nav on scroll
    const nav = document.querySelector('.nav-container');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.1)';
            } else {
                nav.style.boxShadow = 'none';
            }
        });
    }

    console.log('Infrastructure as Art - Portfolio initialized');
});

// Export CV to PDF using browser print
function exportToPDF() {
    window.print();
}

// Obfuscated contact details (base64 encoded to prevent basic scraping)
// These are only displayed in the PDF export, not on the public website
(function() {
    const d = function(s) {
        try {
            return decodeURIComponent(atob(s).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        } catch(e) {
            return atob(s);
        }
    };

    const c = {
        e: 'c2VyZ2lvLm11cmlhbmFAZ21haWwuY29t',
        p: 'KzM0IDY3NyAxMDcgMDg2',
        l: 'SmHDqW4sIFNwYWlu'
    };

    const setContact = function() {
        const emailEl = document.getElementById('contact-email');
        const phoneEl = document.getElementById('contact-phone');
        const locationEl = document.getElementById('contact-location');

        if (emailEl) emailEl.textContent = d(c.e);
        if (phoneEl) phoneEl.textContent = d(c.p);
        if (locationEl) locationEl.textContent = d(c.l);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setContact);
    } else {
        setContact();
    }
})();
