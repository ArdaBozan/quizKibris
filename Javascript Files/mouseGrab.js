document.addEventListener("DOMContentLoaded", function () {
    const scrollableElements = document.querySelectorAll(
        "main.profileMain section.profilSection .profileContainer .profileUIBlock"
    );

    scrollableElements.forEach((scrollableElement) => {
        let isDown = false;
        let startY;
        let scrollTop;

        function updateCursor() {
            if (scrollableElement.scrollHeight > scrollableElement.clientHeight) {
                scrollableElement.style.cursor = "grab";
            } else {
                scrollableElement.style.cursor = "pointer";
            }
        }

        updateCursor(); // Sayfa yüklendiğinde kontrol et
        window.addEventListener("resize", updateCursor); // Ekran boyutu değişirse tekrar kontrol et

        scrollableElement.addEventListener("mousedown", (e) => {
            if (scrollableElement.scrollHeight <= scrollableElement.clientHeight) return;

            isDown = true;
            scrollableElement.classList.add("active");
            scrollableElement.style.cursor = "grabbing"; // Grabbing durumuna geç
            startY = e.pageY - scrollableElement.offsetTop;
            scrollTop = scrollableElement.scrollTop;
        });

        scrollableElement.addEventListener("mouseleave", () => {
            isDown = false;
            scrollableElement.classList.remove("active");
            scrollableElement.style.cursor = "grab"; // Fare ayrıldığında grab durumuna dön
        });

        scrollableElement.addEventListener("mouseup", () => {
            isDown = false;
            scrollableElement.classList.remove("active");
            scrollableElement.style.cursor = "grab"; // Mouse bırakıldığında tekrar grab yap
        });

        scrollableElement.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const y = e.pageY - scrollableElement.offsetTop;
            const walk = (y - startY) * 2; // Hızı artırmak için çarpan ekleyebilirsin
            scrollableElement.scrollTop = scrollTop - walk;
        });
    });
});
