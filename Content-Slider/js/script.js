$(document).ready(function () {

    //Set Options
    var speed = 500; //Fade speed
    var autoswitch = true; //autoslider option
    var autoswitch_speed = 4000; //Auto slider speed

    //Add initial active class
    $('.slide').first().addClass('active');


    //Hide all slides 
    $('.slide').hide();

    //Show first slide
    $('.active').show();

    //Next Handler
    $('#next').on('click', nextSlide);

    //Prev Handler
    $('#prev').on('click', prevSlide);

    //Auto Slider Handler
    if (autoswitch == true) {
        setInterval(nextSlide, autoswitch_speed)
    }

    //Switch to next slide
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive'); //last img with active class
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active'); //if last slide, go to the first slide
        } else {
            $('.oldActive').next().addClass('active'); //else go to next slide
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    //Switch to prev slide
    function prevSlide() {
        //        alert("Proceeding to next click");
        $('.active').removeClass('active').addClass('oldActive'); //last img with active class
        if ($('.oldActive').is(':first-child')) {
            $('.slide').first().addClass('active'); //if last slide, go to the first slide
        } else {
            $('.oldActive').prev().addClass('active'); //else go to next slide
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);

    }
});