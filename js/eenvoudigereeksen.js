// Kwadraten
function showKwadraat() {
    document.getElementById("antwoordKwadraten").innerHTML = "";
    let maximaleKwadraat = parseInt(document.getElementById("maximale-kwadraat").value);
    for(let kwadraat = 0; kwadraat <= maximaleKwadraat; kwadraat ++){
        let antwoordKwadraat = kwadraat ** 2;
        let berekeningKwadraat = kwadraat + "^" + "2" + "=" + antwoordKwadraat + "<br>";
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