let fruits = ["orange", "pear", "apple", "kiwi"];
let ul = document.querySelector("ul");
// Loop out the fruit array in a UL.
//  You must here create an HTML element using the template string,
//  and then use the .insertAdjacentHTML(...) method to place it in the UL element.

fruits.forEach((fruit) => {
  let el = `<li>${fruit}</li>`;
  ul.insertAdjacentHTML("beforeend", el);
});
