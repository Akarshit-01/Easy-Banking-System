$(document).ready(function () {
    $(window).scroll(function () {
        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if ((positiontop > 548.7999877929688) && (positiontop < 707.2000122070312)) {
            $('#card-one').addClass('animated zoomIn');
            $('#card-two').addClass('animated zoomIn');
            $('#card-three').addClass('animated zoomIn');
            $('#card-four').addClass('animated zoomIn');
        }

    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if ((positiontop > 553.5999755859375) && (positiontop < 707.2000122070312)) {
            $('#card-one').addClass('animated zoomIn');
            $('#card-two').addClass('animated zoomIn');
            $('#card-three').addClass('animated zoomIn');
            $('#card-four').addClass('animated zoomIn');
        }

    });
});
