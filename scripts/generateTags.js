/**
 * Created by michelleashwini on 13/03/2017.
 */
    var lyrics = document.getElementById('userInput');

    function printSong() {
        var input = lyrics.value;
        var lines = input.split('\n');
        var generatedText ="";
        for(var i = 0;i < lines.length; i++){
            if(lines[i].match(/[A-z]/) != null | lines[i].match(/[0-9]{2}/) != null) {
                generatedText = generatedText + lines[i] + '\n';
            }else{
                generatedText = generatedText + "{y}" + lines[i] + "{/y}" + '\n';
            }

        }
        document.getElementById('output').value = generatedText;
    }
