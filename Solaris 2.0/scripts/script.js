import { toggleSlider, toggleFavoriteSlider } from "./slider.js";
import {
  hamburgerMenu,
  navBar,
  projectName,
  hamburgerBtn,
} from "./hamburger.js";
import { saveToDatabase, getAllPlanets } from "./firebase-config.js";
hamburgerMenu(); // function...

const planets = document.querySelectorAll("main article");
const favStarImage = document.querySelector("#fav-star");
let planetIndex = "";

// Save to db...
favStarImage.addEventListener("click", () => {
  const planetName = document.querySelector(
    "#name-and-star-container h2"
  ).textContent;
  saveToDatabase(planetName);
});

// Click event that triggers when we click the navBar item "favorite planets"...
const favoritePlanetsButton = document.querySelector("#fav-planets-btn");
favoritePlanetsButton.addEventListener("click", () => {
  toggleFavoriteSlider();
  getAllPlanets();
});

// back button in favorite slider...
document
  .querySelector("#favoriteSlider button")
  .addEventListener("click", () => {
    toggleFavoriteSlider();
    navBar.classList.toggle("is-active");
    projectName.classList.toggle("is-active");
    hamburgerBtn.classList.toggle("is-active");
  });

// My Github Button...
document.querySelector("#myGithub").addEventListener("click", () => {
  navBar.classList.toggle("is-active");
  projectName.classList.toggle("is-active");
  hamburgerBtn.classList.toggle("is-active");
});

// |MOUSE-LEAVE EVENT|~> Triggered when your mouse:hover leaves the planet and resets the text to an empty string...
planets.forEach((planet) => {
  planet.addEventListener("mouseleave", (event) => {
    DeleteTextOnLeave(event);
  });
});

// |MOUSE-OVER EVENT|~> Triggered when you hover over a planet and change the planet name text...
planets.forEach((planet) => {
  planet.addEventListener("mouseover", (event) => {
    ChangeTextOnHover(event);
  });
});

function ChangeTextOnHover(planets) {
  const planetName = planets.target.id;
  if (planetName != "sat-circle") {
    document.querySelector("#hover-text").textContent = planetName;
  }
}

// |CLICK EVENT|~> Triggered when you click a planet...
planets.forEach((planet) => {
  planet.addEventListener("click", () => {
    planetIndex = planet.id;
    getPlanets(planetIndex);
    toggleSlider();
  });
});

// |CLICK-EVENT|~> Triggered when you are in the slider-section and you click the BACK button...
const backButton = document
  .querySelector("#bottom-info-container button")
  .addEventListener("click", () => {
    toggleSlider();
    sun.style.backgroundColor = "#ffd029";
    let moons = document.querySelector("#moons");
    moons.innerHTML = "";
    document.querySelector("#slider p").style.overflowY = "hidden";
  });

function DeleteTextOnLeave(planets) {
  const planetName = planets.target.id;
  if (planetName != "sat-circle") {
    document.querySelector("#hover-text").textContent = "";
  }
}

// function that gives us a planet index 0-8...
function getPlanetIndex() {
  switch (planetIndex) {
    case "sun":
      planetIndex = 0;
      break;
    case "mercury":
      planetIndex = 1;
      sun.style.backgroundColor = "#8c8b85";
      break;
    case "venus":
      planetIndex = 2;
      sun.style.backgroundColor = "#e6cdcb";
      break;
    case "earth":
      planetIndex = 3;
      sun.style.backgroundColor = "#418ed4";
      break;
    case "mars":
      planetIndex = 4;
      sun.style.backgroundColor = "#ef5f5f";
      break;
    case "jupiter":
      planetIndex = 5;
      sun.style.backgroundColor = "#e29468";
      break;
    case "saturn":
      planetIndex = 6;
      sun.style.backgroundColor = "#c7aa72";
      break;
    case "uranus":
      planetIndex = 7;
      sun.style.backgroundColor = "#c9d4f1";
      break;
    case "neptune":
      planetIndex = 8;
      sun.style.backgroundColor = "#7a91a7";
      break;
  }
}

// getPlanets
async function getPlanets() {
  // const key = await getKey();
  const response = await fetch(`./scripts/data.json`);
  const data = await response.json();
  getPlanetIndex();

  let maxLengthOfParagraph = 1000;
  // name
  document.querySelector("#slider h2").innerText =
    data.bodies[planetIndex].name;

  // latin-name.
  document.querySelector("#slider h3").innerText =
    data.bodies[planetIndex].latinName;

  // description.
  document.querySelector("#slider p").innerText = data.bodies[planetIndex].desc;
  if (data.bodies[planetIndex].desc.length > maxLengthOfParagraph) {
    document.querySelector("#slider p").style.fontSize = "14px";
    document.querySelector("#slider p").style.overflowY = "scroll";
  }

  // circumference
  document.querySelector(
    "#circumference p"
  ).innerText = `${data.bodies[planetIndex].circumference} km`;

  // distance from the sun
  document.querySelector(
    "#km-from-sun p"
  ).innerText = `${data.bodies[planetIndex].distance} km`;

  // max temp / day.
  document.querySelector(
    "#max-temp p"
  ).innerText = `${data.bodies[planetIndex].temp.day} °`;

  // min temp / night.
  document.querySelector(
    "#min-temp p"
  ).innerText = `${data.bodies[planetIndex].temp.night} °`;

  // moons
  if (data.bodies[planetIndex].moons.length > 0) {
    let moons = document.querySelector("#moons");
    moons.innerHTML = `
    <h4>Månar</h4>
    <p>${data.bodies[planetIndex].moons}</p>
    `;
  }
}
