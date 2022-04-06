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

function showFibonacci() {
    document.getElementById("antwoordFibonacciGetallen").innerHTML = "";
    let term1 = document.getElementById("fibonacciBegin").value;
    let term2 = MathMate.fibonacciUitrekenen(Fibonacci);
}
