$("#buttom-phrase").click(randomPhrase);

function randomPhrase() {
    $.get("http://localhost:3000/frases",changePhrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },1500);
    });
}

function changePhrase(data){
    var phrase = $(".phrase");
    var numberRandom = Math.floor(Math.random() * data.length);

    phrase.text(data[numberRandom].texto);
    updateSentenceSize();
    updateStartTime(data[numberRandom].tempo);
}
