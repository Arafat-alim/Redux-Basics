console.log("shallow copy");
//shallow Copy
const person = {
  name: "Boggie",
  address: {
    country: "india",
    city: "kolkata",
  },
};
const updated = { ...person, name: "Mahtab" }; //here overwrite the name property not creating a new property which is also a wrong..
updated.address.city = "Delhi"; //here changing the the city of person from kolkata to delhi

console.log(person); // due to shallow copy

console.log("Deep COpy");
// //deep copy
const person2 = {
  name: "Boggie",
  address: {
    country: "india",
    city: "kolkata",
  },
};
const updated2 = {
  ...person2,
  name: "Mahtab",
  address: {
    ...person2.address,
    city: "Mumbai",
  },
};

console.log(person2);
console.log(updated2);
