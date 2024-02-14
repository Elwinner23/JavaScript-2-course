class Rectangle{
    constructor(a,b){
        this.a = a
        this.b = b
    }

    findArea(){
        let S = this.a*this.b
        return S
    }
}

let rect = new Rectangle(3, 6)
console.log(rect.findArea())