document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");
    const loadingScreen = document.getElementById("loading-screen");
    const navbarCollapse = document.querySelector(".navbar-collapse"); // Navbar menüsünü seç
    
    const elementsToTranslate = {
        "İletişim": "Contact",
        "Ürünlerimiz": "Our Products",
        "Hakkımızda": "About Us",
        "Interpoint Kompresör": "Interpoint Compressor",  // Navbar başlığı
        "İLETİŞİM": "CONTACT",
        "Her türlü soru ve görüşleriniz için bizimle iletişime geçebilirsiniz.": "You can contact us for any questions and feedback.",
        "📍 Yavuz Selim Mahallesi Reşadiye Sokak 8/7 Çubuk / Ankara": "📍 Yavuz Selim Neighborhood, Reşadiye Street 8/7, Çubuk / Ankara"
    };

    let currentLang = "tr";

    langToggle.addEventListener("click", function () {
        loadingScreen.classList.add("show");

        setTimeout(() => {
            currentLang = currentLang === "tr" ? "en" : "tr";
            langToggle.textContent = currentLang === "tr" ? "EN" : "TR";

            document.querySelectorAll(".nav-link, .navbar-brand span, h1, p").forEach(el => {
                let cleanText = el.textContent.replace(/\s+/g, " ").trim(); // Fazla boşlukları temizle
                
                console.log("Çevrilecek Metin:", cleanText); // Debug için

                if (elementsToTranslate[cleanText]) {
                    el.textContent = elementsToTranslate[cleanText];  // Türkçeden İngilizceye çevir
                } else {
                    Object.entries(elementsToTranslate).forEach(([tr, en]) => {
                        if (cleanText === en) {
                            el.textContent = tr; // İngilizceden Türkçeye çevir
                        }
                    });
                }
            });

            // Navbar'ı kapat
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            }

            setTimeout(() => {
                loadingScreen.classList.remove("show");
            }, 300);
        }, 300);
    });
});





