$("#buttom-phrase").click(randomPhrase);

function randomPhrase() {
    $.get("http://localhost:3000/frases",changePhrase);
}

function changePhrase(data){
    var phrase = $(".phrase");
    var numberRandom = Math.floor(Math.random() * data.length);
    
    phrase.text(data[numberRandom].texto);
}