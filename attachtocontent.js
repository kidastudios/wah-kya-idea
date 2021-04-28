/*var pic_file = document.getElementById("gaming");
var custom_picfile = document.getElementById("custom-picfile");
custom_picfile.addEventListener("click", function() {
    pic_file.click();
});*/
function addImage(id) {
    var pic_file = document.getElementById(id);
    pic_file.click();
    $('#' + id).change(function() {
        readURL(this, id);
        this.value = "";
    });
}

function readURL(input, id) {
    //console.log(input);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        //console.log("DMX");
        reader.onload = function(e) {
            if (id == 'gaming') {
                $('.g-content').append('<div class=imgDiv><img src="' + e.target.result + '" id="myImg" onclick="onClick(this)" ></img></div>');
                $('.g-content').stop().animate({ scrollTop: $('.g-content')[0].scrollHeight }, 1000);
            } else if (id == 'movies') {
                $('.ms-content').append('<div class=imgDiv><img src="' + e.target.result + '" id="myImg" onclick="onClick(this)" ></img></div>');
                $('.ms-content').stop().animate({ scrollTop: $('.ms-content')[0].scrollHeight }, 1000);
            } else if (id == 'music') {
                $('.m-content').append('<div class=imgDiv><img src="' + e.target.result + '" id="myImg" onclick="onClick(this)" ></img></div>');
                $('.m-content').stop().animate({ scrollTop: $('.m-content')[0].scrollHeight }, 1000);
            } else if (id == 'appliances') {
                $('.a-content').append('<div class=imgDiv><img src="' + e.target.result + '" id="myImg" onclick="onClick(this)" ></img></div>');
                $('.a-content').stop().animate({ scrollTop: $('.a-content')[0].scrollHeight }, 1000);
            } else if (id == 'art') {
                $('.ac-content').append('<div class=imgDiv><img src="' + e.target.result + '" id="myImg" onclick="onClick(this)" ></img></div>');
                $('.ac-content').stop().animate({ scrollTop: $('.ac-content')[0].scrollHeight }, 1000);
            } else if (id == 'videos') {
                $('.v-content').append('<div class=imgDiv><img src="' + e.target.result + '" id="myImg" onclick="onClick(this)" ></img></div>');
                $('.v-content').stop().animate({ scrollTop: $('.v-content')[0].scrollHeight }, 1000);
            } else if (id == 'others') {
                $('.o-content').append('<div class=imgDiv><img src="' + e.target.result + '" id="myImg" onclick="onClick(this)" ></img></div>');
                $('.o-content').stop().animate({ scrollTop: $('.o-content')[0].scrollHeight }, 1000);
            } else if (id == 'technology') {
                $('.tech-content').append('<div class=imgDiv><img src="' + e.target.result + '" id="myImg" onclick="onClick(this)" ></img></div>');
                $('.tech-content').stop().animate({ scrollTop: $('.tech-content')[0].scrollHeight }, 1000);
            } else if (id == 'diy-crafts') {
                $('.diy-crafts-content').append('<div class=imgDiv><img src="' + e.target.result + '" id="myImg" onclick="onClick(this)" ></img></div>');
                $('.diy-crafts-content').stop().animate({ scrollTop: $('.diy-crafts-content')[0].scrollHeight }, 1000);
            } else if (id == 'fashion') {
                $('.fashion-content').append('<div class=imgDiv><img src="' + e.target.result + '" id="myImg" onclick="onClick(this)" ></img></div>');
                $('.fashion-content').stop().animate({ scrollTop: $('.fashion-content')[0].scrollHeight }, 1000);
            } else if (id == 'apps-websites') {
                $('.apps-websites-content').append('<div class=imgDiv><img src="' + e.target.result + '" id="myImg" onclick="onClick(this)" ></img></div>');
                $('.apps-websites-content').stop().animate({ scrollTop: $('.apps-websites-content')[0].scrollHeight }, 1000);
            }
            //$('#blah').attr('src', e.target.result);
            //console.log(e.target.result);
        }
        reader.readAsDataURL(input.files[0]); // convert to base64 string
        //$('.g-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');
    }
}

function returnFileSize(number) {
    if (number < 1024) {
        return number + ' b';
    } else if (number >= 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + ' KB';
    } else if (number >= 1048576) {
        return (number / 1048576).toFixed(1) + ' MB';
    }
}
/*var real_file = document.getElementById("real-file");
var custom_file = document.getElementById("custom-file");
var custom_text = document.getElementById("custom-text");

custom_file.addEventListener("click", function() {
    real_file.click();
});*/
function addDoc(id) {
    var real_file = document.getElementById(id);
    real_file.click();
    real_file.addEventListener("change", function() {
        if (real_file.value) {

            var fs = returnFileSize(real_file.files[0].size);
            var fn = real_file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
            if (id == 'gaming-file') {
                $('.g-content').append('<div class=docDiv><i class="bi bi-file-earmark-text"></i><div><p class=filename>' + fn + "</p><p class=filesize>" + fs + '</p></div></div>');
                $('.g-content').stop().animate({ scrollTop: $('.g-content')[0].scrollHeight }, 1000);
            } else if (id == 'movies-file') {
                $('.ms-content').append('<div class=docDiv><i class="bi bi-file-earmark-text"></i><div><p class=filename>' + fn + "</p><p class=filesize>" + fs + '</p></div></div>');
                $('.ms-content').stop().animate({ scrollTop: $('.ms-content')[0].scrollHeight }, 1000);
            } else if (id == 'music-file') {
                $('.m-content').append('<div class=docDiv><i class="bi bi-file-earmark-text"></i><div><p class=filename>' + fn + "</p><p class=filesize>" + fs + '</p></div></div>');
                $('.m-content').stop().animate({ scrollTop: $('.m-content')[0].scrollHeight }, 1000);
            } else if (id == 'appliances-file') {
                $('.a-content').append('<div class=docDiv><i class="bi bi-file-earmark-text"></i><div><p class=filename>' + fn + "</p><p class=filesize>" + fs + '</p></div></div>');
                $('.a-content').stop().animate({ scrollTop: $('.a-content')[0].scrollHeight }, 1000);
            } else if (id == 'art-file') {
                $('.ac-content').append('<div class=docDiv><i class="bi bi-file-earmark-text"></i><div><p class=filename>' + fn + "</p><p class=filesize>" + fs + '</p></div></div>');
                $('.ac-content').stop().animate({ scrollTop: $('.ac-content')[0].scrollHeight }, 1000);
            } else if (id == 'videos-file') {
                $('.v-content').append('<div class=docDiv><i class="bi bi-file-earmark-text"></i><div><p class=filename>' + fn + "</p><p class=filesize>" + fs + '</p></div></div>');
                $('.v-content').stop().animate({ scrollTop: $('.v-content')[0].scrollHeight }, 1000);
            } else if (id == 'others-file') {
                $('.o-content').append('<div class=docDiv><i class="bi bi-file-earmark-text"></i><div><p class=filename>' + fn + "</p><p class=filesize>" + fs + '</p></div></div>');
                $('.o-content').stop().animate({ scrollTop: $('.o-content')[0].scrollHeight }, 1000);
            } else if (id == 'technology-file') {
                $('.tech-content').append('<div class=docDiv><i class="bi bi-file-earmark-text"></i><div><p class=filename>' + fn + "</p><p class=filesize>" + fs + '</p></div></div>');
                $('.tech-content').stop().animate({ scrollTop: $('.tech-content')[0].scrollHeight }, 1000);
            } else if (id == 'diy-crafts-file') {
                $('.diy-crafts-content').append('<div class=docDiv><i class="bi bi-file-earmark-text"></i><div><p class=filename>' + fn + "</p><p class=filesize>" + fs + '</p></div></div>');
                $('.diy-crafts-content').stop().animate({ scrollTop: $('.diy-crafts-content')[0].scrollHeight }, 1000);
            } else if (id == 'fashion-file') {
                $('.fashion-content').append('<div class=docDiv><i class="bi bi-file-earmark-text"></i><div><p class=filename>' + fn + "</p><p class=filesize>" + fs + '</p></div></div>');
                $('.fashion-content').stop().animate({ scrollTop: $('.fashion-content')[0].scrollHeight }, 1000);
            } else if (id == 'apps-websites-file') {
                $('.apps-websites-content').append('<div class=docDiv><i class="bi bi-file-earmark-text"></i><div><p class=filename>' + fn + "</p><p class=filesize>" + fs + '</p></div></div>');
                $('.apps-websites-content').stop().animate({ scrollTop: $('.apps-websites-content')[0].scrollHeight }, 1000);
            }
            fn = "";
            fs = "";
        }
        real_file.value = "";
    });
}
var bank=999;
function addRec(blob, tag) {
    if (tag == 'g') {
        $('.g-content').append('<div class=recDiv><div class="ready-player-'+ bank +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(blob) + '" type="audio/mpeg" ></audio></div></div>');
        $('.g-content').stop().animate({ scrollTop: $('.g-content')[0].scrollHeight }, 1000);
    } else if (tag == 'ms') {
        $('.ms-content').append('<div class=recDiv><div class="ready-player-'+ bank +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(blob) + '" type="audio/mpeg" ></audio></div></div>');
        $('.ms-content').stop().animate({ scrollTop: $('.ms-content')[0].scrollHeight }, 1000);
    } else if (tag == 'm') {
        $('.m-content').append('<div class=recDiv><div class="ready-player-'+ bank +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(blob) + '" type="audio/mpeg" ></audio></div></div>');
        $('.m-content').stop().animate({ scrollTop: $('.m-content')[0].scrollHeight }, 1000);
    } else if (tag == 'a') {
        $('.a-content').append('<div class=recDiv><div class="ready-player-'+ bank +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(blob) + '" type="audio/mpeg" ></audio></div></div>');
        $('.a-content').stop().animate({ scrollTop: $('.a-content')[0].scrollHeight }, 1000);
    } else if (tag == 'ac') {
        $('.ac-content').append('<div class=recDiv><div class="ready-player-'+ bank +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(blob) + '" type="audio/mpeg" ></audio></div></div>');
        $('.ac-content').stop().animate({ scrollTop: $('.ac-content')[0].scrollHeight }, 1000);
    } else if (tag == 'v') {
        $('.v-content').append('<div class=recDiv><div class="ready-player-'+ bank +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(blob) + '" type="audio/mpeg" ></audio></div></div>');
        $('.v-content').stop().animate({ scrollTop: $('.v-content')[0].scrollHeight }, 1000);
    } else if (tag == 'o') {
        $('.o-content').append('<div class=recDiv><div class="ready-player-'+ bank +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(blob) + '" type="audio/mpeg" ></audio></div></div>');
        $('.o-content').stop().animate({ scrollTop: $('.o-content')[0].scrollHeight }, 1000);
    } else if (tag == 'technology') {
        $('.tech-content').append('<div class=recDiv<div class="ready-player-'+ bank +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(blob) + '" type="audio/mpeg" ></audio></div></div>');
        $('.tech-content').stop().animate({ scrollTop: $('.tech-content')[0].scrollHeight }, 1000);
    } else if (tag == 'diy-crafts') {
        $('.diy-crafts-content').append('<div class=recDiv><div class="ready-player-'+ bank +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(blob) + '" type="audio/mpeg" ></audio></div></div>');
        $('.diy-crafts-content').stop().animate({ scrollTop: $('.diy-crafts-content')[0].scrollHeight }, 1000);
    } else if (tag == 'fashion') {
        $('.fashion-content').append('<div class=recDiv><div class="ready-player-'+ bank +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(blob) + '" type="audio/mpeg" ></audio></div></div>');
        $('.fashion-content').stop().animate({ scrollTop: $('.fashion-content')[0].scrollHeight }, 1000);
    } else if (tag == 'apps-websites') {
        $('.apps-websites-content').append('<div class=recDiv><div class="ready-player-'+ bank +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(blob) + '" type="audio/mpeg" ></audio></div></div>');
        $('.apps-websites-content').stop().animate({ scrollTop: $('.apps-websites-content')[0].scrollHeight }, 1000);
    }
    temp = '.ready-player-'+bank;
    new GreenAudioPlayer(temp,{
        stopOthersOnPlay: true,
        showDownloadButton: true
    });
    bank++;
}
var rand=1;
function addAudio(tag) {
    id = tag + "-audio";
    content = "." + tag + "-content";
    document.getElementById(id).click();
    document.getElementById(id).addEventListener("change", handleFiles, false);
//    rand = 1;
    function handleFiles(event) {
        //var files = event.target.files;
        if (this.value) {
            $(content).append('<div class=audDiv><div class="ready-player-'+ rand +' green-audio-player" ><audio crossorigin><source src="' + URL.createObjectURL(this.files[0]) + '" type="audio/mpeg" ></audio></div></div>');
            $(content).stop().animate({ scrollTop: $(content)[0].scrollHeight }, 1000);
            //new GreenAudioPlayer('.ready-player-'+rand);
            viboo = '.ready-player-'+rand;
            new GreenAudioPlayer(viboo,{
                stopOthersOnPlay: true,
                showDownloadButton: true
            });
            //    $("#src").attr("src", URL.createObjectURL(this.files[0]));
            //    document.getElementById("audio").load();
            rand++;
        }
        this.value = "";
    }
}

function addVideo(tag) {
    id = tag + "-video";
    content = "." + tag + "-content";
    document.getElementById(id).click();
    document.getElementById(id).addEventListener("change", handleFiles, false);

    function handleFiles(event) {
        //var files = event.target.files;
        vid = URL.createObjectURL(this.files[0]);
        fn = this.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        if (this.value) {
            $(content).append('<div class=vidDiv><div class=vidheader onclick=playVideo("' + vid + '") ><i class="bi bi-play-circle-fill"></i><p>Video</p></div><p class=vidname >' + fn + '</p></div>');
            //$(content).append('<div class=recDiv><video src="' + URL.createObjectURL(this.files[0]) + '" controls ></video></div>');
            $(content).stop().animate({ scrollTop: $(content)[0].scrollHeight }, 1000);
            //    $("#src").attr("src", URL.createObjectURL(this.files[0]));
            //    document.getElementById("audio").load();
            vid = "";
            fn = "";
        }
        this.value = "";
    }
}

function playVideo(vid) {
    var modal = document.getElementById("myModal");
    document.getElementById("img01").style.display = "none";
    var modalVid = document.getElementById("vid01");
    modal.style.display = "flex";
    modalVid.style.display = "block";
    modalVid.src = vid;
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        modalVid.style.display = "none";
        modalVid.src = "";
        document.getElementById("img01").style.display = "block";
    }
}
/*$("#pic-file").change(function() {
  readURL(this);
});*/
