//priemgetallen
function showPriemgetallen() {
    document.getElementById("antwoordPriemGetallen").innerHTML = "";
    let priemgetalmax = parseInt(document.getElementById("priemgetallenTot").value);
    for(let getal = 2; getal < priemgetalmax; getal++){
        if(MathMate.priemUitrekenen(getal)){
            document.getElementById("antwoordPriemGetallen").innerHTML += getal + "<br>";
        }
    }

}
document.getElementById("antwoordPriemGetallenButton").addEventListener("click",showPriemgetallen);


// Collatz conjecture
function showCollatz() {
    document.getElementById("antwoordCollatzGetallen").innerHTML = "";
    let collatz = document.getElementById("collatzBegin").value;
    document.getElementById("antwoordCollatzGetallen").innerHTML += collatz + "<br>";
    while(collatz != 1){
        collatz = MathMate.collatzUitrekenen(collatz);
        document.getElementById("antwoordCollatzGetallen").innerHTML += collatz + "<br>";
    }
}
document.getElementById("antwoordCollatzGetallenButton").addEventListener("click", showCollatz);
// Fibonacci
function showFibonacci() {
    document.getElementById("antwoordFibonacciGetallen").innerHTML = "";
    // code
    let som = [0, 1]
    term1 = 0
    term2 = 1
    
    term1 + term2 = som
    term2 = som
    som = term1
}

//perfect number
function showPerfectNumber(){
    let getal = parseInt(document.getElementById("perfectNumberNumber").value);
    let delers = MathMate.perfectNumberuitrekenen(getal);
    let som = MathMate.perfectNumbersom(delers);
    if(som == getal){
        document.getElementById("antwoordPerfectNumber").innerHTML = delers.join("+") + " = " + som + "<br>" + "dit is een perfect getal";
    } else {
        document.getElementById("antwoordPerfectNumber").innerHTML = delers.join("+") + " = " + som + "<br>" + "dit is geen perfect getal";
    }
}
document.getElementById("antwoordPerfectNumberButton").addEventListener("click", showPerfectNumber);

document.getElementById("antwoordFibonacciGetallenButton").addEventListener("click", showFibonacci);

// Morsenizer
function showMorsenizer() {
    document.getElementById('morsenizerGetal').innerHTML = "";
    let woord = document.getElementById('morsenizerGetal').value;

    for(let index = 0; index < woord.length; index++) {
        let letter = woord.charAt(index);

        document.getElementById('antwoordMorsenizer').innerHTML += morseniz(letter) + " ";
    }
}
function morseniz(letter) {
    switch(letter) {
        case "A":
        case "a": 
            return ".-";

        case "B":
        case "b":
            return "-...";

        case "C":
        case "c": 
            return "-.-.";

        case "D":
        case "d":
            return "-..";

        case "E":
        case "e":
            return ".";

        case "F":
        case "f":
            return "..-.";

        case "G":
        case "g":
            return "--.";

        case "H": 
        case "h":
            return "....";

        case "I": 
        case "i":
            return "..";

        case "J": 
        case "j":
            return ".---";

        case "K": 
        case "k":
            return "-.-";

        case "L": 
        case "l":
            return ".-..";

        case "M": 
        case "m":
            return "--";

        case "N": 
        case "n":
            return "-.";

        case "O": 
        case "o":
            return "---";

        case "P": 
        case "p":
            return ".--.";

        case "Q": 
        case "q":
            return "--.-";

        case "R": 
        case "r":
            return ".-.";

        case "S": 
        case "s":
            return "...";

        case "T": 
        case "t":
            return "-";

        case "U": 
        case "u":
            return "..-";

        case "V": 
        case "v":
            return "...-";

        case "W": 
        case "w":
            return ".--";
    
        case "X": 
        case "x":
            return "-..-";

        case "Y": 
        case "y":
            return "-.--";

        case "Z": 
        case "z":
            return "--..";
        }
}
document.getElementById('antwoordMorsenizerButton').addEventListener('click', showMorsenizer);