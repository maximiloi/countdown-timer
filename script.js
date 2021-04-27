const daysElement = document.querySelector('#days'); // элементы на странице для вставки
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

const date = '2021, 6, 1'; // необходимая дата (год, месяц, день) 
// new Date(year, month, date, hours, minutes, seconds, ms) если надо до определенного часа

function countdown() {
    const desiredDate = new Date(date); // получаем милисекунды до необходимой даты
    const currentDate = new Date(); // получаем милисекунды текущего времени

    const totalSeconds = (desiredDate - currentDate) / 1000; // получаем разницу секунд между текушим временем и задуманным

    daysElement.innerText = Math.floor(totalSeconds / 3600 / 24); // получаем делением на 3600 (час), а потом на 24 часа в сутки
    hoursElement.innerText = formatTime(Math.floor(totalSeconds / 3600) % 24); // получаем делением на 3600 (час), остатком от суток 24
    minutesElement.innerText = formatTime(Math.floor(totalSeconds / 60) % 24 % 60); // получаем минуты
    secondsElement.innerText = formatTime(Math.floor(totalSeconds % 60)); // получаем секунды путем получения остатка от 60
}

function formatTime(time) {  // форматирование даты если число меньше 10 добавлять ноль вперед
    return time < 10 ? `0${time}` : time;
}

// запуск функции
countdown();

// перезапускать функцию каждую секунду
setInterval(countdown, 1000);