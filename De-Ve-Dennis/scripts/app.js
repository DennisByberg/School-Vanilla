import { addToCollection, searchMovie, toggler } from "./head-section/index.js";
import { printAllMoviesToUl } from "./movie-section/index.js";

// ON START...
printAllMoviesToUl();

// ON CLICK EVENTS...
addToCollection();
toggler();
searchMovie();
