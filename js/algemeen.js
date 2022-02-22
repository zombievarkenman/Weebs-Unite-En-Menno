function showEvenOfOneven(){
    alert(asdf);
    let antwoordEvenOfOneven = evenOfOnevenBerekening();
    document.getElementById("antwoordEvenOfOneven").innerHTML = antwoordEvenOfOneven;
}

function evenOfOnevenBerekening(){
    let evenOfOnevenvalue = document.getElementById("EvenOfOneven").value;
    let evenOfOneven = even % 10;
    let evenNummers = [0,2,4,6,8];
    let even = "dit getal is even";
    let oneven = "dit getal is oneven";
    if(evenOfOneven == evenNummers){
        return even;
    } else {
        return oneven;
    }
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