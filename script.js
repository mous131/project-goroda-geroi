// Получаем элементы кнопки и меню
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

// Проверяем, что элементы существуют
console.log(menuButton); // Должно вывести кнопку
console.log(menu); // Должно вывести меню

// Добавляем обработчик события на клик по кнопке
menuButton.addEventListener('click', () => {
    console.log('Кнопка нажата!'); // Отладочный вывод
    menu.classList.toggle('open'); // Добавляем или убираем класс "open"
    console.log(menu.classList); // Отладочный вывод (показывает текущие классы меню)
});

// Закрытие меню при клике вне его
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('open'); // Закрываем меню
        console.log('Меню закрыто'); // Отладочный вывод
    }
});
