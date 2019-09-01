 var phrase = $(".phrase").text();
 var numberWords = phrase.split(" ").length;
 var phraseSize = $("#phraseSize");

phraseSize.text(numberWords);

var field = $(".typing-field");
field.on("input", function(){
    var content = field.val();

    var numberWords = content.split(/\S+/).length - 1;
    $("#counterWords").text(numberWords);
    console.log(content.length);

    var counterCharacters = content.length;
    $("#counterCharacters").text(counterCharacters);
});


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