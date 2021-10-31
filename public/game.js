
// console.log()
var gameHTMLCode = "";
const numberOfRows = 9;
const numberOfColumns = 9;
for(let indexJ = 1; indexJ <= numberOfRows; indexJ++){
    gameHTMLCode += "<div class='flex-container'>\n"
    for(let indexI = 1; indexI <= numberOfColumns; indexI++){
        gameHTMLCode += "   <input type='number' min='1' max='9' class='form-control "
        if(indexJ % 3 == 0 && indexI % 3 == 0 && indexI != 0){
            gameHTMLCode += "square-vertical square-horizontal";
        }
        else if(indexJ % 3 == 0){
            gameHTMLCode += "square-vertical";
        }
        else if(indexI % 3 == 0 && indexI != 0){
            gameHTMLCode += "square-horizontal";
        }
        gameHTMLCode += "' name='row" + indexJ + "col" + indexI + "'>\n";
    }
    gameHTMLCode += "</div>\n";
}
$("#game").html(gameHTMLCode);