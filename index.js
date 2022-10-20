const promptInput = require('./promptInput.js');  // function to get user text input 
const promptList = require('./promptList.js');    // function to get user input from a list of options 
const generateMarkdown = require('./generateMarkdown.js'); // function to generate Markdown
const licenses = require('./licenses.js');        // array of README License badges
const fs = require('fs');                         // filesystem object

// self invoking function that does all the work
(async ()=>{
    console.log('\nWelcome to the README Generator!\n');
    console.log('This tool will allow you to generate a high-quality, professional README.md file,');
    console.log('based on your input from the command line, so that you can devote more time to working on your project.\n\n');

    // build user Input object synchronously
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
    const mdStr = generateMarkdown(inputObj);
    
    // write or overwrite README_GENR.md
    fs.writeFile('README_GENR.md', mdStr,
        err => err ? console.log(err.message) : console.log('README.md was generated successfully'));
})(); 