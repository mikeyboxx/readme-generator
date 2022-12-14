// Render different sections of the README file
const licenses = require('./licenses.js');   // array of README License badges

const renderTitle = data => 
    `${licenses[data.licenseIdx].badge}\n\n` +    // license badge
    `# ${data.title}\n\n`;

const renderDescription = data => 
    `## Description\n\n` + 
    `${data.description}\n\n---\n\n`;
    
const renderTableOfContents = () => 
    `## Table Of Contents\n` + 
    `- [Installation](#installation)\n` + 
    `- [Usage](#usage)\n` + 
    `- [Contributing](#contributing)\n` + 
    `- [License](#license)\n` + 
    `- [Questions](#questions)\n\n---\n\n`;

const renderInstallation = data => 
    `## Installation\n\n` + 
    `${data.installation}\n\n---\n\n`;

const renderUsage = data => 
    `## Usage\n\n` + 
    `${data.usage}\n\n---\n\n`;

const renderContributing = data => 
    `## Contributing\n\n` + 
    `${data.contributing}\n\n---\n\n`;

const renderTests = data => 
    `## Tests\n\n` + 
    `${data.tests}\n\n---\n\n`;

const renderLicense = data => 
    `## License\n\n` + 
    `${licenses[data.licenseIdx].badge}\n` +    // license badge
    `${licenses[data.licenseIdx].short}\n\n---\n\n`;  // license description

const renderQuestions = data => 
    `## Questions\n\n` +
    `[Github Profile](https://www.github.com/${data.githubUserName})\n\n` + 
    `For any additional questions, you can contact me at ${data.email}\n\n---\n\n`;

// return a string of generated README markdown
const generateMarkdown = data => 
    renderTitle(data) +
    renderDescription(data) +
    renderTableOfContents() +
    renderInstallation(data) +
    renderUsage(data) +
    renderLicense(data) +
    renderContributing(data) +
    renderTests(data) +
    renderQuestions(data);


module.exports = generateMarkdown;
