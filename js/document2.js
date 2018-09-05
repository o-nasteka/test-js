window.onload = function () {
    // p div h1
    // #id .class

    // input[name='email']
    // .class[name='email']

    // #id .class
    // #id, .class

    // document.querySelectorAll('#header');
    // var res = document.querySelector('p').querySelector('span');
    //
    // console.log(res);

    // first-line
    // first-letter


    document.querySelector('h2').onclick = function () {
        var myLi = document.querySelector('.current');

        // console.log(myLi.parentNode);  // get Parent node
        // console.log(myLi.childNodes);  // get Child nodes

        // myLi.parentNode.firstChild.style.border = '2px solid red';  // get First/Last Child
        // myLi.parentNode.lastChild.style.border = '2px solid red';  // get First/Last Child

        // myLi.nextSibling.previousSibling.style.border = '2px solid green';  // get nextSibling/previousSibling


        // console.log(myLi.nextSibling.previousSibling.firstChild.firstChild.nodeValue = 'Hello');

        // console.log(myLi.nextSibling.previousSibling.firstChild.firstChild.nodeType);

        // console.log(myLi.nodeName);

        console.log(myLi.parentNode.children); // Only children Elements (without comments, <br> etc)

        // myLi.parentNode.firstElementChild.style.border = '2px solid blue';  // get First/Last Element Child
        // myLi.parentNode.lastElementChild.style.border = '2px solid blue';  // get First/Last Element Child

        myLi.nextElementSibling.style.border = '2px solid blue';
        myLi.previousElementSibling.style.border = '2px solid blue';


    };
}