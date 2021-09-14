class MyMath {
    constructor() {
      // instance
      //this.sum = (a, b) => a + b
    }
    
    // instance
    //mult = (a, b) => a * b
    sum = function (a, b) { return a + b }

    test = 123
    
    // prototype

    mult (a, b) { return a * b}
    
    devide() {

    }
}

const myConst = 'test'

module.exports.mymath = MyMath
module.exports.constant = myConst
