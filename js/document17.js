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
        document.querySelector(".wrap").insertBefore(newDiv, karkas);
        console.log(newDiv);
    }
}