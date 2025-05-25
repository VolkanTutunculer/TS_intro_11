class Computer {

  readonly brand: string
  private storage: number | undefined
  price: number

  constructor(brand: string, price: number, storage?: number) {
    this.brand = brand;
    this.price = price;
    this.storage = storage;
  }

  getStorage(): number | undefined {
    return this.storage;
  }

  setStorage(value: number): void {
    this.storage = value;
  }
}

const c1 = new Computer('Dell', 1000);

c1.price = 900;
// c1.storage = 64; // this is not allowed since it is private. Use public getters and setters instead

c1.setStorage(64);