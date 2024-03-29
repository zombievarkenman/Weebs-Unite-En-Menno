// Even of oneven
function showEvenOfOneven(){
    let evenofonevenWaarden = document.getElementById("EvenOfOneven").value;
    let antwoordEvenOfOneven = MathMate.evenOfOnevenUitrekenen(evenofonevenWaarden);
    document.getElementById("antwoordEvenOfOneven").innerHTML = antwoordEvenOfOneven;
}
document.getElementById("antwoordEvenOfOnevenButton").addEventListener("click",showEvenOfOneven);

// Restwaarden
function showRestwaarden(){
    let deeltalWaarden = parseInt(document.getElementById("RestwaardenDeeltal").value);
    let delerWaarden = parseInt(document.getElementById("RestwaardenDeler").value);
    let restwaardenAntwoord = MathMate.restwaardenUitrekenen(deeltalWaarden,delerWaarden);
    document.getElementById("antwoordRestwaarden").innerHTML = restwaardenAntwoord;
}
document.getElementById("antwoordRestwaardenButton").addEventListener("click",showRestwaarden);

// Optellen
function showOptellen(){
    let term1 = parseInt(document.getElementById("Optellen").value);
    let term2 = parseInt(document.getElementById("Optellen2").value);
    let somAntwoord = MathMate.optellenUitrekenen(term1, term2);
    document.getElementById("antwoordOptellen").innerHTML = somAntwoord;
}
document.getElementById("antwoordOptellenButton").addEventListener("click", showOptellen);

// Aftrekken
function showAftrekken(){
    let aftrekker1 = parseInt(document.getElementById("Aftrekken").value);
    let aftrekker2 = parseInt(document.getElementById("Aftrekken2").value);
    let aftrekkerAntwoord = MathMate.aftrekkenUitreken(aftrekker1, aftrekker2);
    document.getElementById("antwoordAftrekken").innerHTML = aftrekkerAntwoord;
}
document.getElementById("antwoordAftrekkenButton").addEventListener("click", showAftrekken);

// Vermenigvuldigen
function showVermenigvuldigen(){
    let vermenigvuldiger1 = parseInt(document.getElementById("Vermedigdvuldigen1").value);
    let vermenigvuldiger2 = parseInt(document.getElementById("Vermedigdvuldigen2").value);
    let vermenigvuldigerAntwoord = MathMate.vermenigvuldigenUitreken(vermenigvuldiger1, vermenigvuldiger2);
    document.getElementById("antwoordVermedigdvuldigen").innerHTML = vermenigvuldigerAntwoord;
}
document.getElementById("antwoordVermedigdvuldigenButton").addEventListener("click", showVermenigvuldigen);

// Machtsverheffen
function showMachtsverheffen(){
    let grondtal = parseInt(document.getElementById("grondtal").value);
    let exponent = parseInt(document.getElementById("exponent").value);
    let antwoordMachtsverheffen = MathMate.machtsverheffenUitrekenen(grondtal,exponent);
    document.getElementById("antwoordMachtverheffen").innerHTML = antwoordMachtsverheffen;
}
document.getElementById("antwoordMachtverheffen").addEventListener("click",showMachtsverheffen);

// Percentage
function showPercentage() {
    let basisGetalvalue = parseInt(document.getElementById("basisGetal").value);
    let PercentageGetalvalue = parseInt(document.getElementById("PercentageGetal").value);
    let PercentageAntwoord = MathMate.percentageUitrekenen(basisGetalvalue,PercentageGetalvalue);
    document.getElementById("antwoordPercentage").innerHTML = PercentageAntwoord;
}
document.getElementById("antwoordPercentageButton").addEventListener("click",showPercentage);

// menu voor reken operatoren
function optellenMenuSwitch() {
    document.getElementById("optellenarticle").style.display = "block";
    document.getElementById("aftrekkenarticle").style.display = "none";
    document.getElementById("vermedigdvuldigenarticle").style.display = "none";
    document.getElementById("delenarticle").style.display = "none";
    document.getElementById("machtsverheffenarticle").style.display = "none";
    document.getElementById("percentagearticle").style.display = "none";
    document.getElementById("restwaardenarticle").style.display = "none";
    document.getElementById("evenofonevenarticle").style.display = "none";
}
document.getElementById("optellenMenu").addEventListener("click",optellenMenuSwitch);

function aftrekkenMenuSwitch() {
    document.getElementById("optellenarticle").style.display = "none";
    document.getElementById("aftrekkenarticle").style.display = "block";
    document.getElementById("vermedigdvuldigenarticle").style.display = "none";
    document.getElementById("delenarticle").style.display = "none";
    document.getElementById("machtsverheffenarticle").style.display = "none";
    document.getElementById("percentagearticle").style.display = "none";
    document.getElementById("restwaardenarticle").style.display = "none";
    document.getElementById("evenofonevenarticle").style.display = "none";
}
document.getElementById("aftrekkenMenu").addEventListener("click",aftrekkenMenuSwitch);

function vermedigdvuldigenMenuSwitch() {
    document.getElementById("optellenarticle").style.display = "none";
    document.getElementById("aftrekkenarticle").style.display = "none";
    document.getElementById("vermedigdvuldigenarticle").style.display = "block";
    document.getElementById("delenarticle").style.display = "none";
    document.getElementById("machtsverheffenarticle").style.display = "none";
    document.getElementById("percentagearticle").style.display = "none";
    document.getElementById("restwaardenarticle").style.display = "none";
    document.getElementById("evenofonevenarticle").style.display = "none";
}
document.getElementById("vermedigdvuldigenMenu").addEventListener("click",vermedigdvuldigenMenuSwitch);

function delenMenuSwitch() {
    document.getElementById("optellenarticle").style.display = "none";
    document.getElementById("aftrekkenarticle").style.display = "none";
    document.getElementById("vermedigdvuldigenarticle").style.display = "none";
    document.getElementById("delenarticle").style.display = "block";
    document.getElementById("machtsverheffenarticle").style.display = "none";
    document.getElementById("percentagearticle").style.display = "none";
    document.getElementById("restwaardenarticle").style.display = "none";
    document.getElementById("evenofonevenarticle").style.display = "none";
}
document.getElementById("delenMenu").addEventListener("click",delenMenuSwitch);

function machtsverheffenMenuSwitch() {
    document.getElementById("optellenarticle").style.display = "none";
    document.getElementById("aftrekkenarticle").style.display = "none";
    document.getElementById("vermedigdvuldigenarticle").style.display = "none";
    document.getElementById("delenarticle").style.display = "none";
    document.getElementById("machtsverheffenarticle").style.display = "block";
    document.getElementById("percentagearticle").style.display = "none";
    document.getElementById("restwaardenarticle").style.display = "none";
    document.getElementById("evenofonevenarticle").style.display = "none";
}
document.getElementById("machtsverheffenMenu").addEventListener("click",machtsverheffenMenuSwitch);

function percentageMenuSwitch() {
    document.getElementById("optellenarticle").style.display = "none";
    document.getElementById("aftrekkenarticle").style.display = "none";
    document.getElementById("vermedigdvuldigenarticle").style.display = "none";
    document.getElementById("delenarticle").style.display = "none";
    document.getElementById("machtsverheffenarticle").style.display = "none";
    document.getElementById("percentagearticle").style.display = "block";
    document.getElementById("restwaardenarticle").style.display = "none";
    document.getElementById("evenofonevenarticle").style.display = "none";
}
document.getElementById("percentageMenu").addEventListener("click",percentageMenuSwitch);

function restwaardenMenuSwitch() {
    document.getElementById("optellenarticle").style.display = "none";
    document.getElementById("aftrekkenarticle").style.display = "none";
    document.getElementById("vermedigdvuldigenarticle").style.display = "none";
    document.getElementById("delenarticle").style.display = "none";
    document.getElementById("machtsverheffenarticle").style.display = "none";
    document.getElementById("percentagearticle").style.display = "none";
    document.getElementById("restwaardenarticle").style.display = "block";
    document.getElementById("evenofonevenarticle").style.display = "none";
}
document.getElementById("restwaardenMenu").addEventListener("click",restwaardenMenuSwitch);

function evenofonevenMenuSwitch() {
    document.getElementById("optellenarticle").style.display = "none";
    document.getElementById("aftrekkenarticle").style.display = "none";
    document.getElementById("vermedigdvuldigenarticle").style.display = "none";
    document.getElementById("delenarticle").style.display = "none";
    document.getElementById("machtsverheffenarticle").style.display = "none";
    document.getElementById("percentagearticle").style.display = "none";
    document.getElementById("restwaardenarticle").style.display = "none";
    document.getElementById("evenofonevenarticle").style.display = "block";
}
document.getElementById("evenofonevenMenu").addEventListener("click",evenofonevenMenuSwitch);