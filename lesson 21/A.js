class rectangle{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    square(){
      const s = this.a * this.b;
      return s;
    }
  }
  
  let rect = new rectangle(2, 3);
  console.log(rect.square())