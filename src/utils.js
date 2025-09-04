/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts second number from first number
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides first number by second number
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a and b
 * @throws {Error} When dividing by zero
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Checks if a number is even
 * @param {number} num - Number to check
 * @returns {boolean} True if number is even, false otherwise
 */
export function isEven(num) {
  return num % 2 === 0;
}

/**
 * Calculates factorial of a number
 * @param {number} n - Number to calculate factorial for
 * @returns {number} Factorial of n
 * @throws {Error} When n is negative
 */
export function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}