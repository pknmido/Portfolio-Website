document.addEventListener("DOMContentLoaded", () => {
    // Initialize Vanta.js NET background
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    if (typeof VANTA !== 'undefined') {
        window.vantaEffect = VANTA.NET({
            el: ".bg-animation",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x999999,
            backgroundColor: 0xffffff,
            points: 10.00,
            maxDistance: 20.00,
            spacing: 16.00,
            speed: 2.00
        });
    }

    // Initialize Anime.js
    const animeNameArgs = document.querySelectorAll('#anime-name .letter');
    if (animeNameArgs.length > 0) {
        anime.timeline({ loop: false })
            .add({
                targets: '#anime-name .letter',
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1400,
                delay: (el, i) => 1900 + 30 * i
            });
    }

    // Initialize Animate On Scroll (AOS)
    AOS.init({
        duration: 600,
        easing: 'ease-out',
        once: true
    });

    // Smooth Page Transition (Fade-in on load)
    document.body.classList.add('loaded');

    // Dynamic Active Nav Link Highlighting
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Contact Form Validation -- only static web version bcz github doesn't support dynamic hosting
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            // Simulate API call / Form submission
            setTimeout(() => {
                contactForm.innerHTML = `
                    <div class="text-center" data-aos="zoom-in">
                        <i class="fas fa-check-circle text-accent" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <h3>Message Sent!</h3>
                        <p>Thank you for reaching out. I'll get back to you shortly.</p>
                    </div>`;
            }, 1500);
        });
    }

});

