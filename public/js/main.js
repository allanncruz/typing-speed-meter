var StartTime = $("#typing-time").text();
var field = $(".typing-field");

$(function(){
    initializeCounters();
    updateSentenceSize();
    initializeTimer();
    initializesBookmarks();
    $("#start-button").click(restartGame);
});

function updateStartTime(tempo){
    initializeTimer = tempo;
    $("#typing-time").text(tempo);
}


function updateSentenceSize(){
    var phrase = $(".phrase").text();
    var numberWords = phrase.split(" ").length;
    var phraseSize = $("#phraseSize");
    phraseSize.text(numberWords);
}

function initializeCounters() {
    field.on("input", function(){   
        var content = field.val();
        var numberWords = content.split(/\S+/).length - 1;
        $("#counterWords").text(numberWords);
        console.log(content.length);
    
        var counterCharacters = content.length;
        $("#counterCharacters").text(counterCharacters);
    });
}

function initializeTimer(){
    field.one("focus", function(){
        var typingTime = $("#typing-time").text();
        var cronometroID =  setInterval(function(){
            typingTime--;
            $("#typing-time").text(typingTime);
            if (typingTime < 1) {
                clearInterval(cronometroID);
                endGame();
            }
        }, 1000)
    });
}

function endGame(){
    field.attr("disabled", true);
    field.toggleClass("fieldDisabled");
    insertScoreboard();
}


function initializesBookmarks() {
    field.on("input", function() {
        var phrase = $(".phrase").text();
        var typed = field.val();
        var comparable = phrase.substr(0 , typed.length);
        if(typed == comparable) {
            field.addClass("borda-verde");
            field.removeClass("borda-vermelha");
        } else {
            field.addClass("borda-vermelha");
            field.removeClass("borda-verde");
        }
    });
}

function restartGame(){
    field.attr("disabled", false);
    field.val("");
    $("#counterWords").text("0");
    $("#counterCharacters").text("0");
    $("#typing-time").text(StartTime);
    initializeTimer();
    field.toggleClass("fieldDisabled");

    field.removeClass("borda-vermelha");
    field.removeClass("borda-verde");
}

