function validate() {
    if (document.getElementById("forgotPass").checked == true) {
        if (document.getElementById("username").value == "") {
            alert("Please, enter your username");
        } else {
            document.getElementById("loginForm").submit();
        }
    } else {
        document.getElementById("loginForm").submit();
    }
}

function hidePassword() {
    if (document.getElementById("forgotPass").checked == true) {
        document.getElementById("password").style.opacity = 0;
        document.getElementById("rememberMe").style.opacity = 0;
    } else {
        document.getElementById("password").style.opacity = 1;
        document.getElementById("rememberMe").style.opacity = 1;
    }
}