const p = document.querySelector("footer p");
const questionIMG = document.querySelector("footer img");

function devTips() {
  questionIMG.addEventListener("click", () => {
    p.textContent = "Click the spinning CD on the top left to add test movies!";
    setTimeout(() => {
      p.textContent = "Developer?";
    }, 5000);
  });
}

export { devTips };
