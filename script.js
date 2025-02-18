const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

menuButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open'); // Добавляем/убираем класс для анимации
});
