interface Shape {
  // These are abstract methods
  // Abstract methods will tell what to have but not how to do it
  // It provider the signature of the method but not the implementation
  area: () => number,
  perimeter: () => number
}


// We'll inherit all the methods from anohter class or interface
class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  area(): number {
    return this.side ** 2;
  }

  perimeter(): number {
    return 4 * this.side;
  }
}

const square1: Square = new Square(5);

console.log(square1.area()); // 25
console.log(square1.perimeter()); // 20