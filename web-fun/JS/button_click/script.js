// a function that changes the login button
// to log out
function change(element) {
    if(element.innerText == "login"){
    element.innerText = "log out"
    }
    else{
        element.innerText = "login"
    }
}

    function remove(el){
        var element = el;
        element.remove();
    }