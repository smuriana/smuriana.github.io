// Infrastructure as Art - Main JavaScript

// ===== i18n Translations =====
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.education': 'Education',
        'nav.contact': 'Contact',
        'hero.role': 'Platform / DevOps Engineer',
        'hero.description': 'Specialized in operating and evolving core production infrastructure with a focus on Kubernetes, CI/CD, observability, and automation.',
        'hero.btn.contact': 'Get In Touch',
        'hero.btn.learn': 'Learn More',
        'hero.btn.export': 'Export CV',
        'about.label': 'about',
        'about.heading': 'Who I Am',
        'about.p1': "I'm a <strong>Platform / DevOps Engineer</strong> currently working at <strong>PhoenixNAP</strong> (since 2020), where I focus on operating and evolving core production infrastructure. My work spans authentication platforms, CI/CD pipelines, Kubernetes-based workloads, and comprehensive observability solutions.",
        'about.p2': "Previously at <strong>Glownet</strong> (2016-2019), I wore multiple hats as an Android Developer building NFC-based payment systems for 2M+ users, Info Security Manager leading security audits and GDPR compliance, and Site Reliability Engineer implementing AWS autoscaling solutions.",
        'about.p3': "I act as a cross-team technical reference, supporting multiple engineering teams and mentoring teammates, with a strong focus on reliability, automation, and best practices.",
        'about.expertise.heading': 'Areas of Expertise',
        'about.expertise.1': 'Platform Engineering & SRE',
        'about.expertise.2': 'Kubernetes & Container Orchestration',
        'about.expertise.3': 'Observability & Monitoring',
        'about.expertise.4': 'CI/CD & GitOps',
        'about.expertise.5': 'Security & Compliance',
        'about.expertise.6': 'Team Mentoring & Technical Leadership',
        'skills.infrastructure': 'Infrastructure',
        'skills.cicd': 'CI/CD & Tools',
        'skills.observability': 'Observability',
        'skills.platform': 'Platform',
        'skills.languages': 'Languages',
        'skills.security': 'Security',
        'experience.label': 'experience',
        'experience.heading': 'Deployment History',
        'exp.phoenixnap.title': 'Platform / DevOps Engineer',
        'exp.phoenixnap.location': 'Remote',
        'exp.phoenixnap.date': 'Jan 2020 - Present',
        'exp.phoenixnap.desc': 'Platform-focused software engineer responsible for operating and evolving core production infrastructure. Working on authentication platforms (Keycloak), CI/CD infrastructure, and Kubernetes-based workloads, with a strong focus on reliability, automation, and observability.',
        'exp.glownet.title': 'Software Developer',
        'exp.glownet.location': 'Madrid, Spain',
        'exp.glownet.date': 'Feb 2016 - Dec 2019',
        'exp.glownet.role1.title': 'Android Developer',
        'exp.glownet.role1.desc': 'Developed NFC-based payment app for events with 2M+ unique users. Built from greenfield using MVP architecture, Clean Code principles, Dagger2, RxJava, and Retrofit.',
        'exp.glownet.role2.title': 'Info Security Manager',
        'exp.glownet.role2.desc': 'Led security audits, implemented static code analysis, deployed ELK/Wazuh HIDS, and ensured GDPR compliance.',
        'exp.glownet.role3.title': 'Site Reliability Engineer',
        'exp.glownet.role3.desc': 'Implemented AWS autoscaling systems to ensure server reliability and availability.',
        'exp.freelance.title': 'Freelance Developer',
        'exp.freelance.company': 'Self-Employed',
        'exp.freelance.date': 'Jun 2013 - Aug 2016',
        'exp.freelance.desc': 'Worked on diverse projects using Java, PHP, HTML, JavaScript, and CSS. Built Android applications and web solutions with frameworks like SlimPHP, Joomla, and WordPress.',
        'exp.freelance.notable': '<strong style="color: var(--text-primary);">Notable Project:</strong> Developed a prototype for RENFE (Spain\'s national train company) providing real-time train arrival estimates using geolocation, alarms, and customizable UI.',
        'exp.enala.title': 'Software Developer',
        'exp.enala.location': 'Jaén, Spain',
        'exp.enala.date': 'Apr 2014 - Oct 2014',
        'exp.enala.desc': 'Developed Android applications for Spanish car insurance companies focused on roadside assistance. Also worked on frontend and backend development using Java Spring, HTML, and CSS.',
        'exp.biestable.title': 'Web Developer',
        'exp.biestable.location': 'Jaén, Spain',
        'exp.biestable.date': 'Apr 2009 - Jun 2009',
        'exp.biestable.desc': 'Worked with Joomla CMS using PHP, HTML, and CSS to build and maintain web applications.',
        'education.label': 'education',
        'education.heading': 'Academic Background',
        'edu.degree1.title': 'Degree in Computer Engineering',
        'edu.degree1.meta': 'Jaén, Spain • 2011 - 2015',
        'edu.degree1.details': 'Expert in IT with special mention in Business Informatics',
        'edu.degree1.level': 'EQF Level 6',
        'edu.degree2.title': 'Senior Technician in Computer Systems Administration',
        'edu.degree2.meta': 'Jaén, Spain • 2007 - 2009',
        'edu.degree2.details': 'Networks maintenance, Linux, relational databases, C, HTML, PHP, JavaScript, and CSS',
        'edu.degree2.level': 'EQF Level 5',
        'edu.degree3.title': 'SSCE22 Tutorización en Teleformación',
        'edu.degree3.meta': 'Online • Apr 2026',
        'edu.degree3.details': '50-hour online training course',
        'contact.label': 'contact',
        'contact.heading': 'Get In Touch',
        'contact.desc': 'Feel free to connect with me on GitHub or LinkedIn for collaborations, opportunities, or tech discussions.',
        'footer.text': '&copy; 2026 Sergio Muriana Cobo. Built with <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" style="color: var(--accent-green);">Claude Code</a>',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.experience': 'Experiencia',
        'nav.education': 'Educación',
        'nav.contact': 'Contacto',
        'hero.role': 'Ingeniero Platform / DevOps',
        'hero.description': 'Especializado en operar y evolucionar infraestructura de producción con foco en Kubernetes, CI/CD, observabilidad y automatización.',
        'hero.btn.contact': 'Contactar',
        'hero.btn.learn': 'Saber más',
        'hero.btn.export': 'Exportar CV',
        'about.label': 'sobre mí',
        'about.heading': 'Quién Soy',
        'about.p1': "Soy <strong>Ingeniero Platform / DevOps</strong> trabajando actualmente en <strong>PhoenixNAP</strong> (desde 2020), donde me centro en operar y evolucionar la infraestructura de producción principal. Mi trabajo abarca plataformas de autenticación, pipelines de CI/CD, cargas de trabajo en Kubernetes y soluciones completas de observabilidad.",
        'about.p2': "Anteriormente en <strong>Glownet</strong> (2016-2019), asumí múltiples roles: Desarrollador Android creando sistemas de pago NFC para más de 2M de usuarios únicos, Responsable de Seguridad liderando auditorías y cumplimiento GDPR, e Ingeniero de Fiabilidad implementando soluciones de autoescalado en AWS.",
        'about.p3': "Actúo como referente técnico transversal, apoyando a múltiples equipos de ingeniería y mentorizando compañeros, con un fuerte enfoque en fiabilidad, automatización y buenas prácticas.",
        'about.expertise.heading': 'Áreas de Especialización',
        'about.expertise.1': 'Platform Engineering & SRE',
        'about.expertise.2': 'Kubernetes y Orquestación de Contenedores',
        'about.expertise.3': 'Observabilidad y Monitorización',
        'about.expertise.4': 'CI/CD & GitOps',
        'about.expertise.5': 'Seguridad y Cumplimiento Normativo',
        'about.expertise.6': 'Mentoring y Liderazgo Técnico',
        'skills.infrastructure': 'Infraestructura',
        'skills.cicd': 'CI/CD y Herramientas',
        'skills.observability': 'Observabilidad',
        'skills.platform': 'Plataforma',
        'skills.languages': 'Lenguajes',
        'skills.security': 'Seguridad',
        'experience.label': 'experiencia',
        'experience.heading': 'Historial de Empleo',
        'exp.phoenixnap.title': 'Ingeniero Platform / DevOps',
        'exp.phoenixnap.location': 'Remoto',
        'exp.phoenixnap.date': 'Ene 2020 - Presente',
        'exp.phoenixnap.desc': 'Ingeniero de software enfocado en plataforma, responsable de operar y evolucionar la infraestructura de producción principal. Trabajo en plataformas de autenticación (Keycloak), infraestructura CI/CD y cargas de trabajo en Kubernetes, con fuerte enfoque en fiabilidad, automatización y observabilidad.',
        'exp.glownet.title': 'Desarrollador de Software',
        'exp.glownet.location': 'Madrid, España',
        'exp.glownet.date': 'Feb 2016 - Dic 2019',
        'exp.glownet.role1.title': 'Desarrollador Android',
        'exp.glownet.role1.desc': 'Desarrollé una app de pago NFC para eventos con más de 2M de usuarios únicos. Construida desde cero con arquitectura MVP, principios de Clean Code, Dagger2, RxJava y Retrofit.',
        'exp.glownet.role2.title': 'Responsable de Seguridad',
        'exp.glownet.role2.desc': 'Lideré auditorías de seguridad, implementé análisis estático de código, desplegué ELK/Wazuh HIDS y aseguré el cumplimiento del GDPR.',
        'exp.glownet.role3.title': 'Ingeniero de Fiabilidad del Sitio',
        'exp.glownet.role3.desc': 'Implementé sistemas de autoescalado en AWS para garantizar la fiabilidad y disponibilidad de los servidores.',
        'exp.freelance.title': 'Desarrollador Freelance',
        'exp.freelance.company': 'Autónomo',
        'exp.freelance.date': 'Jun 2013 - Ago 2016',
        'exp.freelance.desc': 'Trabajé en proyectos variados usando Java, PHP, HTML, JavaScript y CSS. Desarrollé aplicaciones Android y soluciones web con frameworks como SlimPHP, Joomla y WordPress.',
        'exp.freelance.notable': '<strong style="color: var(--text-primary);">Proyecto Destacado:</strong> Desarrollé un prototipo para RENFE (compañía nacional de trenes de España) que proporcionaba estimaciones de llegada en tiempo real mediante geolocalización, alarmas e interfaz personalizable.',
        'exp.enala.title': 'Desarrollador de Software',
        'exp.enala.location': 'Jaén, España',
        'exp.enala.date': 'Abr 2014 - Oct 2014',
        'exp.enala.desc': 'Desarrollé aplicaciones Android para compañías de seguros de coches españolas orientadas a la asistencia en carretera. También trabajé en desarrollo frontend y backend con Java Spring, HTML y CSS.',
        'exp.biestable.title': 'Desarrollador Web',
        'exp.biestable.location': 'Jaén, España',
        'exp.biestable.date': 'Abr 2009 - Jun 2009',
        'exp.biestable.desc': 'Trabajé con Joomla CMS usando PHP, HTML y CSS para construir y mantener aplicaciones web.',
        'education.label': 'educación',
        'education.heading': 'Formación Académica',
        'edu.degree1.title': 'Grado en Ingeniería Informática',
        'edu.degree1.meta': 'Jaén, España • 2011 - 2015',
        'edu.degree1.details': 'Experto en Informática con mención especial en Informática de Empresa',
        'edu.degree1.level': 'Nivel 6 Marco Europeo',
        'edu.degree2.title': 'Técnico Superior en Administración de Sistemas Informáticos',
        'edu.degree2.meta': 'Jaén, España • 2007 - 2009',
        'edu.degree2.details': 'Mantenimiento de redes, Linux, bases de datos relacionales, C, HTML, PHP, JavaScript y CSS',
        'edu.degree2.level': 'Nivel 5 Marco Europeo',
        'edu.degree3.title': 'SSCE22 Tutorización en Teleformación',
        'edu.degree3.meta': 'Online • Abr 2026',
        'edu.degree3.details': 'Curso online de 50 horas',
        'contact.label': 'contacto',
        'contact.heading': 'Contactar',
        'contact.desc': 'No dudes en conectar conmigo en GitHub o LinkedIn para colaboraciones, oportunidades o conversaciones técnicas.',
        'footer.text': '&copy; 2026 Sergio Muriana Cobo. Construido con <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" style="color: var(--accent-green);">Claude Code</a>',
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    // Update both toggle buttons
    const otherLang = lang === 'en' ? 'ES' : 'EN';
    document.querySelectorAll('#lang-toggle, #lang-toggle-mobile').forEach(btn => {
        if (btn) btn.textContent = otherLang;
    });

    currentLang = lang;
    localStorage.setItem('lang', lang);
}

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

    // Language toggle
    function toggleLanguage() {
        applyTranslations(currentLang === 'en' ? 'es' : 'en');
    }

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);

    const langToggleMobile = document.getElementById('lang-toggle-mobile');
    if (langToggleMobile) langToggleMobile.addEventListener('click', function() {
        toggleLanguage();
        // Close mobile menu after switching language
        if (mobileMenu) mobileMenu.classList.add('hidden');
        const icon = mobileMenuButton ? mobileMenuButton.querySelector('i') : null;
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Apply saved language on load
    applyTranslations(currentLang);

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
