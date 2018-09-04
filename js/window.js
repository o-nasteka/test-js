// // window.location = 'http://google.com';
//
//
// window.alert('hello!');
//
// window.document.getElementById('main_content');
//
//

// window.setTimeout();
// setInterval();

window.onload = function () {
    var wrap = document.getElementById('popup_overlay');
    var closeB = document.getElementById('popup_close');
    closeB.onclick = popupClose;

    var openB = document.getElementById('popupIn');
    openB.onclick = popup;

    var tIn, tOut;
    
    function popup() {
        wrap.style.display = 'block';
        popupIn(1);
    }
    
    function popupClose() {
        popupOut(0);
    }

    // opacity 0.05 0.1 0.15 ....
    function popupIn(x){
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0 ;

        if(op < x){
            clearInterval(tOut); // clear
            op += 0.05;
            wrap.style.opacity = op;
            tIn = setTimeout(function () {
                popupIn(x);
            },50)
        }
    }

    // opacity 0.05 0.1 0.15 ....
    function popupOut(x){
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 1 ;

        if(op > x){
            clearInterval(tIn); // clear
            op -= 0.05;
            wrap.style.opacity = op;
            tOut = setTimeout(function () {
                popupOut(x);
            },100)
        }

        if(wrap.style.opacity == x){
            wrap.style.display = 'none';
        }
    }

    setTimeout(popup, 1000);

    var h1 = document.getElementById('header');
    h1.onclick = function () {
      clearTimeout(intStop);
    };

    function changeColor() {
        if ( h1.style.color == 'black'){
            h1.style.color = 'red';
        }
        else {
            h1.style.color = 'black';
        }
    }

    var intStop = setInterval(changeColor, 500);

};

