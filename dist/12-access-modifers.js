"use strict";
class Computer {
    constructor(brand, price, storage) {
        this.brand = brand;
        this.price = price;
        this.storage = storage;
    }
    getStorage() {
        return this.storage;
    }
    setStorage(value) {
        this.storage = value;
    }
}
const c1 = new Computer('Dell', 1000);
c1.price = 900;
// c1.storage = 64; // this is not allowed since it is private. Use public getters and setters instead
c1.setStorage(64);
