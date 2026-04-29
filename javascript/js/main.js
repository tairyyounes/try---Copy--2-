/**
 * RIO Website - Main JavaScript
 * Sidra Food Industries
 */

(function () {
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
  const statsSection = document.getElementById('stats');
  const statNumbers = document.querySelectorAll('#stats .stat-number');
  let currentLanguage = document.documentElement.lang === 'en' ? 'en' : 'ar';
  let statsAnimationStarted = false;

  const translations = {
    en: {
      brand: {
        title: 'SIDRA FOOD INDUSTRIES',
        subtitle: 'Quality . Trust . Continuity'
      },
      heroTitle: 'SIDRA FOOD INDUSTRIES',
      nav: ['Home', 'About', 'Gallery', 'Products', 'FAQ', 'Contact'],
      heroEyebrow: 'Libyan Food Manufacturing',
      heroText: 'Products with the taste of trust... RIO',
      heroButtons: ['Explore Products', 'Contact Us'],
      marquee: ['Quality', 'Trust', 'Commitment', 'Continuity', 'Development'],
      stats: ['Years of Experience', 'Products', 'Happy Customers', 'Production'],
      about: {
        kicker: 'About Us',
        title: '',
        intro: 'Sidra Food Industries is a leading Libyan company in food manufacturing, offering high-quality products that meet the needs of the local market and keep pace with its developments.',
        paragraphs: [
          'The company operates through its brand "RIO", which represents our commitment to providing products with a distinct taste and consistent quality, to be part of the consumer\'s daily routine.',
          'RIO products are made using a special high-quality, protein-rich flour developed specifically to match our product specifications. This careful selection of ingredients ensures an ideal balance between softness and nutritional value, and reflects our commitment to delivering products with high standards of quality and distinctive taste.'
        ],
        visionTitle: 'Our Vision',
        visionText: 'To be one of the most prominent companies in the food industry sector in Libya, and to establish the RIO brand as the first choice in terms of quality and trust.',
        missionTitle: 'Our Mission',
        missionText: 'To provide high-quality food products using selected ingredients and modern manufacturing standards, ensuring a reliable and distinctive daily experience.',
        valuesTitle: 'Our Values',
        values: ['Quality', 'Trust', 'Commitment', 'Continuity', 'Development'],
        whyRioTitle: 'Why RIO?',
        features: [
          ['Consistent Quality', 'You can rely on'],
          ['Distinct Taste', 'Suits different palates'],
          ['Selected Ingredients', 'Carefully chosen'],
          ['Preserving Packaging', 'Maintains product quality'],
          ['Daily Consumption', 'Suitable for all times']
        ],
        distributionTitle: 'Distribution & Partnerships',
        distributionText: 'We are working to develop an effective distribution network that ensures our products reach different regions. We also welcome building long-term partnerships with distributors and points of sale, to achieve common and sustainable growth.',
        cooperationTitle: 'Call for Cooperation',
        cooperationText: 'We believe that true success is built on partnerships, and we seek to work with partners who share our same standards of quality and ambition.'
      },
      gallery: {
        kicker: 'Gallery',
        title: 'Our Products',
        intro: 'A glimpse of our premium products we proudly offer to our customers.',
        slides: [
          { title: 'RIO One', desc: 'High-quality chocolate filling with a unique Italian taste.', tag: 'RIO ONE' },
          { title: 'RIO 🥇 (RIO)', desc: 'Premium chocolate with a rich flavor containing 10% hazelnut.', tag: 'Chocolate' },
          { title: 'RIO Mini (RIO Mini)', desc: 'Wonderful chocolate filling in small distinguished pieces.', tag: 'Mini' },
          { title: 'Fresh Toast', desc: 'Our premium bread products, fresh daily.', tag: 'Toast' },
          { title: 'Family Packs', desc: 'Convenient sizes for the whole family.', tag: 'Family' }
        ]
      },
      products: {
        kicker: 'Line of Products',
        title: 'Line of Products',
        intro: 'A variety of high-quality products for every Libyan family.',
        tabs: ['RIO Croissant', 'RIO Family Croissant', 'RIO Cake', 'RIO Toast'],
        cardsData: {
          'card-rio-one': { title: 'RIO ONE', desc: 'High-quality chocolate filling with a unique Italian taste.', info: 'Large Size | 1 Month Validity | Italian Taste', tag: 'RIO ONE' },
          'card-rio-regular': { title: 'RIO 🥇 (RIO)', desc: 'Premium chocolate with a rich flavor containing 10% hazelnut.', info: 'Regular Size | 3 Months Validity | Italian Taste', tag: 'Chocolate' },
          'card-rio-mini': { title: 'RIO Mini', desc: 'Wonderful chocolate filling in small distinguished pieces.', info: 'Weight 35-45g | 1 Month Validity', tag: 'Mini' },
          'card-family-8': { title: 'RIO Family Croissant', desc: 'Butter croissant family pack containing 8 pieces. Weight 65g.', info: '8 Pieces | 1 Month Validity | Family Pack', tag: 'Family - 8 Pcs' },
          'card-extra-preserve': { title: 'Extra Butter — Preserve', desc: 'Extra butter croissant in a preservative container with 8 pieces. Weight 85-90g.', info: 'Preserve Pack | Extra Butter | Premium', tag: 'Preserve' },
          'card-extra-bag': { title: 'Extra Butter — Bag', desc: 'Extra butter croissant in a practical bag with 8 pieces. Weight 85-90g.', info: 'Bag | Extra Butter | Italian Taste', tag: 'Bag' },
          'card-cake-vanilla': { title: 'Pound Cake — Vanilla', desc: 'Fresh Italian vanilla cake. Weight 150g.', info: 'Vanilla Flavor | 3 Months Validity | Italian Taste', tag: 'Vanilla 150g' },
          'card-toast-small': { title: 'RIO Toast — Small White', desc: 'Regular toast in individual size — perfect for daily use.', info: '284 kcal | 1.69g Fat | Italian Taste', tag: 'Small' },
          'card-toast-large': { title: 'RIO Toast — Large White (Family)', desc: 'Regular toast in large family size — soft and fresh.', info: '284 kcal | 1.69g Fat | 0.29g Saturated Fat', tag: 'Family Size' },
          'card-toast-barley': { title: 'RIO Barley Toast', desc: 'Barley toast — distinctive natural flavor rich in minerals.', info: '284 kcal | 1.69g Fat | Natural Fiber', tag: 'Barley' },
          'card-toast-oats': { title: 'RIO Oats Toast', desc: 'Oats toast — rich in fiber for longer satiety.', info: '284 kcal | 1.69g Fat | 5g Sugar', tag: 'Oats' },
          'card-toast-milk': { title: 'RIO Milk Toast', desc: 'Milk toast — soft fresh slices.', info: '284 kcal | 1.69g Fat | 5g Sugar', tag: 'Milk' },
          'card-toast-multi': { title: 'RIO Multi-Grain Toast', desc: 'Multi-grain toast — a rich blend of whole grains for better health.', info: '284 kcal | Whole Grains | Italian Taste', tag: 'Multi-Grain' }
        }
      },
      faq: {
        title: 'Common Questions',
        q: [
          'Where can we find RIO products?',
          'Are Sidra products fresh daily?',
          'How can we place wholesale orders?'
        ],
        a: [
          'RIO products are available in most supermarkets and major stores in Tripoli and other Libyan cities.',
          'Yes, products are produced and distributed daily to ensure quality.',
          'For wholesale orders, you can contact us directly by phone or WhatsApp.'
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
      quickLinks: ['WhatsApp', 'Facebook', 'Instagram', 'Email', 'Location'],
      footer: {
        titles: ['Quick Links', 'Products', 'Contact'],
        links1: ['Home', 'About Us', 'Products', 'Contact'],
        links2: ['Toast', 'Croissants', 'Family Packs'],
        brand: 'Sidra Food Industries - A leading Libyan brand in food manufacturing and premium food products.',
        bottom: ['Sidra Food Industries – RIO … Products with the taste of trust', '']
      },
      misc: {
        backToTop: 'Back to top',
        menu: 'Toggle Menu',
        langButton: 'English | العربية',
        readMore: 'Read More'
      }
    },
    ar: {
      brand: {
        title: 'شركة سيدرا للصناعات الغذائية',
        subtitle: 'الجودة . الثقة . الاستمرارية'
      },
      nav: ['الرئيسية', 'من نحن', 'المعرض', 'المنتجات', 'الأسئلة', 'تواصل'],
      heroEyebrow: 'الصناعات الغذائية الليبية',
      heroText: 'منتجات بطعم الثقة... RIO',
      heroButtons: ['استكشف المنتجات', 'تواصل معنا'],
      marquee: ['الجودة', 'الثقة', 'الالتزام', 'الاستمرارية', 'التطوير'],
      stats: ['3+', '15+', '50K+', '24/7'],
      about: {
        kicker: 'من نحن',
        title: '',
        intro: 'شركة سيدرا للصناعات الغذائية هي شركة ليبية رائدة في الصناعات الغذائية، تقدم منتجات عالية الجودة تلبي احتياجات السوق المحلي وتواكب تطوراته.',
        paragraphs: [
          'تعمل الشركة من خلال علامتها التجارية “ريو”، التي تمثل التزامنا بتقديم منتجات بطعم مميز وجودة ثابتة، لتكون جزءًا من الاستهلاك اليومي للمستهلك.',
          'تُصنَّع منتجات ريو باستخدام دقيق خاص عالي الجودة وغني بالبروتين، تم تطويره خصيصًا ليتناسب مع مواصفات منتجاتنا. هذا الاختيار الدقيق للمكونات يضمن تحقيق توازن مثالي بين الطراوة والقيمة الغذائية، ويعكس التزامنا بتقديم منتجات بمعايير عالية من الجودة والطعم المميز.'
        ],
        visionTitle: 'رؤيتنا',
        visionText: 'أن نكون من أبرز الشركات في قطاع الصناعات الغذائية في ليبيا، وأن نرسخ علامة ريو كخيار أول من حيث الجودة والثقة.',
        missionTitle: 'رسالتنا',
        missionText: 'تقديم منتجات غذائية عالية الجودة باستخدام مكونات مختارة ومعايير تصنيع حديثة، بما يضمن تجربة يومية موثوقة ومميزة.',
        valuesTitle: 'قيمنا',
        values: ['الجودة', 'الثقة', 'الالتزام', 'الاستمرارية', 'التطوير'],
        whyRioTitle: 'لماذا ريو؟',
        features: [
          ['جودة ثابتة', 'يمكن الاعتماد عليها'],
          ['طعم مميز', 'يناسب مختلف الأذواق'],
          ['مكونات مختارة', 'بعناية فائقة'],
          ['تغليف يحافظ', 'على جودة المنتج'],
          ['استهلاك يومي', 'مناسبة لكل الأوقات']
        ],
        distributionTitle: 'التوزيع والشراكات',
        distributionText: 'نعمل على تطوير شبكة توزيع فعالة تضمن وصول منتجاتنا إلى مختلف المناطق، كما نرحب ببناء شراكات طويلة المدى مع الموزعين ونقاط البيع، بما يحقق نموًا مشتركًا ومستدامًا.',
        cooperationTitle: 'دعوة للتعاون',
        cooperationText: 'نؤمن أن النجاح الحقيقي يُبنى على الشراكات، ونسعى للعمل مع شركاء يشاركوننا نفس معايير الجودة والطموح.'
      },
      gallery: {
        kicker: 'المعرض',
        title: 'منتجاتنا',
        intro: 'لمحة من منتجاتنا المميزة التي نفتخر بتقديمها لعملائنا.',
        slides: [
          { title: 'ريو ون (RIO ONE)', desc: 'حشوة شوكولاتة عالية الجودة ومذاق إيطالي فريد.', tag: 'ريو ون' },
          { title: 'ريو 🥇 (RIO)', desc: 'شوكولاتة فاخرة بنكهة غنية تحتوي على 10% بندق.', tag: 'شوكولاتة' },
          { title: 'ريو ميني (RIO Mini)', desc: 'حشوة شوكولاتة رائعة في قطع صغيرة متميزة.', tag: 'ميني' },
          { title: 'توست طازج', desc: 'منتجات الخبز الفاخرة، طازجة يومياً.', tag: 'توست' },
          { title: 'عبوات عائلية', desc: 'أحجام مناسبة تلبي احتياجات كل الأسرة.', tag: 'عائلي' }
        ]
      },
      products: {
        kicker: 'منتجاتنا',
        title: 'خط المنتجات',
        intro: 'مجموعة متنوعة من المنتجات عالية الجودة تلبي احتياجات كل أسرة ليبية.',
        tabs: ['كرواسون ريو', 'فاميلي ريو', 'كيك ريو', 'توست ريو'],
        cardsData: {
          'card-rio-one': { title: 'ريو ون (RIO ONE)', desc: 'حشوة شوكولاتة عالية الجودة ومذاق إيطالي فريد.', info: 'حجم كبير | صلاحية شهر واحد | Italian Taste', tag: 'ريو ون' },
          'card-rio-regular': { title: 'ريو 🥇 (RIO)', desc: 'شوكولاتة فاخرة بنكهة غنية تحتوي على 10% بندق.', info: 'حجم عادي | صلاحية ثلاثة أشهر | Italian Taste', tag: 'شوكولاتة' },
          'card-rio-mini': { title: 'ريو ميني (RIO Mini)', desc: 'حشوة شوكولاتة رائعة في قطع صغيرة متميزة.', info: 'وزن القطعة 35-45g | صلاحية شهر واحد', tag: 'ميني' },
          'card-family-8': { title: 'كرواسون عائلي — Rio Family', desc: 'كرواسون بالزبدة عبوة عائلية تحتوي على 8 قطع. وزن القطعة 65 جرام.', info: '8 قطع | صلاحية شهر واحد | Family Pack', tag: 'عائلي - 8 قطع' },
          'card-extra-preserve': { title: 'كرواسون إكسترا زبدة — حافظة', desc: 'كرواسون إكسترا زبدة في عبوة حافظة تحتوي على 8 قطع. وزن القطعة 85-90 جرام.', info: 'عبوة حافظة | Extra Butter | Premium', tag: 'عبوة حافظة' },
          'card-extra-bag': { title: 'كرواسون إكسترا زبدة — كيس', desc: 'كرواسون إكسترا زبدة في كيس عملي يحتوي على 8 قطع. وزن القطعة 85-90 جرام.', info: 'كيس | Extra Butter | Italian Taste', tag: 'عبوة كيس' },
          'card-cake-vanilla': { title: 'باوند كيك — Pound Cake Vanilla', desc: 'كيك الفانيليا الإيطالي الطازج. وزن 150 جرام.', info: 'نكهة الفانيلا | صلاحية 3 أشهر | Italian Taste', tag: 'فانيليا 150 جرام' },
          'card-toast-small': { title: 'توست ريو — عادي صغير', desc: 'توست عادي بحجم فردي — مثالي للاستخدام اليومي.', info: 'طاقة: 284 kcal | دهون: 1.69g | Italian Taste', tag: 'حجم صغير' },
          'card-toast-large': { title: 'توست ريو — عادي كبير (عائلي)', desc: 'توست عادي بحجم عائلي كبير — ناعم وطازج.', info: 'طاقة: 284 kcal | دهون: 1.69g | دهون مشبعة: 0.29g', tag: 'حجم عائلي' },
          'card-toast-barley': { title: 'توست ريو بالشعير', desc: 'توست بالشعير — نكهة طبيعية مميزة وغنية بالمعادن.', info: 'طاقة: 284 kcal | دهون: 1.69g | ألياف طبيعية', tag: 'شعير' },
          'card-toast-oats': { title: 'توست ريو الشوفان', desc: 'توست الشوفان — غني بالألياف للشعور بالشبع.', info: 'طاقة: 284 kcal | دهون: 1.69g | سكر: 5g', tag: 'شوفان' },
          'card-toast-milk': { title: 'توست ريو بالحليب', desc: 'توست بالحليب — شرائح طازجة ناعمة.', info: 'طاقة: 284 kcal | دهون: 1.69g | سكر: 5g', tag: 'حليب' },
          'card-toast-multi': { title: 'توست ريو متعدد الحبوب', desc: 'توست متعدد الحبوب — مزيج غني من الحبوب الكاملة لصحة أفضل.', info: 'طاقة: 284 kcal | حبوب كاملة | Italian Taste', tag: 'متعدد الحبوب' }
        }
      },
      faq: {
        title: 'الأسئلة الشائعة',
        q: [
          'وين نقدر نلقى المنتجات RIO؟',
          'هل منتجات سيدرا طازجة يومياً؟',
          'كيف نقدر نطلب بالجملة؟'
        ],
        a: [
          'تتوفر المنتجات RIO في أغلب السوبرماركت والمحلات الكبرى في طرابلس وباقي المدن الليبية.',
          'نعم، يتم إنتاج وتوزيع المنتجات بشكل يومي لضمان الجودة.',
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
      quickLinks: ['واتساب', 'فيسبوك', 'إنستجرام', 'بريد إلكتروني', 'الموقع'],
      footer: {
        titles: ['روابط سريعة', 'المنتجات', 'تواصل'],
        links1: ['الرئيسية', 'من نحن', 'المنتجات', 'تواصل'],
        links2: ['توست', 'كرواسون', 'عبوات العائلة'],
        brand: 'شركة سيدرا للصناعات الغذائية - علامة تجارية ليبية رائدة في الصناعات الغذائية والمنتجات عالية الجودة.',
        bottom: ['شركة سيدرا للصناعات الغذائية – RIO … منتجات بطعم الثقة', '']
      },
      misc: {
        backToTop: 'العودة للأعلى',
        menu: 'فتح/إغلاق القائمة',
        langButton: 'English | العربية',
        readMore: 'كل المنتجات '
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
    setTextIfExists('.logo', t.brand.title);
    setTextIfExists('.logo-sub', t.brand.subtitle);
    setTextIfExists('.hero-company-title', t.heroTitle);
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

    setTextIfExists('.vision-title', t.about.visionTitle);
    setTextIfExists('.vision-text', t.about.visionText);
    setTextIfExists('.mission-title', t.about.missionTitle);
    setTextIfExists('.mission-text', t.about.missionText);

    setTextIfExists('.values-title', t.about.valuesTitle);
    const valueItems = document.querySelectorAll('.value-item');
    valueItems.forEach((item, index) => {
      if (t.about.values[index]) item.textContent = t.about.values[index];
    });

    setTextIfExists('.why-rio-title', t.about.whyRioTitle);
    setTextIfExists('.distribution-title', t.about.distributionTitle);
    setTextIfExists('.distribution-text', t.about.distributionText);
    setTextIfExists('.cooperation-title', t.about.cooperationTitle);
    setTextIfExists('.cooperation-text', t.about.cooperationText);

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
    document.querySelectorAll('#gallery .gallery-item').forEach((item, index) => {
      if (t.gallery.slides && t.gallery.slides[index]) {
        const slide = t.gallery.slides[index];
        // تحديث التسمية إذا كانت موجودة (gallery-label)
        const label = item.querySelector('.gallery-label');
        if (label) label.textContent = slide.title;

        // إذا كان هناك سلايدر (Slider) في المستقبل، الكود جاهز لتحديثه هنا
        const slideTitle = item.querySelector('h3');
        const slideDesc = item.querySelector('p');
        const slideTag = item.querySelector('.slide-tag');
        if (slideTitle) slideTitle.textContent = slide.title;
        if (slideDesc) slideDesc.textContent = slide.desc;
        if (slideTag) slideTag.textContent = slide.tag;
      }
    });

    setTextIfExists('#products .section-kicker', t.products.kicker);
    setTextIfExists('#products .section-head .en-title', t.products.title);
    setTextIfExists('#products .section-intro', t.products.intro);

    // Update Product Tabs
    document.querySelectorAll('.product-tab').forEach((tab, index) => {
      const textNodes = Array.from(tab.childNodes).filter((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
      if (textNodes.length > 0 && t.products.tabs && t.products.tabs[index]) {
        textNodes[textNodes.length - 1].textContent = ` ${t.products.tabs[index]} `;
      }
    });

    const cardsData = t.products.cardsData;
    if (cardsData) {
      Object.keys(cardsData).forEach((className) => {
        const cards = document.querySelectorAll('.' + className);
        cards.forEach((card) => {
          const item = cardsData[className];
          const h3 = card.querySelector('h3');
          const p = card.querySelector('p');
          const tag = card.querySelector('.product-tag');
          const nutrition = card.querySelector('.product-nutrition');

          if (h3) h3.textContent = item.title;
          if (p) {
            const textNodes = Array.from(p.childNodes).filter((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
            if (textNodes.length > 0) textNodes[0].textContent = item.desc;
          }
          if (nutrition) nutrition.textContent = item.info;
          if (tag) tag.textContent = item.tag;
        });
      });
    }

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
    if (contactSpans[1]) contactSpans[1].textContent = t.contactInfo[2];
    if (contactSpans[2]) contactSpans[2].textContent = t.contactInfo[3];
    const locationStrong = document.querySelector('#contact .contact-item:nth-of-type(3) strong');
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
    const footerLinksGroups = document.querySelectorAll('.footer .footer-links');
    if (footerLinksGroups[0]) {
      footerLinksGroups[0].querySelectorAll('a').forEach((item, index) => {
        if (t.footer.links1[index]) item.textContent = t.footer.links1[index];
      });
    }
    if (footerLinksGroups[1]) {
      footerLinksGroups[1].querySelectorAll('a').forEach((item, index) => {
        if (t.footer.links2[index]) item.textContent = t.footer.links2[index];
      });
    }
    const footerBottom = document.querySelectorAll('.footer-bottom div');
    if (footerBottom[0]) footerBottom[0].textContent = t.footer.bottom[0];
    if (footerBottom[1]) footerBottom[1].textContent = t.footer.bottom[1];

    if (backToTop) backToTop.setAttribute('aria-label', t.misc.backToTop);
    if (menuBtn) menuBtn.setAttribute('aria-label', t.misc.menu);
    if (langBtn) langBtn.textContent = t.misc.langButton;
    setTextIfExists('.products-read-more .btn', t.misc.readMore);
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
  // Stats Counter Animation
  // ============================================
  function animateValue(element, target, options = {}) {
    const prefix = options.prefix || '';
    const suffix = options.suffix || '';
    const initialSuffix = options.initialSuffix !== undefined ? options.initialSuffix : suffix;
    const duration = options.duration || 2100;
    const startTime = performance.now();
    let lastRendered = -1;

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = progress < 0.55
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      const currentValue = Math.floor(easedProgress * target);
      const activeSuffix = progress < 1 ? initialSuffix : suffix;
      if (currentValue !== lastRendered || progress === 1) {
        element.textContent = `${prefix}${currentValue}${activeSuffix}`;
        lastRendered = currentValue;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = `${prefix}${target}${suffix}`;
      }
    }

    requestAnimationFrame(step);
  }

  function startStatsCounters() {
    if (statsAnimationStarted || statNumbers.length < 4) return;

    const counterConfigs = [
      { target: 3, suffix: '+', duration: 1800 },
      { target: 15, suffix: '+', duration: 1950 },
      { target: 50, suffix: 'K+', duration: 2150 },
      { target: 24, suffix: '/7', initialSuffix: '', duration: 2300 }
    ];

    statNumbers.forEach((counter, index) => {
      const config = counterConfigs[index];
      if (!config) return;
      counter.textContent = `${config.prefix || ''}0${config.suffix || ''}`;
      animateValue(counter, config.target, config);
    });

    statsAnimationStarted = true;
  }

  function setupStatsCounterAnimation() {
    if (!statsSection || !statNumbers.length) return;

    if ('IntersectionObserver' in window) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startStatsCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });

      statsObserver.observe(statsSection);
      return;
    }

    const onScroll = () => {
      if (statsAnimationStarted) return;
      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        startStatsCounters();
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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
  // Product Tabs
  // ============================================
  const productTabs = document.querySelectorAll('.product-tab');
  const productPanels = document.querySelectorAll('.product-panel');
  const productsSwiperTrack = document.getElementById('productsSwiperTrack');
  const productsPrev = document.getElementById('productsPrev');
  const productsNext = document.getElementById('productsNext');

  productTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      productTabs.forEach(t => t.classList.remove('active'));

      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all panels
      productPanels.forEach(panel => panel.classList.remove('active'));

      // Show target panel
      const targetPanelId = 'panel-' + tab.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  if (productsSwiperTrack && productsPrev && productsNext) {
    let currentSlide = 0;
    const isRTL = document.documentElement.dir === 'rtl';

    function getVisibleSlides() {
      if (window.innerWidth <= 600) return 1;
      if (window.innerWidth <= 1100) return 2;
      return 3;
    }

    function updateProductsSwiper() {
      const slides = productsSwiperTrack.querySelectorAll('.products-swiper-slide');
      if (!slides.length) return;

      const visibleSlides = getVisibleSlides();
      const maxSlide = Math.max(0, slides.length - visibleSlides);
      if (currentSlide > maxSlide) currentSlide = 0;
      if (currentSlide < 0) currentSlide = maxSlide;

      const slideWidth = slides[0].getBoundingClientRect().width;
      const trackStyles = window.getComputedStyle(productsSwiperTrack);
      const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || '0') || 0;
      const offset = (slideWidth + gap) * currentSlide;
      productsSwiperTrack.style.transform = isRTL
        ? `translateX(${offset}px)`
        : `translateX(-${offset}px)`;

      productsPrev.disabled = false;
      productsNext.disabled = false;
    }

    productsPrev.addEventListener('click', () => {
      currentSlide -= 1;
      updateProductsSwiper();
    });

    productsNext.addEventListener('click', () => {
      currentSlide += 1;
      updateProductsSwiper();
    });

    // Auto-move one product at a time so the product line keeps moving by itself.
    setInterval(() => {
      currentSlide += 1;
      updateProductsSwiper();
    }, 3000);

    window.addEventListener('resize', updateProductsSwiper);
    updateProductsSwiper();
  }

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
  // Hero Background Slideshow
  // ============================================
  const heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      heroSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('active');
    }, 3500); // Cross-fade every 3.5 seconds
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
  // Logo Switcher
  // ============================================
  const switchLogos = document.querySelectorAll('.logo-switch .switch-img');
  if (switchLogos.length > 0) {
    let currentLogoIndex = 0;
    setInterval(() => {
      currentLogoIndex++;
      document.querySelectorAll('.logo-switch').forEach(switcher => {
        const imgs = switcher.querySelectorAll('.switch-img');
        if (imgs.length > 0) {
          imgs.forEach(img => img.classList.remove('active'));
          imgs[currentLogoIndex % imgs.length].classList.add('active');
        }
      });
    }, 3000);
  }

  // ============================================
  // Console Branding
  // ============================================
  console.log('%c SIDRA FOOD INDUSTRIES ', 'background: linear-gradient(135deg, #e12634, #c69a3d); color: #fff; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');


  setupStatsCounterAnimation();
  setLanguage(currentLanguage);

})();