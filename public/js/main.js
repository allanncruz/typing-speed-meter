var phrase = $(".phrase").text();
var numberWords = phrase.split(" ").length;
var phraseSize = $("#phraseSize");

phraseSize.text(numberWords);
