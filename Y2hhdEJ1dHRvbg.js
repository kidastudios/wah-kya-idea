$(document).ready(function() {

    $('#MainPageInstructions').show();
    $('#1').hide();
    $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    $('#7').hide();
    $('#8').hide();
    $('#9').hide();
    $('#10').hide();
    $('#11').hide();

    $(".bi-chat-quote").on("mouseover", function() {
        $(this).css("opacity", "0");
        //$(".bi-chat-quote").css("opacity","1");
    });
    $(".bi-chat-quote").on("mouseleave", function() {
        $(this).css("opacity", "1");
        //$(".bi-chat-quote").css("opacity","1");
    });
    $(".bi-info-circle").on("mouseover", function() {
        $(this).css("opacity", "0");
        //$(".bi-chat-quote").css("opacity","1");
    });
    $(".bi-info-circle").on("mouseleave", function() {
        $(this).css("opacity", "1");
        //$(".bi-chat-quote").css("opacity","1");
    });
    $(".bi-gear").on("mouseover", function() {
        $(this).css("opacity", "0");
        //$(".bi-chat-quote").css("opacity","1");
    });
    $(".bi-gear").on("mouseleave", function() {
        $(this).css("opacity", "1");
        //$(".bi-chat-quote").css("opacity","1");
    });
    /*    $('#g-message').keyup(function() {
        if ($("#g-message").val() !== "") {
            $('#1').find('#record').css("display","none");
            $('#1').find('.send').css("display","block");
        }
        else
        {
            $('#1').find('#record').css("display","block");
            $('#1').find('.send').css("display","none");
        }
    });
    $('#ms-message').keyup(function() {
        if ($("#ms-message").val() !== "") {
            $('#2').find('#record').css("display","none");
            $('#2').find('.send').css("display","block");
        }
        else
        {
            $('#2').find('#record').css("display","block");
            $('#2').find('.send').css("display","none");
        }
    });
    $('#m-message').keyup(function() {
        if ($("#m-message").val() !== "") {
            $('#3').find('#record').css("display","none");
            $('#3').find('.send').css("display","block");
        }
        else
        {
            $('#3').find('#record').css("display","block");
            $('#3').find('.send').css("display","none");
        }
    });
    $('#a-message').keyup(function() {
        if ($("#a-message").val() !== "") {
            $('#4').find('#record').css("display","none");
            $('#4').find('.send').css("display","block");
        }
        else
        {
            $('#4').find('#record').css("display","block");
            $('#4').find('.send').css("display","none");
        }
    });
    $('#ac-message').keyup(function() {
        if ($("#ac-message").val() !== "") {
            $('#5').find('#record').css("display","none");
            $('#5').find('.send').css("display","block");
        }
        else
        {
            $('#5').find('#record').css("display","block");
            $('#5').find('.send').css("display","none");
        }
    });
    $('#v-message').keyup(function() {
        if ($("#v-message").val() !== "") {
            $('#6').find('#record').css("display","none");
            $('#6').find('.send').css("display","block");
        }
        else
        {
            $('#6').find('#record').css("display","block");
            $('#6').find('.send').css("display","none");
        }
    });
    $('#o-message').keyup(function() {
        if ($("#o-message").val() !== "") {
            $('#7').find('#record').css("display","none");
            $('#7').find('.send').css("display","block");
        }
        else
        {
            $('#7').find('#record').css("display","block");
            $('#7').find('.send').css("display","none");
        }
    });*/
    $('#box1').click(function() {
        $('#MainPageInstructions').hide();
        $('#box1 > #messageCount').hide();
        $('#1').show();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
        $('#6').hide();
        $('#7').hide();
        $('#8').hide();
        $('#9').hide();
        $('#10').hide();
        $('#11').hide();
        /*    //$('#box1').hover(function(){$('#box1').css("filter", "brightness(115%)");},
                        //     function(){$('#box1').css("filter", "brightness(100%)");});
            $('#box1').css({
                "background-image": "linear-gradient(to bottom right, #0061ff, #60efff)"
            });
            /*$('#box1').hover(function() {
                $('#box1').css({
                    "filter": "brightness(120%)"
                });
                /*},
                function() {
                $('#box1').css({
                    "background-image": "linear-gradient(to bottom right, #0061ff, #60efff)"
                });
            })
        //    $('#box1').hover(function(){$('#box1').css("filter", "brightness(115%)");},
             		//	     function(){$('#box1').css("filter", "brightness(100%)");});

            $('#box2').css({
                "background-image": "linear-gradient(white, white)"
            });

            $('#box3').css({
                "background-image": "linear-gradient(white, white)"
            });

            $('#box4').css({
                "background-image": "linear-gradient(white, white)"
            });

            $('#box5').css({
                "background-image": "linear-gradient(white, white)"
            });

            $('#box6').css({
                "background-image": "linear-gradient(white, white)"
            });

            $('#box7').css({
                "background-image": "linear-gradient(white, white)"
            });

            $('#box1>.topic1_name').css({
                "color": "white"
            });

            $('#box2>.topic1_name').css({
                "color": "black"
            });

            $('#box3>.topic1_name').css({
                "color": "black"
            });

            $('#box4>.topic1_name').css({
                "color": "black"
            });

            $('#box5>.topic1_name').css({
                "color": "black"
            });

            $('#box6>.topic1_name').css({
                "color": "black"
            });

            $('#box7>.topic1_name').css({
                "color": "black"
            });*/
    });

    $('#box2').click(function() {
        $('#MainPageInstructions').hide();
        $('#1').hide();
        $('#box2 > #messageCount').hide();
        $('#2').show();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
        $('#6').hide();
        $('#7').hide();
        $('#8').hide();
        $('#9').hide();
        $('#10').hide();
        $('#11').hide();
        /*        $//('#box2').hover(function(){$('#box2').css("filter", "brightness(115%)");},
                                 //function(){$('#box2').css("filter", "brightness(100%)");});
                $('#box1').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box2').css({
                    "background-image": "linear-gradient(to bottom right, #0061ff, #60efff)"
                });


                $('#box3').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box4').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box5').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box6').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box7').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box1>.topic1_name').css({
                    "color": "black"
                });

                $('#box2>.topic1_name').css({
                    "color": "white"
                });

                $('#box3>.topic1_name').css({
                    "color": "black"
                });

                $('#box4>.topic1_name').css({
                    "color": "black"
                });

                $('#box5>.topic1_name').css({
                    "color": "black"
                });

                $('#box6>.topic1_name').css({
                    "color": "black"
                });

                $('#box7>.topic1_name').css({
                    "color": "black"
                });*/
    });

    $('#box3').click(function() {
        $('#MainPageInstructions').hide();
        $('#1').hide();
        $('#2').hide();
        $('#box3 > #messageCount').hide();
        $('#3').show();
        $('#4').hide();
        $('#5').hide();
        $('#6').hide();
        $('#7').hide();
        $('#8').hide();
        $('#9').hide();
        $('#10').hide();
        $('#11').hide();
        /*        //$('#box3').hover(function(){$('#box3').css("filter", "brightness(115%)");},
                    //             function(){$('#box3').css("filter", "brightness(100%)");});
                $('#box1').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });


                $('#box2').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box3').css({
                    "background-image": "linear-gradient(to bottom right, #0061ff, #60efff)"
                });

                $('#box4').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box5').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box6').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box7').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box1>.topic1_name').css({
                    "color": "black"
                });

                $('#box2>.topic1_name').css({
                    "color": "black"
                });

                $('#box3>.topic1_name').css({
                    "color": "white"
                });

                $('#box4>.topic1_name').css({
                    "color": "black"
                });

                $('#box5>.topic1_name').css({
                    "color": "black"
                });

                $('#box6>.topic1_name').css({
                    "color": "black"
                });

                $('#box7>.topic1_name').css({
                    "color": "black"
                });*/
    });

    $('#box4').click(function() {
        $('#MainPageInstructions').hide();
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#box4 > #messageCount').hide();
        $('#4').show();
        $('#5').hide();
        $('#6').hide();
        $('#7').hide();
        $('#8').hide();
        $('#9').hide();
        $('#10').hide();
        $('#11').hide();
        //    $('#box4').hover(function(){$('#box4').css("filter", "brightness(115%)");},
        //                 function(){$('#box4').css("filter", "brightness(100%)");});
        /*        $('#box1').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box2').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box3').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box4').css({
                    "background-image": "linear-gradient(to bottom right, #0061ef, #60efff)"
                });

                $('#box5').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box6').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box7').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box1>.topic1_name').css({
                    "color": "black"
                });

                $('#box2>.topic1_name').css({
                    "color": "black"
                });

                $('#box3>.topic1_name').css({
                    "color": "black"
                });

                $('#box4>.topic1_name').css({
                    "color": "white"
                });

                $('#box5>.topic1_name').css({
                    "color": "black"
                });

                $('#box6>.topic1_name').css({
                    "color": "black"
                });

                $('#box7>.topic1_name').css({
                    "color": "black"
                });*/
    });

    $('#box5').click(function() {
        $('#MainPageInstructions').hide();
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#box5 > #messageCount').hide();
        $('#5').show();
        $('#6').hide();
        $('#7').hide();
        $('#8').hide();
        $('#9').hide();
        $('#10').hide();
        $('#11').hide();
        //$('#box5').hover(function(){$('#box5').css("filter", "brightness(115%)");},
        //                 function(){$('#box5').css("filter", "brightness(100%)");});
        /*        $('#box1').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box2').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box3').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box4').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box5').css({
                    "background-image": "linear-gradient(to bottom right, #0061ef, #60efff)"
                });

                $('#box6').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box7').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box1>.topic1_name').css({
                    "color": "black"
                });

                $('#box2>.topic1_name').css({
                    "color": "black"
                });

                $('#box3>.topic1_name').css({
                    "color": "black"
                });

                $('#box4>.topic1_name').css({
                    "color": "black"
                });

                $('#box5>.topic1_name').css({
                    "color": "white"
                });

                $('#box6>.topic1_name').css({
                    "color": "black"
                });

                $('#box7>.topic1_name').css({
                    "color": "black"
                });*/
    });

    $('#box6').click(function() {
        $('#MainPageInstructions').hide();
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
        $('#box6 > #messageCount').hide();
        $('#6').show();
        $('#7').hide();
        $('#8').hide();
        $('#9').hide();
        $('#10').hide();
        $('#11').hide();
        //$('#box6').hover(function(){$('#box6').css("filter", "brightness(115%)");},
        // function(){$('#box6').css("filter", "brightness(100%)");});

        /*        $('#box1').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box2').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box3').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box4').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box5').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box6').css({
                    "background-image": "linear-gradient(to bottom right, #0061ef, #60efff)"
                });

                $('#box7').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box1>.topic1_name').css({
                    "color": "black"
                });

                $('#box2>.topic1_name').css({
                    "color": "black"
                });

                $('#box3>.topic1_name').css({
                    "color": "black"
                });

                $('#box4>.topic1_name').css({
                    "color": "black"
                });

                $('#box5>.topic1_name').css({
                    "color": "black"
                });

                $('#box6>.topic1_name').css({
                    "color": "white"
                });

                $('#box7>.topic1_name').css({
                    "color": "black"
                });*/
    });

    $('#box7').click(function() {
        $('#MainPageInstructions').hide();
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
        $('#6').hide();
        $('#box7 > #messageCount').hide();
        $('#7').show();
        $('#8').hide();
        $('#9').hide();
        $('#10').hide();
        $('#11').hide();
        //$('#box7').hover(function(){$('#box7').css("filter", "brightness(115%)");},
        //                 function(){$('#box7').css("filter", "brightness(100%)");});
        /*        $('#box1').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box2').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });
                //$('#box7').hover(function(){$('#box7').css("filter", "brightness(115%)");},
                //  			     function(){$('#box7').css("filter", "brightness(100%)");});
                $('#box3').css({
                    "background-image": "linear-gradient(white, white)"
                });

                $('#box4').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box5').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box6').css({
                    "background-image": "linear-gradient(to bottom right, white, white)"
                });

                $('#box7').css({
                    "background-image": "linear-gradient(to bottom right, #0061ef, #60efff)"
                });

                $('#box1>.topic1_name').css({
                    "color": "black"
                });

                $('#box2>.topic1_name').css({
                    "color": "black"
                });

                $('#box3>.topic1_name').css({
                    "color": "black"
                });

                $('#box4>.topic1_name').css({
                    "color": "black"
                });

                $('#box5>.topic1_name').css({
                    "color": "black"
                });

                $('#box6>.topic1_name').css({
                    "color": "black"
                });

                $('#box7>.topic1_name').css({
                    "color": "white"
                });*/
    });

    $('#box8').click(function() {
        $('#MainPageInstructions').hide();
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
        $('#6').hide();
        $('#7').hide();
        $('#box8 > #messageCount').hide();
        $('#8').show();
        $('#9').hide();
        $('#10').hide();
        $('#11').hide();
    });

    $('#box9').click(function() {
        $('#MainPageInstructions').hide();
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
        $('#6').hide();
        $('#7').hide();
        $('#8').hide();
        $('#box9 > #messageCount').hide();
        $('#9').show();
        $('#10').hide();
        $('#11').hide();
    });

    $('#box10').click(function() {
        $('#MainPageInstructions').hide();
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
        $('#6').hide();
        $('#7').hide();
        $('#8').hide();
        $('#9').hide();
        $('#box10 > #messageCount').hide();
        $('#10').show();
        $('#11').hide();
    });

    $('#box11').click(function() {
        $('#MainPageInstructions').hide();
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
        $('#6').hide();
        $('#7').hide();
        $('#8').hide();
        $('#9').hide();
        $('#10').hide();
        $('#box11 > #messageCount').hide();
        $('#11').show();
    });


    $('#1 .attach').click(function() {
        if ($('#1').find('#upload').css('display') === 'none') {
            $('#1').find('#upload').css("display", "block");
        } else {
            $('#1').find('#upload').css("animation", "scaleZ 300ms ease-in-out forwards");
            $('#1').find('#upload').css("display", "none");
        }
    });
    $('#2 .attach').click(function() {

        if ($('#2').find('#upload').css('display') === 'none') {
            $('#2').find('#upload').css("display", "block");
        } else {
            $('#2').find('#upload').css("animation", "scaleZ 300ms ease-in-out forwards");
            $('#2').find('#upload').css("display", "none");
        }
    });
    $('#3 .attach').click(function() {

        if ($('#3').find('#upload').css('display') === 'none') {
            $('#3').find('#upload').css("display", "block");
        } else {
            $('#3').find('#upload').css("animation", "scaleZ 300ms ease-in-out forwards");
            $('#3').find('#upload').css("display", "none");
        }
    });
    $('#4 .attach').click(function() {

        if ($('#4').find('#upload').css('display') === 'none') {
            $('#4').find('#upload').css("display", "block");
        } else {
            $('#4').find('#upload').css("animation", "scaleZ 300ms ease-in-out forwards");
            $('#4').find('#upload').css("display", "none");
        }
    });
    $('#5 .attach').click(function() {

        if ($('#5').find('#upload').css('display') === 'none') {
            $('#5').find('#upload').css("display", "block");
        } else {
            $('#5').find('#upload').css("animation", "scaleZ 300ms ease-in-out forwards");
            $('#5').find('#upload').css("display", "none");
        }
    });
    $('#6 .attach').click(function() {

        if ($('#6').find('#upload').css('display') === 'none') {
            $('#6').find('#upload').css("display", "block");
        } else {
            $('#6').find('#upload').css("animation", "scaleZ 300ms ease-in-out forwards");
            $('#6').find('#upload').css("display", "none");
        }
    });
    $('#7 .attach').click(function() {

        if ($('#7').find('#upload').css('display') === 'none') {
            $('#7').find('#upload').css("display", "block");
        } else {
            $('#7').find('#upload').css("animation", "scaleZ 300ms ease-in-out forwards");
            $('#7').find('#upload').css("display", "none");
        }
    });
    $('#8 .attach').click(function() {

        if ($('#8').find('#upload').css('display') === 'none') {
            $('#8').find('#upload').css("display", "block");
        } else {
            $('#8').find('#upload').css("animation", "scaleZ 300ms ease-in-out forwards");
            $('#').find('#upload').css("display", "none");
        }
    });
    $('#9 .attach').click(function() {

        if ($('#9').find('#upload').css('display') === 'none') {
            $('#9').find('#upload').css("display", "block");
        } else {
            $('#9').find('#upload').css("animation", "scaleZ 300ms ease-in-out forwards");
            $('#9').find('#upload').css("display", "none");
        }
    });
    $('#10 .attach').click(function() {

        if ($('#10').find('#upload').css('display') === 'none') {
            $('#10').find('#upload').css("display", "block");
        } else {
            $('#10').find('#upload').css("animation", "scaleZ 300ms ease-in-out forwards");
            $('#10').find('#upload').css("display", "none");
        }
    });
    $('#11 .attach').click(function() {

        if ($('#11').find('#upload').css('display') === 'none') {
            $('#11').find('#upload').css("display", "block");
        } else {
            $('#11').find('#upload').css("animation", "scaleZ 300ms ease-in-out forwards");
            $('#11').find('#upload').css("display", "none");
        }
    });
    $(window).click(function() {
        $('#1').find('#upload').css("display", "none");
        $('#2').find('#upload').css("display", "none");
        $('#3').find('#upload').css("display", "none");
        $('#4').find('#upload').css("display", "none");
        $('#5').find('#upload').css("display", "none");
        $('#6').find('#upload').css("display", "none");
        $('#7').find('#upload').css("display", "none");
        $('#8').find('#upload').css("display", "none");
        $('#9').find('#upload').css("display", "none");
        $('#10').find('#upload').css("display", "none");
        $('#11').find('#upload').css("display", "none");
    });
    $('.inputbar').click(function(e) {
        e.stopPropagation();
    });
});