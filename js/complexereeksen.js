//priemgetallen
function showPriemgetallen() {
    document.getElementById("antwoordPriemGetallen").innerHTML = "";
    let priemgetalmax = parseInt(document.getElementById("priemgetallenTot").value);
    for(let priemgetal = 2; priemgetal < priemgetalmax; priemgetal++){
        if(priemgetalberekenen(priemgetal)){
            document.getElementById("antwoordPriemGetallen").innerHTML += priemgetal + "<br>";
        }
    }

}
document.getElementById("antwoordPriemGetallenButton").addEventListener("click",showPriemgetallen);

function priemgetalberekenen(getal){
    for(let deler = 2; deler < getal; deler++){
        let restwaarde = getal % deler;
        if(restwaarde == 0){
            return false;
        }
    }
    return true;
}