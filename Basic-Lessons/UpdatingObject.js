//how to immutable my object
const person = { name: "Arafat" };
// person.name = "Aquib"; //this will break our immutability properity (wrong way to do this )
// 1) Object.assign(); //copy the content of an object to an another object
const updated = Object.assign({}, person, { name: "Ashique ", age: 24 });
console.log(person);
console.log(updated);

//shallow COpy
//2) Spread Operator
const person2 = { name: "Boggie" };
const updated2 = { ...person2, name: "Mahtab" }; //here overwrite the name property not creating a new property which is also a wrong..

console.log(updated2);
