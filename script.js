const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

menuButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open'); // Добавляем/убираем класс для анимации
});
const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Настройки для мобильных устройств
    breakpoints: {
        320: { // Для экранов меньше 320px
            slidesPerView: 1, // Показываем один слайд
        },
        768: { // Для экранов больше 768px
            slidesPerView: 2, // Показываем два слайда
        },
        1024: { // Для экранов больше 1024px
            slidesPerView: 3, // Показываем три слайда
        }
    }
});
