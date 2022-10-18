// 1. Byt namn på första hoodien från Ash till Potato.
let ash = document.querySelector(".art-1 h3");
ash.innerText = "Potato";

// 2. Byt namn på Home till Start.
let homeLink = document.querySelectorAll(".home-link");
homeLink.forEach((e) => {
  e.innerText = "Start";
});

// 3. Byt namn på Contact till Mail Us.
let contactLink = document.querySelectorAll(".contact-link");
contactLink.forEach((e) => {
  e.innerText = "Mail Us";
});

// 4. Byt ut informationen om Sinus Hoodie - Fire.
let sinusHoodieFirePText = document.querySelector(".art-2 p");
sinusHoodieFirePText.innerText = "This text has been written in JS.";

// 5. Byt bakgrundsfärg och text på en knapp.
let sinusHoodieFireBuyButton = document.querySelector(".art-2 button");
sinusHoodieFireBuyButton.innerText = "error";
sinusHoodieFireBuyButton.style.backgroundColor = "red";

// 6. Byt bakgrundsfärg på någon av produkterna. (main article figure)
let sinusHoodieFireImage = document.querySelector(".art-2 figure");
sinusHoodieFireImage.style.backgroundColor = "red";

// 7. Byt ut adressen på sidan.
let address = document.querySelector("footer section article p");
address.innerText = "Changed address...";

// 8. Byt färg på samtliga <p>.
let allPTags = document.querySelectorAll("p");
allPTags.forEach((e) => {
  e.style.color = "blue";
});

// 9. Ändra text på samtliga knappar till add to cart.
let allButtons = document.querySelectorAll("button");
allButtons.forEach((e) => {
  e.innerText = "add to cart";
});

// 10. Lägg till classen active på menyalternativet home.
homeLink.forEach((e) => {
  e.classList.add("active");
});

// 11. Ta bort classen logo på logotypen.
let headerLogo = document.querySelector("header img");
headerLogo.classList.remove("logo");

// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
headerLogo.addEventListener("click", () => {
  console.log("Found you");
});

// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
let allArticles = document.querySelectorAll("article h3");
console.log(allArticles);
allArticles.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(`Hi, im article ${e.innerText}`);
  });
});
