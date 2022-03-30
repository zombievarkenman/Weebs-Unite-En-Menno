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

//tafels
function showTafels(){
    document.getElementById("antwoordtafels").innerHTML = "";
    let maximaleVermenigvuldiger = parseInt(document.getElementById("vermenigvuldiger").value);
    let vermenigvuldigtal = parseInt(document.getElementById("vermenigvuldigtal").value);

    for (let vermenigvuldiger = 1; vermenigvuldiger <= maximaleVermenigvuldiger; vermenigvuldiger++){
        let antwoordTafels = MathMate.tafelsUitrekenen(vermenigvuldiger, vermenigvuldigtal);
        let berekeningTafels = vermenigvuldiger + " x "  + vermenigvuldigtal + " = " + antwoordTafels + "<br>";
        document.getElementById("antwoordtafels").innerHTML += berekeningTafels; 
    }

}
document.getElementById("antwoordtafelsbutton").addEventListener("click",showTafels);

//breuken
function showBreuken(){
    document.getElementById("antwoordbreuken").innerHTML = "";
    let maxbreuk = parseInt(document.getElementById("breuk").value);

    for(let breuk = 1; breuk <= maxbreuk; breuk++){
        let antwoordBreuken = MathMate.breukenUitrekenen(breuk);
         let berekeningTafels = 1 + " / " + breuk + " = " + antwoordBreuken + "<br>";
        document.getElementById("antwoordbreuken").innerHTML += berekeningTafels;
    }
}
document.getElementById("antwoordbreukenbutton").addEventListener("click",showBreuken);