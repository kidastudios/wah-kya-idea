$(document).ready(function() {
    $('#sendAppliances').click(function() {
        let textMessage = $('#messageAppliances').val();
        $('#4 > .content').append('<div class=userMessage><p>Topic ID #' + $('#sendAppliances').parent().parent().attr('id') + '</p></div>');
        if (textMessage) {
            $('#4 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
            $('#messageAppliances').val("");
        }
    });
    /*
        var input = document.getElementById("messageAppliances");
        if (input) {
            input.addEventListener("keyup", function(event) {
                if (event.key === 13) {
                    let textMessage = $('#messageAppliances').val();
                    $('#4 > .content').append('<div class=userMessage><p><b>Topic ID #' + $('#sendAppliances').parent().parent().attr('id') + '</b></p></div>');
                    if (textMessage) {
                        $('#4 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
                        $('#messageAppliances').val("");
                    }
                }
            });
        }
    */
});