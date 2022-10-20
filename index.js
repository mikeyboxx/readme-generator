// Import the promptInput method which allows us to pass a prompt message to display, and obtain user input from the CLI.
const promptInput = require('./promptInput.js');  // function to get user text input 
const promptList = require('./promptList.js');    // function to get user input from a list of options 
const generateMarkdown = require('./generateMarkdown.js');    // function to generate Markdown based on userInput object passed as an argument 
const licenses = require('./licenses.js');         // array of README License badges
const fs = require('fs');

(async ()=>{
    console.log('\nWelcome to the README Generator!\n');
    console.log('This tool will allow you to generate a high-quality, professional README.md file,');
    console.log('based on your input from the command line, so that you can devote more time to working on your project.\n\n');


    const inputObj = {
        title: await promptInput('Title of your project:\n', true),
        description: await promptInput('Description:\n'),
        installation: await promptInput('Installation instructions:\n'),
        usage: await promptInput('Usage information:\n',false),
        contributing: await promptInput('Contribution guidelines:\n'),
        tests: await promptInput('Test Instructions:\n'),
        licenseIdx: await promptList('Pick a License:\n',licenses),  // list of licenses
        githubUserName: await promptInput('Enter your GitHub username:\n\n'),
        email: await promptInput('Enter your Email:\n'),
    }
    // console.log(inputObj);
    const mdStr = generateMarkdown(inputObj);
    // console.log(mdStr);


    fs.writeFile('README.md',mdStr,err => err ? console.log(err.message) : console.log('README.md was overwritten successfully'));
})(); 