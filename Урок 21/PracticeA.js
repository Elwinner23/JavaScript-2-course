class Rectangle {
    constructor(a,b)
    {
        this.a = a;
        this.b = b;
    }
    findArea(){
        const S = a*b;
        return S;
    }
}

let rectangle1 = new Rectangle(5, 6);
let rectangle2 = new Rectangle(70, 2);
console.log(rectangle1.findArea());
console.log(rectangle2.findArea());