class Rectangle {
	constructor(width, height) {
	this.width = width;
	this.height = height;
	}

	calculateArea() {
		return this.width * this.height;
	}
}

const rectangle = new Rectangle(5, 10);
const s = rectangle.calculateArea();
console.log(s);