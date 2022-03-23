// Kwadraten
function showKwadraat() {
    document.getElementById("antwoordKwadraten").innerHTML = "";
    let maximaleKwadraat = parseInt(document.getElementById("maximale-kwadraat").value);
    for(let grondtal = 0; grondtal <= maximaleKwadraat; grondtal ++){
        let macht = MathMate.kwadraatUitrekenen(grondtal);
        let berekeningKwadraat = grondtal + "^" + "2" + "=" + macht + "<br>";
        document.getElementById("antwoordKwadraten").innerHTML += berekeningKwadraat;
    }
}
document.getElementById("antwoordKwadratenButton").addEventListener("click", showKwadraat);


//machten
function showmachten(){
    document.getElementById("antwoordmachten").innerHTML = "";
    let maximaleGrondgetal = parseInt(document.getElementById("grondgetal").value);
    let maximaleExponent = parseInt(document.getElementById("exponent").value);
    for (let exponent = 0; exponent <= maximaleExponent; exponent++){
        let antwoordmachten = MathMate.machtenUitrekenen(maximaleGrondgetal,exponent);
        let berekening = maximaleGrondgetal + " ^ " + exponent + " = " + antwoordmachten;
        document.getElementById("antwoordmachten").innerHTML += berekening + "<br>";
    }
}

document.getElementById("antwoordmachtenbutton").addEventListener("click",showmachten);

//tafels
function showTafels(){
    document.getElementById("antwoordtafelsbutton").innerHTML = "";
    let tafelGetal1 = parseInt(document.getElementById("Tafels1").value);
    let tafelGetal2 = parseInt(document.getElementById("Tafels2").value);

}