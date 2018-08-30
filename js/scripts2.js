
const el = document.getElementById('main_content');

// let date = new Date(2018,2,25,14,46,30,0);
let date = new Date();


let days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];

let month = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Ноябрь',
    'Декабрь'
];


const day_now = days[date.getDay()];
const year = date.getFullYear();
const month_now = month[date.getMonth()];
const hours = date.getHours();
const minutes = date.getMinutes();



el.innerHTML = el.innerHTML + day_now + ', ' + month_now + ' ' + year + ' ' + hours + ':' + minutes + '<br><br>';
el.innerHTML = el.innerHTML + Date.parse(date.toString());

