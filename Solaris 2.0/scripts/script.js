import { toggleSlider } from "./slider.js";
import { hamburgerMenu } from "./hamburger.js";

hamburgerMenu();

const planets = document.querySelectorAll("main article");
let planetIndex = "";

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
    document.querySelector("#slider").style.marginTop = "1rem";
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
