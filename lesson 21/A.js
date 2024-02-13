class Pramoygolnik {
    a;
    b;
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
    
    Square() {
      const s = this.a * this.b;
      return s;
    }
  }

  
  const newS = new Pramoygolnik(2, 3);
  console.log(newS.Square());