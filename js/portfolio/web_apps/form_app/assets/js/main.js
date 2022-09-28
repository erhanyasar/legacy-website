$(document).ready(function () {
    var f1error = 0;
    var f2error = 0;
    var f3error = 0;
    var date = new Date();

    $("#sendBTN").click(function () {
        if ($("#username").val() == "") {
            f1error = 1;
            $(".username").addClass("has-error");
            $(".namesurname_txt").css("display", "block");
        } else {
            f1error = 0;
            $(".username").removeClass("has-error");
            $(".namesurname_txt").css("display", "none");
        }
        if ($("#phone").val() == "") {
            f1error = 1;
            $(".phone").addClass("has-error");
            $(".phone_txt").css("display", "block");
        } else {
            f1error = 0;
            $(".phone").removeClass("has-error");
            $(".phone_txt").css("display", "none");
        }
        if ($("#byear").val() == "") {
            f3error = 1;
            $(".byear").addClass("has-error");
            $(".byear_txt").css("display", "block");
        } else {
            if ((date.getFullYear() - $("#byear").val()) < 18) {
                f3error = 1;
                $(".byear").addClass("has-error");
                $(".byear_txt").css("display", "block");
            } else {
                f3error = 0;
                $(".byear").removeClass("has-error");
                $(".byear_txt").css("display", "none");
            }
        }
        if (f1error == 0 && f2error == 0 && f3error == 0) {
            window.location = "confirmation.html?username=" + $("#username").val() + "&phone=" + $("#phone").val();
            return true;
        } else {
            return false;
        }
    });

    if ($("#username").exists()) {
        var usernametxt = $.urlParam('username').replace("%20", " ");
        $("#username").html(usernametxt);
    }
    if ($("#phone").exists()) {
        var phonetxt = $.urlParam2('phone').replace("%20", " ");
        $("#phone").html(phonetxt);
    }
});

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}
$.urlParam2 = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}
jQuery.fn.exists = function () {
    return this.length > 0;
}