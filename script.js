// ===== تبديل اللغة =====
// (تم نقل منطق الترجمة الكامل إلى ملف translations.js)

// ===== القائمة المتنقلة =====
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// ===== زر العودة للأعلى =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== المساعد الآلي =====
const aiToggle = document.getElementById('aiToggle');
const aiMenu = document.getElementById('aiMenu');
const aiResponse = document.getElementById('aiResponse');

aiToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    aiMenu.classList.toggle('active');
    if (aiMenu.classList.contains('active')) {
        aiResponse.innerHTML = '<p>👋 مرحباً! اختر أحد الخيارات أعلاه للحصول على معلومات فورية.</p>';
    }
});

document.addEventListener('click', function(e) {
    if (!aiMenu.contains(e.target) && !aiToggle.contains(e.target)) {
        aiMenu.classList.remove('active');
    }
});

const aiData = {
    experience: `👨‍💻 الخبرة المهنية:\n• مهندس دولة في الإلكترونيات والتطوير الرقمي (1992-1997)\n• مدير مركز الحالة المدنية - جدة (2019-2024)\n• مدير المصادقة على الوثائق - ANRPTS (2015-2019)\n• أكثر من 25 سنة في القطاع العام والتقني\n• خبرة في الأنظمة البيومترية والتحول الرقمي`,
    missions: `🎯 المهمات الرئيسية:\n• إدارة السجل البيومتري الوطني\n• الإشراف على أنظمة الوثائق المؤمنة\n• تطوير البنية التحتية لتقنية المعلومات\n• تطبيق أطر الحوكمة وضمان الجودة\n• إدارة المشتريات العامة والعقود الدولية`,
    projects: `📊 المشاريع البارزة:\n• PropAI: منصة التقييم العقاري الذكي\n• محسّن السيرة الذاتية ATS\n• كشف الاحتيال في الصفقات العمومية\n• نموذج التنبؤ بالسكري (دقة 85%+)\n• تحليل المشاعر (NLP) بالعربية والإنجليزية`,
    certifications: `🎓 الشهادات والتدريب:\n• Python Coder (Kaggle) - 2026\n• Agent of Discord (Kaggle/Google) - 2026\n• Machine Learning Specialization (Stanford) - 2025\n• Deep Learning Specialization (DeepLearning.AI) - 2025\n• Python for Data Science (IBM) - 2024\n• دبلوم إدارة الأعمال الاحترافي - 2021`,
    contact: `📧 للتواصل معي:\n• البريد الإلكتروني: ahmedvalljemaldine@gmail.com\n• واتساب: +974 7473 6271\n• LinkedIn: linkedin.com/in/ahmed-vall-sidina\n• Bayt: people.bayt.com/ahmed-vall-sidina\n• GitHub: github.com/AHMEDVALL70`
};

document.querySelectorAll('.ai-menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const action = this.dataset.action;
        const text = aiData[action] || '⚠️ المعلومات غير متاحة حالياً.';
        aiResponse.innerHTML = text.replace(/\n/g, '<br>');
        setTimeout(() => {
            aiResponse.innerHTML = '<p>👋 اختر خياراً آخر من القائمة أعلاه.</p>';
        }, 4000);
    });
});

// ===== تكوين إرسال الإيميل (FormSubmit.co - مجاني) =====
const CONTACT_EMAIL = 'ahmedvalljemaldine@gmail.com';

// ===== نافذة طلب الخدمة =====
const serviceModal = document.getElementById('serviceModal');
const serviceModalClose = document.getElementById('serviceModalClose');

document.querySelectorAll('.btn-service-request').forEach(btn => {
    btn.addEventListener('click', function() {
        const service = this.dataset.service;
        const modalService = document.getElementById('modalFormService');
        if (service && modalService) {
            modalService.value = service;
        }
        serviceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

serviceModalClose.addEventListener('click', function() {
    serviceModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

serviceModal.addEventListener('click', function(e) {
    if (e.target === this) {
        serviceModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== إرسال النموذج (النافذة المنبثقة) =====
document.getElementById('serviceModalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('modalFormName').value.trim();
    const email = document.getElementById('modalFormEmail').value.trim();
    const phoneCode = document.getElementById('modalCountryCode').value;
    const phone = document.getElementById('modalFormPhone').value.trim();
    const service = document.getElementById('modalFormService').value;
    const message = document.getElementById('modalFormMessage').value.trim();
    const statusDiv = document.getElementById('modalFormStatus');

    if (!name || !email || !phone || !service || !message) {
        statusDiv.textContent = getCurrentTranslations()['form.msg_required'];
        statusDiv.className = 'error';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        statusDiv.textContent = getCurrentTranslations()['form.msg_invalid_email'];
        statusDiv.className = 'error';
        return;
    }

    statusDiv.textContent = getCurrentTranslations()['form.msg_sending'];
    statusDiv.className = '';

    const sendEmail = async () => {
        try {
            const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name, email, _replyto: email,
                    phone: phoneCode + phone,
                    service, message,
                    _subject: `طلب خدمة — ${service}`,
                    _template: 'table',
                    _captcha: 'false'
                })
            });

            if (!response.ok) throw new Error('Submit failed');

            console.log('✅ Email sent successfully!');
            statusDiv.textContent = getCurrentTranslations()['form.msg_success'];
            statusDiv.className = 'success';
            document.getElementById('serviceModalForm').reset();

            setTimeout(() => {
                serviceModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }, 3000);
        } catch (error) {
            console.error('❌ Error sending email:', error);
            statusDiv.textContent = getCurrentTranslations()['form.msg_error'];
            statusDiv.className = 'error';
        }
    };

    sendEmail();
});

// ===== إرسال النموذج (الصفحة الرئيسية) =====
document.getElementById('serviceRequestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const phoneCode = document.getElementById('countryCode').value;
    const phone = document.getElementById('formPhone').value.trim();
    const service = document.getElementById('formService').value;
    const message = document.getElementById('formMessage').value.trim();
    const statusDiv = document.getElementById('formStatus');

    if (!name || !email || !phone || !service || !message) {
        statusDiv.textContent = getCurrentTranslations()['form.msg_required'];
        statusDiv.className = 'error';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        statusDiv.textContent = getCurrentTranslations()['form.msg_invalid_email'];
        statusDiv.className = 'error';
        return;
    }

    statusDiv.textContent = getCurrentTranslations()['form.msg_sending'];
    statusDiv.className = '';

    const sendEmail = async () => {
        try {
            const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name, email, _replyto: email,
                    phone: phoneCode + phone,
                    service, message,
                    _subject: `طلب خدمة — ${service}`,
                    _template: 'table',
                    _captcha: 'false'
                })
            });

            if (!response.ok) throw new Error('Submit failed');

            statusDiv.textContent = getCurrentTranslations()['form.msg_success'];
            statusDiv.className = 'success';
            document.getElementById('serviceRequestForm').reset();
        } catch (error) {
            console.error('❌ Error:', error);
            statusDiv.textContent = getCurrentTranslations()['form.msg_error'];
            statusDiv.className = 'error';
        }
    };

    sendEmail();
});

// ===== تأثير التمرير =====
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
            setTimeout(function() {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .project-card, .testimonial-card, .blog-card, .casestudy-card, .cv-grid, .contact-grid').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('🚀 Innovision 3.1 - يعمل بنجاح!');
console.log('👨‍💻 Built with ❤️ for Ahmed Vall');
console.log('📧 Contact email:', CONTACT_EMAIL);

// ===== نسخ رقم الآيبان =====
const paymentCopyBtn = document.getElementById('paymentCopyBtn');
if (paymentCopyBtn) {
    paymentCopyBtn.addEventListener('click', function () {
        const ibanText = document.getElementById('paymentIban').textContent.trim();
        navigator.clipboard.writeText(ibanText).then(function () {
            const original = paymentCopyBtn.textContent;
            paymentCopyBtn.textContent = getCurrentTranslations()['payment.copied'] || '✅';
            setTimeout(function () {
                paymentCopyBtn.textContent = original;
            }, 2000);
        });
    });
}
