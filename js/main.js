// Main JavaScript for personal website

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

            // Don't prevent default for # only (used for menu toggle)
            if (href === '#') {
                return;
            }

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
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
                    link.classList.remove('text-blue-600');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('text-blue-600');
                    }
                });
            }
        });
    }

    // Run on scroll
    window.addEventListener('scroll', highlightNavigation);
    // Run on load
    highlightNavigation();

    // Add animation on scroll (fade in elements)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add current year to footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear && footerYear.textContent.includes('2024')) {
        footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
    }

    // Handle external links (open in new tab with security)
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    console.log('Personal website initialized successfully!');
});

// Optional: Add a simple "back to top" functionality
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // You can add a "back to top" button later if needed
    // For now, this is just a placeholder for future enhancements
});

// Export CV to PDF using browser print
function exportToPDF() {
    window.print();
}

// Obfuscated contact details (base64 encoded to prevent basic scraping)
// These are only displayed in the PDF export, not on the public website
(function() {
    // Decode base64 with UTF-8 support
    const d = function(s) {
        try {
            return decodeURIComponent(atob(s).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        } catch(e) {
            return atob(s);
        }
    };

    // Encoded contact details
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
