$(document).ready(function () {
    $('nav a').on('click', function () {
        //Remove class current from each and assign parent class
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');

        //Set heading text
        $('h1#heading').text($(this).text());

        //Get and filter link text
        var category = $(this).text().toLowerCase().replace(' ', '-');

        //Remove hidden class if 'all-projects is selected
        if (category == 'all-projects') {
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function () {
                if (!$(this).hasClass(category)) {
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        // Stop link behaviour
        return false;

    });

    //Mouseenter overlay
    $('ul#gallery li').on('mouseenter', function () {
        //Get data attribute values
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');

        //Validation
        if (desc == null) {
            desc = "Click to enlarge";
        }

        if (title == null) {
            title = '';
        }
        //Create overlay div on mouse enter
        $(this).append('<div class="overlay"></div>');

        //Get the overlay div
        var overlay = $(this).children('.overlay');

        //Add html to overlay
        overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>');

        //Fade in overlay
        overlay.fadeIn(800);
    });
    //MouseLeave Overlay
    $('ul#gallery li').on('mouseleave', function () {
        //Create overlay div on mouse enter
        $(this).append('<div class="overlay"></div>');

        //Get the overlay div
        var overlay = $(this).children('.overlay');

        //Fade out overlay
        overlay.fadeOut(500);
    });

});

/* Note:
        To filter a category we dynamically add a hidden class || if 'all-projects' is selected remove hidden class*/