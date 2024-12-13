/* 

Edge cases for testing

-   mean:
    -   empty array: should return an error
    -   single number: should return the number itself
    -   large numbers: should handle precision correctly

-   median:
    -   odd vs even array lengths
    -   duplicate values (e.g., [1,1,2,3,3])

-   mode 
    -   single most frequent value.
    -   multiple modes (e.g., [1, 1, 2, 2, 3])
    -   no repetition (e.g., [1, 2, 3, 4]).
    
*/

import { findMean, findMedian, findMode } from "./utility.js";

describe("Test findMean method", () => {
  test("A single number should return itself", () => {
    const result = findMean([1]);
    expect(result.value).toBe(1);
  });

  test("Empty array should return an error", () => {
    expect(findMean([]).toThrow);
  });
});

describe("Test findMedian method", () => {
  test("Calculates the median for an odd-length array", () => {
    const result = findMedian([1, 3, 5]);
    expect(result.value).toEqual(3);
  });

  test("Calculates the median for an even-length array", () => {
    const result = findMedian([1, 3, 5, 7]);
    expect(result.value).toEqual(4);
  });

  test("Calculates duplicate values correctly", () => {
    const result = findMedian([1, 1, 2, 3, 3]);
    expect(result.value).toEqual(2);
  });
});

describe("Test findMode method", () => {
  test("Identifies the single most frequent value", () => {
    const result = findMode([1, 1, 2, 3]);
    expect(result.value).toEqual(["1"]);
  });

  test("handles multiple modes (ties)", () => {
    const result = findMode([1, 1, 2, 2, 3]);
    expect(result.value).toEqual(["1", "2"]);
  });

  test("returns all values if no repetition", () => {
    const result = findMode([1, 2, 3, 4]);
    expect(result.value).toEqual(["1", "2", "3", "4"]);
  });
});
