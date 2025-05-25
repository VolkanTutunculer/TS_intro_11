"use strict";
const tesla = {
    make: 'Tesla',
    model: 'S',
    year: 2024,
    electric: () => {
        return true;
    }
};
const bmw = {
    make: 'BMW',
    model: 'M4',
    year: 2026,
    electric: () => {
        return false;
    }
};
console.log(tesla.electric());
console.log(bmw.electric());
