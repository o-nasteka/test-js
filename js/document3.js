window.onload = function () {
    document.querySelector('h2').onclick = function () {
        var li = document.querySelector('.current');

        // console.log(li.innerHTML);

        // console.log(li.outerHTML = 'Hello');

        li = document.querySelector('.current').firstChild;

        // li.textContent = 'Some Text';
        // li.innerText = 'SOme';

        // function textContent(el,value) {
        //     var content = el.textContent;
        //
        //     if(value === undefined) {
        //         if(value !== undefined) {
        //             return content;
        //         }
        //         else {
        //             return el.innerText
        //         }
        //     }
        //     else {
        //         if(content !== undefined) {
        //             el.textContent = value;
        //         }
        //         else {
        //             el.innerText = value;
        //         }
        //     }
        // }

        // textContent(li, 'Hello');

        var div = document.querySelector('#content');
        console.log(div.innerText);
        
        function textContent(el) {
            var child, type, s = "";

            for (child = el.firstChild; child != null; child = child.nextSibling) {
                type = child.nodeType;
                if(type == 3) {
                    s += child.nodeValue;
                }
                else if(type == 1){
                    s += textContent(child);
                }
            }

            return s;
        }
        console.log(textContent(div));
    };

}