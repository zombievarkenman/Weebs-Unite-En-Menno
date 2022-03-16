Kwadraten
function showKwadraat() { 
    let machtValue = parseInt(document.getElementById("maximale-grondgetal").value);
}
document.getElementById("antwoordKwadratenButton").addEventListener("click",showKwadraat);


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

document.getElementById("antwoordMachtverheffenButton").addEventListener("click",showmachten);