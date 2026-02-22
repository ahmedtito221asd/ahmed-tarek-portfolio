// Translations Object
const translations = {
    en: {
        name: "Ahmed Tarek",
        nav_about: "Identity",
        nav_experience: "Experience",
        nav_projects: "Architecture",
        nav_stack: "Stack",
        nav_contact: "Contact",
        hero_subtitle: "Software & Automation Engineer",
        hero_tagline: "Architecting Enterprise Solutions & Digital Transformation",
        btn_contact: "Initiate Contact",
        btn_view_work: "View Systems",
        about_title: "Engineering Identity",
        about_p1: "With over 7 years of dedicated experience in governmental and enterprise sectors, I specialize in constructing robust digital pipelines and automation architectures. My work isn't just about writing code; it's about engineering stability in high-stakes environments.",
        about_p2: "From implementing enterprise ABBYY OCR systems for national archives to designing multi-controller IoT ecosystems, my approach is rooted in scalability, security, and structured thinking. I bridge the gap between hardware infrastructure and software logic.",
        stat_years: "Years Experience",
        stat_systems: "Systems Built",
        exp_title: "Professional Experience",
        job1_title: "Digital Archiving & OCR Specialist",
        job1_desc: "Led large-scale governmental document digitization initiatives. Architected enterprise data pipelines using ABBYY FineReader for high-volume OCR processing. Designed metadata normalization schemas and validation workflows ensuring 99.9% accuracy before archival integration. Deployed solutions across ministries (Electricity, Tourism) as part of national digital transformation strategies.",
        job2_title: "Programming & Networking Instructor",
        job2_desc: "Bridging educational theory with real-world infrastructure. Conducting advanced CCNA labs using Packet Tracer and physical Cisco devices. Teaching Python automation from fundamentals to complex system integration. Supervising IoT graduation projects involving multi-controller architecture, sensor logic, and embedded control systems.",
        job3_title: "E-Commerce Automation Engineer",
        job3_desc: "Engineered a suite of 5+ Python automation systems. Developed a laptop classification engine based on hardware fault detection and automated product data extraction pipelines. Created bulk upload frameworks and model identification systems to streamline e-commerce operations.",
        proj_title: "Systems Architecture",
        proj1_title: "IoT Smart Farm (University)",
        proj1_desc: "Enhanced version featuring WiFi-based remote monitoring, mobile app integration, and scalable distributed hardware deployment with automation scheduling.",
        proj2_title: "Python Automation Suite",
        proj2_desc: "Custom classification engines, data filtering systems, scraping pipelines, and bulk upload tools designed for high-throughput e-commerce environments.",
        proj3_title: "Networking Lab Environment",
        proj3_desc: "Production-grade VLAN segmentation, OSPF routing topology, ACL policy enforcement, and Windows Server domain deployment configurations.",
        stack_title: "Technical Mastery",
        contact_title: "Establish Connection",
        contact_subtitle: "Available for enterprise projects and technical consultation.",
        footer_rights: "Systems Architecture & Engineering Portfolio."
    },
    ar: {
        name: "أحمد طارق",
        nav_about: "الهوية",
        nav_experience: "الخبرات",
        nav_projects: "الأنظمة",
        nav_stack: "التقنيات",
        nav_contact: "التواصل",
        hero_subtitle: "مهندس برمجيات وأتمتة",
        hero_tagline: "بناء حلول المؤسسات والتحول الرقمي",
        btn_contact: "ابدأ التواصل",
        btn_view_work: "عرض الأنظمة",
        about_title: "الهندسية",
        about_p1: "مع أكثر من 7 سنوات من الخبرة المخصصة في القطاعات الحكومية والمؤسسية، أركز على بناء خطوط إنتاج رقمية قوية وهندسة الأتمتة. عملي ليس مجرد كتابة كود، بل هو هندسة للاستقرار في بيئات عالية المخاطر.",
        about_p2: "من تنفيذ أنظمة ABBYY OCR المؤسسية لوثائق الأرشيف الوطني إلى تصميم أنظمة إنترنت الأشياء متعددة المتحكمين، يعتمد نهجي على قابلية التوسع والأمان والتفكير المنظم. أنا أعمل على سد الفجوة بين البنية التحتية للأجهزة ومنطق البرمجيات.",
        stat_years: "سنوات الخبرة",
        stat_systems: "أنظمة مبنية",
        exp_title: "الخبرات المهنية",
        job1_title: "أخصائي الأرشفة الرقمية و OCR",
        job1_desc: "قادت مبادرات رقمنة الوثائق الحكومية واسعة النطاق. صممت خطوط أنابيب بيانات مؤسسية باستخدام ABBYY FineReader للمعالجة عالية الحجم. صممت مخططات تطبيع البيانات ومسارات التحقق لضمان دقة 99.9٪ قبل التكامل.",
        job2_title: "معلم برمجة وشبكات",
        job2_desc: "جسر بين النظرية التعليمية والبنية التحتية الحقيقية. أجريت مختبرات CCNA المتقدمة باستخدام Packet Tracer وأجهزة Cisco الحقيقية. علمت أتمتة بايثون من الأساسيات إلى التكامل المعقد.",
        job3_title: "مهندس أتمتة التجارة الإلكترونية",
        job3_desc: "صممت أكثر من 5 أنظمة أتمتة بايثون. طورت محرك تصنيف للحواسيب بناءً على أعطال الأجهزة وأنظمة استخراج البيانات الآلية.",
        proj_title: "الأنظمة المعمارية",
        proj1_title: "مزرعة ذكية إنترنت الأشياء (جامعي)",
        proj1_desc: "النسخة المعززة التي تتميز بمراقبة عن بُعد عبر WiFi، وتكامل تطبيقات الهاتف، ونشر أجهزة موزعة قابلة للتوسع.",
        proj2_title: "مجموعة أتمتة بايثون",
        proj2_desc: "محركات تصنيف مخصصة، أنظمة تصفية البيانات، خطوط استخراج، وأدوات رفع بالجملة مصممة للبيئات عالية الإنتاجية.",
        proj3_title: "بيئة مختبر الشبكات",
        proj3_desc: "تجزئة VLAN على مستوى الإنتاج، طوبولوجيا توجيه OSPF، تنفيذ سياسات ACL، وتكوينات خادم Windows.",
        stack_title: "البراعة التقنية",
        contact_title: "إنشاء اتصال",
        contact_subtitle: "متاح للمشاريع المؤسسية والاستشارات التقنية.",
        footer_rights: "معرض أعمال هندسة الأنظمة."
    }
};

let currentLang = 'en';

// DOM Elements
const langBtn = document.getElementById('lang-toggle');
const htmlTag = document.documentElement;

// Preloader Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);
    }, 2500); // Wait for progress bar
});

// Language Switcher
langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
});

function updateLanguage() {
    // Update Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Update Direction & Button Text
    if (currentLang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
        langBtn.textContent = 'English';
        document.querySelector('.title').style.fontFamily = "'Cairo', sans-serif";
    } else {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'en');
        langBtn.textContent = 'عربي';
        document.querySelector('.title').style.fontFamily = "'Inter', sans-serif";
    }
}

// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach((el) => {
    observer.observe(el);
});

// Mobile Menu Toggle (Simple implementation)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Basic toggle logic for mobile view
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = currentLang === 'ar' ? 'row-reverse' : 'row';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#0a0e17';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
    }
});