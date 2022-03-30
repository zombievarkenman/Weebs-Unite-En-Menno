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
    let collatz2 = MathMate.collatzUitrekenen(collatz);
    document.getElementById("antwoordCollatzGetallen").innerHTML = collatz2;
    for(let getal = 0;  getal <= collatz, collatz2; getal ++){

    }
}
document.getElementById("antwoordCollatzGetallenButton").addEventListener("click", showCollatz);

function showFibonacci() {
    document.getElementById("antwoordFibonacciGetallen").innerHTML = "";
    let term1 = document.getElementById("fibonacciBegin").value;
    let term2 = MathMate.fibonacciUitrekenen(Fibonacci);
}
