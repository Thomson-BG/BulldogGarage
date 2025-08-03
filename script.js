// Glass button scroll effect
function updateGlassButtonsOnScroll() {
    const buttons = document.querySelectorAll('.button.button-elevated');
    const scrollY = window.scrollY;
    buttons.forEach(btn => {
        if (scrollY > 60) {
            btn.classList.add('scrolled');
        } else {
            btn.classList.remove('scrolled');
        }
    });
}

window.addEventListener('scroll', updateGlassButtonsOnScroll);
document.addEventListener('DOMContentLoaded', updateGlassButtonsOnScroll);
// Apple.com Clone JavaScript for Bulldog Garage


// Smooth scrolling for anchor links (only for in-page anchors)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default if the anchor is for an in-page section
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Global navigation scroll effect
    let lastScrollTop = 0;
    const globalnav = document.querySelector('.globalnav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            globalnav.style.backgroundColor = 'rgba(251, 251, 253, .94)';
            globalnav.style.backdropFilter = 'saturate(180%) blur(20px)';
        } else {
            globalnav.style.backgroundColor = 'rgba(251, 251, 253, .94)';
            globalnav.style.backdropFilter = 'saturate(180%) blur(20px)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.product-tile, .carousel-item, .section-hero');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
        observer.observe(el);
    });

    // Button hover effects
    document.querySelectorAll('.button, .cta-link').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Product tile hover effects
    document.querySelectorAll('.product-tile').forEach(tile => {
        tile.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, .15)';
        });
        
        tile.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Carousel item interactions
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, .15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, .08)';
        });
    });

    // Apple-style Media Carousel Functionality
    const carousel = document.getElementById('mediaCarousel');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const items = document.querySelectorAll('.media-carousel-item');
    
    let currentSlide = 0;
    const itemsToShow = 3; // Number of items visible at once
    const totalSlides = Math.max(0, items.length - itemsToShow + 1);
    let isTransitioning = false;

    function updateCarousel() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        const itemWidth = items[0].offsetWidth + 20; // item width + margin
        const translateX = -currentSlide * itemWidth;
        
        carousel.style.transform = `translateX(${translateX}px)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        // Update button states
        prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentSlide >= totalSlides - 1 ? '0.5' : '1';
        
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    }

    function goToSlide(slideIndex) {
        if (slideIndex >= 0 && slideIndex < totalSlides) {
            currentSlide = slideIndex;
            updateCarousel();
        }
    }

    // Event listeners for carousel controls
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Indicator click handlers
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;
        
        if (Math.abs(deltaX) > 50) { // Minimum swipe distance
            if (deltaX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });

    // Auto-play functionality (optional)
    let autoPlayInterval;
    const autoPlayDelay = 5000; // 5 seconds

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            if (currentSlide >= totalSlides - 1) {
                currentSlide = 0;
            } else {
                currentSlide++;
            }
            updateCarousel();
        }, autoPlayDelay);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Start auto-play when carousel is in view
    const carouselObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAutoPlay();
            } else {
                stopAutoPlay();
            }
        });
    }, { threshold: 0.5 });

    if (carousel) {
        carouselObserver.observe(carousel.parentElement);
        
        // Pause auto-play on hover
        carousel.parentElement.addEventListener('mouseenter', stopAutoPlay);
        carousel.parentElement.addEventListener('mouseleave', startAutoPlay);
        
        // Initialize carousel
        updateCarousel();
    }

    // Keyboard navigation for carousel
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Mobile footer accordion (for responsive)
    if (window.innerWidth <= 734) {
        document.querySelectorAll('.as-globalfooter-directory-column-section-label').forEach(label => {
            label.addEventListener('click', function() {
                const checkbox = this.previousElementSibling;
                checkbox.checked = !checkbox.checked;
            });
        });
    }

    // Preload images for performance
    const imagesToPreload = [
        'https://images.unsplash.com/photo-1558618047-fcd1c4d28c07?auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Page load animation
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Performance optimization: Throttled scroll handler
    let ticking = false;
    
    function updateOnScroll() {
        // Additional scroll-based animations can be added here
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        // Update mobile footer behavior on resize
        if (window.innerWidth > 734) {
            document.querySelectorAll('.as-globalfooter-directory-column-section-state').forEach(checkbox => {
                checkbox.checked = false;
            });
        }
        
        // Update carousel on resize
        if (carousel) {
            updateCarousel();
        }
    });

    // Focus management for accessibility
    document.querySelectorAll('.globalnav-link').forEach(link => {
        link.addEventListener('focus', function() {
            this.style.outline = '2px solid #0066cc';
            this.style.outlineOffset = '2px';
        });
        
        link.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Enhanced button interactions
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.02)';
        });
    });

    console.log('Bulldog Garage - Apple.com Clone with Carousel initialized');
});
