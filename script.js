// انتظر حتى يتم تحميل المحتوى كاملاً
document.addEventListener('DOMContentLoaded', function() {

    console.log("الموقع جاهز!");

    // --- مثال: تمرير سلس عند النقر على روابط التنقل ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // منع السلوك الافتراضي للرابط

            const targetId = this.getAttribute('href'); // الحصول على #about أو #services الخ
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // احسب موقع العنصر مع مراعاة ارتفاع الهيدر الثابت (إذا كان موجوداً)
                const headerOffset = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 15; // 15 بكسل هامش إضافي

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // تمرير سلس
                });
            }
        });
    });

    // يمكنك إضافة المزيد من الوظائف هنا
    // مثل:
    // - التحقق من صحة نموذج الاتصال (عند إضافته)
    // - تأثيرات عند التمرير (scroll animations)
    // - تبديل القائمة في وضع الموبايل (hamburger menu)

});