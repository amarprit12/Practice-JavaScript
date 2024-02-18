// synchronous code

// console.log("1");
// console.log("2");
// console.log("3");

// asynchronous code
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000); // after 1 second we will see 2
console.log("3");
