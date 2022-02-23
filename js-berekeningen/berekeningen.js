const MathMate = {
    evenOfOnevenUitrekenen: function evenOfOnevenBerekening(evenOfOnevenvalue){
        let evenOfOneven = evenOfOnevenvalue % 2;
        if(evenOfOneven == 0){
            return "even";
        } else {
            return "oneven";
        }
    },

    restwaardenUitrekenen: function restwaardenBerekening(deeltalWaarden,delerWaarden){
        let restwaarden = deeltalWaarden % delerWaarden;
        return restwaarden;
    }
}