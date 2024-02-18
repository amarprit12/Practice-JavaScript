// Promise
let promise = new Promise(function (resolve, reject) {
  // make an async call and either resolve or reject
});
console.log("promise: ", promise);

let promise1 = new Promise(function (resolve, reject) {
  //   let goodDeveloper = true;
  let goodDeveloper = false;

  if (goodDeveloper) {
    setTimeout(() => {
      resolve("nice");
    });
  } else {
    reject("try again");
  }
});

console.log("promise: ", promise1);

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
