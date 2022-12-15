import { addMovie, searchMovie, toggler } from "./head-section/index.js";
import { printAllMoviesToUl } from "./movie-section/index.js";
import { toggleWelcomeSlider } from "./sliders/welcomeSlider.js";

// ON START...
toggleWelcomeSlider();
printAllMoviesToUl();

// ON CLICK EVENTS...
addMovie();
searchMovie();
toggler();
