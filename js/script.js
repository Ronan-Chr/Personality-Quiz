console.log("script.js connected!");

// This object will store the users answers
let userAnswers = {};

// This selects all of the question blocks on the page
let questionBlocks = document.querySelectorAll(".question-block");

// Loop through each question block
questionBlocks.forEach(function(block, index) {

// Select all answer buttons inside the current question block
  let buttons = block.querySelectorAll(".answer-btn");

// Loop through each button in that question block
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {

// Remove the selected class from all buttons in this question
      buttons.forEach(function(btn) {
        btn.classList.remove("selected");
      });

// Add the selected class to the button that was clicked
      button.classList.add("selected");

// Get the value from the button clicked
      let response = button.dataset.value;

// Create a question name based on which block it is
      let questionName = "question-" + (index + 1);

// Store the users answer for that question
      userAnswers[questionName] = Number(response);

// Print the current answers to the console for debugging
      console.log(userAnswers);
    });
  });
});

// This function will calculate and display the final result
function displayResult() {

// Select the result text and result container
  let resultText = document.getElementById("result-text");
  let resultContainer = document.getElementById("result-container");

// Create a variable to store the total score
  let totalScore = 0;

// Loop through the stored answers and add them together
  for (let key in userAnswers) {
    totalScore = totalScore + userAnswers[key];
  }

// Determine the final role based on the total score
  if (totalScore <= 8) {
    resultText.textContent = "Your avoident yet effective making you the Rogue.";
} else if (totalScore <= 12) {
    resultText.textContent = "Disciplined and patient, your a Ranger without a doubt.";
} else if (totalScore <= 16) {
    resultText.textContent = "Your the one heading the charge controlling the flow the Warrior.";
} else {
    resultText.textContent = "Your wise and determined for a goal fitting of a Mage.";
}

// Show the result container after the result is calculated
  resultContainer.style.display = "block";
}

// This selects the show result button
let resultButton = document.getElementById("show-result");

// This listens for when the show result button is clicked
resultButton.addEventListener("click", displayResult);
