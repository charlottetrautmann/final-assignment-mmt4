$(document).ready(function() {

    //////accordion//////

    $(function() {
        $("#accordion").accordion({
            animate: 200,
            heightStyle: "content"
        });
    });



    ////video////

    $("video").each(function() {
        var player = videojs(this);

        $(this).parents(".video").find(".playbuttons").click(function() {
            if ($(this).hasClass('active')) { //als class aanwezig is
                $(this).removeClass('active'); //verwijder de class
                player.pause();
            } else { // anders
                $(this).addClass('active'); //voeg de class toe
                player.play();
            }
        });

        $(this).parents(".video").find(".rewindbutton").click(function() {
            player.currentTime(player.currentTime() - 10);
        });

    });





    /////video popup//////

    $(".check").on('click', function() {
        $(".popup").addClass("active");
    });


    $(".close, .popup").on("click", function() {
        $(".popup").removeClass("active");
    });

    $(".check").on('click', function() {
        $(".vink-button").show();
    });




    /////backgroundswitch//////////



    ///kleuren veranderen
    $('#toggle').click(function() {
        $('header').toggleClass("black");
        $('li a').toggleClass("black");
        $('main').toggleClass("black");
        $('#playlist').toggleClass("black");
        $('.video-js').toggleClass("black");
        $('h3').toggleClass("black");
        $('.ui-accordion-header').toggleClass("black");
        $('#support').toggleClass("black");
        $('h2').toggleClass("black");

    });

    ///images veranderen
    $('#logoswitch').hide();
    $('#toggle').click(function() {
        $('#logo,#logoswitch').toggle()
    });

    $('#day').hide();
    $('#toggle').click(function() {
        $('#night,#day').toggle()
    });

    $('.dichtswitch').hide();
    $('#toggle').click(function() {
        $('.dicht, .dichtswitch').toggle()
    });





});