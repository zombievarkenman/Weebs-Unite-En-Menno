//priemgetallen
function showPriemgetallen() {
    document.getElementById("antwoordPriemGetallen").innerHTML = "";
    let priemgetalmax = parseInt(document.getElementById("priemgetallenTot").value);
    for(let getal = 2; getal < priemgetalmax; getal++){
        if(priemgetalberekenen(getal)){
            document.getElementById("antwoordPriemGetallen").innerHTML += priemgetal + "<br>";
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
