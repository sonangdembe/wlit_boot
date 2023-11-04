// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get the input element and message paragraph
const guessInput = document.getElementById("guess");
const message = document.getElementById("message");

// Function to check the guessed number
function checkGuess() {
    // Get the user's guess
    const userGuess = parseInt(guessInput.value);

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! ${randomNumber} is the correct number!`;
        message.style.color = "green";
        guessInput.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "red";
    } else {
        message.textContent = "Too high! Try again.";
        message.style.color = "red";
    }

    // Clear the input field
    guessInput.value = "";
}
