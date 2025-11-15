// Инициализация SimpleLightbox для галереи сертификатов
// Ожидаем загрузки DOM перед инициализацией
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = new SimpleLightbox(".certificates__link", {
    captions: true,
    captionPosition: "bottom",
    animation: "fade",
    animationSpeed: 250,
    showCounter: true,
    nav: true,
    keyboardNav: true,
    close: true,
    closeButton: true,
    captionDelay: 250,
    scale: 1,
    padding: 10,
  });
});
