"use strict";
// Basic data types - string, number, boolean
const favDish = 'Salmon';
const age = 25;
const isLive = false;
let variable; // this is any type
variable = 'Hello';
variable = 25;
console.log(variable); // 25
let city;
city = 'Chicago';
city = 'Miami';
console.log(city); // 'Miami'
// Arrays and Objects
const numbers = [1, 2, 3, 4];
numbers.push(10);
numbers.shift();
console.log(numbers); // [ 2, 3, 4, 10]
const person = {
    fname: 'John',
    lname: 'Doe',
    age: 25,
    fullname: function () {
        console.log(`${this.fname} ${this.lname}`);
    }
};
console.log(person);
const result5 = person.fullname(); // 'John Doe'
console.log('This is checking void object function', result5);
const math = {
    add: function (n1, n2) {
        return n1 + n2;
    }
};
let result = math.add(5, 5);
console.log(result); // 10
// Functions
function printHi() {
    console.log('Hi');
}
function getRandomNumber() {
    return Math.random();
}
