
const userTextField = document.querySelector('a[href="#"]');

userTextField.addEventListener('click', (event) => {

const userText = prompt('Введите текст');

userTextField.textContent = userText;

console.log('Текст в ссылке изменен на', userText);

event.preventDefault();
});