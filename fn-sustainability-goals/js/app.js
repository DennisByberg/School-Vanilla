import { displayAllGoals } from "./displayList.js";
import {
  triggerBackButton,
  resetPageWhenNameIsClicked,
} from "./clickHandler.js";

// Start of program... Displays all the goals in an ul-list.
displayAllGoals();

// Functionality of the clicks
triggerBackButton();
resetPageWhenNameIsClicked();
