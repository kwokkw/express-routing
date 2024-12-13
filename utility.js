import { ExpressError } from "./expressError.js";

export function convertNums(numsStr) {
  const numsArr = numsStr.split(",").map((num) => {
    const parsed = parseFloat(num);

    // Handle invalid number
    if (isNaN(parsed)) {
      throw new ExpressError(`${num} is not a number`, 400);
    }

    return parsed;
  });

  return numsArr;
}

export function findMean(numsArr) {
  const average = numsArr.reduce((sum, num) => sum + num, 0) / numsArr.length;

  return { operation: "mean", value: average };
}

export function findMedian(numsArr) {
  const length = numsArr.length;
  const middle = Math.floor(length / 2);
  let median = null;

  if (length % 2 === 0) {
    console.log("It's even");
    median = (numsArr[middle] + numsArr[middle - 1]) / 2;
  } else {
    console.log("It's odd");
    median = numsArr[middle];
  }

  return { operation: "median", value: median };
}

export function findMode(numsArr) {
  // Initialize freqency counter
  const numsObj = {};

  // Track the max
  let max = 0;

  // Track the most frequent numbers
  const mostFrequent = [];

  //   Loop through the numbers in the array
  for (let num of numsArr) {
    numsObj[num] = (numsObj[num] || 0) + 1;

    // Determine the most frequent number
    if (numsObj[num] > max) {
      max = numsObj[num];
    }
  }

  // Handle ties
  for (let num in numsObj) {
    if (numsObj[num] === max) {
      mostFrequent.push(num);
    }
  }

  return { operation: "median", value: mostFrequent };
}
