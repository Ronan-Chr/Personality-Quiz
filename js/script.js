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


