import { add, subtract, multiply, divide, isEven, factorial } from './utils.js';

console.log('=== Vitest Experiment Demo ===');
console.log('Addition: 5 + 3 =', add(5, 3));
console.log('Subtraction: 10 - 4 =', subtract(10, 4));
console.log('Multiplication: 6 * 7 =', multiply(6, 7));
console.log('Division: 15 / 3 =', divide(15, 3));
console.log('Is 8 even?', isEven(8));
console.log('Is 7 even?', isEven(7));
console.log('Factorial of 5:', factorial(5));
console.log('=== Demo Complete ===');