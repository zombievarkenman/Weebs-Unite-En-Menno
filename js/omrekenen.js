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
        // if(getal >= 9000){
        //     romanizer += ;
        //     getal -= 9000;
        // }
        // if(getal >= 5000){
        //     romanizer += ;
        //     getal -= 5000;
        // }
        // if(getal >= 4000){
        //     romanizer += "";
        //     getal -= 4000;
        // }
        if(getal >= 1000){
            romanizer += "M";
            getal -= 1000;
        }
        if(getal >= 900){
            romanizer += "CM";
            getal -= 900;
        }
        if(getal >= 500){
            romanizer += "D";
            getal -= 500;
        }
        if(getal >= 400){
            romanizer += "CD";
            getal -= 400;
        }
        if(getal >= 100){
            romanizer += "C";
            getal -= 100;
        }
        if(getal >= 90){
            romanizer += "XC";
            getal -= 90;
        }
        if(getal >= 50){
            romanizer += "L";
            getal -= 50;
        }
        if(getal >= 40){
            romanizer += "XL";
            getal -= 40;
        }
        if(getal >= 10){
            romanizer += "X" ;
            getal -= 10;
        }
        if(getal >= 9){
            romanizer += "IX" ;
            getal -= 9;
        }
        if(getal >= 5){
            romanizer += "V";
            getal -= 5;
        }
        if(getal >= 4){
            romanizer += "IV";
            getal -= 4;
        }
        if(getal >= 1){
            romanizer += "I";
            getal -= 1;
        }
    }
    return romanizer;
}