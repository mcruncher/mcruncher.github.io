/**
 * @author Michelle Ashwini
 */
var lyrics = document.getElementById('userInput');

function generateSongWithTags() {
    var input = lyrics.value;
    var lines = input.split('\n');
    var title = document.getElementById('songTitle').value;
    var altTitle = document.getElementById('altSongTitle').value;
    var generate = "<title>" + title + "</title>" + '\n' + "<title>" + altTitle + "</title>" + '\n';
    var generatedText = generate + "";
    for(var i = 0;i < lines.length; i++){
        var verseNumber = lines[i].match(/^\d+/);
        if (verseNumber != null) {
            generatedText = generatedText + "---[Verse:" + verseNumber + "]---" + '\n';
        }
        if( lines[i].match(/[A-z]|[0-9]{2}/) != null || ! /\S/.test(lines[i])){
            generatedText = generatedText + lines[i] + "<br/>" + '\n';
        }else{
            generatedText = generatedText + "<tag name=\"y\">" + lines[i] + "</tag><br/>" +  '\n';
        }
    }
    document.getElementById('output').value = generatedText;
}

function clearText() {
    document.getElementById('userInput').value = "";
    document.getElementById('output').value = "";
}
