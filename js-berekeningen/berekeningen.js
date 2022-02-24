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
    }
}