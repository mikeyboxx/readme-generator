const inquirer = require('inquirer'); // import the inquirer.js library

// Prompt user for input text and validate input. 
// If input is empty, then prompt again until user enters an non empty value. 
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


// accepts the prompt text and an array of question objects, which will display as a list of choices. Returns the index of the choice option.
const promptList = (message, choices) =>
    inquirer.prompt([{
        name: "val",
        type: "list",
        message: message,
        choices: choices,
        pageSize: 100,
    }])
    .then(answer => answer.val); // index of the License in the licenses array


module.exports ={
    promptInput , 
    promptList   
}