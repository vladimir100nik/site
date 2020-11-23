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
    for (let i = 19; i < 100; i++) {
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

$(document).ready(function () {

    var change_img_time = 4000,
        transition_speed = 400;

    var listItems = $("#slider").children('li'),
        dotItems = $('#dots').children('li'),
        listLen = listItems.length,
        current,
        changeTimeout;

    function moveTo(newIndex) {

        var i = newIndex;

        if (newIndex == 'prev') {
            i = (current > 0) ? (current - 1) : (listLen - 1);
        }

        if (newIndex == 'next') {
            i = (current < listLen - 1) ? (current + 1) : 0;
        }

        dotItems.removeClass('active')
            .eq(i).addClass('active');

        listItems.fadeOut(transition_speed)
            .eq(i).fadeIn(transition_speed);

        current = i;

        //resets time interval if user clicks on slider dot; then begin automated slider
        clearTimeout(changeTimeout);
        changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time);
    };

    // Event handlers
    $("#dots li").click(function () {
        var i = $('#dots li').index(this);
        moveTo(i);
    });

    $("#prev").click(function () {
        moveTo('prev');
    });

    $("#next").click(function () {
        moveTo('next');
    });

    //initialize slider on load
    moveTo('next');
});

// $('.show_rekv').click(function (){
//     $('#menu_footer').css('display', 'none');
// })
// $('.show_rekv').click(function (){
//     $('#menu_footer').css('display', ' ');
// })
$('#show_rekv').on('click',function(e){
    e.preventDefault();
    $('.rekv_hidden').toggleClass('active_show');
});

$('#show_all').click(function(e){
    $('.block').css('display', 'block');
    $('#show_all').css('display', 'none');
});