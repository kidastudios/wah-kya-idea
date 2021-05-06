$(document).ready(function() {
    //Gojira
    var txt = document.querySelector('.gojira #w-input-text');
    var ibar = document.getElementsByClassName('g-content');
    txt.addEventListener("input", function() {
        conHeight = txt.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".gojira .inputbar").style.height = '10%';
            ibar[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".gojira .inputbar").style.height = '13%';
            document.querySelector(".gojira .inputbar .container").style.bottom = '18%';
            document.querySelector(".gojira .inputbar .attach").style.bottom = '18.5%';
            document.querySelector(".gojira .inputbar .record").style.bottom = '18.5%';
            document.querySelector(".gojira .inputbar .stopRecord").style.bottom = '18.5%';
            document.querySelector(".gojira .inputbar .send").style.bottom = '18.5%';
            ibar[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".gojira .inputbar").style.height = '16%';
            document.querySelector(".gojira .inputbar .container").style.bottom = '16%';
            document.querySelector(".gojira .inputbar .attach").style.bottom = '16.5%';
            document.querySelector(".gojira .inputbar .record").style.bottom = '16.5%';
            document.querySelector(".gojira .inputbar .stopRecord").style.bottom = '16.5%';
            document.querySelector(".gojira .inputbar .send").style.bottom = '16.5%';
            ibar[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".gojira .inputbar").style.height = '18%';
            document.querySelector(".gojira .inputbar .container").style.bottom = '14%';
            document.querySelector(".gojira .inputbar .attach").style.bottom = '14.5%';
            document.querySelector(".gojira .inputbar .record").style.bottom = '14.5%';
            document.querySelector(".gojira .inputbar .stopRecord").style.bottom = '14.5%';
            document.querySelector(".gojira .inputbar .send").style.bottom = '14.5%';
            ibar[0].style.height = '98%';
        }
    });
    //games
    var txt = document.querySelector('.gaming #w-input-text');
    var ibar = document.getElementsByClassName('g-content');
    txt.addEventListener("input", function() {
        conHeight = txt.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".gaming .inputbar").style.height = '10%';
            ibar[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".gaming .inputbar").style.height = '13%';
            document.querySelector(".gaming .inputbar .container").style.bottom = '18%';
            document.querySelector(".gaming .inputbar .attach").style.bottom = '18.5%';
            document.querySelector(".gaming .inputbar .record").style.bottom = '18.5%';
            document.querySelector(".gaming .inputbar .stopRecord").style.bottom = '18.5%';
            document.querySelector(".gaming .inputbar .send").style.bottom = '18.5%';
            ibar[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".gaming .inputbar").style.height = '16%';
            document.querySelector(".gaming .inputbar .container").style.bottom = '16%';
            document.querySelector(".gaming .inputbar .attach").style.bottom = '16.5%';
            document.querySelector(".gaming .inputbar .record").style.bottom = '16.5%';
            document.querySelector(".gaming .inputbar .stopRecord").style.bottom = '16.5%';
            document.querySelector(".gaming .inputbar .send").style.bottom = '16.5%';
            ibar[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".gaming .inputbar").style.height = '18%';
            document.querySelector(".gaming .inputbar .container").style.bottom = '14%';
            document.querySelector(".gaming .inputbar .attach").style.bottom = '14.5%';
            document.querySelector(".gaming .inputbar .record").style.bottom = '14.5%';
            document.querySelector(".gaming .inputbar .stopRecord").style.bottom = '14.5%';
            document.querySelector(".gaming .inputbar .send").style.bottom = '14.5%';
            ibar[0].style.height = '98%';
        }
    });
    //Movies
    var txt1 = document.querySelector('.movies #w-input-text');
    var ibar1 = document.getElementsByClassName('ms-content');
    txt1.addEventListener("input", function() {
        conHeight = txt1.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".movies .inputbar").style.height = '10%';
            ibar1[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".movies .inputbar").style.height = '13%';
            document.querySelector(".movies .inputbar .container").style.bottom = '18%';
            document.querySelector(".movies .inputbar .attach").style.bottom = '18.5%';
            document.querySelector(".movies .inputbar .record").style.bottom = '18.5%';
            document.querySelector(".movies .inputbar .stopRecord").style.bottom = '18.5%';
            document.querySelector(".movies .inputbar .send").style.bottom = '18.5%';
            ibar1[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".movies .inputbar").style.height = '16%';
            document.querySelector(".movies .inputbar .container").style.bottom = '16%';
            document.querySelector(".movies .inputbar .attach").style.bottom = '16.5%';
            document.querySelector(".movies .inputbar .record").style.bottom = '16.5%';
            document.querySelector(".movies .inputbar .stopRecord").style.bottom = '16.5%';
            document.querySelector(".movies .inputbar .send").style.bottom = '16.5%';
            ibar1[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".movies .inputbar").style.height = '18%';
            document.querySelector(".movies .inputbar .container").style.bottom = '14%';
            document.querySelector(".movies .inputbar .attach").style.bottom = '14.5%';
            document.querySelector(".movies .inputbar .record").style.bottom = '14.5%';
            document.querySelector(".movies .inputbar .stopRecord").style.bottom = '14.5%';
            document.querySelector(".movies .inputbar .send").style.bottom = '14.5%';
            ibar1[0].style.height = '98%';
        }
    });
    //Music
    var txt2 = document.querySelector('.music #w-input-text');
    var ibar2 = document.getElementsByClassName('m-content');
    txt2.addEventListener("input", function() {
        conHeight = txt2.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".music .inputbar").style.height = '10%';
            iba2r[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".music .inputbar").style.height = '13%';
            ibar2[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".music .inputbar").style.height = '16%';
            ibar2[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".music .inputbar").style.height = '18%';
            ibar2[0].style.height = '98%';
        }
    });
    //Appliances
    var txt3 = document.querySelector('.appliances #w-input-text');
    var ibar3 = document.getElementsByClassName('a-content');
    txt3.addEventListener("input", function() {
        conHeight = txt3.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".appliances .inputbar").style.height = '10%';
            ibar3[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".appliances .inputbar").style.height = '13%';
            ibar3[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".appliances .inputbar").style.height = '16%';
            ibar3[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".appliances .inputbar").style.height = '18%';
            ibar3[0].style.height = '98%';
        }
    });
    //Art
    var txt4 = document.querySelector('.art #w-input-text');
    var ibar4 = document.getElementsByClassName('ac-content');
    txt4.addEventListener("input", function() {
        conHeight = txt4.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".art .inputbar").style.height = '10%';
            ibar4[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".art .inputbar").style.height = '13%';
            ibar4[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".art .inputbar").style.height = '16%';
            ibar4[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".art .inputbar").style.height = '18%';
            ibar4[0].style.height = '98%';
        }
    });
    //Videos
    var txt5 = document.querySelector('.videos #w-input-text');
    var ibar5 = document.getElementsByClassName('v-content');
    txt5.addEventListener("input", function() {
        conHeight = txt5.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".videos .inputbar").style.height = '10%';
            ibar5[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".videos .inputbar").style.height = '13%';
            ibar5[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".videos .inputbar").style.height = '16%';
            ibar5[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".videos .inputbar").style.height = '18%';
            ibar5[0].style.height = '98%';
        }
    });
    //Others
    var txt6 = document.querySelector('.others #w-input-text');
    var ibar6 = document.getElementsByClassName('o-content');
    txt6.addEventListener("input", function() {
        conHeight = txt6.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".others .inputbar").style.height = '10%';
            ibar6[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".others .inputbar").style.height = '13%';
            ibar6[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".others .inputbar").style.height = '16%';
            ibar6[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".others .inputbar").style.height = '18%';
            ibar6[0].style.height = '98%';
        }
    });
    //Technology
    var txt7 = document.querySelector('.technology #w-input-text');
    var ibar7 = document.getElementsByClassName('tech-content');
    txt7.addEventListener("input", function() {
        conHeight = txt7.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".technology .inputbar").style.height = '10%';
            ibar7[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".technology .inputbar").style.height = '13%';
            ibar7[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".technology .inputbar").style.height = '16%';
            ibar7[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".technology .inputbar").style.height = '18%';
            ibar7[0].style.height = '98%';
        }
    });
    //DIY & Crafts
    var txt8 = document.querySelector('.diy-crafts #w-input-text');
    var ibar8 = document.getElementsByClassName('diy-crafts-content');
    txt8.addEventListener("input", function() {
        conHeight = txt8.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".diy-crafts .inputbar").style.height = '10%';
            ibar8[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".diy-crafts .inputbar").style.height = '13%';
            ibar8[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".diy-crafts .inputbar").style.height = '16%';
            ibar8[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".diy-crafts .inputbar").style.height = '18%';
            ibar8[0].style.height = '98%';
        }
    });
    //Fashion
    var txt9 = document.querySelector('.fashion #w-input-text');
    var ibar9 = document.getElementsByClassName('fashion-content');
    txt9.addEventListener("input", function() {
        conHeight = txt9.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".fashion .inputbar").style.height = '10%';
            ibar9[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".fashion .inputbar").style.height = '13%';
            ibar9[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".fashion .inputbar").style.height = '16%';
            ibar9[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".fashion .inputbar").style.height = '18%';
            ibar9[0].style.height = '98%';
        }
    });
    //Apps & Websites
    var txt10 = document.querySelector('.apps-websites #w-input-text');
    var ibar10 = document.getElementsByClassName('apps-websites-content');
    txt10.addEventListener("input", function() {
        conHeight = txt10.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".apps-websites .inputbar").style.height = '10%';
            ibar10[0].style.height = '98%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".apps-websites .inputbar").style.height = '13%';
            ibar10[0].style.height = '98%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".apps-websites .inputbar").style.height = '16%';
            ibar10[0].style.height = '98%';
        } else if (conHeight > '72') {
            document.querySelector(".apps-websites .inputbar").style.height = '18%';
            ibar10[0].style.height = '98%';
        }
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('.g-content').append('<img src="' + e.target.result + '" /></div>');
                $('#blah').attr('src', e.target.result);
                console.log(e.target.result);
            }
            reader.readAsDataURL(input.files[0]); // convert to base64 string
            //$('.g-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');
        }
    }

    $("#imgInp").change(function() {
        readURL(this);
    });
});