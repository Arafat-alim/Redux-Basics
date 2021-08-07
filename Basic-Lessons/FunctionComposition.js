//things to do trim and wrap

//old typical way

const input = "   JavaScript   ";
const trim = "<div>" + input.trim() + "</div>";

//function way
const trim = (str) => str.trim();
const WrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();
//more advanced way to do with function
const result = toLowerCase(WrapInDiv(trim(input)));
