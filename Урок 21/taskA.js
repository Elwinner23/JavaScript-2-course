class Rectangle{
  constructor(a,b){
    this.a = a
    this.b = b
  }
  findArea(){
    let S = this.a * this.b
    return S
  }
}
let rectangle1 = new Rectangle(5, 8)
console.log(rectangle1.findArea())