const inquirer = require('inquirer'); // import the inquirer.js library
// Prompt user for input text and validate input. 
// If input is empty and it's required, then prompt again until user enters an non empty value. 
// Otherwise return input value.

// accepts the prompt text to display on the command line, and a flag to make input required 
const promptInput = (message, required = false) =>
inquirer.prompt([{
    name: "val",
    type: "input",
    message: message,
    validate: input => (input.length > 0 || !required) ||  'This field is required. Please try again...' 
}])
.then(answer => answer.val); // returns the user input


module.exports = promptInput;  // export the function