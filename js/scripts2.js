
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

day_now = days[date.getDay()];



el.innerHTML = el.innerHTML + day_now;