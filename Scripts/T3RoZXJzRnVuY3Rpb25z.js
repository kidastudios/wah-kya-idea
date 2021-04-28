$(document).ready(function() {
    $('#sendOthers').click(function() {
        let textMessage = $('#messageOthers').val();
        $('#7 > .content').append('<div class=userMessage><p>Topic ID #' + $('#sendOthers').parent().parent().attr('id') + '</p></div>');
        if (textMessage) {
            $('#7 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
            $('#messageOthers').val("");
        }
    });
});

var input = document.getElementById("messageOthers");
if (input) {
    input.addEventListener("keyup", function(event) {
        if (event.key === 13) {
            let textMessage = $('#messageOthers').val();
            $('#7 > .content').append('<div class=userMessage><p><b>Topic ID #' + $('#sendOthers').parent().parent().attr('id') + '</b></p></div>');
            if (textMessage) {
                $('#7 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
                $('#messageOthers').val("");
            }
        }
    });
}