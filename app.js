$(document).ready(function(){
    $("#push-btn-menu").on("click", function(){
        $("#lgMenu").css("box-shadow", "5px 5px 10px rgb(94, 158, 123)");
        $("#lgMenu").addClass("enter");
    });
        
    $("#exit").on("click", function(){
        $("#lgMenu").css("box-shadow", "0px 0px 0px rgb(64, 64, 64)");
        $("#lgMenu").removeClass("enter");
    });
});

