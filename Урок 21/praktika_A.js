class Rectangle{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    square(){
        return this.a * this.b
    }
}

let a = new Rectangle(5, 9)
console.log(a.square())