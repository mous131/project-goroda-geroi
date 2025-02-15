// Пример простого JavaScript
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем стандартную отправку формы

  // Получаем данные из формы
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Выводим данные в консоль (можно заменить на отправку на сервер)
  console.log('Имя:', name);
  console.log('Email:', email);
  console.log('Сообщение:', message);

  // Очищаем форму
  document.getElementById('contact-form').reset();

  // Уведомление пользователя
  alert('Сообщение отправлено!');
});