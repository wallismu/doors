console.log("js loaded");


$(document).ready(function() {
    generate();

    $(".button").click(function() {
        generate();
        startAudio();
    });
})

function generate() {
    $.getJSON("js/options.json", function(data, generate){
        $(".field").each(function() {
            populate(this, data[$(this).attr("id")]);
        });
    }).fail(function(){
        console.log("An error has occurred.");
    });

    genRandomBackground();
}


function populate(div, list) {
    // div.text(list[getRandomInt(list.length)]);
    $(div).text(list[getRandomInt(list.length)]);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
    // https://css-tricks.com/snippets/javascript/random-hex-color/
    return Math.floor(Math.random()*16777215).toString(16);
}

function genRandomBackground() {
    let c1 = getRandomColor();
    let c2 = getRandomColor();
    $('html').css('background', '-webkit-gradient(linear,left top,left bottom,from(#' + c1 + '),to(#' + c2 + '))');
}

function startAudio() {
    audios = ["beach","city","farm","rain","scifi","space","wind","windchimes"];
    i = getRandomInt(audios.length);
    // $("#player").src("audios/" + audios[i] + ".ogg");
    $("#player").attr("src", "audio/" + audios[i] + ".ogg");
    $("#player").trigger('play');
}