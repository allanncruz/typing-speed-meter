var StartTime = $("#typing-time").text();
var field = $(".typing-field");

$(function(){
    initializeCounters();
    updateSentenceSize();
    initializeTimer();
    $("#start-button").click(restartGame);
});

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
    var typingTime = $("#typing-time").text();
    field.one("focus", function(){
        var cronometroID =  setInterval(function(){
            typingTime--;
            $("#typing-time").text(typingTime);
            if (typingTime < 1) {
                field.attr("disabled", true);
                clearInterval(cronometroID);
            }
        }, 1000)
    });
}

function restartGame(){
    field.attr("disabled", false);
    field.val("");
    $("#counterWords").text("0");
    $("#counterCharacters").text("0");
    $("#typing-time").text(StartTime);
    initializeTimer();
}

