// Add your Circle class here
class circle{
    #pi = 3.14
    constructor(radius){
        this.radius = radius
    }
    set pi (pi){
        this.#pi = pi
    }
    get area(){
        console.log (this.#pi * this.radius * this.radius)
    }
}

const num = new circle(7)
num.area