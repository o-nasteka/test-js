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
    
    function popup() {
        wrap.style.display = 'block';
        popupIn(1);
    }
    
    function popupClose() {
        // wrap.style.display = 'none';
        popupOut(0);
    }

    // opacity 0.05 0.1 0.15 ....
    function popupIn(x){
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0 ;

        if(op < x){
            op += 0.05;
            wrap.style.opacity = op;
            setTimeout(function () {
                popupIn(x);
            },50)
        }
    }

    // opacity 0.05 0.1 0.15 ....
    function popupOut(x){
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 1 ;

        if(op > x){
            op -= 0.05;
            wrap.style.opacity = op;
            setTimeout(function () {
                popupOut(x);
            },50)
        }
    }

    setTimeout(popup, 1000);
};

