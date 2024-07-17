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
 // Получаем ссылки на все элементы формы
 const form = document.forms["myForm"];
 const usernameInput = form.elements["username"];
 const emailInput = form.elements["email"];
 const ageInput = form.elements["age"];
 const passwordInput = form.elements["password"];
 const sexInput = form.elements["sex"];
 const careerInput = form.elements["career"];
 const agreeTermsInput = form.elements["agreeTerms"];
 const submitBtn = form.querySelector("#submitBtn");

 // Функция для отображения сообщения об ошибке
 function showError(input, errorMessage) {
     const errorSpan = input.nextElementSibling; // Получаем следующий элемент (элемент для вывода ошибки)
     errorSpan.textContent = errorMessage; // Устанавливаем текст ошибки
     errorSpan.style.color = "red"; // Устанавливаем красный цвет текста ошибки
     input.style.border = "1px solid red"; // Устанавливаем красную рамку вокруг поля
 }