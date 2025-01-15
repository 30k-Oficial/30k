

    function animateInvestment(button) {
        gsap.to(button, {
            scale: 1.1,
            duration: 0.2,
            yoyo: true,
            repeat: 1
        });

        gsap.to(userBalance, {
            scale: 1.2,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            color: '#00ff00'
        });
    }

    // Animação de entrada para os elementos da página
    gsap.from('.hero h1, .hero p, .cta-button', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.dashboard, .about', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.dashboard',
            start: 'top 80%'
        }
    });

    // Animação para os elementos do menu
    gsap.from('nav ul li', {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Efeito de parallax no fundo
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
