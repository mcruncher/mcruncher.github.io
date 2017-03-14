/**
 * Created by michelleashwini on 13/03/2017.
 */
    var songTitle = document.getElementById('userInput');

    function printSong() {
        var input = songTitle.value;
        document.getElementById('output').value = "{y}" + input + "{/y}";
    }