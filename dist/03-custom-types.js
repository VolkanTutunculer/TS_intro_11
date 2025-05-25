"use strict";
// string, number, boolean
// tuples, literals, unions
// arrays, objects, functions
// any, never, void
const s1 = {
    fname: 'John',
    lname: 'Doe',
    program: 'SDET',
    registered: true
};
const s2 = {
    fname: 'Jane',
    lname: 'Doe',
    program: 'SDET',
    registered: false
};
const s3 = {
    fname: 'Alex',
    lname: 'Smith',
    program: 'SDET',
    registered: true
};
const students = [s1, s2, s3];
const numberOfRegisteredStudents = students.reduce((acc, curr) => {
    if (curr.registered)
        acc += 1;
    return acc;
}, 0);
console.log(numberOfRegisteredStudents); // 2
// ['John Doe', 'Alex Smith']
const registeredStudents = students.reduce((acc, curr) => {
    if (curr.registered)
        acc.push(`${curr.fname} ${curr.lname}`);
    return acc;
}, []);
console.log(registeredStudents); // ['John Doe', 'Alex Smith']
