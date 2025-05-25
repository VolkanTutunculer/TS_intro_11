"use strict";
// Union Types
let productPrice = '19.99';
productPrice = 10;
const data = ['John', 'Jane', 'Alex', null];
function anyFunc() {
}
function concat(arg1, arg2) {
    console.log(arg1, arg2);
}
let var1 = 'Hello';
let var2 = 5;
console.log(var1 + var2);
// Literal Types
let deliveryType;
deliveryType = 'Delivery';
let deliveryStatus;
deliveryStatus = 'Shipped';
/*
Write a function that takes a number array as param
returns the sum of numbers

[1, 2, 3] -> 6
*/
const sum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};
const exampleArr = [1, 2, 3];
console.log(sum(exampleArr)); // 6
// function sum(arr: number[]): number {
//  return arr.reduce((acc: number, curr: number) => acc + curr, 0);
// }
// Creating Object with TS
const car = {
    make: 'Tesla',
    model: 'X',
    year: '2025'
};
const student = {
    fullname: 'John Doe',
    nickname: 'John Wick',
    favTopic: 'CS',
    age: 25
};
// Tuples
let user;
user = ['John', 'Doe', 25];
console.log('Tuple user =', user);
let user2;
user2 = [1, 2, 3, 'Hello', 'John'];
const expectedTexts = ['Product Name', 'Quantity', 'Discount'];
