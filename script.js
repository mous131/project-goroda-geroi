const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

menuButton.addEventListener('click', () => {
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none'; // Закрываем меню
  } else {
    dropdownMenu.style.display = 'block'; // Открываем меню
  }
});
