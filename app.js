$(document).ready(function(){
    $("#push-btn-menu").on("click", function(){
        const div = document.querySelector('#push-btn-menu');
        
        if (div.classList.contains('active')) {
            $("#push-btn-menu").removeClass("active");
            $("#lgMenu").removeClass("active");
        } else {
            $("#push-btn-menu").addClass("active");
            $("#lgMenu").addClass("active");
        };
    });
});

