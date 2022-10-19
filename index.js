// Import the promptInput method which allows us to pass a prompt message to display, and obtain user input from the CLI.
const promptInput = require('./promptInput.js').promptInput;

(async ()=>{
    console.log('\nWelcome to the README Generator!\n');
    console.log('This tool will allow you to generate a high-quality, professional README.md file,');
    console.log('based on your input from the command line, so that you can devote more time to working on your project.\n\n');

    const inputObj = {
        title: await promptInput('Title of your project:\n'),
        description: await promptInput('Description:\n'),
        installation: await promptInput('Installation instructions:\n'),
        usage: await promptInput('Usage information:\n'),
        contribution: await promptInput('Contribution guidelines:\n'),
        tests: await promptInput('Test Instructions:\n'),
    }
    console.log(inputObj);

    // fs.writeFile('index.html',buildHtmlStr(userObj),err => err ? console.log(err.message) : console.log(userObj));
})(); 