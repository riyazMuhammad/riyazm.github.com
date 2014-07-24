//function adjust_footer() {
//    var window_height = window.screen.height;
//    var body_height = $("body").height();
//    var footer_height = $('#footer').height();
//    var marg_top = window_height - body_height;
//    if (window_height > body_height) {
//        $('#footer').css('margin-top', marg_top);
//    }
//    console.log('marg_top:'+marg_top);
//}
//adjust_footer();

// Window load event used just in case window height is dependant upon images
// Window load event used just in case window height is dependant upon images
$(window).bind("load", function() {
    positionFooter();
    $(window).scroll(positionFooter).resize(positionFooter);
});
function positionFooter() {
    var footerHeight = 0,
            footerTop = 0,
            $footer = $("#footer");
    footerHeight = $footer.height();
    footerTop = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";


//    console.log("Document height: ", $(document.body).height());
//    console.log("Window height: ", $(window).height());
//    console.log("Window scroll: ", $(window).scrollTop());
//    console.log("Footer height: ", footerHeight);
//    console.log("Footer top: ", footerTop);
//    console.log("-----------");


    if (($(document.body).height() + footerHeight) < $(window).height()) {
        console.log("found problem");
        $footer.css({
            position: "absolute"
        }).stop().animate({
            top: footerTop
        }, -1);
    } else {
        console.log("no problem");
        $footer.css({
            position: "static"
        });
    }

}
$('.redirection').click(function() {
    getMeOut($(this).attr('data-from'), $(this).attr('data-to'));
    return false;
});

function getMeOut(from_id, to_id) {
    $(from_id).fadeOut(100);
    $(to_id).addClass('animated bounceInLeft');
    $(to_id).show();
    $(to_id).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', positionFooter);
}
