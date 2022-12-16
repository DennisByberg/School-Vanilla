import { addMovie, searchMovie, toggler } from "./head-section/index.js";
import { printAllMoviesToUl } from "./movie-section/index.js";
import { toggleWelcomeSlider } from "./sliders/welcomeSlider.js";
import { devTips } from "./footer-section/index.js";

// ON START...
toggleWelcomeSlider();
printAllMoviesToUl();
devTips();

// ON CLICK EVENTS...
addMovie();
searchMovie();
toggler();
