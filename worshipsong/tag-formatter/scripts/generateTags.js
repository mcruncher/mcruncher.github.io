/**
 * @author Michelle Ashwini
 */
var lyrics = document.getElementById('userInput');

function generateSongWithTags() {
    var input = lyrics.value;
    var lines = input.split('\n');
    var generatedText ="";
    for(var i = 0;i < lines.length; i++){
        var verseNumber = lines[i].match(/^[1-9]/);
        if (verseNumber != null) {
            generatedText = generatedText + "---Verse" + verseNumber + "---" + '\n';
        }
        if( lines[i].match(/[A-z]|[0-9]{2}/) != null || ! /\S/.test(lines[i])){
            generatedText = generatedText + lines[i] + '\n';
        }else{
            generatedText = generatedText + "{y}" + lines[i] + "{/y}" + '\n';
        }
    }
    document.getElementById('output').value = generatedText;
}
