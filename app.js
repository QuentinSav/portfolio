$(document).ready(function(){
    $("#push-btn-menu").on("click", function(){
        $("#lgMenu").css("box-shadow", "2px 2px 40px rgb(25, 25, 25)");
        $("#lgMenu").addClass("enter");
    });
        
    $("#exit").on("click", function(){
        $("#lgMenu").css("box-shadow", "0px 0px 0px rgb(25, 25, 25)");
        $("#lgMenu").removeClass("enter");
    });
});

