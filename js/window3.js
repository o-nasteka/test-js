/**
 * Pars URL search params
 */

// window.onload = function () {
//     // console.log(window.location);
//
//     function urlArgs() {
//         var args = {};
//
//         var query = window.location.search.substring(1);
//         var parts = query.split("&");
//
//         for (var i = 0; i < parts.length; i++) {
//
//             var pos = parts[i].indexOf('=');
//
//             if (pos == -1) {
//                 continue;
//             }
//
//             var name = parts[i].substring(0,pos);
//             var value = parts[i].substring(pos+1);
//
//             args[name] = value;
//         }
//
//         return args;
//     }
//
//     var obj = urlArgs();
//
//     console.log(obj);
// }


window.onload = function () {

    var b = document.getElementById('openWindow');

    b.onclick = function () {
        // window.location.assign('http://google.com');
        // window.location.replace('http://google.com');
        // window.location.reload();
        // window.location = 'F1.html';

        // console.log(history.length);

        // history.back();
        // history.forward();

        // history.go(-1);

        // console.log(window.navigator);


        console.log(window.screen);

    }

}