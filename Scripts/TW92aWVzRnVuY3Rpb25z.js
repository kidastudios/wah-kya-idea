$(document).ready(function() {
    $('#sendMovies').click(function() {
        let textMessage = $('#messageMovies').val();
        $('#2 > .content').append('<div class=userMessage><p>Topic ID #' + $('#sendMovies').parent().parent().attr('id') + '</p></div>');
        if (textMessage) {
            $('#2 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
            $('#messageMovies').val("");
        }
    });
});

var input = document.getElementById("messageMovies");
if (input) {
    input.addEventListener("keyup", function(event) {
        if (event.key === 13) {
            let textMessage = $('#messageMovies').val();
            $('#2 > .content').append('<div class=userMessage><p><b>Topic ID #' + $('#sendMovies').parent().parent().attr('id') + '</b></p></div>');
            if (textMessage) {
                $('#2 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
                $('#messageMovies').val("");
            }
        }
    });
}