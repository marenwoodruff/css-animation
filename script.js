$(window).on('load', function() {
    $('.square3').fadeIn(3000).fadeOut(3000);

    $("button").click(function(){
        $(".square4").animate({
            height: 'toggle'
        }, 4000);
    });
});