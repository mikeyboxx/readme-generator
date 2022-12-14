const inquirer = require('inquirer'); // import the inquirer.js library

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

module.exports = promptList; // export the function