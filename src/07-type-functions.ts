type Car = {
  make: string,
  model: string,
  year: number,
  electric: () => boolean 
};


const tesla: Car = {
  make: 'Tesla',
  model: 'S',
  year: 2024,
  electric: () => {
    return true;
  }
};

const bmw: Car = {
  make: 'BMW',
  model: 'M4',
  year: 2026,
  electric: () => {
    return false;
  }
};

console.log(tesla.electric());
console.log(bmw.electric());