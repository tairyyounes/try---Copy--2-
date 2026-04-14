/**
 * RIO Website - Main JavaScript
 * Sidra Food Industries
 */

(function() {
  'use strict';

  // ============================================
  // DOM Elements
  // ============================================
  const intro = document.getElementById('intro');
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const reveals = document.querySelectorAll('.reveal');
  const navItems = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  const backToTop = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  // ============================================
  // Intro / Loading Screen
  // ============================================
  window.addEventListener('load', () => {
    setTimeout(() => {
      intro.classList.add('hide');
    }, 2500);
  });

  // ============================================
  // Scroll Effects
  // ============================================
  window.addEventListener('scroll', () => {
    // Navbar scroll effect
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    
    // Back to top button
    backToTop.classList.toggle('show', window.scrollY > 500);

    // Active section tracking
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ============================================
  // Mobile Menu
  // ============================================
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuBtn.classList.toggle('active');
  });

  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      menuBtn.classList.remove('active');
    });
  });

  // ============================================
  // Back to Top
  // ============================================
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ============================================
  // Reveal on Scroll (Intersection Observer)
  // ============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, observerOptions);

  reveals.forEach(item => observer.observe(item));

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      
      if (target) {
        const offsetTop = target.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // FAQ Accordion
  // ============================================
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all other items
      document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ============================================
  // Contact Form Submission
  // ============================================
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      
      // Show loading state
      submitBtn.innerHTML = `
        <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="60">
            <animate attributeName="stroke-dashoffset" values="60;0" dur="1s" repeatCount="indefinite"/>
          </circle>
        </svg>
        جاري الإرسال...
      `;
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);
      
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formStatus.textContent = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
          formStatus.className = 'form-status success';
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        formStatus.textContent = 'حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة عبر الواتساب.';
        formStatus.className = 'form-status error';
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Hide status after 5 seconds
        setTimeout(() => {
          formStatus.className = 'form-status';
        }, 5000);
      }
    });
  }

  // ============================================
  // Preload Images
  // ============================================
  const imagesToPreload = [
    'images/hero-bg.png',
    'images/rio-logo.png',
    'images/about_pic.png'
  ];

  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // ============================================
  // Console Branding
  // ============================================
  console.log('%c SIDRA FOOD INDUSTRIES ', 'background: linear-gradient(135deg, #e12634, #c69a3d); color: #fff; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
  console.log('%c Made with passion in Libya ', 'color: #c69a3d; font-size: 12px;');

})();