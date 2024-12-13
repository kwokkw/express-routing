/*

* ExpressError extends the normal JS error so we can easily 
 
 *  add a status when we make an instance of it. 
 *  The error-handling middleware will return this. 
 * 
 * */
export class ExpressError extends Error {
  constructor(msg, status) {
    super();

    // Add on own stuff on top
    this.msg = msg;
    this.status = status;
  }
}

// TODO: review extends, super()
// What is error.stack?
