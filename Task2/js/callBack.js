/* This callBack.js file starts and stops a counter that logs numbers to the console every second.
   It uses setInterval to start the counter and clearInterval to stop it. Event listeners are set up for two buttons,
   startButton and stopButton, to control the counter.
The following resources were used to complete this assignment:
 - HyperionDev Higher-order Functions and Callbacks pdf
 - https://www.youtube.com/watch?v=FD7fnqkBV9w
For more information about this please visit https://github.com/IronMike4/higher_order_functions_callbacks.git */

// Setting variables to hold the intervalID and also a counter
let intervalID;
let counter = 0;

let startCounter = function () {
  intervalID = setInterval(function () {
    // Increase the value of the counter by one
    counter++;
    // Log the current value of the counter to the console
    console.log(counter);
    // Run every 1000 milliseconds (1 second)
  }, 1000);
};

function stopCounter() {
  // Stop the counter by clearing the interval
  clearInterval(intervalID);
}

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

// The event listener below starts the counter when the start button is clicked
startButton.addEventListener("click", startCounter);

// The event listener below stops the counter when the stop button is clicked
stopButton.addEventListener("click", stopCounter);
