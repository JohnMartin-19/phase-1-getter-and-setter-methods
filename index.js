// Add your Circle class here
class circle{
    #pi
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