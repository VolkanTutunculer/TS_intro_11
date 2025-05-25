"use strict";
// We'll inherit all the methods from anohter class or interface
class Square {
    constructor(side) {
        this.side = side;
    }
    area() {
        return this.side ** 2;
    }
    perimeter() {
        return 4 * this.side;
    }
}
const square1 = new Square(5);
console.log(square1.area()); // 25
console.log(square1.perimeter()); // 20
class Rectangle {
    constructor(side1, side2) {
        this.side1 = side1;
        this.side2 = side2;
    }
    area() {
        return this.side1 * this.side2;
    }
    perimeter() {
        return 2 * (this.side1 + this.side2);
    }
}
const rectangle1 = new Rectangle(4, 7);
console.log(rectangle1.area()); // 28
console.log(rectangle1.perimeter()); // 22
