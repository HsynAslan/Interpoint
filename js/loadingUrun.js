
    document.addEventListener("DOMContentLoaded", function () {
        const loadingScreen = document.getElementById("loading-screen");
    
        // Sayfa ilk açıldığında loading spinner'ı gizle
        setTimeout(() => {
            loadingScreen.classList.remove("show");
        }, 500);
    
        // Tüm linkleri dinle
        document.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function (event) {
                const href = this.getAttribute("href");
    
                // Eğer href değeri boşsa veya sayfa içi bağlantıysa, işlemi durdur
                if (!href || href.startsWith("#") || href.startsWith("javascript")) return;
    
                // Telefon ve e-posta bağlantılarında yükleme ekranını tetikleme
                if (href.startsWith("tel:") || href.startsWith("mailto:")) return;
    
                // Normal linkler için loading-screen göster ve yönlendir
                event.preventDefault();
                loadingScreen.classList.add("show");
    
                setTimeout(() => {
                    window.location.assign(href);
                }, 800);
            });
        });
    
        // 🔹 GERİ TUŞU İLE GELİNİRSE LOADING SPINNER'I GİZLE
        window.addEventListener("pageshow", function (event) {
            if (event.persisted) { 
                loadingScreen.classList.remove("show");
            }
        });
    });
   