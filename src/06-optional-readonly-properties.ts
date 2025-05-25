// we can define some optional and readonly properties for a type

type Employee = {
  fullname: string,
  middlename?: string,
  age: number,
  readonly SSN: string,
  readonly PIN?: number
};


const e1: Employee = {
  fullname: 'Alex Smith',
  age: 25,
  SSN: '123-12-1234'
}

e1.age = 26;
// e1.SSN = '000-00-0000'; // Cannot assign to 'SSN' because it is a read-only property.

console.log(e1); // { fullname: 'Alex Smith', age: 26, SSN: '000-00-0000' }