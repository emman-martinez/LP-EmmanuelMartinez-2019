$(document).ready(function() {

    (function() {

        $(".imgThumb").on("mouseover", function() {
            var color = $(this).data('color');
            // console.log(color);
            if (color == 'uno') {
                var url = "https://ss423.liverpool.com.mx/xl/1084706741_1p.jpg";
            } else if (color == 'dos') {
                var url = "https://ss423.liverpool.com.mx/xl/1084706741_2p.jpg";
            } else if (color == 'tres') {
                var url = "https://ss423.liverpool.com.mx/xl/1084706741_3p.jpg";
            } else if (color == 'cuatro') {
                var url = "https://ss423.liverpool.com.mx/lg/1084706741.jpg";
            }
            $("#vistaPrevia").attr('src', url);
        });

        $(".zoom").hover(function() {
            $(this).addClass('transition');
        }, function() {
            $(this).removeClass('transition');
        });

    })();

});