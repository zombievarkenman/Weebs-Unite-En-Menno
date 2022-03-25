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
    let collatz = document.getElementById("collatzTot").value;
    if(collatz % 2 == 0){
        let collatzEven = collatz;
    } else {
        let collatzOneven = collatz;
    }
}
document.getElementById("antwoordCollatzGetallenButton").addEventListener("click", showCollatz);
