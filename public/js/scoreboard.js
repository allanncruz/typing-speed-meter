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