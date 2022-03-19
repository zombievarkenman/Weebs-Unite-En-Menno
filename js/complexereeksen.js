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