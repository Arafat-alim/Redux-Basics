const numbers = [1, 2, 3];

//Adding
const a1 = [4, ...numbers]; //adding element in the first
console.log(a1); // 4,1,2,3

const a2 = [...numbers, 4]; //adding element in the last
console.log(a2); // 1,2,3,4

const index = numbers.indexOf(2); //adding element just between the 1 and 2
const a3 = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(a3); //1,4,2,3

//deleting
const removed = numbers.filter((n) => n !== 2); //deleting 2 from an array
console.log(removed);

//updating
const updated = numbers.map((n) => (n === 2 ? 20 : n)); //if n === 2 hoga to replace kr do 20 se
console.log(updated);
