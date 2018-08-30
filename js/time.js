function displayTime() {

    let now = new Date();
    let div = document.getElementById("clock");

    div.innerHTML = now.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', second:"2-digit"});

    setTimeout(displayTime,1000);

}

function displayTime2() {

    let now = new Date();
    let div = document.getElementById("clock");
    let sDate = new Date(2018,11,31);
    let timer = sDate.getTime() - now.getTime();

    let days = parseInt(timer/(24*60*60*1000));  // get days
    let hours = parseInt(timer/(60*60*1000))%24;  // get hours
    let min = parseInt(timer/(60*1000))%60;  // get minutes
    let sec = parseInt(timer/(1000))%60;  // get minutes

    div.innerHTML = 'До НГ осталось: <br>';
    div.innerHTML += days + ' дня' + ' ' + hours + 'ч '  + min + 'мин ' + sec + 'сек';

    setTimeout(displayTime2,1000);

}

window.onload = displayTime2;