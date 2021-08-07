// same things need to do here
// trim
// wrapInDiv.
import { compose, pipe } from "lodash/fp";

//creaing an input
const input = "   JavaScript    ";
//creating indiviual function
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

//now if we are using compose function - one prob - reading from left to right
const transform = compose(wrapInDiv, toLowerCase, trim); //no need to call created funciton
transform(input);

//now reading problem is also going to fix in this way
const pipway = pipe(trim, toLowerCase, wrapInDiv);

pipway();
