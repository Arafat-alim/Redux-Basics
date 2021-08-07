import { pipe } from "lodash/fp";

const input = "   JavaScript   ";
const trim = (str) => input.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;
// const wrap = (type, str) => `<${type}>${str}</${type}>`; // giving me an error because it is not returning a function

const wrap = (type) => (str) => `<${type}>${str}</${type}>`; //now here we got a my result due to currying

const toLowerCase = (str) => str.toLowerCase();

//using pipe funciion
const transform = pipe(trim, toLowerCase, wrap("div")); //here i can give anything div span
console.log(transform);
