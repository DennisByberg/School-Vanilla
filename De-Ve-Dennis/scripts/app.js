// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑
// This is the main of the app that we need to be able to use javascript.
// No code is written here.
// Only different modules are called to be able to start our app.
// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑

import { addMovie, searchMovie, toggler } from "./head-section/index.js";
import { printAllMoviesToUl } from "./movie-section/index.js";
import { toggleWelcomeSlider } from "./sliders/welcomeSlider.js";
import { devTips } from "./footer-section/index.js";

// ON START...
toggleWelcomeSlider();
printAllMoviesToUl();

// ON CLICK EVENTS...
addMovie();
searchMovie();
toggler();
devTips();
