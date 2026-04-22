// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";

mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.

toggleButton.setAttribute("data-action","status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].

highlightListItems();

function highlightListItems() {
    let listItems = document.querySelectorAll('#item-list li'); // select all items from item-list

    for (let i = 0; i < listItems.length; ++i) {
        listItems[i].style.color = "blue";
    }
}

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].

//////////// Task 5 //////////// 

// Add an event listener to the toggle button
toggleButton.addEventListener("click", toggleStatus);

// Functionality for the toggle button
function toggleStatus(e) {
    e.preventDefault(); // Task 6

    statusOutput.classList.toggle("hidden");

    // Task 7: make title yellow when box is shown
    if (!statusOutput.classList.contains("hidden")) {
        mainTitle.style.backgroundColor = "yellow";
        createTimestamp();
    }
    else {
        mainTitle.style.backgroundColor = "";
    }
}

// Task 8
function createTimestamp() {
    // Create the new span
    span = document.createElement("span");

    // set inner HTML to the current time
    span.innerHTML = new Date().toLocaleTimeString() + "<br>";

    // append to the status-output div
    statusOutput.appendChild(span);
}

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].

// Start interval and save id in intervalId, and previously defined global variable
function startFlashing() {
    // Prevent flash stacking (multiple misclicks making it flash faster)
    if (intervalId != null) {
        return;
    }

    // Set the interval Id as what is returned by the setInterval function
    intervalId = setInterval (function() {
        controlPanel.classList.toggle("hidden");
    }, 500);
}

// Stop the interval function
function stopFlashing() {
    clearInterval(intervalId);
    intervalId = null; // Allows the user to click button again later and restart flashing

    // Force control panel to show again if double click happens right when panel disappears
    controlPanel.classList.remove("hidden");
}

// Bind functions to the timer-button
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
