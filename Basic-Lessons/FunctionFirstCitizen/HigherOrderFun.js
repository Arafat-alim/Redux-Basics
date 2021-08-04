//! pass a function as an argument
function greet(fn) {
  console.log(fn);
}

//! pass a function as an argument and return it

function sayHello() {
  return function () {
    return "Hello Duniya!";
  };
}

//! map function and setTimeout are the function which are both higher order function
//! a - map function
let arr = [1, 2, 3];
arr.map((num) => num * 2);

//! b - setTimeout function
setTimeout(() => console.log("hello"), 1000);
