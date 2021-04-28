$(document).ready(function() {
    $('#sendMusic').click(function() {
        let textMessage = $('#messageMusic').val();
        $('#3 > .content').append('<div class=userMessage><p>Topic ID #' + $('#sendMusic').parent().parent().attr('id') + '</p></div>');
        if (textMessage) {
            $('#3 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
            $('#messageMusic').val("");
        }
    });
});

var input = document.getElementById("messageMusic");
if (input) {
    input.addEventListener("keyup", function(event) {
        if (event.key === 13) {
            let textMessage = $('#messageMusic').val();
            $('#3 > .content').append('<div class=userMessage><p><b>Topic ID #' + $('#sendMusic').parent().parent().attr('id') + '</b></p></div>');
            if (textMessage) {
                $('#3 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
                $('#messageMusic').val("");
            }
        }
    });
}