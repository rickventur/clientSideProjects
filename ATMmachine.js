function validatePIN(pin) {
    if(pin.length == 4 || pin.length == 6){
        console.log(pin)
    } 
    if(pin.isNaN){
        console.log(pin)
    }
}

validatePIN('3481')