(async ()=>{
    console.log(`Welcome to the Portfolio Generator!\n`);
    console.log(`You will be prompted with a series of questions, \nfrom which a Portoflio HTML page will be generated.\n\n`);

    const userObj = {
        name: await promptInput('What is your name?'),
        location: await promptInput('Where do you live?'),
        linkedInUrl: await promptInput('What is your LinkedIn Url?'),
        gitHubUrl: await promptInput('What is your GitHub Url?'),
        bio: await promptInput('Tell me a little about yourself (bio):'),
    }

    fs.writeFile('index.html',buildHtmlStr(userObj),err => err ? console.log(err.message) : console.log(userObj));
})(); 