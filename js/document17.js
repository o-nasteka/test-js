window.onload = function () {
    var button = document.getElementById("button");

    button.onclick = function () {
        var newDiv = document.createElement('div');
        var newText = document.createTextNode('Some String');
        var newComment = document.createComment('Some Comment');
        var documentFrag = document.createDocumentFragment();

        var copyButton = button.cloneNode();
        var copyDiv  = document.querySelector(".wrap").cloneNode(true);

        // console.log(copyDiv);

        var karkas = document.querySelector(".karkas")

        newDiv.appendChild(newText);
        // document.querySelector(".wrap").insertBefore(newDiv, karkas);
        // karkas.insertBefore(newDiv, null);
        // karkas.insertBefore(newDiv, document.querySelector("p"));
        // karkas.insertBefore(document.querySelector("h1"), null);

        var h1 = document.querySelector('h1');

        // karkas.removeChild(h1);

        // karkas.replaceChild(newDiv, h1);

        function r(el){
            var fr = document.createDocumentFragment();
            while (el.lastChild) {
                fr.appendChild(el.lastChild);
            }

            el.appendChild(fr);
        }

        r(karkas);

        console.log(newDiv);
    }
}