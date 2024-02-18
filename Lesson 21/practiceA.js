class Rectangle {
  width;
  height;
  square;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.square = width * height;
  }
}

let rec1 = new Rectangle(10, 15);
console.log(rec1.square);
