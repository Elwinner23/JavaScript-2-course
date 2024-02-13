class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const rectangle1 = new Rectangle(2, 3);

console.log('Площадь прямоугольника равна:', rectangle1.calculateArea());


