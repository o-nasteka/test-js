function stringWork() {

    let str = document.getElementById('head').innerHTML;
    /////////

    // new String
    // String();

    // let result = typeof String(str);
    // let result = str.charAt(9);
    // let result = str[9];
    // let result = str.charCodeAt(11);
    // let result = str.concat(' hello ', ' World!');
    // let result = str.concat(' hello ', ' World!');
    // let result = String.fromCharCode(str.charCodeAt(11), str.charCodeAt(15));

    // let result = str.indexOf('Java Script', str);

    // let result = str.length;

    let strings = ['Привет','Мир','Что то изучаем','Сравнение'];

    // let result = strings.sort(function (a, b) {
    //     return a.localeCompare(b);
    // });

    // let result = str.match(/\d+/);
    // let result = str.replace(/\d+/g,'Hello');

    // let result = str.slice(1,3);
    // let result = str.split(' ');

    // let result = str.substr(1,2);

    // let result = str.substring(1,3);

    let result = str.toLocaleUpperCase();

////////////////
    document.getElementById('result').innerHTML = result;

}

window.onload = function () {
    stringWork();
}