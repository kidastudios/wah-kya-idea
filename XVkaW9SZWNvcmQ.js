$(document).ready(function() {
    //Gojira
    var txt = document.querySelector('.gojira #w-input-text');
    var ibar = document.getElementsByClassName('gojira-content');
    txt.addEventListener("input", function() {
        conHeight = txt.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".gojira .inputbar").style.height = '10%';
            ibar[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".gojira .inputbar").style.height = '13%';
            document.querySelector(".gojira .inputbar .container").style.bottom = '0%';
            document.querySelector(".gojira .inputbar .attach").style.bottom = '25%';
            document.querySelector(".gojira .inputbar .record").style.bottom = '25%';
            document.querySelector(".gojira .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".gojira .inputbar .send").style.bottom = '25%';
            ibar[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".gojira .inputbar").style.height = '16%';
            document.querySelector(".gojira .inputbar .container").style.bottom = '0%';
            document.querySelector(".gojira .inputbar .attach").style.bottom = '25%';
            document.querySelector(".gojira .inputbar .record").style.bottom = '25%';
            document.querySelector(".gojira .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".gojira .inputbar .send").style.bottom = '25%';
            ibar[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".gojira .inputbar").style.height = '18%';
            document.querySelector(".gojira .inputbar .container").style.bottom = '0%';
            document.querySelector(".gojira .inputbar .attach").style.bottom = '25%';
            document.querySelector(".gojira .inputbar .record").style.bottom = '25%';
            document.querySelector(".gojira .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".gojira .inputbar .send").style.bottom = '25%';
            ibar[0].style.height = '90%';
        }
    });
    //games
    var txt = document.querySelector('.gaming #w-input-text');
    var ibar = document.getElementsByClassName('g-content');
    txt.addEventListener("input", function() {
        conHeight = txt.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".gaming .inputbar").style.height = '10%';
            ibar[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".gaming .inputbar").style.height = '13%';
            document.querySelector(".gaming .inputbar .container").style.bottom = '0%';
            document.querySelector(".gaming .inputbar .attach").style.bottom = '25%';
            document.querySelector(".gaming .inputbar .record").style.bottom = '25%';
            document.querySelector(".gaming .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".gaming .inputbar .send").style.bottom = '25%';
            ibar[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".gaming .inputbar").style.height = '16%';
            document.querySelector(".gaming .inputbar .container").style.bottom = '0%';
            document.querySelector(".gaming .inputbar .attach").style.bottom = '25%';
            document.querySelector(".gaming .inputbar .record").style.bottom = '25%';
            document.querySelector(".gaming .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".gaming .inputbar .send").style.bottom = '25%';
            ibar[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".gaming .inputbar").style.height = '18%';
            document.querySelector(".gaming .inputbar .container").style.bottom = '0%';
            document.querySelector(".gaming .inputbar .attach").style.bottom = '25%';
            document.querySelector(".gaming .inputbar .record").style.bottom = '25%';
            document.querySelector(".gaming .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".gaming .inputbar .send").style.bottom = '25%';
            ibar[0].style.height = '90%';
        }
    });
    //Movies
    var txt1 = document.querySelector('.movies #w-input-text');
    var ibar1 = document.getElementsByClassName('ms-content');
    txt1.addEventListener("input", function() {
        conHeight = txt1.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".movies .inputbar").style.height = '10%';
            ibar1[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".movies .inputbar").style.height = '13%';
            document.querySelector(".movies .inputbar .container").style.bottom = '0%';
            document.querySelector(".movies .inputbar .attach").style.bottom = '25%';
            document.querySelector(".movies .inputbar .record").style.bottom = '25%';
            document.querySelector(".movies .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".movies .inputbar .send").style.bottom = '25%';
            ibar1[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".movies .inputbar").style.height = '16%';
            document.querySelector(".movies .inputbar .container").style.bottom = '0%';
            document.querySelector(".movies .inputbar .attach").style.bottom = '25%';
            document.querySelector(".movies .inputbar .record").style.bottom = '25%';
            document.querySelector(".movies .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".movies .inputbar .send").style.bottom = '25%';
            ibar1[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".movies .inputbar").style.height = '18%';
            document.querySelector(".movies .inputbar .container").style.bottom = '0%';
            document.querySelector(".movies .inputbar .attach").style.bottom = '25%';
            document.querySelector(".movies .inputbar .record").style.bottom = '25%';
            document.querySelector(".movies .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".movies .inputbar .send").style.bottom = '25%';
            ibar1[0].style.height = '90%';
        }
    });
    //Music
    var txt2 = document.querySelector('.music #w-input-text');
    var ibar2 = document.getElementsByClassName('m-content');
    txt2.addEventListener("input", function() {
        conHeight = txt2.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".music .inputbar").style.height = '10%';
            iba2r[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".music .inputbar").style.height = '13%';
            document.querySelector(".music .inputbar .container").style.bottom = '0%';
            document.querySelector(".music .inputbar .attach").style.bottom = '25%';
            document.querySelector(".music .inputbar .record").style.bottom = '25%';
            document.querySelector(".music .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".music .inputbar .send").style.bottom = '25%';
            ibar2[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".music .inputbar").style.height = '16%';
            document.querySelector(".music .inputbar .container").style.bottom = '0%';
            document.querySelector(".music .inputbar .attach").style.bottom = '25%';
            document.querySelector(".music .inputbar .record").style.bottom = '25%';
            document.querySelector(".music .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".music .inputbar .send").style.bottom = '25%';
            ibar2[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".music .inputbar").style.height = '18%';
            document.querySelector(".music .inputbar .container").style.bottom = '0%';
            document.querySelector(".music .inputbar .attach").style.bottom = '25%';
            document.querySelector(".music .inputbar .record").style.bottom = '25%';
            document.querySelector(".music .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".music .inputbar .send").style.bottom = '25%';
            ibar2[0].style.height = '90%';
        }
    });
    //Appliances
    var txt3 = document.querySelector('.appliances #w-input-text');
    var ibar3 = document.getElementsByClassName('a-content');
    txt3.addEventListener("input", function() {
        conHeight = txt3.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".appliances .inputbar").style.height = '10%';
            ibar3[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".appliances .inputbar").style.height = '13%';
            document.querySelector(".appliances .inputbar .container").style.bottom = '0%';
            document.querySelector(".appliances .inputbar .attach").style.bottom = '25%';
            document.querySelector(".appliances .inputbar .record").style.bottom = '25%';
            document.querySelector(".appliances .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".appliances .inputbar .send").style.bottom = '25%';
            ibar3[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".appliances .inputbar").style.height = '16%';
            document.querySelector(".appliances .inputbar .container").style.bottom = '0%';
            document.querySelector(".appliances .inputbar .attach").style.bottom = '25%';
            document.querySelector(".appliances .inputbar .record").style.bottom = '25%';
            document.querySelector(".appliances .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".appliances .inputbar .send").style.bottom = '25%';
            ibar3[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".appliances .inputbar").style.height = '18%';
            document.querySelector(".appliances .inputbar .container").style.bottom = '0%';
            document.querySelector(".appliances .inputbar .attach").style.bottom = '25%';
            document.querySelector(".appliances .inputbar .record").style.bottom = '25%';
            document.querySelector(".appliances .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".movies .inputbar .send").style.bottom = '25%';
            ibar3[0].style.height = '90%';
        }
    });
    //Art
    var txt4 = document.querySelector('.art #w-input-text');
    var ibar4 = document.getElementsByClassName('ac-content');
    txt4.addEventListener("input", function() {
        conHeight = txt4.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".art .inputbar").style.height = '10%';
            ibar4[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".art .inputbar").style.height = '13%';
            document.querySelector(".art .inputbar .container").style.bottom = '0%';
            document.querySelector(".art .inputbar .attach").style.bottom = '25%';
            document.querySelector(".art .inputbar .record").style.bottom = '25%';
            document.querySelector(".art .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".art .inputbar .send").style.bottom = '25%';
            ibar4[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".art .inputbar").style.height = '16%';
            document.querySelector(".art .inputbar .container").style.bottom = '0%';
            document.querySelector(".art .inputbar .attach").style.bottom = '25%';
            document.querySelector(".art .inputbar .record").style.bottom = '25%';
            document.querySelector(".art .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".art .inputbar .send").style.bottom = '25%';
            ibar4[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".art .inputbar").style.height = '18%';
            document.querySelector(".art .inputbar .container").style.bottom = '0%';
            document.querySelector(".art .inputbar .attach").style.bottom = '25%';
            document.querySelector(".art .inputbar .record").style.bottom = '25%';
            document.querySelector(".art .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".art .inputbar .send").style.bottom = '25%';
            ibar4[0].style.height = '90%';
        }
    });
    //Videos
    var txt5 = document.querySelector('.videos #w-input-text');
    var ibar5 = document.getElementsByClassName('v-content');
    txt5.addEventListener("input", function() {
        conHeight = txt5.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".videos .inputbar").style.height = '10%';
            ibar5[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".videos .inputbar").style.height = '13%';
            document.querySelector(".videos .inputbar .container").style.bottom = '0%';
            document.querySelector(".videos .inputbar .attach").style.bottom = '25%';
            document.querySelector(".videos .inputbar .record").style.bottom = '25%';
            document.querySelector(".videos .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".videos .inputbar .send").style.bottom = '25%';
            ibar5[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".videos .inputbar").style.height = '16%';
            document.querySelector(".videos .inputbar .container").style.bottom = '0%';
            document.querySelector(".videos .inputbar .attach").style.bottom = '25%';
            document.querySelector(".videos .inputbar .record").style.bottom = '25%';
            document.querySelector(".videos .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".videos .inputbar .send").style.bottom = '25%';
            ibar5[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".videos .inputbar").style.height = '18%';
            document.querySelector(".videos .inputbar .container").style.bottom = '0%';
            document.querySelector(".videos .inputbar .attach").style.bottom = '25%';
            document.querySelector(".videos .inputbar .record").style.bottom = '25%';
            document.querySelector(".videos .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".videos .inputbar .send").style.bottom = '25%';
            ibar5[0].style.height = '90%';
        }
    });
    //Others
    var txt6 = document.querySelector('.others #w-input-text');
    var ibar6 = document.getElementsByClassName('o-content');
    txt6.addEventListener("input", function() {
        conHeight = txt6.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".others .inputbar").style.height = '10%';
            ibar6[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".others .inputbar").style.height = '13%';
            document.querySelector(".others .inputbar .container").style.bottom = '0%';
            document.querySelector(".others .inputbar .attach").style.bottom = '25%';
            document.querySelector(".others .inputbar .record").style.bottom = '25%';
            document.querySelector(".others .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".others .inputbar .send").style.bottom = '25%';
            ibar6[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".others .inputbar").style.height = '16%';
            document.querySelector(".others .inputbar .container").style.bottom = '0%';
            document.querySelector(".others .inputbar .attach").style.bottom = '25%';
            document.querySelector(".others .inputbar .record").style.bottom = '25%';
            document.querySelector(".others .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".others .inputbar .send").style.bottom = '25%';
            ibar6[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".others .inputbar").style.height = '18%';
            document.querySelector(".others .inputbar .container").style.bottom = '0%';
            document.querySelector(".others .inputbar .attach").style.bottom = '25%';
            document.querySelector(".others .inputbar .record").style.bottom = '25%';
            document.querySelector(".others .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".others .inputbar .send").style.bottom = '25%';
            ibar6[0].style.height = '90%';
        }
    });
    //Technology
    var txt7 = document.querySelector('.technology #w-input-text');
    var ibar7 = document.getElementsByClassName('tech-content');
    txt7.addEventListener("input", function() {
        conHeight = txt7.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".technology .inputbar").style.height = '10%';
            ibar7[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".technology .inputbar").style.height = '13%';
            document.querySelector(".technology .inputbar .container").style.bottom = '0%';
            document.querySelector(".technology .inputbar .attach").style.bottom = '25%';
            document.querySelector(".technology .inputbar .record").style.bottom = '25%';
            document.querySelector(".technology .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".technology .inputbar .send").style.bottom = '25%';
            ibar7[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".technology .inputbar").style.height = '16%';
            document.querySelector(".technology .inputbar .container").style.bottom = '0%';
            document.querySelector(".technology .inputbar .attach").style.bottom = '25%';
            document.querySelector(".technology .inputbar .record").style.bottom = '25%';
            document.querySelector(".technology .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".technology .inputbar .send").style.bottom = '25%';
            ibar7[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".technology .inputbar").style.height = '18%';
            document.querySelector(".technology .inputbar .container").style.bottom = '0%';
            document.querySelector(".technology .inputbar .attach").style.bottom = '25%';
            document.querySelector(".technology .inputbar .record").style.bottom = '25%';
            document.querySelector(".technology .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".technology .inputbar .send").style.bottom = '25%';
            ibar7[0].style.height = '90%';
        }
    });
    //DIY & Crafts
    var txt8 = document.querySelector('.diy-crafts #w-input-text');
    var ibar8 = document.getElementsByClassName('diy-crafts-content');
    txt8.addEventListener("input", function() {
        conHeight = txt8.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".diy-crafts .inputbar").style.height = '10%';
            ibar8[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".diy-crafts .inputbar").style.height = '13%';
            document.querySelector(".diy-crafts .inputbar .container").style.bottom = '0%';
            document.querySelector(".diy-crafts .inputbar .attach").style.bottom = '25%';
            document.querySelector(".diy-crafts .inputbar .record").style.bottom = '25%';
            document.querySelector(".diy-crafts .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".diy-crafts .inputbar .send").style.bottom = '25%';
            ibar8[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".diy-crafts .inputbar").style.height = '16%';
            document.querySelector(".diy-crafts .inputbar .container").style.bottom = '0%';
            document.querySelector(".diy-crafts .inputbar .attach").style.bottom = '25%';
            document.querySelector(".diy-crafts .inputbar .record").style.bottom = '25%';
            document.querySelector(".diy-crafts .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".diy-crafts .inputbar .send").style.bottom = '25%';
            ibar8[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".diy-crafts .inputbar").style.height = '18%';
            document.querySelector(".diy-crafts .inputbar .container").style.bottom = '0%';
            document.querySelector(".diy-crafts .inputbar .attach").style.bottom = '25%';
            document.querySelector(".diy-crafts .inputbar .record").style.bottom = '25%';
            document.querySelector(".diy-crafts .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".diy-crafts .inputbar .send").style.bottom = '25%';
            ibar8[0].style.height = '90%';
        }
    });
    //Fashion
    var txt9 = document.querySelector('.fashion #w-input-text');
    var ibar9 = document.getElementsByClassName('fashion-content');
    txt9.addEventListener("input", function() {
        conHeight = txt9.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".fashion .inputbar").style.height = '10%';
            ibar9[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".fashion .inputbar").style.height = '13%';
            document.querySelector(".fashion .inputbar .container").style.bottom = '0%';
            document.querySelector(".fashion .inputbar .attach").style.bottom = '25%';
            document.querySelector(".fashion .inputbar .record").style.bottom = '25%';
            document.querySelector(".fashion .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".fashion .inputbar .send").style.bottom = '25%';
            ibar9[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".fashion .inputbar").style.height = '16%';
            document.querySelector(".fashion .inputbar .container").style.bottom = '0%';
            document.querySelector(".fashion .inputbar .attach").style.bottom = '25%';
            document.querySelector(".fashion .inputbar .record").style.bottom = '25%';
            document.querySelector(".fashion .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".fashion .inputbar .send").style.bottom = '25%';
            ibar9[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".fashion .inputbar").style.height = '0%';
            document.querySelector(".fashion .inputbar .container").style.bottom = '0%';
            document.querySelector(".fashion .inputbar .attach").style.bottom = '25%';
            document.querySelector(".fashion .inputbar .record").style.bottom = '25%';
            document.querySelector(".fashion .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".fashion .inputbar .send").style.bottom = '25%';
            ibar9[0].style.height = '90%';
        }
    });
    //Apps & Websites
    var txt10 = document.querySelector('.apps-websites #w-input-text');
    var ibar10 = document.getElementsByClassName('apps-websites-content');
    txt10.addEventListener("input", function() {
        conHeight = txt10.offsetHeight;
        if (conHeight <= '24' || conHeight == '27') {
            document.querySelector(".apps-websites .inputbar").style.height = '10%';
            ibar10[0].style.height = '90%';
        } else if (conHeight > '24' && conHeight <= '48' || conHeight == '54') {
            document.querySelector(".apps-websites .inputbar").style.height = '13%';
            document.querySelector(".apps-websites .inputbar .container").style.bottom = '0%';
            document.querySelector(".apps-websites .inputbar .attach").style.bottom = '25%';
            document.querySelector(".apps-websites .inputbar .record").style.bottom = '25%';
            document.querySelector(".apps-websites .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".apps-websites .inputbar .send").style.bottom = '25%';
            ibar10[0].style.height = '90%';
        } else if (conHeight > '48' && conHeight <= '72') {
            document.querySelector(".apps-websites .inputbar").style.height = '16%';
            document.querySelector(".apps-websites .inputbar .container").style.bottom = '0%';
            document.querySelector(".apps-websites .inputbar .attach").style.bottom = '25%';
            document.querySelector(".apps-websites .inputbar .record").style.bottom = '25%';
            document.querySelector(".apps-websites .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".apps-websites .inputbar .send").style.bottom = '25%';
            ibar10[0].style.height = '90%';
        } else if (conHeight > '72') {
            document.querySelector(".apps-websites .inputbar").style.height = '0%';
            document.querySelector(".apps-websites .inputbar .container").style.bottom = '0%';
            document.querySelector(".apps-websites .inputbar .attach").style.bottom = '25%';
            document.querySelector(".apps-websites .inputbar .record").style.bottom = '25%';
            document.querySelector(".apps-websites .inputbar .stopRecord").style.bottom = '25%';
            document.querySelector(".apps-websites .inputbar .send").style.bottom = '25%';
            ibar10[0].style.height = '90%';
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