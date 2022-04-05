//Romanizer
function showromanizer(){
    document.getElementById("antwoordromanizer").innerHTML = "";
    let getal = parseInt(document.getElementById("romanizer").value);
    antwoord = berekeningromanizer(getal);
    document.getElementById("antwoordromanizer").innerHTML = antwoord;
}
document.getElementById("antwoordromanizerbutton").addEventListener("click",showromanizer);

function berekeningromanizer(getal){
    let romanizer = "";
    while(getal > 0){
        if(getal >= 1000){
            romanizer += "M";
            getal -= 1000;
        } else
        if(getal >= 900){
            romanizer += "CM";
            getal -= 900;
        } else
        if(getal >= 500){
            romanizer += "D";
            getal -= 500;
        } else
        if(getal >= 400){
            romanizer += "CD";
            getal -= 400;
        } else
        if(getal >= 100){
            romanizer += "C";
            getal -= 100;
        } else
        if(getal >= 90){
            romanizer += "XC";
            getal -= 90;
        } else
        if(getal >= 50){
            romanizer += "L";
            getal -= 50;
        } else
        if(getal >= 40){
            romanizer += "XL";
            getal -= 40;
        } else
        if(getal >= 10){
            romanizer += "X";
            getal -= 10;
        } else
        if(getal >= 9){
            romanizer += "IX";
            getal -= 9;
        } else
        if(getal >= 5){
            romanizer += "V";
            getal -= 5;
        }else
        if(getal >= 4){
            romanizer += "IV";
            getal -= 4;
        }else
        if(getal >= 1){
            romanizer += "I";
            getal -= 1;
        }
    }
    return romanizer;
}

//Factorizer
function showFactorizer() {
    document.getElementById("antwoordFactorizer").innerHTML = "";
    let getal = parseInt(document.getElementById("factorizer").value);
    let antwoord = berekeningFactorizer(getal);
    document.getElementById("antwoordFactorizer").innerHTML = antwoord;
}
document.getElementById("antwoordFactorizerButton").addEventListener("click", showFactorizer);

function berekeningFactorizer(getal){
    let factoren = [];
    while(getal > 1){
        for(let deler = 2; deler <= getal; deler++){
            if(MathMate.priemUitrekenen(deler) && getal % deler == 0){
                factoren.push(deler);
                getal = getal / deler;
            }
        }
    }
    return factoren.join(" * ");
}