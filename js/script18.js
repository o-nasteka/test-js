window.onload = function () {
    // var email = document.getElementById('exampleInputEmail');
    //
    // var fields = document.querySelectorAll("#firstForm input[type = 'checkbox']");
    //
    // for (var i = 0; i < fields.length; i++){
    //     console.log(fields[i].type);
    // }

    // console.log(fields);


    // Get Forms
    // console.log(window.myForm);
    // console.log(document.myForm);
    // console.log(document.firstForm);
    // console.log(document.forms[0]);
    // console.log(document.forms.myForm);
    // console.log(document.forms.firstForm.email);
    // console.log(document.forms.firstForm.email.type);
    // console.log(document.forms.firstForm.email.value);
    // console.log(document.forms.firstForm.option);
    // console.log(document.forms.firstForm.elements.length);
    
    var option = document.forms.firstForm.elements.option;
    var email = document.forms.firstForm.elements.email;

    // for (var i = 0; i < option.length; i++){
    //     if(option[i].checked){
    //         alert(option[i].value);
    //     }
    // }

     console.log(email.type);
     console.log(email.form);


}