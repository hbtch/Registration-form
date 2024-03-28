const emailInput = document.forms.myForm.elements.firstEmail;
const errorMessage = document.getElementById('errorMessage');

// Обработчик события input для поля email
emailInput.addEventListener('input', function () {
  const emailValue = emailInput.value;
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (emailRegex.test(emailValue)) {
    // Если email соответствует формату, убираем сообщение об ошибке
    emailInput.classList.remove('error');
    errorMessage.textContent = '';
  } else {
    // Если email не соответствует формату, показываем сообщение об ошибке
    emailInput.classList.add('error');
    errorMessage.textContent = 'Некорректный формат Email';
  }
});
const form = document.forms.myForm; //Получаем форму

//Добавляем на неё обработчик события submit
form.addEventListener('submit', function (evt) {
  //Отменяем стандартное поведение
  evt.preventDefault();

  //Проверяем данные пользователя
});