$(document).ready(function() {
    var f1error=0;

    $("#searchBTN").click(function() {
        if ($("#search-results").val()!="") {
            f1error=1;
            $("#search-results").val()!="visible"
        } else {
            $(".search-results").addClass("has-error");

        }
    });
});
https://www.google.com.tr/?gws_rd=ssl#q=araba2