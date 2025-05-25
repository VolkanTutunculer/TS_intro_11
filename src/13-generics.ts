function middleElement<T>(arr: T[]): T {
  return arr[(arr.length - 1) / 2];
}


console.log(middleElement([1, 2, 3])); // 2
console.log(middleElement(['A', 'B', 'C'])); // 'B'
console.log(middleElement([true, false, true, false, true])); // true
console.log(middleElement([1, 'Hello', true])); // 