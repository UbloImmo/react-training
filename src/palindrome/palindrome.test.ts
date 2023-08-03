import { describe, test, expect } from "vitest";
import { palindrome } from "./palindrome";

describe('palindrome', () => {
  test('should return true for palindrome strings', () => {
      expect(palindrome('racecar')).toBe(true);
        expect(palindrome('level')).toBe(true);
        expect(palindrome('')).toBe(true);
  });
  
  test('should return false for non-palindrome strings', () => {
      expect(palindrome('hello')).toBe(false);
      expect(palindrome('world')).toBe(false);
  });
});
