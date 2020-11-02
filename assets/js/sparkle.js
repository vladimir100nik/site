$(document).ready(function () {

    $(".menu-btn").click(function () {
        $(".menu-overlay").fadeIn(300);
        $("#menu").delay(320).css("right", "0");
    });

    $(".menu-overlay").click(function () {
        $("#menu").css("right", "-101%");
        $(".menu-overlay").fadeOut(300);
    });

    $(document).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(500);
        } else {
            $(".scroll-to-top").fadeOut(500);
        }
    });

    $(".scroll-to-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 400);
    });
});


function block() {


    let wrap = $("<div class='block'>")
    for (let i = 0; i < 15; i++) {
        let c = wrap.clone()
        $("<span>").text(i).appendTo(c)
        c.appendTo($("#gallery"));
    }
}
block();

// let map;
//
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 56.934556, lng: 24.077226},
//         zoom: 12
//     });
// }
