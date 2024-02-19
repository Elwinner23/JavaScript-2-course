class Rectagle{
    constructor(a, b){
      this.a = a
      this.b = b
    }
    
    findArea(){
        const S = this.a * this.b
      return S.toFixed(2)
    }
  }
  
  let rectagle1 = new Rectagle(5,4)
  console.log(rectagle1.findArea())