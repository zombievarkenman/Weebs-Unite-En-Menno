const MathMate = {

    evenOfOnevenUitrekenen: function evenOfOnevenBerekening(evenOfOnevenvalue){
        let evenOfOneven = evenOfOnevenvalue % 2;
        if(evenOfOneven == 0){
            return "even";
        } else {
            return "oneven";
        }
    },

    optellenUitrekenen: function somBerekening(term1, term2){
        let antwoordSom = term1 + term2;
        return antwoordSom;
    },

    aftrekkenUitreken: function aftrekkerBerekening(aftrekker1, aftrekker2){
        let antwoordAftrekker = aftrekker1 - aftrekker2;
        return antwoordAftrekker;
    },
    
    restwaardenUitrekenen: function restwaardenBerekening(deeltalWaarden,delerWaarden){
        let restwaarden = deeltalWaarden % delerWaarden;
        return restwaarden;
    },

    machtsverheffenUitrekenen: function machtsverheffenBerekening(grondtal,exponent){ 
        let machtsverheffenAntwoord = grondtal **= exponent;
        return machtsverheffenAntwoord;
    },

    vermenigvuldigenUitreken: function vermenigvuldigenBerekening(vermenigvuldiger1, vermenigvuldiger2){
        let antwoordVermenigvuldiger = vermenigvuldiger1 * vermenigvuldiger2;
        return antwoordVermenigvuldiger;
    },

    percentageUitrekenen: function percentageBerekening(basisGetalvalue,PercentageGetalvalue) {
        let basisgetal1Procent = basisGetalvalue / 100;
        let antwoordPercentage = basisgetal1Procent * PercentageGetalvalue;
        return antwoordPercentage;
    },

    delenUitrekenen: function delenBerekening(deeltal, deler){
        let antwoordQuotiënt = deeltal / deler;
        return antwoordQuotiënt;
    },

    machtUitrekenen: function machtBerekening(machtValue){
        let antwoordMacht = machtValue **2;
        return antwoordMacht;
    },

    machtenUitrekenen: function machtenberekening(maximaleGrondgetal,exponent){
        let berekening = maximaleGrondgetal ** exponent;
        return berekening;
    },
    kwadraatUitrekenen: function kwadraatBerekening(grondtal){
        let antwoordKwadraat = grondtal ** 2;
        return antwoordKwadraat;
    },
    collatzUitrekenen: function collatzBerekening(getal){

        if(getal % 2 == 0){
            return getal / 2;
        } else {
            return getal * 3 + 1;
        }
    },
}