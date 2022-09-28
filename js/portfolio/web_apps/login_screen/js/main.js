$(document).ready(function() { 
    $("#sendBTN").click(function(e) {
        
        e.preventDefault();
        
        if (($("#username").val()=="ControlExpert") && ($("#password").val()=="Control123")) {
            window.location="profile.html";
        } else {
            alert("Kullanıcı adı veya şifre yanlış");            
        }
        
    });  
});