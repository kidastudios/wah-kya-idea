$(document).ready(function() {
    $('#sendVideos').click(function() {
        let textMessage = $('#messageVideos').val();
        $('#6 > .content').append('<div class=userMessage><p>Topic ID #' + $('#sendVideos').parent().parent().attr('id') + '</p></div>');
        if (textMessage) {
            $('#6 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
            $('#messageVideos').val("");
        }
    });
});

var input = document.getElementById("messageVideos");
if (input) {
    input.addEventListener("keyup", function(event) {
        if (event.key === 13) {
            let textMessage = $('#messageVideos').val();
            $('#6 > .content').append('<div class=userMessage><p><b>Topic ID #' + $('#sendVideos').parent().parent().attr('id') + '</b></p></div>');
            if (textMessage) {
                $('#6 > .content').append('<div class=userMessage><p>' + textMessage + '</p></div>');
                $('#messageVideos').val("");
            }
        }
    });
}