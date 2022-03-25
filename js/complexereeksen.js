function showPriemgetallen() {
    document.getElementById("antwoordPriemGetallen").innerHTML = "";
    priemgetallentot = parseInt(document.getElementById("priemgetallenTot").value);
    for(let i = 2; i < priemgetallentot / 2; i++){
        if (priemgetallentot % i == 0){
            document.getElementById("antwoordPriemGetallen").innerHTML += "Dit is geen priem getal!";
            break;
        } else {
            document.getElementById("antwoordPriemGetallen").innerHTML += "Dit is een priem getal!";
            break;
        }
    }
}
document.getElementById("antwoordPriemGetallenButton").addEventListener("click",showPriemgetallen);

// Collatz conjecture
function showCollatz() {
    document.getElementById("antwoordCollatzGetallen").innerHTML = "";
    let collatz = document.getElementById("collatzBegin").value;
    let collatz2 = MathMate.collatzUitrekenen(collatz);
    document.getElementById("antwoordCollatzGetallen").innerHTML = collatz2;
    for(let getal = 0;  getal <= collatz, collatz2; getal ++){
        let berekening = getal + "/" + collatz2 + "<br>";
    }
}
document.getElementById("antwoordCollatzGetallenButton").addEventListener("click", showCollatz);
