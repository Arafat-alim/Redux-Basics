//! Javascript functions are treated as variables

//! 1 - Assign my function as a variable

function sayHello() {
  return "Hello Duniya!";
}

let fn = sayHello;
fn(); // sayHello();

// ______________________
//! 2 - Pass as an argument

function sayHello() {
  return "hello Duniya";
}

function greet(fnMessage) {
  //takes a function as a parameter
  console.log(fnMessage());
}

greet(sayHello); // function calls as a arguement

// _______________________

//! 3 - Return from other functions (Anonympuse function)

function sayHello() {
  return function () {
    console.log("Hello Dunia");
  };
}

let fn = sayHello();
fn();

// ________________________
