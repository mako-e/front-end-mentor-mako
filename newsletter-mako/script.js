
function subscribeFunction(){
    var valid =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var strongEmail = document.getElementById('email-ty')
    var email = document.getElementById('email');
    var thankyou = document.getElementById('thankyou');
    var main = document.getElementById('main');

    if (email.value.match(valid)){
            strongEmail.innerHTML=email.value;
            thankyou.classList.remove("hide");
            main.classList.add("hide");
    }else{
        alert("Please enter a valid email");
    }
}
function dismissFunction(){
    var thankyou = document.getElementById('thankyou');
    var main = document.getElementById('main');
    thankyou.classList.add("hide");
    main.classList.remove("hide");

}