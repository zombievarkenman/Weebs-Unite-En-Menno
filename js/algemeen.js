function showEvenOfOneven(){
    let evenOfOnevenvalue = document.getElementById("EvenOfOneven").value;
    let antwoordEvenOfOneven = MathMate.evenOfOnevenUitrekenen(evenOfOnevenvalue);
    document.getElementById("antwoordEvenOfOneven").innerHTML = antwoordEvenOfOneven;
}

document.getElementById("antwoordEvenOfOnevenButton").addEventListener("click",showEvenOfOneven);

function showRestwaarden(){
    let antwoordRestwaarden = restwaardenBerekening();
    document.getElementById("antwoordRestwaarden").innerHTML = antwoordRestwaarden;
}

function restwaardenBerekening(){
    basisGetal = document.getElementById("RestwaardenBasisGetal").value;
    extraGetal = document.getElementById("RestwaardenExtraGetal").value;
    while(basisGetal >=0){
        basisGetal - extraGetal
    }
}

document.getElementById("antwoordRestwaardenButton").addEventListener("click",showRestwaarden);
// De gebruiker kan 2 getallen invoeren, het basis getalen het getal wat er iedere keer van af gehaald wordt, en als hij op de knop “Rest” klikt, dan moet derestwaardehiervan getoond worden.

//Optellen
function showOptellen(){
    let term1 = parseInt(document.getElementById("Optellen").value);
    let term2 = parseInt(document.getElementById("Optellen2").value);
    let somAntwoord = MathMate.optellenUitrekenen(term1, term2);
    document.getElementById("antwoordOptellen").innerHTML = somAntwoord;
}
document.getElementById("antwoordOptellenButton").addEventListener("click", showOptellen);

//Aftrekken
function showAftrekken(){
    let aftrekker1 = parseInt(document.getElementById("Aftrekken").value);
    let aftrekker2 = parseInt(document.getElementById("Aftrekken2").value);
    let aftrekkerAntwoord = MathMate.aftrekkenUitreken(aftrekker1, aftrekker2);
    document.getElementById("antwoordAftrekken").innerHTML = aftrekkerAntwoord;
}
document.getElementById("antwoordAftrekkenButton").addEventListener("click", showAftrekken);