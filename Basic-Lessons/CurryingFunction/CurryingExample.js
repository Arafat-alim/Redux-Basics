//Currying function - it allows us to take a function that has 'N' arguments and converted into single argument function

//old way
function add(a, b) {
  return a + b;
}
console.log(add(4, 5));

//Modern way using currying
function add(a) {
  return function (b) {
    return a + b;
  };
}

const add1 = add(1);
add1(5); // 1+5

// new way to calling my funciton in a currying way
add(5)(4);

//we can do currying in an arrow function
const adding = (a) => (b) => a + b; //return a function

adding(5)(4);
