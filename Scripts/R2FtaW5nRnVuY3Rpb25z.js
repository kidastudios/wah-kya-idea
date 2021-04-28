$(document).ready(function() {
    $('#sendGaming').click(function() {
        let textMessage = $('#messageGaming').val();
        $('#1 > .content').append('<div class=userMessage><p>Topic ID #' + $('#sendGaming').parent().parent().attr('id') + '</p></div>');
        if (textMessage) {
            $('#1 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
            $('#messageGaming').val("");
        }
    });
});

var input = document.getElementById("messageGaming");

if (input) {
    input.addEventListener("keyup", function(event) {
        if (event.key === 13) {
            let textMessage = $('#messageGaming').val();
            $('#1 > .content').append('<div class=userMessage><p><b>Topic ID #' + $('#sendGaming').parent().parent().attr('id') + '</b></p></div>');
            if (textMessage) {
                $('#1 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
                $('#messageGaming').val("");
            }
        }
    });
}