// var myVar = 'Hello World!';

window.onload = function () {

    console.log(window.name);

    var w1 = null;

    var openWindow = document.getElementById('openWindow');
    openWindow.onclick = function () {
        w1 = window.open(
            'w1.html',
            'w1',
            "width=480, height=220, resizable=yes"
        );
        console.log(w1.opener);
    }

    var closeWindow = document.getElementById('closeWindow');

    closeWindow.onclick = function () {
        if (typeof w1 == 'object') {
            w1.close();
            console.log(w1.closed);
        }
    }

    myVar = 'Hello World!';

    function getMyVar() {
        // alert(myVar);
        // myVar = w1.editMyVar();
        // alert(myVar);

        var fr = document.getElementById('f1');

    }

    var f = document.getElementById('function');
    f.onclick = function () {
        getMyVar();
    }
};