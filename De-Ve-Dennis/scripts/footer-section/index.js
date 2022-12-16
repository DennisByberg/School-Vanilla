// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑
// Nothing but styling changes for the footer-section in this module...
//  ...even if i call it index because its my only module in my footer-section-folder
// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑

//p-tags...
const p = document.querySelector("footer p");
//img-s...
const questionIMG = document.querySelector("footer img");

/* This functions is triggered when you click the question-img in the bottom left corner. It will change the "Developer?" - text to a tip for the developers who are lazy  */
function devTips() {
  questionIMG.addEventListener("click", () => {
    p.textContent = "Click the spinning CD on the top left to add test movies!";
    setTimeout(() => {
      p.textContent = "Developer?";
    }, 5000);
  });
}

// Exports : Functions.
export { devTips };
