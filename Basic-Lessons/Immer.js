import { produce } from "../node_modules/immer";

let book = { title: "Harry Potter" };

// function publish(book) {
//   book.isPublished = true;
// }

function publish(book) {
  produce(book, (draftBook) => {
    return (draftBook.isPublished = true); //object wont get mutated
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);
