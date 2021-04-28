$(document).ready(function() {
    $('#sendArt').click(function() {
        let textMessage = $('#messageArt').val();
        $('#5 > .content').append('<div class=userMessage><p>Topic ID #' + $('#sendArt').parent().parent().attr('id') + '</p></div>');
        if (textMessage) {
            $('#5 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
            $('#messageArt').val("");
        }
    });
});

var input = document.getElementById("messageArt");
if (input) {
    input.addEventListener("keyup", function(event) {
        if (event.key === 13) {
            let textMessage = $('#messageArt').val();
            $('#5 > .content').append('<div class=userMessage><p><b>Topic ID #' + $('#sendArt').parent().parent().attr('id') + '</b></p></div>');
            if (textMessage) {
                $('#5 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
                $('#messageArt').val("");
            }
        }
    });
}