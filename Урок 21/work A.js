class rectangle{
    constructor(a, b){
      this.a = a
      this.b = b
    }
    findArea(){
      const S = this.a * this.b
      return S
      }
  }
  let rectangle1 = new rectangle(8, 5);
  console.log(rectangle1.findArea())