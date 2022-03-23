function showromanizer(){
    let een = parseInt(document.getElementById("romanizer").value) % 10;
    let tien = (parseInt(document.getElementById("romanizer").value) / 10) % 10;
    let honderd = (parseInt(document.getElementById("romanizer").value) / 100) % 10;
    let duizend = (parseInt(document.getElementById("romanizer").value) / 1000) % 10;
    antwoord = berekeningromanizer(een, tien, honderd, duizend);
    document.getElementById("antwoordromanizer").innerHTML = antwoord;
}

function berekeningromanizer(een, tien, honderd, duizend){
    if(een == 4){
        return "IV";
    }
}