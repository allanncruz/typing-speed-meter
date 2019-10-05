var StartTime = $("#typing-time").text();
var field = $(".typing-field");

$(function(){
    initializeCounters();
    updateSentenceSize();
    initializeTimer();
    initializesBookmarks();
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

    var phrase = $(".phrase").text();
    field.on("input", function() {
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

function insertScoreboard(){
    var bodyTable = $(".scoreboard").find("tbody");
    var user = "Allon"
    var numberWords = $("#counterWords").text();
    var line =  newLine(user,numberWords);
    line.find(".removebuttom").click(removeLine);
    
    bodyTable.prepend(line);
}

function newLine(user,words){
    var line        = $("<tr>");
    var columUser   = $("<td>").text(user);
    var columWords  = $("<td>").text(words);
    var columRemove = $("<td>");

    var link = $("<a>").addClass("removebuttom")
    var icon = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icon);
    columRemove.append(link);

    line.append(columUser);
    line.append(columWords);
    line.append(columRemove);

    return line;
}

function removeLine(){
    event.preventDefault();
    $(this).parent().parent().remove();
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

