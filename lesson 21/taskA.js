class rectangle {
    a;
    b;
    constructor(a,b) {
    this.a = a;
    this.b = b;
}

Square() {
    let s = this.a * this.b;
    return s;
}
    }

const s1 = new rectangle(2,5);
console.log(s1.Square());