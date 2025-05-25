// string, number, boolean
// tuples, literals, unions
// arrays, objects, functions
// any, never, void


// Create a custom type (Student) with fname: string, lname: string, program: string, registered: boolean

type Student = {
  fname: string,
  lname: string,
  program: string,
  registered: boolean
};

const s1: Student = {
  fname: 'John',
  lname: 'Doe',
  program: 'SDET',
  registered: true
};

const s2: Student = {
  fname: 'Jane',
  lname: 'Doe',
  program: 'SDET',
  registered: false
};

const s3: Student = {
  fname: 'Alex',
  lname: 'Smith',
  program: 'SDET',
  registered: true
};

const students: Student[] = [s1, s2, s3];

const numberOfRegisteredStudents: number = students.reduce((acc: number, curr: Student) => {
  if(curr.registered) acc += 1;
  return acc;
}, 0);

console.log(numberOfRegisteredStudents); // 2


// ['John Doe', 'Alex Smith']

const registeredStudents: string[]  = students.reduce((acc: string[], curr: Student): string[] => {
  if(curr.registered) acc.push(`${curr.fname} ${curr.lname}`);
  return acc;
}, []);

console.log(registeredStudents); // ['John Doe', 'Alex Smith']