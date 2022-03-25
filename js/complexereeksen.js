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

<<<<<<< HEAD
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
=======
function priemgetalberekenen(getal){
    for(let deler = 2; deler < getal; deler++){
        let restwaarde = getal % deler;
        if(restwaarde == 0){
            return false;
        }
    }
    return true;
}
>>>>>>> 3b5521e7df0e7c9b50c2425ded539d33a080709a
