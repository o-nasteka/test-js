window.onload = function () {
    var elId = document.getElementById('stuck_container');

    /**
     * Get some elements by ID and put it in Object
     */
    /*
    function getElements() {
        var elem = {}; // Object

        //Arguments
        for (var i = 0; i < arguments.length; i++){
            var id = arguments[i];

            var el = document.getElementById(id);

            if (el == null) {
                continue;
            }

            elem[id] = el;
        }

        return elem;


    }

    // var result = getElements('stuck_container', 'content', 'footer');
    // console.log(result);
    /////////////////////
    */


    // var elname = document.getElementsByName('email');
    // var elname2 = document.getElementsByName('email')[0].style.border = '3px solid red';
    // console.log(elname);

    // var divMy = document.getElementById('divId'); // Element Id

    // var eltag = document.getElementsByTagName('p');  // Tag Name


    // console.log(document.images);  // All Images

    // console.log(document.links); // All links

    // console.log(document.forms); // Forms elements


    // Get All Images and add 3px Red Border
    /*
    for (var i = 0; i < document.images.length; i++) {
        document.images[i].style.border = '3px solid red';
    }
    */

    // Get element by class
    var elId = document.getElementById('stuck_container').className;
    var elClass = document.getElementsByClassName('test test222');
    console.log(elId);
    console.log('**************');
    console.log(elClass);

}