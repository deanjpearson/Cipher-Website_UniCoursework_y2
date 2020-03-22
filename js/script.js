// CAESARS ROT13 CIPHER //
function caesarsCipher() {
    var message = document.getElementById("caesarInput").value;
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var cypher_output = [];

    for (var i = 0; i < message.length; i++) {
        var messageText;
        messageText = alphabet.indexOf(message [i]);
        if (messageText === -1) {
            cypher_output.push(message [i]);
        }
        else {
            var coded = (messageText + 13) % 26;
            var letter = alphabet [coded];
            cypher_output.push(letter);
        }
        document.getElementById("caesarInput").value = cypher_output.join("");
    }
}

// MIRROR CIPHER JS //
function mirrorCipher() {
    var message = document.getElementById("mirrorInput").value;
    var splitIt = message.split("");
    var reverseIt = splitIt.reverse("");
    output = reverseIt.join("");

    document.getElementById("mirrorOutput").value = output;
}

// Atbash Cipher //
function atbashCipher(message) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var substitution = "zyxwvutsrqponmlkjihgfedcba";

    var newMessage = "";
    messageArr = message.split('');
    for(var i in messageArr) {
        index =  alphabet.indexOf(messageArr[i]);
        newMessage += substitution.charAt(index);
    }
    document.getElementById("atbashInput").value = newMessage;
}

//CHANGES THE FONT WEIGHT ON THE DESIGN PAGE WITH THE BUTTONS //
function lightText() {
    document.getElementById("demoAlphabet").style.fontWeight = "300";
}

function regText() {
    document.getElementById("demoAlphabet").style.fontWeight = "400";
}

function semiText() {
    document.getElementById("demoAlphabet").style.fontWeight = "500";
}

function boldText() {
    document.getElementById("demoAlphabet").style.fontWeight = "600";
}