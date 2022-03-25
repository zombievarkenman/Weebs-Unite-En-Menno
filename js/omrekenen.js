function showromanizer(){
    document.getElementById("antwoordromanizer").innerHTML = "";
    let getal = parseInt(document.getElementById("romanizer").value);
    antwoord = berekeningromanizer(getal);
    document.getElementById("antwoordromanizer").innerHTML = antwoord;
}
document.getElementById("antwoordromanizerbutton").addEventListener("click",showromanizer);

function berekeningromanizer(getal){
    let romanizer = "";
    while(getal >= 0){
        
    }
    return romanizer;
}