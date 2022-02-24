//even of oneven
function showEvenOfOneven(){
    let evenofonevenWaarden = document.getElementById("EvenOfOneven").value;
    let antwoordEvenOfOneven = MathMate.evenOfOnevenUitrekenen(evenofonevenWaarden);
    document.getElementById("antwoordEvenOfOneven").innerHTML = antwoordEvenOfOneven;
}
document.getElementById("antwoordEvenOfOnevenButton").addEventListener("click",showEvenOfOneven);

//restwaarden
function showRestwaarden(){
    let deeltalWaarden = parseInt(document.getElementById("RestwaardenDeeltal").value);
    let delerWaarden = parseInt(document.getElementById("RestwaardenDeler").value);
    let restwaardenAntwoord = MathMate.restwaardenUitrekenen(deeltalWaarden,delerWaarden);
    document.getElementById("antwoordRestwaarden").innerHTML = restwaardenAntwoord;
}
document.getElementById("antwoordRestwaardenButton").addEventListener("click",showRestwaarden);

//Optellen
function showOptellen(){
    let term1 = parseInt(document.getElementById("Optellen").value);
    let term2 = parseInt(document.getElementById("Optellen2").value);
    let somAntwoord = MathMate.optellenUitrekenen(term1, term2);
    document.getElementById("antwoordOptellen").innerHTML = somAntwoord;
}
document.getElementById("antwoordOptellenButton").addEventListener("click", showOptellen);

//machtsverheffen
document.getElementById("antwoordRestwaardenButton").addEventListener("click",showRestwaarden);
// De gebruiker kan 2 getallen invoeren, het basis getalen het getal wat er iedere keer van af gehaald wordt, en als hij op de knop “Rest” klikt, dan moet derestwaardehiervan getoond worden.

document.getElementById("antwoordMachtverheffenButton").addEventListener("click",showMachtsverheffen);
//Aftrekken
function showAftrekken(){
    let aftrekker1 = parseInt(document.getElementById("Aftrekken").value);
    let aftrekker2 = parseInt(document.getElementById("Aftrekken2").value);
    let aftrekkerAntwoord = MathMate.aftrekkenUitreken(aftrekker1, aftrekker2);
    document.getElementById("antwoordAftrekken").innerHTML = aftrekkerAntwoord;
}
document.getElementById("antwoordAftrekkenButton").addEventListener("click", showAftrekken);

//Vermenigvuldigen
function showVermenigvuldigen(){
    let vermenigvuldiger1 = parseInt(document.getElementById("Vermedigdvuldigen1").value);
    let vermenigvuldiger2 = parseInt(document.getElementById("Vermedigdvuldigen2").value);
    let vermenigvuldigerAntwoord = MathMate.vermenigvuldigenUitreken(vermenigvuldiger1, vermenigvuldiger2);
    document.getElementById("antwoordVermedigdvuldigen").innerHTML = vermenigvuldigerAntwoord;
}
document.getElementById("antwoordVermedigdvuldigenButton").addEventListener("click", showVermenigvuldigen);

//machtsverheffen berekeningen
function showMachtsverheffen(){
    let grondtal = document.getElementById("grondtal").value;
    let exponent = document.getElementById("exponent").value;
    let antwoordMachtsverheffen = MathMate.machtsverheffenUitrekenen(grondtal,exponent);
    document.getElementById("antwoordMachtverheffen").innerHTML = antwoordMachtsverheffen;
}



document.getElementById("antwoordMachtverheffenButton").addEventListener("click",showMachtsverheffen);
//Aftrekken
function showAftrekken(){
    let aftrekker1 = parseInt(document.getElementById("Aftrekken").value);
    let aftrekker2 = parseInt(document.getElementById("Aftrekken2").value);
    let aftrekkerAntwoord = MathMate.aftrekkenUitreken(aftrekker1, aftrekker2);
    document.getElementById("antwoordAftrekken").innerHTML = aftrekkerAntwoord;
}
document.getElementById("antwoordAftrekkenButton").addEventListener("click", showAftrekken);
//percentage
function showPercentage() {
    let basisGetalvalue = parseInt(document.getElementById("basisGetal").value);
    let PercentageGetalvalue = parseInt(document.getElementById("PercentageGetal").value);
    let PercentageAntwoord = MathMate.percentageUitrekenen(basisGetalvalue,PercentageGetalvalue);
    document.getElementById("antwoordPercentage").innerHTML = PercentageAntwoord;
}

document.getElementById("antwoordPercentageButton").addEventListener("click",showPercentage);
