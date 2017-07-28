console.log('javascript has been sourced');

$(document).ready(function() {


    $('body').append('<h2>Hey there!</h2>');
    $('body').prepend('<h2>I am going to the top</h2>');
    $('li').css('color', 'blue');
    $('#last3 li').css('color', 'maroon');
    $('.food').css('color', 'pink');
    $('#chief').css('color', 'green');
    $('ul').first().children().last().css('color', 'black');
    $('#kevinNewFavorite').on('click', function() {
        $('#last3').append('<li>lightsabers</li>');
    });
});