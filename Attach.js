$(document).ready(function() {
    function myFunction1() {
        var x = document.getElementById("upload");

        if (x.style.display === "none") {

            x.style.display = "block";
        } else {
            x.style.animation = "scaleZ 300ms ease-in-out forwards";
            x.style.display = "none";
        }
    }

    /*// Gaming

    var pic_file = document.getElementById("pic-file");
    var custom_picfile = document.getElementById("custom-picfile");
    var custom_pictext = document.getElementById("custom-pictext");

    custom_picfile.addEventListener("click", function() {
        pic_file.click();
    });

    pic_file.addEventListener("change", function() {
        if (pic_file.value) {

            custom_pictext.innerHTML = pic_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_pictext.innerHTML = "No file choosen yet";
        }
    });

    var real_file = document.getElementById("real-file");
    var custom_file = document.getElementById("custom-file");
    var custom_text = document.getElementById("custom-text");

    custom_file.addEventListener("click", function() {
        real_file.click();
    });

    real_file.addEventListener("change", function() {
        if (real_file.value) {
            custom_text.innerHTML = real_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_text.innerHTML = "Choose a file";
        }
    });

    var vid_file = document.getElementById("vid-file");
    var custom_vidfile = document.getElementById("custom-vidfile");
    var custom_vidtext = document.getElementById("custom-vidtext");

    custom_vidfile.addEventListener("click", function() {
        vid_file.click();
    });

    vid_file.addEventListener("change", function() {
        if (vid_file.value) {

            custom_vidtext.innerHTML = vid_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_vidtext.innerHTML = "No file choosen yet";
        }
    });

    var aud_file = document.getElementById("aud-file");
    var custom_audfile = document.getElementById("custom-audfile");
    var custom_audtext = document.getElementById("custom-audtext");

    custom_audfile.addEventListener("click", function() {
        aud_file.click();
    });

    aud_file.addEventListener("change", function() {
        if (aud_file.value) {

            custom_audtext.innerHTML = aud_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_audtext.innerHTML = "No file choosen yet";
        }
    });

    // Movies

    var pic_file = document.getElementById("pic-file1");
    var custom_picfile = document.getElementById("custom-picfile1");
    var custom_pictext = document.getElementById("custom-pictext1");

    custom_picfile.addEventListener("click", function() {
        pic_file.click();
    });

    pic_file.addEventListener("change", function() {
        if (pic_file.value) {
            custom_pictext.innerHTML = pic_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_pictext.innerHTML = "No file choosen yet";
        }
    });



    var real_file = document.getElementById("real-file1");
    var custom_file = document.getElementById("custom-file1");
    var custom_text = document.getElementById("custom-text1");

    custom_file.addEventListener("click", function() {
        real_file.click();
    });

    real_file.addEventListener("change", function() {
        if (real_file.value) {
            custom_text.innerHTML = real_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_text.innerHTML = "Choose a file";
        }
    });


    var vid_file = document.getElementById("vid-file1");
    var custom_vidfile = document.getElementById("custom-vidfile1");
    var custom_vidtext = document.getElementById("custom-vidtext1");

    custom_vidfile.addEventListener("click", function() {
        vid_file.click();
    });

    vid_file.addEventListener("change", function() {
        if (vid_file.value) {

            custom_vidtext.innerHTML = vid_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_vidtext.innerHTML = "No file choosen yet";
        }
    });

    var aud_file = document.getElementById("aud-file1");
    var custom_audfile = document.getElementById("custom-audfile1");
    var custom_audtext = document.getElementById("custom-audtext1");

    custom_audfile.addEventListener("click", function() {
        aud_file.click();
    });

    aud_file.addEventListener("change", function() {
        if (aud_file.value) {

            custom_audtext.innerHTML = aud_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_audtext.innerHTML = "No file choosen yet";
        }
    });

    // Music


    var pic_file = document.getElementById("pic-file2");
    var custom_picfile = document.getElementById("custom-picfile2");
    var custom_pictext = document.getElementById("custom-pictext2");

    custom_picfile.addEventListener("click", function() {
        pic_file.click();
    });

    pic_file.addEventListener("change", function() {
        if (pic_file.value) {
            custom_pictext.innerHTML = pic_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_pictext.innerHTML = "No file choosen yet";
        }
    });



    var real_file = document.getElementById("real-file2");
    var custom_file = document.getElementById("custom-file2");
    var custom_text = document.getElementById("custom-text2");

    custom_file.addEventListener("click", function() {
        real_file.click();
    });

    real_file.addEventListener("change", function() {
        if (real_file.value) {
            custom_text.innerHTML = real_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_text.innerHTML = "Choose a file";
        }
    });


    var vid_file = document.getElementById("vid-file2");
    var custom_vidfile = document.getElementById("custom-vidfile2");
    var custom_vidtext = document.getElementById("custom-vidtext2");

    custom_vidfile.addEventListener("click", function() {
        vid_file.click();
    });

    vid_file.addEventListener("change", function() {
        if (vid_file.value) {

            custom_vidtext.innerHTML = vid_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_vidtext.innerHTML = "No file choosen yet";
        }
    });

    var aud_file = document.getElementById("aud-file2");
    var custom_audfile = document.getElementById("custom-audfile2");
    var custom_audtext = document.getElementById("custom-audtext2");

    custom_audfile.addEventListener("click", function() {
        aud_file.click();
    });

    aud_file.addEventListener("change", function() {
        if (aud_file.value) {

            custom_audtext.innerHTML = aud_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_audtext.innerHTML = "No file choosen yet";
        }
    });

    // Appliances


    var pic_file = document.getElementById("pic-file3");
    var custom_picfile = document.getElementById("custom-picfile3");
    var custom_pictext = document.getElementById("custom-pictext3");

    custom_picfile.addEventListener("click", function() {
        pic_file.click();
    });

    pic_file.addEventListener("change", function() {
        if (pic_file.value) {
            custom_pictext.innerHTML = pic_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_pictext.innerHTML = "No file choosen yet";
        }
    });



    var real_file = document.getElementById("real-file3");
    var custom_file = document.getElementById("custom-file3");
    var custom_text = document.getElementById("custom-text3");

    custom_file.addEventListener("click", function() {
        real_file.click();
    });

    real_file.addEventListener("change", function() {
        if (real_file.value) {
            custom_text.innerHTML = real_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_text.innerHTML = "Choose a file";
        }
    });


    var vid_file = document.getElementById("vid-file3");
    var custom_vidfile = document.getElementById("custom-vidfile3");
    var custom_vidtext = document.getElementById("custom-vidtext3");

    custom_vidfile.addEventListener("click", function() {
        vid_file.click();
    });

    vid_file.addEventListener("change", function() {
        if (vid_file.value) {

            custom_vidtext.innerHTML = vid_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_vidtext.innerHTML = "No file choosen yet";
        }
    });

    var aud_file = document.getElementById("aud-file3");
    var custom_audfile = document.getElementById("custom-audfile3");
    var custom_audtext = document.getElementById("custom-audtext3");

    custom_audfile.addEventListener("click", function() {
        aud_file.click();
    });

    aud_file.addEventListener("change", function() {
        if (aud_file.value) {

            custom_audtext.innerHTML = aud_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_audtext.innerHTML = "No file choosen yet";
        }
    });

    // Art & Craft


    var pic_file = document.getElementById("pic-file4");
    var custom_picfile = document.getElementById("custom-picfile4");
    var custom_pictext = document.getElementById("custom-pictext4");

    custom_picfile.addEventListener("click", function() {
        pic_file.click();
    });

    pic_file.addEventListener("change", function() {
        if (pic_file.value) {
            custom_pictext.innerHTML = pic_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_pictext.innerHTML = "No file choosen yet";
        }
    });



    var real_file = document.getElementById("real-file4");
    var custom_file = document.getElementById("custom-file4");
    var custom_text = document.getElementById("custom-text4");

    custom_file.addEventListener("click", function() {
        real_file.click();
    });

    real_file.addEventListener("change", function() {
        if (real_file.value) {
            custom_text.innerHTML = real_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_text.innerHTML = "Choose a file";
        }
    });


    var vid_file = document.getElementById("vid-file4");
    var custom_vidfile = document.getElementById("custom-vidfile4");
    var custom_vidtext = document.getElementById("custom-vidtext4");

    custom_vidfile.addEventListener("click", function() {
        vid_file.click();
    });

    vid_file.addEventListener("change", function() {
        if (vid_file.value) {

            custom_vidtext.innerHTML = vid_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_vidtext.innerHTML = "No file choosen yet";
        }
    });

    var aud_file = document.getElementById("aud-file4");
    var custom_audfile = document.getElementById("custom-audfile4");
    var custom_audtext = document.getElementById("custom-audtext4");

    custom_audfile.addEventListener("click", function() {
        aud_file.click();
    });

    aud_file.addEventListener("change", function() {
        if (aud_file.value) {

            custom_audtext.innerHTML = aud_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_audtext.innerHTML = "No file choosen yet";
        }
    });
    /// Video


    var pic_file = document.getElementById("pic-file5");
    var custom_picfile = document.getElementById("custom-picfile5");
    var custom_pictext = document.getElementById("custom-pictext5");

    custom_picfile.addEventListener("click", function() {
        pic_file.click();
    });

    pic_file.addEventListener("change", function() {
        if (pic_file.value) {
            custom_pictext.innerHTML = pic_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_pictext.innerHTML = "No file choosen yet";
        }
    });



    var real_file = document.getElementById("real-file5");
    var custom_file = document.getElementById("custom-file5");
    var custom_text = document.getElementById("custom-text5");

    custom_file.addEventListener("click", function() {
        real_file.click();
    });

    real_file.addEventListener("change", function() {
        if (real_file.value) {
            custom_text.innerHTML = real_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_text.innerHTML = "Choose a file";
        }
    });


    var vid_file = document.getElementById("vid-file5");
    var custom_vidfile = document.getElementById("custom-vidfile5");
    var custom_vidtext = document.getElementById("custom-vidtext5");

    custom_vidfile.addEventListener("click", function() {
        vid_file.click();
    });

    vid_file.addEventListener("change", function() {
        if (vid_file.value) {

            custom_vidtext.innerHTML = vid_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_vidtext.innerHTML = "No file choosen yet";
        }
    });

    var aud_file = document.getElementById("aud-file5");
    var custom_audfile = document.getElementById("custom-audfile5");
    var custom_audtext = document.getElementById("custom-audtext5");

    custom_audfile.addEventListener("click", function() {
        aud_file.click();
    });

    aud_file.addEventListener("change", function() {
        if (aud_file.value) {

            custom_audtext.innerHTML = aud_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_audtext.innerHTML = "No file choosen yet";
        }
    });

    // Other


    var pic_file = document.getElementById("pic-file6");
    var custom_picfile = document.getElementById("custom-picfile6");
    var custom_pictext = document.getElementById("custom-pictext6");

    custom_picfile.addEventListener("click", function() {
        pic_file.click();
    });

    pic_file.addEventListener("change", function() {
        if (pic_file.value) {
            custom_pictext.innerHTML = pic_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_pictext.innerHTML = "No file choosen yet";
        }
    });



    var real_file = document.getElementById("real-file6");
    var custom_file = document.getElementById("custom-file6");
    var custom_text = document.getElementById("custom-text6");

    custom_file.addEventListener("click", function() {
        real_file.click();
    });

    real_file.addEventListener("change", function() {
        if (real_file.value) {
            custom_text.innerHTML = real_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            custom_text.innerHTML = "Choose a file";
        }
    });


    var vid_file = document.getElementById("vid-file6");
    var custom_vidfile = document.getElementById("custom-vidfile6");
    var custom_vidtext = document.getElementById("custom-vidtext6");

    custom_vidfile.addEventListener("click", function() {
        vid_file.click();
    });

    vid_file.addEventListener("change", function() {
        if (vid_file.value) {

            custom_vidtext.innerHTML = vid_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_vidtext.innerHTML = "No file choosen yet";
        }
    });

    var aud_file = document.getElementById("aud-file6");
    var custom_audfile = document.getElementById("custom-audfile6");
    var custom_audtext = document.getElementById("custom-audtext6");

    custom_audfile.addEventListener("click", function() {
        aud_file.click();
    });

    aud_file.addEventListener("change", function() {
        if (aud_file.value) {

            custom_audtext.innerHTML = aud_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

        } else {
            custom_audtext.innerHTML = "No file choosen yet";
        }
    });*/
});
