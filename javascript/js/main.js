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
  const langBtn = document.getElementById('langBtn');
  let currentLanguage = document.documentElement.lang === 'en' ? 'en' : 'ar';

  const translations = {
    en: {
      nav: ['Home', 'About', 'Gallery', 'Products', 'FAQ', 'Contact'],
      heroEyebrow: 'Libyan Food Manufacturing',
      heroText: 'Quality you can trust, and taste that stays with you every day. A leading Libyan brand in bakery and premium food products.',
      heroButtons: ['Explore Products', 'Contact Us'],
      marquee: ['Quality Products', 'Fresh Daily', '100% Natural', 'Made in Libya', 'Trusted Brand'],
      stats: ['Years of Experience', 'Products', 'Happy Customers', 'Production'],
      about: {
        kicker: 'About Us',
        title: 'Our Story',
        intro: 'Sidra Food Industries is a leading Libyan company specialized in high-quality bakery and food products.',
        paragraphs: [
          'Since its establishment, Sidra Food Industries has focused on delivering carefully packaged bakery and food products that combine high quality, distinctive taste, and the strong visual identity of RIO.',
          'We believe quality is not just a standard, but a continuous commitment to our customers. That is why we use premium ingredients and modern production methods.'
        ],
        features: [
          ['Trusted Quality', 'Strict production standards from ingredients to final packaging.'],
          ['Strong Identity', 'Distinctive visual branding that keeps RIO memorable.'],
          ['Local Reach', 'Products tailored for the local market with strong distribution.'],
          ['Continuous Growth', 'Ongoing development in products and production lines.']
        ]
      },
      gallery: {
        kicker: 'Gallery',
        title: 'Our Products',
        intro: 'A glimpse of our premium products we proudly offer to our customers.',
        labels: ['Fresh Bread', 'Croissants', 'Bakery', 'Toast', 'Pastries']
      },
      products: {
        kicker: 'Our Products',
        title: 'Product Line',
        intro: 'A variety of high-quality products for every Libyan family.',
        cards: [
          ['Toast & Bread', 'Fresh daily essentials baked with care for every meal.', 'Best Seller'],
          ['RIO Croissants', 'Crispy golden croissants with an irresistible taste, perfect for breakfast and snacks.', 'New'],
          ['Family Packs', 'Economical packs designed to meet the needs of the whole family.', 'Family Size']
        ]
      },
      faq: {
        title: 'Common Questions',
        q: [
          'Where can we find RIO products?',
          'Are your products halal and guaranteed?',
          'How can we place wholesale orders?'
        ],
        a: [
          'RIO products are available in most supermarkets and major stores in Tripoli and other Libyan cities.',
          'Yes, all our products are 100% halal and follow strict food safety standards.',
          'For wholesale orders, contact us directly by phone or WhatsApp.'
        ]
      },
      contact: {
        kicker: 'Contact',
        title: 'Get in Touch',
        intro: 'We are happy to hear from you. Fill out the form and we will reply as soon as possible.',
        labels: ['Name', 'Email', 'Phone', 'Subject', 'Message'],
        placeholders: ['Enter your full name', 'example@email.com', '091-XXXXXXX', 'Message subject', 'Write your message here...'],
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Your message has been sent successfully! We will contact you soon.',
        error: 'Something went wrong. Please try again or contact us directly on WhatsApp.'
      },
      contactInfo: ['Contact Info', 'Connect', 'Phone', 'Location', 'South Ain Zara, Tripoli'],
      quickLinks: ['WhatsApp', 'Facebook', 'Email', 'Location'],
      footer: {
        titles: ['Quick Links', 'Products', 'Contact'],
        links1: ['Home', 'About Us', 'Products', 'Contact'],
        links2: ['Toast & Bread', 'Croissants', 'Family Packs'],
        brand: 'Sidra Food Industries - A leading Libyan brand in bakery and premium food products.',
        bottom: ['2024 Sidra Food Industries. All rights reserved.', 'Made with passion in Libya']
      },
      misc: {
        backToTop: 'Back to top',
        menu: 'Toggle Menu',
        langButton: 'English | العربية'
      }
    },
    ar: {
      nav: ['الرئيسية', 'من نحن', 'المعرض', 'المنتجات', 'الأسئلة', 'تواصل'],
      heroEyebrow: 'الصناعات الغذائية الليبية',
      heroText: 'الجودة التي تثق بها، والطعم الذي يرافقك كل يوم. علامة تجارية ليبية رائدة في صناعة المخبوزات والمنتجات الغذائية المميزة.',
      heroButtons: ['استكشف المنتجات', 'تواصل معنا'],
      marquee: ['منتجات عالية الجودة', 'طازج يومياً', 'طبيعي 100%', 'صنع في ليبيا', 'علامة موثوقة'],
      stats: ['سنوات الخبرة', 'منتجات', 'عملاء سعداء', 'الإنتاج'],
      about: {
        kicker: 'من نحن',
        title: 'قصتنا',
        intro: 'شركة سيدرا للصناعات الغذائية هي شركة ليبية رائدة متخصصة في إنتاج المخبوزات والمنتجات الغذائية عالية الجودة.',
        paragraphs: [
          'منذ تأسيسها، حرصت شركة سيدرا للصناعات الغذائية على تقديم منتجات غذائية ومخبوزات مغلفة بعناية فائقة، وفق أحدث معايير التصنيع العالمية التي تجمع بين الجودة العالية والطعم المميز والهوية البصرية القوية لعلامة RIO.',
          'نؤمن بأن الجودة ليست مجرد معيار، بل هي التزام مستمر تجاه عملائنا. لذلك نحرص على اختيار أفضل المكونات واتباع أحدث تقنيات الإنتاج لضمان تقديم منتجات تليق بثقة المستهلك الليبي.'
        ],
        features: [
          ['جودة موثوقة', 'معايير إنتاج صارمة من المكونات حتى التغليف النهائي.'],
          ['هوية قوية', 'تصميم بصري مميز يرسخ اسم RIO في ذهن المستهلك.'],
          ['انتشار محلي', 'منتجات موجهة للسوق المحلي بوجود قوي ومنظم.'],
          ['نمو مستمر', 'تطوير دائم للمنتجات وخطوط الإنتاج.']
        ]
      },
      gallery: {
        kicker: 'المعرض',
        title: 'منتجاتنا',
        intro: 'لمحة من منتجاتنا المميزة التي نفتخر بتقديمها لعملائنا.',
        labels: ['خبز طازج', 'كرواسون', 'مخبوزات', 'توست', 'معجنات']
      },
      products: {
        kicker: 'منتجاتنا',
        title: 'خط المنتجات',
        intro: 'مجموعة متنوعة من المنتجات عالية الجودة تلبي احتياجات كل أسرة ليبية.',
        cards: [
          ['توست وخبز', 'منتجات يومية أساسية طازجة، مخبوزة بعناية لتكون مثالية لكل وجبة.', 'الأكثر مبيعاً'],
          ['كرواسون RIO', 'كرواسون هش وذهبي بطعم لا يُقاوم، مثالي للفطور والسناكس.', 'جديد'],
          ['عبوات العائلة', 'عبوات اقتصادية مصممة لتلبي احتياجات العائلة الكاملة.', 'حجم عائلي']
        ]
      },
      faq: {
        title: 'الأسئلة الشائعة',
        q: [
          'وين نقدر نلقو منتجات RIO؟',
          'هل منتجاتكم حلال ومضمونة؟',
          'كيف نقدروا يوصلوا للطلب بالجملة؟'
        ],
        a: [
          'تتوفر منتجات RIO في أغلب السوبرماركت والمحلات الكبرى في طرابلس وباقي المدن الليبية.',
          'نعم، جميع منتجاتنا حلال 100% وتخضع لرقابة الجودة والسلامة الغذائية.',
          'للطلب بالجملة، يمكنكم التواصل معنا مباشرة عبر الهاتف أو الواتساب.'
        ]
      },
      contact: {
        kicker: 'تواصل',
        title: 'تواصل معنا',
        intro: 'نسعد بتواصلكم معنا. املأ النموذج وسنرد عليكم في أقرب وقت.',
        labels: ['الاسم', 'البريد الإلكتروني', 'رقم الهاتف', 'الموضوع', 'الرسالة'],
        placeholders: ['أدخل اسمك الكامل', 'example@email.com', '091-XXXXXXX', 'موضوع الرسالة', 'اكتب رسالتك هنا...'],
        submit: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        success: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
        error: 'حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة عبر الواتساب.'
      },
      contactInfo: ['معلومات التواصل', 'تواصل', 'الهاتف', 'الموقع', 'جنوب عين زارة، طرابلس'],
      quickLinks: ['واتساب', 'فيسبوك', 'بريد إلكتروني', 'الموقع'],
      footer: {
        titles: ['روابط سريعة', 'المنتجات', 'تواصل'],
        links1: ['الرئيسية', 'من نحن', 'المنتجات', 'تواصل'],
        links2: ['توست وخبز', 'كرواسون', 'عبوات العائلة'],
        brand: 'شركة سيدرا للصناعات الغذائية - علامة تجارية ليبية رائدة في إنتاج المخبوزات والمنتجات الغذائية عالية الجودة.',
        bottom: ['2024 شركة سيدرا للصناعات الغذائية. جميع الحقوق محفوظة.', 'صنع بشغف في ليبيا']
      },
      misc: {
        backToTop: 'العودة للأعلى',
        menu: 'فتح/إغلاق القائمة',
        langButton: 'English | العربية'
      }
    }
  };

  function setTextIfExists(selector, value) {
    const element = document.querySelector(selector);
    if (element && typeof value === 'string') {
      element.textContent = value;
    }
  }

  function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const navItemsList = document.querySelectorAll('.nav-links a');
    navItemsList.forEach((item, index) => {
      if (t.nav[index]) item.textContent = t.nav[index];
    });

    setTextIfExists('.eyebrow', t.heroEyebrow);
    setTextIfExists('.hero-copy p', t.heroText);
    setTextIfExists('.hero-actions .btn-primary', t.heroButtons[0]);
    setTextIfExists('.hero-actions .btn-secondary', t.heroButtons[1]);

    document.querySelectorAll('.marquee-item').forEach((row) => {
      const textNodes = Array.from(row.childNodes).filter((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
      textNodes.forEach((node, idx) => {
        if (t.marquee[idx]) node.textContent = ` ${t.marquee[idx]} `;
      });
    });

    document.querySelectorAll('.stat-label').forEach((item, index) => {
      if (t.stats[index]) item.textContent = t.stats[index];
    });

    setTextIfExists('#about .section-kicker', t.about.kicker);
    setTextIfExists('#about .section-head .en-title', t.about.title);
    setTextIfExists('#about .section-intro', t.about.intro);
    const aboutParagraphs = document.querySelectorAll('#about .about-card > p');
    aboutParagraphs.forEach((p, index) => {
      if (t.about.paragraphs[index]) p.textContent = t.about.paragraphs[index];
    });
    const aboutFeatures = document.querySelectorAll('#about .feature');
    aboutFeatures.forEach((feature, index) => {
      const title = feature.querySelector('h4');
      const body = feature.querySelector('p');
      if (title && t.about.features[index]) title.textContent = t.about.features[index][0];
      if (body && t.about.features[index]) body.textContent = t.about.features[index][1];
    });

    setTextIfExists('#gallery .section-kicker', t.gallery.kicker);
    setTextIfExists('#gallery .section-head .en-title', t.gallery.title);
    setTextIfExists('#gallery .section-intro', t.gallery.intro);
    document.querySelectorAll('#gallery .gallery-overlay span').forEach((item, index) => {
      if (t.gallery.labels[index]) item.textContent = t.gallery.labels[index];
    });

    setTextIfExists('#products .section-kicker', t.products.kicker);
    setTextIfExists('#products .section-head .en-title', t.products.title);
    setTextIfExists('#products .section-intro', t.products.intro);
    const productCards = document.querySelectorAll('#products .product-card');
    productCards.forEach((card, index) => {
      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      const tag = card.querySelector('.product-tag');
      if (h3 && t.products.cards[index]) h3.textContent = t.products.cards[index][0];
      if (p && t.products.cards[index]) p.textContent = t.products.cards[index][1];
      if (tag && t.products.cards[index]) tag.textContent = t.products.cards[index][2];
    });

    setTextIfExists('#faq .section-head .en-title', t.faq.title);
    const faqQuestions = document.querySelectorAll('#faq .faq-question span');
    faqQuestions.forEach((q, index) => {
      if (t.faq.q[index]) q.textContent = t.faq.q[index];
    });
    const faqAnswers = document.querySelectorAll('#faq .faq-answer p');
    faqAnswers.forEach((a, index) => {
      if (t.faq.a[index]) a.textContent = t.faq.a[index];
    });

    setTextIfExists('#contact .section-kicker', t.contact.kicker);
    setTextIfExists('#contact .section-head .en-title', t.contact.title);
    setTextIfExists('#contact .section-intro', t.contact.intro);
    const labels = document.querySelectorAll('#contact .contact-form label');
    labels.forEach((label, index) => {
      if (t.contact.labels[index]) label.textContent = t.contact.labels[index];
    });
    const inputs = [
      document.getElementById('name'),
      document.getElementById('email'),
      document.getElementById('phone'),
      document.getElementById('subject'),
      document.getElementById('message')
    ];
    inputs.forEach((input, index) => {
      if (input && t.contact.placeholders[index]) input.placeholder = t.contact.placeholders[index];
    });
    setTextIfExists('.submit-btn', t.contact.submit);

    setTextIfExists('#contact .contact-card:nth-of-type(2) .section-kicker', t.contactInfo[0]);
    setTextIfExists('#contact .contact-card:nth-of-type(2) .en-title', t.contactInfo[1]);
    const contactSpans = document.querySelectorAll('#contact .contact-item span');
    if (contactSpans[0]) contactSpans[0].textContent = t.contactInfo[2];
    if (contactSpans[1]) contactSpans[1].textContent = t.contactInfo[3];
    const locationStrong = document.querySelector('#contact .contact-item:nth-of-type(2) strong');
    if (locationStrong) locationStrong.textContent = t.contactInfo[4];

    document.querySelectorAll('#contact .quick-link').forEach((link, index) => {
      if (t.quickLinks[index]) link.textContent = t.quickLinks[index];
    });

    const footerTitles = document.querySelectorAll('.footer-title');
    footerTitles.forEach((title, index) => {
      if (t.footer.titles[index]) title.textContent = t.footer.titles[index];
    });
    const footerBrand = document.querySelector('.footer-brand p');
    if (footerBrand) footerBrand.textContent = t.footer.brand;
    document.querySelectorAll('.footer-links:nth-of-type(1) a').forEach((item, index) => {
      if (t.footer.links1[index]) item.textContent = t.footer.links1[index];
    });
    document.querySelectorAll('.footer-links:nth-of-type(2) a').forEach((item, index) => {
      if (t.footer.links2[index]) item.textContent = t.footer.links2[index];
    });
    const footerBottom = document.querySelectorAll('.footer-bottom div');
    if (footerBottom[0]) footerBottom[0].textContent = t.footer.bottom[0];
    if (footerBottom[1]) footerBottom[1].textContent = t.footer.bottom[1];

    if (backToTop) backToTop.setAttribute('aria-label', t.misc.backToTop);
    if (menuBtn) menuBtn.setAttribute('aria-label', t.misc.menu);
    if (langBtn) langBtn.textContent = t.misc.langButton;
  }

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
  function closeMobileMenu() {
    navLinks.classList.remove('show');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.setAttribute('aria-expanded', 'false');

  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('show');
    menuBtn.classList.toggle('active', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
      setLanguage(nextLanguage);
    });
  }

  navItems.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  document.addEventListener('click', (event) => {
    if (window.innerWidth > 860) return;
    if (!navLinks.classList.contains('show')) return;
    if (menuBtn.contains(event.target) || navLinks.contains(event.target)) return;
    closeMobileMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMobileMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileMenu();
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
      
      const activeContactText = translations[currentLanguage].contact;

      // Show loading state
      submitBtn.innerHTML = `
        <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="60">
            <animate attributeName="stroke-dashoffset" values="60;0" dur="1s" repeatCount="indefinite"/>
          </circle>
        </svg>
        ${activeContactText.sending}
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
          formStatus.textContent = activeContactText.success;
          formStatus.className = 'form-status success';
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        formStatus.textContent = activeContactText.error;
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

  setLanguage(currentLanguage);

})();