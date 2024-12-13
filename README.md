# Express Calculator

## Overview

This exercise performs three statistical operations given an arbitrary amount of numbers: mean(average), median(midpoint), mode(most frequent).

## Steps

1.  Basic Project Setup:

    - Create a new folder for the exercise:

      - `mkdir express-routing`
      - `cd express-routing`

    - Initialize a new Node.js project:

      - `npm init -y`

      `-y` is used to automatically generate a `package.json` file with default settings. It saves time for setting up a quick project or do not need to customize the `package.json` fields. The file can be edited manually later.

    - Install Express.js:

      - `npm install express`

2.  Create server using ES Modules:

    - Enable ES Modules in the exercise:

      ```json
      {
        "type": "module"
      }
      ```

      This tells Node.js to interpret files as ES Modules.

    - Create Server File: `touch app.js`

    - Write the Express Server Code:

      ```js
      import express from "express";

      const app = express();

      app.listen(3000, () => {
        console.log(`Server is running on http://localhost:3000`);
      });
      ```

    - Start the server by running: `node server.js`

3.  Define routes:

        ```js
        app.get("/mean", (req, res) => {
        res.send("Hello, this is a mean route");
        });

        app.get("/median", (req, res) => {
        res.send("Hello, this is a median route");
        });

        app.get("/mode", (req, res) => {
        res.send("Hello, this is a mode route");
        });

        ```

4.  Install Nodemon

    - Nodemon restarts server automatically.

      - Install globally: `$npm install --global nodemon`
      - To start server: `$nodemon app.js`

5.  Set up `req.query`

    ```js
    app.get("/mean", (req, res) => {
      const nums = req.query.nums;
      res.send(`Hello, this is a mean route!!! ${nums}`);
    });
    ```

6.  Tell Express to parse JSON data from the request body:

    - `app.use(express.json());`

7.  Calculate values for each route
8.  Set Status Code
9.  Error Handling Class
10. Implement Functions in Each Route

## What I learnt

**Separating logic into utility functions and easier unit testing**

When logic is in utility functions, we can test them independently without starting a server.

- No Server Dependency:

  We do not need to set up a server, send HTTP requests, or deal with routing to test the logic. Instead, we directly call the function and check its output.

- Focused Testing:

  Unit tests focus on one function at a time. This isolation ensures that issues in unrelated parts (e.g., the server, routing) do not affect the test results.

- Simpler Debugging:

  Since the test environment only runs the utility function, identifying and fixing issues is faster and clearer.
