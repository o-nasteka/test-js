window.onload = function () {
    var elId = document.getElementById('stuck_container');

    function getElements() {
        var elem = {};

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

    var result = getElements('stuck_container', 'content', 'footer');
    console.log(result);
}