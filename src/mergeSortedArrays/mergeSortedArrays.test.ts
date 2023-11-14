import { describe, test, expect } from "vitest";
import { mergeSortedArrays } from "./mergeSortedArrays";

describe("mergeSortedArrays function", () => {

  test('mergeSortedArrays merges two empty arrays', () => {
    expect(mergeSortedArrays([], [])).toEqual([]);
});

test('mergeSortedArrays merges a sorted array with an empty one', () => {
  expect(mergeSortedArrays([], [2, 4, 6])).toEqual([2, 4, 6]);
  expect(mergeSortedArrays([1, 3, 5], [])).toEqual([1, 3, 5]);
});

  test('mergeSortedArrays merges two sorted arrays into one sorted array', () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSortedArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

});
