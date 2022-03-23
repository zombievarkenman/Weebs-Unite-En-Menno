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

function priemgetalberekenen(getal){
    for(let deler = 2; deler < getal; deler++){
        let restwaarde = getal % deler;
        if(restwaarde == 0){
            return false;
        }
    }
    return true;
}