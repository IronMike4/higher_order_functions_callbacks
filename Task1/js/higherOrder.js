/* This higherOrder.js file filters car names to find those with exactly six letters, using a custom function
   called myFilterFunction. It logs the results to the console.
The following resources were used to complete this assignment:
 - HyperionDev Higher-order Functions and Callbacks pdf
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
For more information about this please visit https://github.com/IronMike4/higher_order_functions_callbacks.git */

// Define a higher-order function myFilterFunction to filter car names that have exactly six letters.
function myFilterFunction(carNamesArray, filterCallback) {
  // Initialize an empty array to store filtered car names
  let filteredCarNames = [];

  // Loop through the array of car names
  for (let carName of carNamesArray) {
    // Check if the current car name has exactly six letters using the callback function
    if (filterCallback(carName)) {
      // If the car name satisfies the condition, add it to the filtered array
      filteredCarNames.push(carName);
    }
  }

  // Return the filtered array
  return filteredCarNames;
}

// Define a callback function to check if a car name has exactly six letters
function hasExactlySixLetters(carName) {
  return carName.length === 6;
}

// Create an array of car names
const carNames = [
  "Nissan",
  "Honda",
  "Mercedes",
  "Ford",
  "BMW",
  "Audi",
  "Subaru",
  "Toyota",
  "Chevrolet",
  "Suzuki",
];

// Use the custom filter function to retrieve car names with exactly six letters
const sixLetterCarNames = myFilterFunction(carNames, hasExactlySixLetters);

// Log the filtered car names
console.log("Six letter car names:", sixLetterCarNames);
