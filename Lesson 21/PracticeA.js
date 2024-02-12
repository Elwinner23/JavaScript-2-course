class Rectangle
{
  #a;
  #b;
  constructor(a, b)
  {
    this.a = a;
    this.b = b;
  }
  
  findArea()
  {
    return (this.a * this.b)
  }
}

let Rect1 = new Rectangle(5, 34)
console.log(Rect1.findArea())