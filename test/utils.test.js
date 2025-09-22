import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, isEven, factorial, power } from '../src/utils.js';

describe('Math Utilities', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 15)).toBe(25);
    });

    it('should add negative numbers correctly', () => {
      expect(add(-2, -3)).toBe(-5);
      expect(add(-5, 3)).toBe(-2);
    });

    it('should handle zero correctly', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(10, 4)).toBe(6);
    });

    it('should handle negative results', () => {
      expect(subtract(3, 5)).toBe(-2);
      expect(subtract(-2, 3)).toBe(-5);
    });

    it('should handle zero correctly', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(multiply(3, 4)).toBe(12);
      expect(multiply(7, 8)).toBe(56);
    });

    it('should handle negative numbers', () => {
      expect(multiply(-3, 4)).toBe(-12);
      expect(multiply(-3, -4)).toBe(12);
    });

    it('should handle zero correctly', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
      expect(multiply(1.5, 2.5)).toBe(3.75);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      expect(divide(12, 3)).toBe(4);
      expect(divide(15, 5)).toBe(3);
    });

    it('should handle negative numbers', () => {
      expect(divide(-12, 3)).toBe(-4);
      expect(divide(-12, -3)).toBe(4);
    });

    it('should handle decimal results', () => {
      expect(divide(7, 2)).toBe(3.5);
      expect(divide(1, 3)).toBeCloseTo(0.333333);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
      expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(4)).toBe(true);
      expect(isEven(100)).toBe(true);
      expect(isEven(0)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(99)).toBe(false);
    });

    it('should handle negative numbers', () => {
      expect(isEven(-2)).toBe(true);
      expect(isEven(-3)).toBe(false);
    });
  });

  describe('factorial', () => {
    it('should calculate factorial correctly for positive numbers', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(3)).toBe(6);
      expect(factorial(5)).toBe(120);
    });

    it('should throw error for negative numbers', () => {
      expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
      expect(() => factorial(-5)).toThrow('Factorial is not defined for negative numbers');
    });

    it('should handle edge cases', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
    });
  });

  describe('power', () => {
    it('should calculate power correctly for positive numbers', () => {
      expect(power(2, 3)).toBe(8);
      expect(power(5, 2)).toBe(25);
      expect(power(10, 0)).toBe(1);
    });

    it('should handle negative exponents', () => {
      expect(power(2, -2)).toBe(0.25);
      expect(power(4, -1)).toBe(0.25);
    });

    it('should handle decimal bases and exponents', () => {
      expect(power(2.5, 2)).toBe(6.25);
      expect(power(9, 0.5)).toBe(3);
    });

    it('should handle edge cases', () => {
      expect(power(0, 5)).toBe(0);
      expect(power(1, 100)).toBe(1);
      expect(power(-2, 2)).toBe(4);
      expect(power(-2, 3)).toBe(-8);
    });
  });
});