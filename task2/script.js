const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
});

const Alert = document.querySelector('#alert');
Alert.addEventListener('click', () => {
    alert('Служит для вывода результата обработки или любой другой информации на экран пользователя.');
});

const Prompt = document.querySelector('#prompt');
Prompt.addEventListener('click', () => {
     alert('Служит для присваивания значения');
});