$(function () {
    $('#c').click(function () {
        if ($('#a').val()) {

        } else {
            $('.tips').css({
                display: 'block'
            })
        }
        if ($('#b').val()) {

        } else {
            $('.tips').css({
                display: 'block'
            })
        }

        if ($('#b').val() && $('#a').val()) {
            $('.tips').css({
                display: 'none'
            })
        } else {

        }




    });

})