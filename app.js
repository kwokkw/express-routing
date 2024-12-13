// Import Express Module
import express from "express";
import { ExpressError } from "./expressError.js";
import { convertNums, findMean, findMedian, findMode } from "./utility.js";

// Create an instance of Express
const app = express();

// Parses JSON data from the request body and make it available in `req.body`
app.use(express.json());

/* ************************************************ */
// Define routes
// each route takes a query key of nums

// Average
app.get("/mean", (req, res, next) => {
  // Takes a query key of nums
  const numsStr = req.query.nums;

  // Handle empty input
  if (!numsStr) {
    const e = new ExpressError("nums are required", 400);
    next(e);
  }

  try {
    const numsArr = convertNums(numsStr);
    const result = findMean(numsArr);

    return res.send(result);
  } catch (error) {
    next(error);
  }
});

// Midpoint
app.get("/median", (req, res, next) => {
  // Takes a query key of nums
  const numsStr = req.query.nums;
  console.log(numsStr);

  // Handle empty input
  if (!numsStr) {
    const e = new ExpressError("nums are required", 400);
    next(e);
  }

  try {
    const numsArr = convertNums(numsStr);
    const sortedNums = numsArr.sort();
    const result = findMedian(sortedNums);

    return res.send(result);
  } catch (error) {
    next(error);
  }
});

// Most frequent
app.get("/mode", (req, res, next) => {
  // Takes a query key of nums
  const numsStr = req.query.nums;

  // Handle empty input
  if (!numsStr) {
    const e = new ExpressError("nums are required", 400);
    next(e);
  }

  try {
    const numsArr = convertNums(numsStr);
    const result = findMode(numsArr);

    res.send(result);
  } catch (error) {
    next(error);
  }
});

// 404 Page
app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404);
  next(e);
});

/* ************************************************** */
// Error handler

app.use(function (err, req, res, next) {
  //Note the 4 parameters!
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.msg;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

/* ************************************************** */
// Start the server

// app.listen should always be at the bottom of the file
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

/* 


which is a comma-separated list of numbers. For example, if I want to get the mean of 1, 3, 5, and 7, that would look like be a GET request to /mean?nums=1,3,5,7.

The response of each operation should be JSON which looks like this:

response: {
  operation: "mean",
  value: 4
}

*/
