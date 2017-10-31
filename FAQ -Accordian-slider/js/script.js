//Accordian

var action = "click";
var speed = 500;

$(document).ready(function () {
    $('li.q').on(action, function () {
        $(this).next()
            .slideToggle(speed)
            .siblings('li.a') //this method returns all sibling elements(share same parent) of the selected element.
            .slideUp();
        //Get image for active question
        var img = $(this).children('img');
        //Remove 'rotate' classes for all images except the active
        $('img').not(img).removeClass('rotate'); //every img that we put in var(this)
        //Toggle rotate class
        img.toggleClass('rotate'); //Add or remove one or more classes from each element in the set of matched elements

    });




});