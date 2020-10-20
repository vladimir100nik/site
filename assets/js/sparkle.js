$(document).ready(function(){

    $(".menu-btn").click(function(){
        $(".menu-overlay").fadeIn(300);
        $("#menu").delay(320).css("right", "0");
    });

    $(".menu-overlay").click(function(){
        $("#menu").css("right", "-101%");
        $(".menu-overlay").fadeOut(300);
    });

    $(document).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(500);
        }
        else{
            $(".scroll-to-top").fadeOut(500);
        }
    });

    $(".scroll-to-top").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 400);
    });
});

