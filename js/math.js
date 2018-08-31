function math() {

    // let result = Math.abs(-10);
    // let result = Math.atan(11);


    // let result = Math.ceil(11.3);
    // let result = Math.cos(60*0.01745); // 60degree in radian 2p/360 = 0.01745

    // let result = Math.E; // exponent

    // let result = Math.exp(2);

    // let result = Math.floor(-12);


    // let result = Math.LN10;

    // let result = Math.log(123);

    // let result = Math.pow(2,2);

    // let result = Math.floor(Math.random()*100);


    let numb = 10.5;

    // let result = numb.toFixed(10);
    // let result = numb.toPrecision(2);


    // let result = parseFloat('10.23 hello world 44');
    let result = parseInt('10.23 hello world 44');




    document.getElementById('result').innerHTML = result;
}

window.onload = function () {
    math();
}