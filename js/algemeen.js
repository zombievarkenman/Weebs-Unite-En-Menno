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