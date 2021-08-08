import { Map } from "immutable";
//learning a new library named "Immutable"

let book = Map({ title: "Harry Potter" });

// function publish(book) {
//   book.isPublished = true;
// }

function publish(book) {
  return book.set("isPublished", true);
}

let book = publish(book);
// console.log(book.get());
console.log(book.get("title"));
console.log(book.toJS()); //convert to plain js object
