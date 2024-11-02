// Get reference to the input display element
let input = document.getElementById('inputBox');

// Get all button elements
let buttons = document.querySelectorAll('button');

// Initialize an empty string to build the expression
let string = "";

// Convert the NodeList of buttons into an array to use array methods
let arr = Array.from(buttons);

// Iterate over each button
arr.forEach(button => {
    // Add a click event listener to each button
    button.addEventListener('click', (e) => {
        // Check if the '=' button is clicked to evaluate the expression
        if (e.target.innerHTML == '=') {
            try {
                // Use eval() to calculate the expression and display the result
                string = eval(string);
                input.value = string;
            } catch (error) {
                // Display error if the expression is invalid
                input.value = "Error";
                string = "";
            }
        }
        // Check if the 'AC' (All Clear) button is clicked to reset everything
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        // Check if the 'DEL' (Delete) button is clicked to remove the last character
        else if (e.target.innerHTML == 'DEL') {
            // Remove the last character from the string
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // Check if the 'x²' button is clicked to square the current input
        else if (e.target.innerHTML == 'x²') {
            // Calculate the square and update the display
            string = Math.pow(parseFloat(string), 2).toString();
            input.value = string;
        }
        // For all other buttons (numbers and operators), append their value to the expression
        else {
            // Add the button's text to the expression string
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
